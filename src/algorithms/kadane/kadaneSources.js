export const kadaneSources = {
  kadane: {
    javascript: {
      code: `function kadane(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(kadane(arr));`,
    },

    python: {
      code: `def kadane(arr):
    max_sum = arr[0]
    current_sum = arr[0]

    for i in range(1, len(arr)):
        current_sum = max(arr[i], current_sum + arr[i])
        max_sum = max(max_sum, current_sum)

    return max_sum

arr = [-2,1,-3,4,-1,2,1,-5,4]
print(kadane(arr))`,
    },

    cpp: {
      code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int kadane(vector<int>& arr) {
    int maxSum = arr[0];
    int currentSum = arr[0];

    for (int i = 1; i < arr.size(); i++) {
        currentSum = max(arr[i], currentSum + arr[i]);
        maxSum = max(maxSum, currentSum);
    }

    return maxSum;
}

int main() {
    vector<int> arr = {-2,1,-3,4,-1,2,1,-5,4};

    cout << kadane(arr);

    return 0;
}`,
    },

    java: {
      code: `public class Kadane {

    public static int kadane(int[] arr) {
        int maxSum = arr[0];
        int currentSum = arr[0];

        for (int i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {-2,1,-3,4,-1,2,1,-5,4};

        System.out.println(kadane(arr));
    }
}`,
    },

    c: {
      code: `#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int kadane(int arr[], int n) {
    int maxSum = arr[0];
    int currentSum = arr[0];

    for (int i = 1; i < n; i++) {
        currentSum = max(arr[i], currentSum + arr[i]);
        maxSum = max(maxSum, currentSum);
    }

    return maxSum;
}

int main() {
    int arr[] = {-2,1,-3,4,-1,2,1,-5,4};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("%d", kadane(arr, n));

    return 0;
}`,
    },

    rust: {
      code: `fn kadane(arr: Vec<i32>) -> i32 {
    let mut max_sum = arr[0];
    let mut current_sum = arr[0];

    for i in 1..arr.len() {
        current_sum = std::cmp::max(arr[i], current_sum + arr[i]);
        max_sum = std::cmp::max(max_sum, current_sum);
    }

    max_sum
}

fn main() {
    let arr = vec![-2,1,-3,4,-1,2,1,-5,4];

    println!("{}", kadane(arr));
}`,
    },

    go: {
      code: `package main

import "fmt"

func max(a int, b int) int {
    if a > b {
        return a
    }
    return b
}

func kadane(arr []int) int {
    maxSum := arr[0]
    currentSum := arr[0]

    for i := 1; i < len(arr); i++ {
        currentSum = max(arr[i], currentSum + arr[i])
        maxSum = max(maxSum, currentSum)
    }

    return maxSum
}

func main() {
    arr := []int{-2,1,-3,4,-1,2,1,-5,4}

    fmt.Println(kadane(arr))
}`,
    },
  },
}

export const getKadaneSource = (language) => {
  return kadaneSources.kadane?.[language]?.code || ''
}