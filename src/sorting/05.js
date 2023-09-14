// https://www.geeksforgeeks.org/find-the-point-where-maximum-intervals-overlap/

const findMaxGuests = (arr, brr, n) => {
  //code here
  
  const map = [];
  
  for (let i = 0; i < n; i++) {
      map.push([arr[i], 1]);
      map.push([brr[i], -1]);
  }
  
  map.sort((a, b) => {
      
      if (a[0] > b[0]) {
          return 1;
      }
      
      if (a[0] === b[0]) {
          return b[1]-a[1];
      }
      
      return -1
  });

  
  let max = Number.MIN_VALUE;
  let count = 0;
  let time = -1;
  
  for (let i = 0; i < map.length; i++) {
      
      if (map[i][1] === 1) {
          count++;
      }
      
      if (count > max) {
          max = count;
          time = map[i][0]
      }
      
      else if(map[i][1] === -1) {
          count--;
      }
  }
  
  return [max, time];
};


// https://www.geeksforgeeks.org/minimum-swaps-to-make-two-array-identical/

const minSwap_ArraysIdentical = (a = [], b = []) => {

  const hash = {};

  for (let i = 0 ; i < a.length; i++) {
    hash[a[i]] = i;
  }

  let sorted = [];

  for (let i = 0 ; i < b.length; i++) {
    sorted.push([b[i], hash[b[i]]]);
  }

  const visited = {};
  let count = 0;
  let cycle = 0;

  for (let i = 0; i < sorted.length; i++) {

    if (visited[i]) continue;

    if (i === sorted[i][1]) {
      visited[i] = true;
      continue;
    } 

    else {
      cycle = 0;
      j = i;

      while (!visited[j]) {
        visited[j] = true;
        cycle++;

        j = sorted[j][1];
      }

      if (cycle > 0) {
        count+= cycle-1;
      }
    }

    console.log(count);
  }

};


// https://leetcode.com/problems/custom-sort-string/

const customSortString = (order, s) => {
    
  const hash = {};
  let ans = '';

  for (let ch of s) {
      hash[ch] = (hash[ch] || 0) + 1;
  }

  for (let ch of order) {

      let j = hash[ch];

      while (j > 0) {
          ans+=ch;
          j--;
      }

      delete hash[ch];
  }

  for (let key in hash) {
     let j = hash[key];

      while (j > 0) {
          ans+=key;
          j--;
      }

      delete hash[key];
  }

  return ans;
};

