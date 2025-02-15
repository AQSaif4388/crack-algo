// Remove duplicates

// const obj = {};

// const removeDuplicate = (arr = [], index) => {

//   if (index === arr.length) {
//     return;
//   }

//   if (arr[index] in obj === true) {
//     removeDuplicate(arr, index+1)
//   } else {
//     obj[arr[index]] = 1;
//     removeDuplicate(arr, index+1);
//   }
// }

// removeDuplicate([1,2,3,2,1,4,2,3,1], 0);
// console.log(Object.keys(obj));


// Move all x to the end of the string

// let ans = '';
// let X = '';

// const moveXAtTheEnd = (str = '', index) => {

//   if (index === str.length) {
//     return;
//   }

//   if (str[index] === 'x') {
//     X+='x';
//   } else {
//     ans+=str[index];
//   }

//   moveXAtTheEnd(str, index+1);
// }

// moveXAtTheEnd('1234xxx43x4x1x2x', 0);
// console.log(ans+X);


// First and last occurence of an element

// let f = -1;
// let l = -1;

// const occurenceOfElement = (arr, index, ele) => {

//   if (index === arr.length) {
//     return;
//   }

//   if (f == -1 && arr[index] === ele) {
//     f = index;
//   }

//   else if (arr[index] === ele) {
//     l = index;
//   }

//   occurenceOfElement(arr, index+1, ele);
// }

// occurenceOfElement([1,2,3,4,2,6,7,2,3,1], 0, 2);
// console.log(f, l);

