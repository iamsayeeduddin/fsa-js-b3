// Given an Array find element k = 85; return index
var arr = [20, 50, 80, 90, 85, 65];

function linearSearch(ar, k) {
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] === k) return i;
  }
}

var res = linearSearch(arr, 85);
console.log(arr.indexOf(85));
