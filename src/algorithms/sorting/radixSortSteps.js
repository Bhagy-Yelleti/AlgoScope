export const radixSortSources = {
  javascript: {
    code: `function radixSort(arr) {
  let max = Math.max(...arr)
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp)
  }
}

function countingSortForRadix(arr, exp) {
  let n = arr.length
  let output = new Array(n)
  let count = new Array(10).fill(0)
  for (let i = 0; i < n; i++) {
    let digit = Math.floor(arr[i] / exp) % 10
    count[digit]++
  }
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1]
  }
  for (let i = n - 1; i >= 0; i--) {
    let digit = Math.floor(arr[i] / exp) % 10
    output[count[digit] - 1] = arr[i]
    count[digit]--
  }
  for (let i = 0; i < n; i++) {
    arr[i] = output[i]
  }
}`,
    lineMap: {
      function: 1,
      outerLoop: 3,
      countingSortCall: 4,
      countingSortFunc: 8,
      countDigits: 12,
      prefixSum: 16,
      placeElements: 19,
      copyBack: 24,
      complete: 28,
    },
  },
  python: {
    code: `def radix_sort(arr):
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        counting_sort_for_radix(arr, exp)
        exp *= 10

def counting_sort_for_radix(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    for i in range(n):
        digit = (arr[i] // exp) % 10
        count[digit] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
    for i in range(n):
        arr[i] = output[i]`,
    lineMap: {
      function: 1,
      outerLoop: 4,
      countingSortCall: 5,
      countingSortFunc: 8,
      countDigits: 12,
      prefixSum: 15,
      placeElements: 17,
      copyBack: 21,
      complete: 22,
    },
  },
  java: {
    code: `public void radixSort(int[] arr) {
    int max = Arrays.stream(arr).max().getAsInt();
    for (int exp = 1; max / exp > 0; exp *= 10)
        countingSortForRadix(arr, exp);
}

private void countingSortForRadix(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];
    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        int digit = (arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}`,
    lineMap: {
      function: 1,
      outerLoop: 3,
      countingSortCall: 4,
      countingSortFunc: 7,
      countDigits: 11,
      prefixSum: 13,
      placeElements: 15,
      copyBack: 20,
      complete: 22,
    },
  },
  cpp: {
    code: `void radixSort(vector<int>& arr) {
    int max = *max_element(arr.begin(), arr.end());
    for (int exp = 1; max / exp > 0; exp *= 10)
        countingSortForRadix(arr, exp);
}

void countingSortForRadix(vector<int>& arr, int exp) {
    int n = arr.size();
    vector<int> output(n);
    int count[10] = {0};
    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        int digit = (arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}`,
    lineMap: {
      function: 1,
      outerLoop: 3,
      countingSortCall: 4,
      countingSortFunc: 7,
      countDigits: 11,
      prefixSum: 13,
      placeElements: 15,
      copyBack: 20,
      complete: 22,
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

export function getRadixSortSource(language = 'javascript') {
  return radixSortSources[language] ?? radixSortSources.javascript
}

export function resolveRadixSortLine(language, lineKey) {
  if (!lineKey) {
    return undefined
  }

  const source = getRadixSortSource(language)
  return source.lineMap[lineKey] ?? radixSortSources.javascript.lineMap[lineKey]
}

export function generateRadixSortSteps(inputArray) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length
  const max = Math.max(...arr)

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      message: 'Radix Sort starts.',
      variables: { n, max },
      duration: 700,
    })
  )

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    steps.push(
      createStep({
        lineKey: 'outerLoop',
        type: 'outer-loop',
        array: arr,
        message: `Processing digit at place ${exp}.`,
        variables: { exp, max },
        duration: 600,
      })
    )

    steps.push(
      createStep({
        lineKey: 'countingSortCall',
        type: 'setup',
        array: arr,
        message: `Applying counting sort for digit place ${exp}.`,
        variables: { exp },
        duration: 500,
      })
    )

    const output = new Array(n)
    const count = new Array(10).fill(0)

    // Count Digits
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10
      count[digit]++
      steps.push(
        createStep({
          lineKey: 'countDigits',
          type: 'active',
          array: arr,
          indices: [i],
          message: `Value ${arr[i]} has digit ${digit} at place ${exp}. Increment count[${digit}].`,
          variables: { i, val: arr[i], digit, exp, countAtDigit: count[digit] },
          duration: 350,
        })
      )
    }

    // Prefix Sum
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1]
      steps.push(
        createStep({
          lineKey: 'prefixSum',
          type: 'outer-loop',
          array: arr,
          message: `Compute prefix sum for count array: count[${i}] = ${count[i]}.`,
          variables: { i, prefixSum: count[i] },
          duration: 250,
        })
      )
    }

    // Place Elements
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10
      const pos = count[digit] - 1
      output[pos] = arr[i]
      count[digit]--

      steps.push(
        createStep({
          lineKey: 'placeElements',
          type: 'insert',
          array: arr,
          indices: [i],
          message: `Place ${arr[i]} at output index ${pos} based on digit ${digit}.`,
          variables: { i, val: arr[i], digit, pos, newCount: count[digit] },
          duration: 500,
        })
      )
    }

    // Copy Back
    for (let i = 0; i < n; i++) {
      arr[i] = output[i]
      steps.push(
        createStep({
          lineKey: 'copyBack',
          type: 'insert',
          array: arr,
          indices: [i],
          message: `Update array with elements sorted by digit place ${exp}.`,
          variables: { i, val: arr[i], exp },
          duration: 350,
        })
      )
    }
  }

  steps.push(
    createStep({
      lineKey: 'complete',
      type: 'complete',
      array: arr,
      sortedIndices: Array.from({ length: n }, (_, index) => index),
      message: 'Radix Sort is complete.',
      variables: { n },
      duration: 900,
    })
  )

  return steps
}
