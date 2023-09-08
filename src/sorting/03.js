// https://www.geeksforgeeks.org/check-interval-completely-overlaps/

const completeOverlap = (arr = []) => {
  arr.sort((a,b) => {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] === b[0]) {
      return a[1]-b[1]
    }

    return -1;
  });

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = arr[i-1];

    if (current[0] <= prev[0] && current[1] >= prev[1]) {
      return true;
    }
  }

  return false;
};


// https://www.geeksforgeeks.org/making-elements-of-two-arrays-same-with-minimum-incrementdecrement/

const makeEqual = (arr1 = [], arr2 = []) => {
  arr1.sort();
  arr2.sort();

  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    count+= Math.abs(arr1[i] - arr2[i]);
  }

  console.log(count);
}


// https://www.geeksforgeeks.org/minimum-swaps-required-sort-binary-array/

const sortBinary = (arr = []) => {

  let count = 0;
  let zeros = 0;

  for (let i = arr.length-1; i >= 0; i--) {

    if (arr[i] === 0) {
      zeros++;
    } else {
      count = count + zeros;
    }
  }

  console.log(count);
};


