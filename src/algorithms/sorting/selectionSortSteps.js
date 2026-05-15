import { createStep } from '../../lib/utils'

export const selectionSortSources = {
  javascript: {
    code: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      initMin: 4,
      innerLoop: 5,
      compare: 6,
      updateMin: 7,
      swap: 11,
      complete: 15,
    },
  },
  python: {
    code: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      initMin: 4,
      innerLoop: 5,
      compare: 6,
      updateMin: 7,
      swap: 9,
      complete: 9,
    },
  },
  java: {
    code: `public void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      initMin: 4,
      innerLoop: 5,
      compare: 6,
      updateMin: 7,
      swap: 11,
      complete: 16,
    },
  },
  cpp: {
    code: `void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            swap(arr[i], arr[minIdx]);
        }
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      initMin: 4,
      innerLoop: 5,
      compare: 6,
      updateMin: 7,
      swap: 10,
      complete: 14,
    },
  },
}

export function getSelectionSortSource(language = 'javascript') {
  return selectionSortSources[language] ?? selectionSortSources.javascript
}

export function resolveSelectionSortLine(language, lineKey) {
  if (!lineKey) return undefined
  const source = getSelectionSortSource(language)
  return (
    source.lineMap[lineKey] ?? selectionSortSources.javascript.lineMap[lineKey]
  )
}

export function generateSelectionSortSteps(inputArray) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length
  const sortedIndices = []

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      sortedIndices,
      message: 'Selection Sort starts.',
      variables: { n },
      duration: 700,
    })
  )

  for (let i = 0; i < n; i++) {
    steps.push(
      createStep({
        lineKey: 'outerLoop',
        type: 'outer-loop',
        array: arr,
        indices: [i],
        sortedIndices: [...sortedIndices],
        message: `Finding the minimum element for index \${i}.`,
        variables: { i, n },
        duration: 600,
      })
    )

    let minIdx = i
    steps.push(
      createStep({
        lineKey: 'initMin',
        type: 'init-min',
        array: arr,
        indices: [i],
        sortedIndices: [...sortedIndices],
        message: `Assume index \${i} (value \${arr[i]}) is the current minimum.`,
        variables: { i, minIdx, n },
        duration: 500,
      })
    )

    for (let j = i + 1; j < n; j++) {
      steps.push(
        createStep({
          lineKey: 'innerLoop',
          type: 'inner-loop',
          array: arr,
          indices: [j, minIdx],
          sortedIndices: [...sortedIndices],
          message: `Check index \${j} against current minimum at index \${minIdx}.`,
          variables: { i, j, minIdx, n },
          duration: 400,
        })
      )

      steps.push(
        createStep({
          lineKey: 'compare',
          type: 'compare',
          array: arr,
          indices: [j, minIdx],
          sortedIndices: [...sortedIndices],
          message: `Compare \${arr[j]} and \${arr[minIdx]}.`,
          variables: { i, j, minIdx, n },
          duration: 600,
        })
      )

      if (arr[j] < arr[minIdx]) {
        minIdx = j
        steps.push(
          createStep({
            lineKey: 'updateMin',
            type: 'min',
            array: arr,
            indices: [minIdx],
            sortedIndices: [...sortedIndices],
            message: `Found a smaller element! New minimum is \${arr[minIdx]} at index \${minIdx}.`,
            variables: { i, j, minIdx, n },
            duration: 700,
          })
        )
      }
    }

    if (minIdx !== i) {
      steps.push(
        createStep({
          lineKey: 'swap',
          type: 'swap',
          array: arr,
          indices: [i, minIdx],
          sortedIndices: [...sortedIndices],
          message: `Swap the minimum element (\${arr[minIdx]}) with the element at index \${i} (\${arr[i]}).`,
          variables: { i, minIdx, n },
          duration: 850,
        })
      )
      ;[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    }

    sortedIndices.push(i)
    steps.push(
      createStep({
        lineKey: 'outerLoop',
        type: 'pass-complete',
        array: arr,
        sortedIndices: [...sortedIndices],
        message: `Pass \${i + 1} complete. Index \${i} is now sorted.`,
        variables: { i, n },
        duration: 550,
      })
    )
  }

  steps.push(
    createStep({
      lineKey: 'complete',
      type: 'complete',
      array: arr,
      sortedIndices: Array.from({ length: n }, (_, index) => index),
      message: 'Selection Sort is complete.',
      variables: { n },
      duration: 900,
    })
  )

  return steps
}
