// Sloppy Mode
// Strict Mode

// myVar = 8;
// console.log(myVar);

// function call() {
//   "use strict";
//   a = 10;
//   console.log(a);
// }

// call();

function oldCode() {
  a = 10;
  console.log("Some Operation", a);
}
oldCode();

function newCode() {
  "use strict";
  c = 39;
  console.log("New COde", c);
}
newCode();
