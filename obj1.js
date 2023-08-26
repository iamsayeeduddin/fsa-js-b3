var obj1 = {
  brand: "Redmi",
  color: "Red",
};

var obj2 = {}; // References
// console.log("Obj2", obj2);
// obj2.color = "Green";
// console.log("Obj2", obj2);
// console.log("Obj1", obj1);

// var a = 10;
// var b = a

// Reflection
var arr = [0, 2, 1, 5, 3, 8];

for (let key in arr) {
  console.log(key, arr[key]);
}

console.log(obj2);
console.log(obj2 === obj1);
