// "use strict";
// this keyword
// function Mobile() {
//   this.name = "Redmi";
// }

// var m1 = new Mobile();
// console.log(m1.name);

// function call() {
//   (function () {
//     console.log(this);
//   })(); // IIFE
// }

// call();

var m1 = {
  name: "Apple",
  quantity: "20",
  rate: function () {
    console.log(this)();
  },
};

m1.rate();
