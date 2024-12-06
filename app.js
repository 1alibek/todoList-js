
// foreach------------------------------------------------------
// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };
// newArr.myForEach((value, idx, arr) => {
//   console.log(value, idx, arr);
// });
// Some---------------------------------------------------------
// let arr = [1,2,3,4,5,6,7];
// Array.prototype.mySome = function (cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === cb) {
//       return true;
//     }
//   }
//   return false;
// };
// let newArr = arr.mySome(4);
// console.log(newArr);

// Every--------------------------------------------------
// let arr = [4,4,8,4];
// Array.prototype.MyEvery = function (cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== cb) {
//       return false;
//     }
//   }
//   return true;
// };
// let newArr = arr.MyEvery(4);
// console.log(newArr);

// Filter-----------------------------------------------------
// let arr = [4,4,8,4];
// Array.prototype.MyFilter = function (cb) {
//     let res =[]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === cb) {
//     res.push(arr[i])
//     }
//   }
//   return res;
// };
// let newArr = arr.MyFilter(8);
// console.log(newArr);