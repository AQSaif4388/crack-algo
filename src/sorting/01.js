// Bubble Sort

const bubbleSort = (arr = []) => {

  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

      if (arr[j] > arr[j+1]) {
        let swap = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = swap;
      }
    }
  }

  return arr;
};


// Selection Sort

const selectionSort = (arr = []) => {

  for (let i = 0; i < arr.length - 1; i++) {

    let min = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      let swap = arr[i];
      arr[i] = arr[min];
      arr[min] = swap;
    }
  }

  return arr;
};


// Merge Sort

// Merge Sort function
const mergeSort = (arr = []) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Merge function
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// Quick Sort

const quickSort = (arr = []) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  const sortedArray = [];
  sortedArray.push(...sortedLeft, pivot, ...sortedRight);

  return sortedArray;
}

