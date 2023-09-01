function addAsync(a, b, cb) {
  setTimeout(() => {
    if (a !== 0) {
      var c = a + b;
      cb(c);
    } else {
      cb(null, "Invalid Input");
    }
  }, 2000);
}

function subAsync(a, b, cb) {
  setTimeout(() => {
    var c = a - b;
    cb(c);
  }, 1000);
}

function mulAsync(a, b, cb) {
  setTimeout(() => {
    var c = a * b;
    cb(c);
  }, 2000);
}

// Parallel Execution
// Sequential Execution

// var addRes = addAsync(10, 20, (res, err) => (res ? res : err));
// var subRes = subAsync(30, 20, (res) => console.log(res));
// var mulRes = mulAsync(10, 20, (res) => console.log(res));

addAsync(10, 20, (res) => {
  // Execution of Add Async
  subAsync(res, 10, (subRes) => {
    // Execution of Sub Async
    mulAsync(subRes, 10, (mulRes) => console.log(mulRes));
    // Execution of Mul Async
  });
});

// Country -> State -> Cities ->
// Cart -> Payment -> UPI/ Card -> Pass -> Paymnet COmpleted
// Promises
