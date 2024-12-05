// let romanToInt = function (s) {
//   const romanNumber = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     const current = romanNumber[s[i]];
//     const next = romanNumber[s[i + 1]];
//     if (next && current < next) {
//       console.log(next);
//       count -= current;
//     } else {
//       count += current;
//     }
//   }
 
//   return count;
// };

// console.log(romanToInt("IV"));
// let lengthOfLastWord = function (s) {
//   let split = s.trim().split(" ");
//   return split[split.length - 1].length;
// };
// let isPalindrome = function (s) {
//   let str = "";

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i].toLowerCase();
//     if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
//       str += char;
//     }
//   }
//   return str === str.split("").reverse().join("");
// };
// // console.log(isPalindrome(" "));

// let addDigits = function (num) {
//   while (num >= 10) {
//     let sum = 0;
//     while (num > 0) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     }
//     num = sum;
//   }
//   return num;
// };
// addDigits(199);

// console.log(obj.name); // bre
// let lengthOfLastWord = function (s) {
//   let split = s.trim().split(" ");
//   return split[split.length - 1].length;
// };
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// let isPalindrome = function (s) {
//   let str = "";
//   let regxp = /[a-z 0-9 A-Z]/;
//   for (let i = 0; i < s.length; i++) {
//     if (regxp.test(s[i])) {
//       str += s[i].toLowerCase();
//     }
//   }
//   let str2 = str.split(" ").join("");
//   return str2 === str2.split("").reverse().join("");
// };
// console.log(isPalindrome("a."));
// let isPalindrome2 = function (s) {
//   let str = "";

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i].toLowerCase();
//     if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
//       str += char;
//     }
//   }
//   console.log(str.split("").reverse().join(""));
//   return str === str.split("").reverse().join("");
// };
// isPalindrome2("A man, a plan, a canal: Panama");
