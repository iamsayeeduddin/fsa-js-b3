function addAsync(a, b, cb) {
  setTimeout(() => {
    if (a !== 0) {
      a++;
      b++;
      var c = a + b;
      cb(c);
    } else {
      cb(null, "Invalid Input");
    }
  }, 2000);
}

// function phoneNumber(val) {
//   console.log("Task Finished", val);
//   console.log(val + 10);
// }

const res = addAsync(0, 20, (res, err) => {
  //   if (res) {
  //     console.log(res);
  //   } else {
  //     console.log(err);
  //   }
  res ? console.log(res) : console.log(err);
});
