// let res = '';

// const stringReversal = (str, index) => {

//   if (index === str.length) return;

//   let ch = str[index];
//   stringReversal(str, index+1);

//   res+=ch;
// };

// stringReversal('the simple engineer', 0);

// console.log(res);


// const IsPalindrom = (str, start, end) => {

//   if (start > end) {
//     return true;
//   }

//   if (str[start] !== str[end]) {
//     return false;
//   }

//   return IsPalindrom(str, start+1, end-1);
// };

// const inp = 'kaybk';

// const ans = IsPalindrom(inp, 0, inp.length-1);
// console.log(ans);


// let ans = []
// const decimalToBinary = (num) => {

//   if (num <= 1) {
//     ans.push(1);
//     return;
//   }

//   ans.push(parseInt(num%2));
  
//   decimalToBinary(parseInt(num/2));
// };

// decimalToBinary(16);
// console.log(ans.reverse());


// let sum = 0
// const sumOfNumbersUptoN = (num, index) => {

//   if (index === num+1) {
//     return
//   }

//   sum+=index;

//   sumOfNumbersUptoN(num, index+1);
  
// };

// sumOfNumbersUptoN(9, 1);
// console.log(sum);


// let ans = [];
// const fabionacii = (n, a, b, index) => {

//   if (n === index) {
//     return;
//   }

//   let sum = a+b;
//   ans.push(sum);

//   fabionacii(n, b, sum, index+1);
// };

// ans.push(0);
// ans.push(1);
// fabionacii(9, 0, 1, 2);
// console.log(ans);

