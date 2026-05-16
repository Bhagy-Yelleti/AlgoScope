import { createStep } from '../../lib/utils'

export const heapSortSources = {
  javascript: {
    code: `function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}`,
    lineMap: {
      function: 1,
      buildHeap: 3,
      extractMax: 6,
      heapifyCall: 8,
      heapifyFunc: 12,
      compare: 16,
      swap: 20,
      complete: 25,
    },
  },
  python: {
    code: `def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

def heapify(arr, n, i):
    largest = i
    l, r = 2 * i + 1, 2 * i + 2
    if l < n and arr[l] > arr[largest]:
        largest = l
    if r < n and arr[r] > arr[largest]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)`,
    lineMap: {
      function: 1,
      buildHeap: 3,
      extractMax: 5,
      heapifyCall: 7,
      heapifyFunc: 9,
      compare: 12,
      swap: 17,
      complete: 19,
    },
  },
  java: {
    code: `public void heapSort(int arr[]) {
    int n = arr.length;
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1, r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, n, largest);
    }
}`,
    lineMap: {
      function: 1,
      buildHeap: 3,
      extractMax: 5,
      heapifyCall: 9,
      heapifyFunc: 13,
      compare: 16,
      swap: 19,
      complete: 24,
    },
  },
  cpp: {
    code: `void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1, r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}`,
    lineMap: {
      function: 1,
      buildHeap: 2,
      extractMax: 4,
      heapifyCall: 6,
      heapifyFunc: 10,
      compare: 13,
      swap: 16,
      complete: 20,
    },
  },
  c: {
    code: `void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1, r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}`,
    lineMap: {
      function: 1,
      buildHeap: 2,
      extractMax: 4,
      heapifyCall: 9,
      heapifyFunc: 13,
      compare: 16,
      swap: 19,
      complete: 24,
    },
  },
  rust: {
    code: `fn heap_sort(arr: &mut [i32]) {
    let n = arr.len();
    for i in (0..n / 2).rev() {
        heapify(arr, n, i);
    }
    for i in (1..n).rev() {
        arr.swap(0, i);
        heapify(arr, i, 0);
    }
}

fn heapify(arr: &mut [i32], n: usize, i: usize) {
    let mut largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if l < n && arr[l] > arr[largest] { largest = l; }
    if r < n && arr[r] > arr[largest] { largest = r; }
    if largest != i {
        arr.swap(i, largest);
        heapify(arr, n, largest);
    }
}`,
    lineMap: {
      function: 1,
      buildHeap: 3,
      extractMax: 6,
      heapifyCall: 8,
      heapifyFunc: 12,
      compare: 16,
      swap: 19,
      complete: 23,
    },
  },
  go: {
    code: `func heapSort(arr []int) {
    n := len(arr)
    for i := n/2 - 1; i >= 0; i-- {
        heapify(arr, n, i)
    }
    for i := n - 1; i > 0; i-- {
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    }
}

func heapify(arr []int, n int, i int) {
    largest := i
    l, r := 2*i+1, 2*i+2
    if l < n && arr[l] > arr[largest] { largest = l }
    if r < n && arr[r] > arr[largest] { largest = r }
    if largest != i {
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
    }
}`,
    lineMap: {
      function: 1,
      buildHeap: 3,
      extractMax: 6,
      heapifyCall: 8,
      heapifyFunc: 12,
      compare: 15,
      swap: 18,
      complete: 22,
    },
  },
}

export function getHeapSortSource(language = 'javascript') {
  return heapSortSources[language] ?? heapSortSources.javascript
}

export function resolveHeapSortLine(language, lineKey) {
  if (!lineKey) return undefined
  const source = getHeapSortSource(language)
  return source.lineMap[lineKey] ?? heapSortSources.javascript.lineMap[lineKey]
}

export function generateHeapSortSteps(inputArray) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length
  const sortedIndices = []

  const performHeapify = (currentN, i, lineContext = 'heapifyFunc') => {
    let largest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    steps.push(
      createStep({
        lineKey: lineContext,
        type: 'pivot',
        array: arr,
        indices: [i],
        sortedIndices: [...sortedIndices],
        message: `Heapifying node at index ${i}.`,
        variables: { n: currentN, i, largest },
        duration: 400,
      })
    )

    if (l < currentN) {
      steps.push(
        createStep({
          lineKey: 'compare',
          type: 'compare',
          array: arr,
          indices: [l, largest],
          sortedIndices: [...sortedIndices],
          message: `Compare left child ${arr[l]} with parent ${arr[largest]}.`,
          variables: { n: currentN, i, largest, l },
          duration: 350,
        })
      )
      if (arr[l] > arr[largest]) largest = l
    }

    if (r < currentN) {
      steps.push(
        createStep({
          lineKey: 'compare',
          type: 'compare',
          array: arr,
          indices: [r, largest],
          sortedIndices: [...sortedIndices],
          message: `Compare right child ${arr[r]} with largest so far ${arr[largest]}.`,
          variables: { n: currentN, i, largest, r },
          duration: 350,
        })
      )
      if (arr[r] > arr[largest]) largest = r
    }

    if (largest !== i) {
      steps.push(
        createStep({
          lineKey: 'swap',
          type: 'swap',
          array: arr,
          indices: [i, largest],
          sortedIndices: [...sortedIndices],
          message: `Swap parent ${arr[i]} with largest child ${arr[largest]}.`,
          variables: { n: currentN, i, largest },
          duration: 600,
        })
      )
      ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
      performHeapify(currentN, largest, 'swap')
    }
  }

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      message: 'Heap Sort starts.',
      variables: { n },
      duration: 700,
    })
  )

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    steps.push(
      createStep({
        lineKey: 'buildHeap',
        type: 'outer-loop',
        array: arr,
        indices: [i],
        message: `Building max heap: processing index ${i}.`,
        variables: { i, n },
        duration: 500,
      })
    )
    performHeapify(n, i, 'buildHeap')
  }

  for (let i = n - 1; i > 0; i--) {
    steps.push(
      createStep({
        lineKey: 'extractMax',
        type: 'swap',
        array: arr,
        indices: [0, i],
        sortedIndices: [...sortedIndices],
        message: `Swap max element ${arr[0]} with last element ${arr[i]}.`,
        variables: { i, n },
        duration: 700,
      })
    )
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    sortedIndices.push(i)

    steps.push(
      createStep({
        lineKey: 'heapifyCall',
        type: 'outer-loop',
        array: arr,
        indices: [0],
        sortedIndices: [...sortedIndices],
        message: `Restoring heap property for remaining ${i} elements.`,
        variables: { i, n },
        duration: 500,
      })
    )
    performHeapify(i, 0, 'heapifyCall')
  }
  sortedIndices.push(0)

  steps.push(
    createStep({
      lineKey: 'complete',
      type: 'complete',
      array: arr,
      sortedIndices: Array.from({ length: n }, (_, index) => index),
      message: 'Heap Sort is complete.',
      variables: { n },
      duration: 900,
    })
  )

  return steps
}
