// https://www.geeksforgeeks.org/check-possible-sort-array-conditional-swapping-adjacent-allowed/

const isSortingPossble = (arr = []) => {

  const swap = (a, b, ar) => {
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
  }

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
      if (arr[i] - arr[i+1] === 1) {
        swap(i, i+1, arr);
      }
      else {
        return false;
      }
    }
  }

  return true;
};


// https://leetcode.com/problems/4sum/

const fourSum = (nums, target) => {

  nums.sort((a,b) => a > b ? 1 : -1);

  const res = [];
  const hash = {};

  const solve = (index, temp, sum) => {

      if (sum === target && temp.length === 4) {

          let str = '';
          temp.forEach((num) => str+=num);

          if (!hash[str]) {
              res.push([...temp]);
              hash[str] = true;
          }
          return;
      }

      if (temp.length > 4) {
          return;
      }

      if (index >= nums.length) {
          return;
      }

      solve(index+1, temp, sum);

      temp.push(nums[index]);
      let sum1 = sum + nums[index];
      solve(index+1, temp, sum1);
      temp.pop()
  };

  solve(0, [], 0);

  return res;
};


// https://www.techiedelight.com/smallest-window-sorting-which-make-array-sorted/

const smallestWindowToSort = (arr = []) => {

  let start = -1;
  let end = -1;

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < arr[i+1]) {
      continue;
    } else {
      start = i;
      break;
    }
  }

  for (let i = arr.length-1; i >0 ; i--) {
    if (arr[i] > arr[i-1]) {
      continue;
    } else {
      end = i;
      break;
    }
  }

  console.log(start, end);
};

