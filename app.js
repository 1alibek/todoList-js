// 1-----------------------------------------------------------------
// function regaxphone(tel) {
//     const regaxtel = /^\(?\d{3}\)?[- ]?\d{3}-\d{4}$/;
//     return regaxtel.test(tel);
// }
// console.log(regaxphone("123-456-7890"));
// 2------------------------------------------------------------------
// function regaxUrl(url) {
//     let regaxUrl1 = /^(http|https):\/\//i;
//     return regaxUrl1.test(url)
// }
// console.log(regaxUrl("httpss://example.com"));
// 3-----------------------------------------------------------------------------
// function regaxUrl(url) {
//     let regaxUrl1 = /^\d+$/;
//   return regaxUrl1.test(url)
// }
// console.log(regaxUrl("76576677676"));
// 4-------------------------------------------------------------------------------
// function regaxtxt(url) {
//     let regaxtext = /A.*Z|Z.*A/i;
//   return regaxtext.test(url);
// }
// console.log(regaxtxt("AhvfeiZ"));
// 5-------------------------------------------------------------------------------
//  function regaxtxt(url) {
//     let regaxtext = /<\/?[a-zA-Z][^>]*>/
//   return regaxtext.test(url);
// }
// console.log(regaxtxt("<h1>"));
// 6-------------------------------------------------------
//  function regaxtxt(url) {
//     let regaxtext = /^([A-Z]{2})(\d{7})/;
//   return regaxtext.test(url);
// }
// console.log(regaxtxt("AD5412353"));




// xonada bergan masala
function stars(num) {
  for (let i = 1; i <= num; i++) {
    let res = " ".repeat(num - i);
    let res2 = "*".repeat(i * 2 - 1);
    console.log(res + res2);
  }
}

stars(5);