// https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/

const minSwaps = (nums) => {

  const arr = [];
  const visited = {}
  let count = 0;
  let cycle = 0;
  
  for (let i = 0; i < nums.length; i++) {
      
      arr.push([nums[i], i]);
  }
  
  arr.sort((a,b) => a[0]-b[0]);
  
  for (let i = 0; i < arr.length; i++) {
      
      if (visited[i]) continue;
      
      if (i === arr[i][1]) { 
          visited[i] = true; 
          continue;
      }
      
      else {
          
          cycle = 0;
          let j = i;
          
          while (!visited[j]) {
              
              cycle++;
              visited[j] = true;
              j = arr[j][1];
          }
          
          if (cycle > 0) {
              count+=cycle-1
          }
      }
  }
  
  return count;
}


// https://practice.geeksforgeeks.org/problems/relative-sorting4323/1

const sortA1ByA2 = (A1, N, A2, M) => {

  const hash = {}
  const ans = []
  for (let num of A1) {
      
      hash[num] = (hash[num] || 0) + 1;
  }
  
  for (let num of A2) {
      
      let j = hash[num];
      
      while (j > 0) {
          ans.push(num);
          j--;
      }
      
      delete hash[num];
  }
  
  for (let key in hash) {
      
      let j = hash[key];
      
      while (j > 0) {
          ans.push(key);
          j--;
      }
      
      delete hash[key];
  }
  
  return ans;
};

