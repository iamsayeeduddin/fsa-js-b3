// Closures
function greet(name) {
  let nm = `Mr. ${name}`;
  function displayName() {
    console.log(`Hi ${nm}!`);
  }
  return displayName;
}

const g1 = greet("Sayeed");
console.log(g1());
