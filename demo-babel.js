var babel  =require("babel-core");
var es6 = 'let x = n => n + 1';
var es5 = babel.transform(es6 , {
  // presets: ['es2015']
  // presets: ['env']
  // presets: [
  //   ['env' , {"modules": false}]
  // ]
}).code;
console.log(es5);

// 不加參數
// let x = n => n + 1;
//
// es2015
// "use strict";
//
// var x = function x(n) {
//   return n + 1;
// };
//
//
// env
// "use strict";
//
// var x = function x(n) {
//   return n + 1;
// };
