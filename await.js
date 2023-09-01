// Async & Await
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

// async function init() {

// }

const init = async () => {
  try {
    const addRes = await addAsync(10, 0);
    const subRes = await subAsync(addRes, 10);
    const mulRes = await mulAsync(subRes, 10);
    console.log(mulRes);
  } catch (err) {
    console.log(err);
  }
};

const init1 = async () => {
  const addRes = await addAsync(10, 0);
  const subRes = await subAsync(addRes, 10);
  const mulRes = await mulAsync(subRes, 10);
  console.log(mulRes);
};

init();
console.log("Test");
