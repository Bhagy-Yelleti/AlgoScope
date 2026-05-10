export const quickSortSources = {
  javascript: {
    code: `function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high)
    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)
  }
}

function partition(arr, low, high) {
  let pivot = arr[high]
  let i = low - 1
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1
}`,
    lineMap: {
      function: 1,
      recursion: 2,
      partitionCall: 3,
      partitionFunc: 8,
      pivotSelect: 9,
      compare: 12,
      swap: 14,
      finalSwap: 17,
      complete: 18,
    },
  },
  python: {
    code: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
    lineMap: {
      function: 1,
      recursion: 2,
      partitionCall: 3,
      partitionFunc: 7,
      pivotSelect: 8,
      compare: 11,
      swap: 13,
      finalSwap: 14,
      complete: 14,
    },
  },
  java: {
    code: `public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}`,
    lineMap: {
      function: 1,
      recursion: 2,
      partitionCall: 3,
      partitionFunc: 8,
      pivotSelect: 9,
      compare: 12,
      swap: 15,
      finalSwap: 20,
      complete: 22,
    },
  },
  cpp: {
    code: `void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}`,
    lineMap: {
      function: 1,
      recursion: 2,
      partitionCall: 3,
      partitionFunc: 8,
      pivotSelect: 9,
      compare: 12,
      swap: 14,
      finalSwap: 17,
      complete: 19,
    },
  },
}

const createStep = ({
  lineKey,
  type,
  array,
  indices = [],
  sortedIndices = [],
  message = '',
  variables = {},
  duration,
}) => ({
  lineKey,
  type,
  array: [...array],
  indices,
  sortedIndices,
  message,
  variables,
  duration,
})

export function getQuickSortSource(language = 'javascript') {
  return quickSortSources[language] ?? quickSortSources.javascript
}

export function resolveQuickSortLine(language, lineKey) {
  if (!lineKey) {
    return undefined
  }

  const source = getQuickSortSource(language)
  return source.lineMap[lineKey] ?? quickSortSources.javascript.lineMap[lineKey]
}

export function generateQuickSortSteps(inputArray) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length
  const sortedIndices = []

  const performQuickSort = (low, high) => {
    steps.push(
      createStep({
        lineKey: 'recursion',
        type: 'outer-loop',
        array: arr,
        indices: [low, high],
        sortedIndices: [...sortedIndices],
        message: `Quick Sort on range [${low}, ${high}].`,
        variables: { low, high },
        duration: 500,
      })
    )

    if (low < high) {
      const pi = performPartition(low, high)
      sortedIndices.push(pi)
      performQuickSort(low, pi - 1)
      performQuickSort(pi + 1, high)
    } else if (low === high) {
      if (!sortedIndices.includes(low)) sortedIndices.push(low)
    }
  }

  const performPartition = (low, high) => {
    let pivot = arr[high]
    steps.push(
      createStep({
        lineKey: 'pivotSelect',
        type: 'pivot',
        array: arr,
        indices: [high],
        sortedIndices: [...sortedIndices],
        message: `Selected pivot ${pivot} at index ${high}.`,
        variables: { low, high, pivot },
        duration: 600,
      })
    )

    let i = low - 1
    for (let j = low; j < high; j++) {
      steps.push(
        createStep({
          lineKey: 'compare',
          type: 'compare',
          array: arr,
          indices: [j, high],
          sortedIndices: [...sortedIndices],
          message: `Compare ${arr[j]} with pivot ${pivot}.`,
          variables: { low, high, pivot, i, j },
          duration: 400,
        })
      )

      if (arr[j] < pivot) {
        i++
        if (i !== j) {
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
          steps.push(
            createStep({
              lineKey: 'swap',
              type: 'swap',
              array: arr,
              indices: [i, j],
              sortedIndices: [...sortedIndices],
              message: `${arr[j]} is smaller than pivot, move it to index ${i}.`,
              variables: { low, high, pivot, i, j },
              duration: 600,
            })
          )
        }
      }
    }

    ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    steps.push(
      createStep({
        lineKey: 'finalSwap',
        type: 'swap',
        array: arr,
        indices: [i + 1, high],
        sortedIndices: [...sortedIndices],
        message: `Place pivot ${pivot} in its correct position at index ${i + 1}.`,
        variables: { low, high, pivot, pi: i + 1 },
        duration: 700,
      })
    )

    return i + 1
  }

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      sortedIndices: [],
      message: 'Quick Sort starts.',
      variables: { n },
      duration: 700,
    })
  )

  performQuickSort(0, n - 1)

  steps.push(
    createStep({
      lineKey: 'complete',
      type: 'complete',
      array: arr,
      sortedIndices: Array.from({ length: n }, (_, index) => index),
      message: 'Quick Sort is complete.',
      variables: { n },
      duration: 900,
    })
  )

  return steps
}
