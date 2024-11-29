// 1-masala
// let str = "hello";
// let res = ""
// for (let i = 0; i<=str.length-1; i++) {
// res+=str[i]+ ","

// }
// console.log(res);

// 3-masala
// let str = "alibek";
// let res = ""
// for (let i = 0; i<=str.length-1; i++) {
// res+=str[i]+str[i]

// }
// console.log(res);

// let a = "tbc";
// let b = "cbt";
// let c = "";
// for (let i = a.length -1; i >= 0 ; i--) {
//     c += a[i]
// }

// if (c === b) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// 4-masala

let a = 'abc193'
let b = 0

for (let i = 0; i < a.length; i++) {
    let c = a[i]
    if (c>= '0' && c<= '9') {
        b += Number(c) 
    }
}

console.log(b);
