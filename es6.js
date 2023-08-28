// ES6 - EcmaScript 6  (2015)

// var vs let vs const

// var a = 10;
// let b = 10;
// const c = 10;
// // c = 50;

// function add() {
//   let ab = 30;
//   if (ab) {
//     const z = 30;
//   }

//   console.log(a + b, z);
// }

// add();

// Template Strings
// const PI = 3.14;

// console.log(`The value of PI is : ${2.14 + 1}`);
// const para = `This is
// some para`;
// console.log(para);

// Destructuring
// const obj1 = {
//   mobile: "Apple",
//   color: "Red",
//   price: 600,
// };

// const { mobile, color } = obj1;

// console.log(mobile, color);

// const arr = [56, 65, 85, 74, 85];
// let [maths, english, physics, chemistry] = arr;

// console.log(maths, english, physics, chemistry);

// Spread & Rest Operator
// let obj1 = {
//   name: "Sayeed",
//   class: "Mern",
//   branch: 1,
//   isActive: true,
// };

// let obj2 = {
//   ...obj1,
//   branch: 2,
// };

// obj2.name = "Hitesh";

// // for (let key in obj1) {
// //   obj2[key] = obj1[key];
// // }
// console.log(obj1);
// console.log(obj2);
// console.log(obj2 === obj1);

// function sum(a, b, c, ...d) {
//   console.log(d);
//   var mainSum = a + b + c;
//   var sum = 0;
//   for (let i = 0; i < d.length; i++) {
//     sum += d[i];
//   }
//   return mainSum + sum;
// }

// const res = sum(1, 2, 3, 4, 4, 5);
// console.log(res);

// default parameters

// function add(a = 10, b = 30) {
//   return a + b;
// }

// console.log(add(undefined, 20));

// Arrow Functions

// const add = (a, b) => a + b;

// console.log(add(20, 20));

// Array Methods

// var arr = [1, 2, 3, 4, 5];
// console.log(arr.map((elem, index) => console.log(elem, index)));

// console.log(arr.filter((elem) => elem % 2 === 0));
// console.log(arr.reduce((prev, elem) => (prev -= elem)));

// let str = "Hello World";

// console.log(str.includes("World"));
