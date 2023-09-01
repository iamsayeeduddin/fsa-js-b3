// let count = new Promise(function (res, rej) {
//   setTimeout(() => {
//     var a = 10;
//     var b = 10;
//     if (a === 0) rej("Invalid Input");
//     res(a + b);
//   }, 2000);
// });

// count.then((vl) => console.log(vl));

// Promises

// Pending -> Fulfilled (Resolved) -> Rejected

function addAsync(a, b) {
  let p = new Promise(function (res, rej) {
    setTimeout(() => {
      if (b !== 0) {
        var c = a + b;
        res(c);
      } else {
        rej("Invalid Input");
      }
    }, 2000);
  });
  return p;
}

function subAsync(a, b) {
  let p = new Promise((res, rej) => {
    setTimeout(() => {
      var c = a - b;
      res(c);
    }, 1000);
  });

  return p;
}

function mulAsync(a, b) {
  let p = new Promise((res, rej) => {
    setTimeout(() => {
      var c = a * b;
      res(c);
    }, 2000);
  });

  return p;
}

// addAsync(0, 20)
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// subAsync(30, 20)
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// mulAsync(10, 20)
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

addAsync(10, 20)
  .then((addRes) => subAsync(addRes, 10))
  .then((subRes) => mulAsync(subRes, 10))
  .then((finalRes) => console.log(finalRes))
  .catch((err) => console.log(err))
  .finally(() => console.log("Code Executed Successfully!"));
