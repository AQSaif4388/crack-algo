// https://leetcode.com/problems/wiggle-sort-ii/

const wiggleSort = (nums) => {

  const arr = [...nums];
  arr.sort((a,b) => a > b ? 1:-1);

  let index = arr.length-1;

  for (let i = 1; i < arr.length; i+=2) {
      nums[i] = arr[index];
      index--;
  }

  for (let i = 0; i < arr.length; i+=2) {
      nums[i] = arr[index];
      index--;
  }
};


// https://www.geeksforgeeks.org/permute-two-arrays-sum-every-pair-greater-equal-k/

const permuteArrays = (a = [], b = [], k) => {

  a.sort();
  b.sort((a,b) => a > b ? -1 : 1);

  for (let i = 0; i < a.length; i++) {

    if (a[i] + b[i] < k) {
      return 'NO';
    }
  }

  return 'YES';
};


// https://www.geeksforgeeks.org/smallest-difference-triplet-from-three-arrays/

const smallestDifferenceTriplet = (arr1,arr2,arr3,n) => {
  //code here
  
  let ans = [];
  let max = -1;
  let min = -1;
  
  let minDiff = Number.MAX_VALUE;
  
  let i = 0;
  let j = 0;
  let k  = 0;
  
  arr1.sort((a, b) => a > b ? 1:-1);
  arr2.sort((a, b) => a > b ? 1:-1);
  arr3.sort((a, b) => a > b ? 1:-1);
  
  while (i < n && j < n && k < n) {
      
      max = Math.max(...[arr1[i], arr2[j], arr3[k]]);
      min = Math.min(...[arr1[i], arr2[j], arr3[k]]);
     
      if (max-min < minDiff) {
          minDiff = max-min;
          ans = [arr1[i], arr2[j], arr3[k]]
      }
      
      if (arr1[i] < arr2[j] && arr1[i] < arr3[k]) {
          i++;
      }
      
      else if (arr2[j] < arr1[i] && arr2[j] < arr3[k]) {
          j++;
      }
      
      else if (arr3[k] < arr1[i] && arr3[k] < arr2[j]) {
          k++;
      }
  }
  
  return ans.sort((a, b) => a > b ? -1:1);
};

