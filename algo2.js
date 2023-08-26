// Binary Search
// Given a sorted array find k
var arr = [25, 50, 65, 75, 86];

// k = 75
// mid = (0 + 4) / 2 = 2 = arr[2] = 65
// low = mid +1 (k > arr[i])
// high = mid - 1
// low > high

function binSearch(ar, k) {
  var low = 0;
  var high = ar.length - 1;

  while (low <= high) {
    var mid = Math.ceil((low + high) / 2);

    if (ar[mid] === k) return mid;
    if (ar[mid] > k) {
      // move left
      high = mid - 1;
    } else {
      // move right
      low = mid + 1;
    }
  }
  return false;
}

var res = binSearch(arr, -1);
console.log(res);
