// delete middle element from the stack

// const deleteMiddle = (stack = [], k) => {

//   if (stack.length === 0) {
//     return;
//   }

//   let node = { index: stack.length-1, value: stack.pop() }

//   deleteMiddle(stack, k);

//   if (k !== node.index) {
//     stack.push(node.value);
//   }
// }

// const stack = [1,2,3,4,5,6]
// deleteMiddle(stack, 2);
// console.log(stack);


// check isSorted

// const isSorted = (arr = [], index) => {
//   if (index === arr.length-1) {
//     return true;
//   }

//   if (arr[index] > arr[index+1]) {
//     return false;
//   }

//   return isSorted(arr, index+1);
// }

// console.log(isSorted([1,2,3,4,5,6], 0));


// reverse stack

// const insert = (stack = [], x) => {

//   if (stack.length === 0) {
//     stack.push(x);
//     return;
//   }

//   let y = stack.pop();

//   insert(stack, x);

//   stack.push(y);

// }

// const reverseStack = (stack = []) => {
//   if (stack.length === 0) {
//     return;
//   }

//   let x = stack.pop();

//   reverseStack(stack);

//   insert(stack, x);
// }

// const stack = [1,2,3,4,5,6];
// reverseStack(stack);
// console.log(stack);


// sort stack

// const insert = (stack = [], x) => {

//   if (stack.length === 0 || stack[stack.length-1] <= x) {
//     stack.push(x);
//     return;
//   }

//   let y = stack.pop();

//   insert(stack, x);

//   stack.push(y);
// }

// const sortStack = (stack = []) => {

//   if (stack.length === 0) {
//     return;
//   }

//   let x = stack.pop();

//   sortStack(stack);

//   insert(stack, x);
// }

// const arr = [2,3,1,4,2,3,6];
// sortStack(arr);
// console.log(arr);

