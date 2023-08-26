// class User {

// }

function User(nm, cls, loc, active) {
  this.name = nm;
  this.class = cls;
  this.location = loc;
  this.isActive = active;

  this.greet = function () {
    console.log("Hello World!");
  };
}

User.prototype.call = function () {
  console.log("Calling!");
};

const usr1 = new User("Sayeed", "MERN", "Gachibowli", true);
const usr2 = new User("Saleem", "AWS", "Tolichowki", false);

console.log(usr1.call());
