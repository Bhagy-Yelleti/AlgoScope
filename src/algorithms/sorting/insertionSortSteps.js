import { createStep } from '../../lib/utils'

export const insertionSortSources = {
  javascript: {
    code: `function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      getKey: 4,
      innerLoop: 6,
      shift: 7,
      insert: 10,
      complete: 13,
    },
  },
  python: {
    code: `def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      getKey: 4,
      innerLoop: 6,
      shift: 7,
      insert: 9,
      complete: 9,
    },
  },
  java: {
    code: `public void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      getKey: 4,
      innerLoop: 6,
      shift: 7,
      insert: 10,
      complete: 13,
    },
  },
  cpp: {
    code: `void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      getKey: 4,
      innerLoop: 6,
      shift: 7,
      insert: 10,
      complete: 13,
    },
  },
  c: {
    code: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 2,
      getKey: 3,
      innerLoop: 5,
      shift: 6,
      insert: 9,
      complete: 11,
    },
  },
  rust: {
    code: `fn insertion_sort(arr: &mut [i32]) {
    let n = arr.len();
    for i in 1..n {
        let key = arr[i];
        let mut j = i as i32 - 1;
        while j >= 0 && arr[j as usize] > key {
            arr[(j + 1) as usize] = arr[j as usize];
            j -= 1;
        }
        arr[(j + 1) as usize] = key;
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      getKey: 4,
      innerLoop: 6,
      shift: 7,
      insert: 10,
      complete: 12,
    },
  },
  go: {
    code: `func insertionSort(arr []int) {
    n := len(arr)
    for i := 1; i < n; i++ {
        key := arr[i]
        j := i - 1
        for j >= 0 && arr[j] > key {
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = key
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      getKey: 4,
      innerLoop: 6,
      shift: 7,
      insert: 10,
      complete: 12,
    },
  },
}

export function getInsertionSortSource(language = 'javascript') {
  return insertionSortSources[language] ?? insertionSortSources.javascript
}

export function resolveInsertionSortLine(language, lineKey) {
  if (!lineKey) return undefined
  const source = getInsertionSortSource(language)
  return (
    source.lineMap[lineKey] ?? insertionSortSources.javascript.lineMap[lineKey]
  )
}

export function generateInsertionSortSteps(inputArray) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length
  const sortedIndices = [0]

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      sortedIndices,
      message: 'Insertion Sort starts. Index 0 is considered sorted initially.',
      variables: { n },
      duration: 700,
    })
  )

  for (let i = 1; i < n; i++) {
    let key = arr[i]
    let j = i - 1

    steps.push(
      createStep({
        lineKey: 'outerLoop',
        type: 'outer-loop',
        array: arr,
        indices: [i],
        sortedIndices: [...sortedIndices],
        message: `Extracting element ${key} at index ${i} to insert into the sorted portion.`,
        variables: { i, key, n },
        duration: 600,
      })
    )

    steps.push(
      createStep({
        lineKey: 'getKey',
        type: 'pivot',
        array: arr,
        indices: [i],
        sortedIndices: [...sortedIndices],
        message: `Current key is ${key}.`,
        variables: { i, key, j, n },
        duration: 500,
      })
    )

    while (j >= 0 && arr[j] > key) {
      steps.push(
        createStep({
          lineKey: 'innerLoop',
          type: 'compare',
          array: arr,
          indices: [j, j + 1],
          sortedIndices: [...sortedIndices],
          message: `Compare key ${key} with ${arr[j]} at index ${j}.`,
          variables: { i, key, j, n },
          duration: 450,
        })
      )

      arr[j + 1] = arr[j]
      steps.push(
        createStep({
          lineKey: 'shift',
          type: 'shift',
          array: arr,
          indices: [j, j + 1],
          sortedIndices: [...sortedIndices],
          message: `${arr[j]} is larger than ${key}, so shift it right.`,
          variables: { i, key, j, n },
          duration: 600,
        })
      )
      j--
    }

    if (j >= 0) {
      steps.push(
        createStep({
          lineKey: 'innerLoop',
          type: 'compare',
          array: arr,
          indices: [j, j + 1],
          sortedIndices: [...sortedIndices],
          message: `Key ${key} is NOT smaller than ${arr[j]}. Placement found.`,
          variables: { i, key, j, n },
          duration: 450,
        })
      )
    }

    arr[j + 1] = key
    sortedIndices.push(i)
    steps.push(
      createStep({
        lineKey: 'insert',
        type: 'insert',
        array: arr,
        indices: [j + 1],
        sortedIndices: [...sortedIndices],
        message: `Insert key ${key} at index ${j + 1}.`,
        variables: { i, key, j: j + 1, n },
        duration: 800,
      })
    )
  }

  steps.push(
    createStep({
      lineKey: 'complete',
      type: 'complete',
      array: arr,
      sortedIndices: Array.from({ length: n }, (_, index) => index),
      message: 'Insertion Sort is complete.',
      variables: { n },
      duration: 900,
    })
  )

  return steps
}
