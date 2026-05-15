import { createStep } from '../../lib/utils'

export const countingSortSources = {
  javascript: {
    code: `function countingSort(arr) {
  let n = arr.length;
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  let output = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      countOccurrences: 5,
      prefixSum: 8,
      placeElements: 12,
      copyBack: 16,
      complete: 19,
    },
  },
  python: {
    code: `def counting_sort(arr):
    n = len(arr)
    max_val = max(arr)
    count = [0] * (max_val + 1)
    for x in arr:
        count[x] += 1
    for i in range(1, max_val + 1):
        count[i] += count[i - 1]
    output = [0] * n
    for i in range(n - 1, -1, -1):
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1
    for i in range(n):
        arr[i] = output[i]`,
    lineMap: {
      function: 1,
      setup: 2,
      countOccurrences: 5,
      prefixSum: 7,
      placeElements: 10,
      copyBack: 13,
      complete: 14,
    },
  },
  java: {
    code: `public void countingSort(int[] arr) {
    int n = arr.length;
    int max = Arrays.stream(arr).max().getAsInt();
    int[] count = new int[max + 1];
    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
    }
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    int[] output = new int[n];
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      countOccurrences: 5,
      prefixSum: 8,
      placeElements: 12,
      copyBack: 16,
      complete: 19,
    },
  },
  cpp: {
    code: `void countingSort(vector<int>& arr) {
    int n = arr.size();
    int max = *max_element(arr.begin(), arr.end());
    vector<int> count(max + 1, 0);
    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
    }
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    vector<int> output(n);
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}`,
    lineMap: {
      function: 1,
      setup: 2,
      countOccurrences: 5,
      prefixSum: 8,
      placeElements: 12,
      copyBack: 16,
      complete: 19,
    },
  },
}

export function getCountingSortSource(language = 'javascript') {
  return countingSortSources[language] ?? countingSortSources.javascript
}

export function resolveCountingSortLine(language, lineKey) {
  if (!lineKey) {
    return undefined
  }
  const source = getCountingSortSource(language)
  return (
    source.lineMap[lineKey] ?? countingSortSources.javascript.lineMap[lineKey]
  )
}

export function generateCountingSortSteps(inputArray) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length
  const max = Math.max(...arr)
  const count = new Array(max + 1).fill(0)

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      message: 'Counting Sort starts.',
      variables: { n, max },
      duration: 700,
    })
  )

  steps.push(
    createStep({
      lineKey: 'setup',
      type: 'setup',
      array: arr,
      message: `Initialized count array of size \${max + 1}.`,
      variables: { n, max },
      duration: 500,
    })
  )

  for (let i = 0; i < n; i++) {
    count[arr[i]]++
    steps.push(
      createStep({
        lineKey: 'countOccurrences',
        type: 'active',
        array: arr,
        indices: [i],
        message: `Value \${arr[i]} found. Increment count[\${arr[i]}].`,
        variables: { i, val: arr[i], countAtVal: count[arr[i]] },
        duration: 400,
      })
    )
  }

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1]
    steps.push(
      createStep({
        lineKey: 'prefixSum',
        type: 'outer-loop',
        array: arr,
        message: `Compute prefix sum: count[\${i}] = \${count[i]}.`,
        variables: { i, prefixSum: count[i] },
        duration: 300,
      })
    )
  }

  const output = new Array(n)
  for (let i = n - 1; i >= 0; i--) {
    const val = arr[i]
    const pos = count[val] - 1
    output[pos] = val
    count[val]--

    steps.push(
      createStep({
        lineKey: 'placeElements',
        type: 'insert',
        array: arr,
        indices: [i],
        message: `Place \${val} at output index \${pos} (from count[\${val}]).`,
        variables: { i, val, pos, newCount: count[val] },
        duration: 600,
      })
    )
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i]
    steps.push(
      createStep({
        lineKey: 'copyBack',
        type: 'insert',
        array: arr,
        indices: [i],
        message: `Copy \${output[i]} back to original array at index \${i}.`,
        variables: { i, val: arr[i] },
        duration: 400,
      })
    )
  }

  steps.push(
    createStep({
      lineKey: 'complete',
      type: 'complete',
      array: arr,
      sortedIndices: Array.from({ length: n }, (_, index) => index),
      message: 'Counting Sort is complete.',
      variables: { n },
      duration: 900,
    })
  )

  return steps
}
