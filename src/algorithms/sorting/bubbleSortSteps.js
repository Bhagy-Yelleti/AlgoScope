import { createStep } from '../../lib/utils'

export const bubbleSortSources = {
  javascript: {
    code: `function bubbleSort(arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr[j], arr[j + 1])
      }
    }
  }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      innerLoop: 4,
      compare: 5,
      swap: 6,
      complete: 10,
    },
  },
  python: {
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      innerLoop: 4,
      compare: 5,
      swap: 6,
      complete: 6,
    },
  },
  java: {
    code: `public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      innerLoop: 4,
      compare: 5,
      swap: 6,
      complete: 11,
    },
  },
  cpp: {
    code: `void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      outerLoop: 3,
      innerLoop: 4,
      compare: 5,
      swap: 6,
      complete: 9,
    },
  },
}

export function getBubbleSortSource(language = 'javascript') {
  return bubbleSortSources[language] ?? bubbleSortSources.javascript
}

export function resolveBubbleSortLine(language, lineKey) {
  if (!lineKey) {
    return undefined
  }

  const source = getBubbleSortSource(language)
  return (
    source.lineMap[lineKey] ?? bubbleSortSources.javascript.lineMap[lineKey]
  )
}

export function generateBubbleSortSteps(inputArray) {
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
      message: 'Bubble Sort starts with the current array state.',
      variables: { n },
      duration: 700,
    })
  )

  steps.push(
    createStep({
      lineKey: 'setup',
      type: 'setup',
      array: arr,
      sortedIndices,
      message: `Store the array length as n = ${n}.`,
      variables: { n },
      duration: 650,
    })
  )

  for (let i = 0; i < n; i++) {
    steps.push(
      createStep({
        lineKey: 'outerLoop',
        type: 'outer-loop',
        array: arr,
        sortedIndices,
        message: `Start pass ${i + 1}. The largest remaining value will bubble to index ${n - i - 1}.`,
        variables: { i, n },
        duration: 600,
      })
    )

    for (let j = 0; j < n - i - 1; j++) {
      steps.push(
        createStep({
          lineKey: 'innerLoop',
          type: 'inner-loop',
          array: arr,
          indices: [j, j + 1],
          sortedIndices,
          message: `Inspect indices ${j} and ${j + 1}.`,
          variables: { i, j, n },
          duration: 450,
        })
      )

      steps.push(
        createStep({
          lineKey: 'compare',
          type: 'compare',
          array: arr,
          indices: [j, j + 1],
          sortedIndices,
          message: `Compare ${arr[j]} and ${arr[j + 1]}.`,
          variables: { i, j, n },
          duration: 700,
        })
      )

      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

        steps.push(
          createStep({
            lineKey: 'swap',
            type: 'swap',
            array: arr,
            indices: [j, j + 1],
            sortedIndices,
            message: `Swap ${arr[j + 1]} and ${arr[j]} to move the larger value right.`,
            variables: { i, j, n },
            duration: 850,
          })
        )
      }
    }

    sortedIndices.unshift(n - i - 1)

    steps.push(
      createStep({
        lineKey: 'outerLoop',
        type: 'pass-complete',
        array: arr,
        sortedIndices,
        message: `Pass ${i + 1} complete. Index ${n - i - 1} is now fixed.`,
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
      message: 'Bubble Sort is complete. The full array is sorted.',
      variables: { n },
      duration: 900,
    })
  )

  return steps
}
