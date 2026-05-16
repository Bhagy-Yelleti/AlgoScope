export const binarySearchSources = {
  javascript: {
    code: `function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}`,
    lineMap: {
      function: 1,
      setup: 2,
      loop: 4,
      mid: 5,
      compare: 6,
      found: 7,
      low: 9,
      high: 11,
      notFound: 14,
    },
  },
  python: {
    code: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`,
    lineMap: {
      function: 1,
      setup: 2,
      loop: 4,
      mid: 5,
      compare: 6,
      found: 7,
      low: 8,
      high: 10,
      notFound: 11,
    },
  },
  java: {
    code: `public int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,
    lineMap: {
      function: 1,
      setup: 2,
      loop: 4,
      mid: 5,
      compare: 6,
      found: 7,
      low: 8,
      high: 10,
      notFound: 13,
    },
  },
  cpp: {
    code: `int binarySearch(vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,
    lineMap: {
      function: 1,
      setup: 2,
      loop: 4,
      mid: 5,
      compare: 6,
      found: 7,
      low: 8,
      high: 10,
      notFound: 13,
    },
  },
  c: {
    code: `int binarySearch(int arr[], int n, int target) {
    int low = 0;
    int high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}`,
    lineMap: {
      function: 1,
      setup: 2,
      loop: 4,
      mid: 5,
      compare: 6,
      found: 7,
      low: 8,
      high: 10,
      notFound: 13,
    },
  },
  rust: {
    code: `fn binary_search(arr: &[i32], target: i32) -> i32 {
    let mut low = 0;
    let mut high = (arr.len() as i32) - 1;
    while low <= high {
        let mid = low + (high - low) / 2;
        if arr[mid as usize] == target {
            return mid;
        } else if arr[mid as usize] < target {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    -1
}`,
    lineMap: {
      function: 1,
      setup: 2,
      loop: 4,
      mid: 5,
      compare: 6,
      found: 7,
      low: 9,
      high: 11,
      notFound: 14,
    },
  },
  go: {
    code: `func binarySearch(arr []int, target int) int {
    low := 0
    high := len(arr) - 1
    for low <= high {
        mid := low + (high-low)/2
        if arr[mid] == target {
            return mid
        } else if arr[mid] < target {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}`,
    lineMap: {
      function: 1,
      setup: 2,
      loop: 4,
      mid: 5,
      compare: 6,
      found: 7,
      low: 9,
      high: 11,
      notFound: 14,
    },
  },
}

const createStep = ({
  lineKey,
  type,
  array,
  indices = [], // [mid, low, high]
  foundIndex = null,
  message = '',
  variables = {},
  duration,
}) => ({
  lineKey,
  type,
  array: [...array],
  indices,
  foundIndex,
  message,
  variables,
  duration,
})

export function getBinarySearchSource(language = 'javascript') {
  return binarySearchSources[language] ?? binarySearchSources.javascript
}

export function resolveBinarySearchSortLine(language, lineKey) {
  if (!lineKey) return undefined

  const source = getBinarySearchSource(language)
  return (
    source.lineMap[lineKey] ?? binarySearchSources.javascript.lineMap[lineKey]
  )
}

export function generateBinarySearchSteps(inputArray, target) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      message: `Binary Search starts. Searching for target value: ${target}.`,
      variables: { target, n },
      duration: 700,
    })
  )

  let low = 0
  let high = n - 1

  steps.push(
    createStep({
      lineKey: 'setup',
      type: 'setup',
      array: arr,
      indices: [-1, low, high],
      message: `Initialize low = ${low} and high = ${high}.`,
      variables: { low, high, target },
      duration: 650,
    })
  )

  while (low <= high) {
    steps.push(
      createStep({
        lineKey: 'loop',
        type: 'loop',
        array: arr,
        indices: [-1, low, high],
        message: `Condition low <= high (${low} <= ${high}) is true.`,
        variables: { low, high, target },
        duration: 500,
      })
    )

    const mid = Math.floor((low + high) / 2)
    steps.push(
      createStep({
        lineKey: 'mid',
        type: 'mid',
        array: arr,
        indices: [mid, low, high],
        message: `Calculate mid = floor((${low} + ${high}) / 2) = ${mid}.`,
        variables: { low, high, mid, target },
        duration: 700,
      })
    )

    steps.push(
      createStep({
        lineKey: 'compare',
        type: 'compare',
        array: arr,
        indices: [mid, low, high],
        message: `Compare arr[mid] (${arr[mid]}) with target (${target}).`,
        variables: { low, high, mid, target, midValue: arr[mid] },
        duration: 800,
      })
    )

    if (arr[mid] === target) {
      steps.push(
        createStep({
          lineKey: 'found',
          type: 'found',
          array: arr,
          indices: [mid, low, high],
          foundIndex: mid,
          message: `Target found at index ${mid}!`,
          variables: { low, high, mid, target },
          duration: 1000,
        })
      )
      return steps
    } else if (arr[mid] < target) {
      const oldLow = low
      low = mid + 1
      steps.push(
        createStep({
          lineKey: 'low',
          type: 'bounds-update',
          array: arr,
          indices: [mid, low, high],
          message: `${arr[mid]} < ${target}. Update low: low = mid + 1 = ${low}.`,
          variables: { low, high, mid, target, oldLow },
          duration: 750,
        })
      )
    } else {
      const oldHigh = high
      high = mid - 1
      steps.push(
        createStep({
          lineKey: 'high',
          type: 'bounds-update',
          array: arr,
          indices: [mid, low, high],
          message: `${arr[mid]} > ${target}. Update high: high = mid - 1 = ${high}.`,
          variables: { low, high, mid, target, oldHigh },
          duration: 750,
        })
      )
    }
  }

  steps.push(
    createStep({
      lineKey: 'notFound',
      type: 'not-found',
      array: arr,
      message: `low (${low}) > high (${high}). Target ${target} not found.`,
      variables: { target, low, high },
      duration: 900,
    })
  )

  return steps
}