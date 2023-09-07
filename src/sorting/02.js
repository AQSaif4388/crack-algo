// Cyclic Sort

const cyclicSort = (arr = []) => {

  const swap = (a, b, ar) => {
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
  }

  let i = 0;

  while (i < arr.length) {

    let correctIndex = arr[i]-1;

    if (arr[i] !== arr[correctIndex]) {
      swap(i, correctIndex, arr);
    } else {
      i++;
    }
  }
};


// https://practice.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1

const arraySortedOrNot = (arr, n) => {
  
  for (let i = 0; i < n-1; i++) {
      
      if (arr[i] > arr[i+1]) {
          
          return false;
      }
  }
  
  return true;
};


// https://leetcode.com/problems/k-diff-pairs-in-an-array/description/

const findPairs_K_Diff = function(nums, k) {

  const hash = {};
  let arr = [];
  let count = 0;

  for (let num of nums) {
      if (!hash[num]) {
          arr.push(num);
      }
      else {
          if (k === 0 && hash[num] === 1) {
              count++;
          }
      }
      hash[num] = (hash[num] || 0) + 1;
  }

  arr.sort((a,b) => a > b ? 1 : -1);

  let i = 0;
  let j = 1;

  while (i < arr.length-1 && j < arr.length) {

      if (Math.abs(arr[i]-arr[j]) === k) {
          count++;
          i++;
          j++;
      }

      else if (Math.abs(arr[i]-arr[j]) < k) {
          j++;
      } else {
          i++;
      }

      if (i === j) {
          j++;
      }
  }

  return count;
};

