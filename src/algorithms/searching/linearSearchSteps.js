export const linearSearchSources = {
  javascript: {
    code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}`,
    lineMap: {
      function: 1,
      loop: 2,
      compare: 3,
      found: 4,
      notFound: 7,
    },
  },
  python: {
    code: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
    lineMap: {
      function: 1,
      loop: 2,
      compare: 3,
      found: 4,
      notFound: 5,
    },
  },
  java: {
    code: `public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
    lineMap: {
      function: 1,
      loop: 2,
      compare: 3,
      found: 4,
      notFound: 7,
    },
  },
  cpp: {
    code: `int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
    lineMap: {
      function: 1,
      loop: 2,
      compare: 3,
      found: 4,
      notFound: 7,
    },
  },
  c: {
    code: `int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
    lineMap: {
      function: 1,
      loop: 2,
      compare: 3,
      found: 4,
      notFound: 7,
    },
  },
  rust: {
    code: `fn linear_search(arr: &[i32], target: i32) -> i32 {
    for i in 0..arr.len() {
        if arr[i] == target {
            return i as i32;
        }
    }
    -1
}`,
    lineMap: {
      function: 1,
      loop: 2,
      compare: 3,
      found: 4,
      notFound: 7,
    },
  },
  go: {
    code: `func linearSearch(arr []int, target int) int {
    for i := 0; i < len(arr); i++ {
        if arr[i] == target {
            return i
        }
    }
    return -1
}`,
    lineMap: {
      function: 1,
      loop: 2,
      compare: 3,
      found: 4,
      notFound: 7,
    },
  },
}

const createStep = ({
  lineKey,
  type,
  array,
  indices = [],
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

export function getLinearSearchSource(language = 'javascript') {
  return linearSearchSources[language] ?? linearSearchSources.javascript
}

export function resolveLinearSearchSortLine(language, lineKey) {
  if (!lineKey) return undefined

  const source = getLinearSearchSource(language)
  return (
    source.lineMap[lineKey] ?? linearSearchSources.javascript.lineMap[lineKey]
  )
}

export function generateLinearSearchSteps(inputArray, target) {
  const arr = [...inputArray]
  const steps = []
  const n = arr.length

  steps.push(
    createStep({
      lineKey: 'function',
      type: 'start',
      array: arr,
      message: `Linear Search starts. Searching for target value: ${target}.`,
      variables: { target, n },
      duration: 700,
    })
  )

  for (let i = 0; i < n; i++) {
    steps.push(
      createStep({
        lineKey: 'loop',
        type: 'loop',
        array: arr,
        indices: [i],
        message: `Checking index ${i}.`,
        variables: { i, target, currentValue: arr[i] },
        duration: 500,
      })
    )

    steps.push(
      createStep({
        lineKey: 'compare',
        type: 'compare',
        array: arr,
        indices: [i],
        message: `Is arr[${i}] (${arr[i]}) equal to ${target}?`,
        variables: { i, target, currentValue: arr[i] },
        duration: 700,
      })
    )

    if (arr[i] === target) {
      steps.push(
        createStep({
          lineKey: 'found',
          type: 'found',
          array: arr,
          indices: [i],
          foundIndex: i,
          message: `Target found at index ${i}!`,
          variables: { i, target },
          duration: 1000,
        })
      )
      return steps
    }
  }

  steps.push(
    createStep({
      lineKey: 'notFound',
      type: 'not-found',
      array: arr,
      message: `Target ${target} not found in the array. Returning -1.`,
      variables: { target },
      duration: 900,
    })
  )

  return steps
}