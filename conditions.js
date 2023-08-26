// function divide(a, b) {
//   if (b != 0) return a / b;
//   return undefined;
// }

// var res = divide(10, 10);
// console.log(res);

// var age = 17;

// if (age >= 18) console.log("You are an Adult");
// else console.log("You are not an Adult. Permission Denied!");

// var score = 75;
// var grade;

// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else if (score >= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// console.log(grade);

// if (10 > 2) console.log(true);
// else console.log(false);

// console.log(10 > 2 ? "TRUE" : "FALSE");

var dayName = "Wednesday";
var dayNumber;

switch (dayName) {
  case "Monday":
    dayNumber = 1;
    break;
  case "Tuesday":
    dayNumber = 2;
    break;
  case "Wednesday":
    dayNumber = 3;
    break;
  case "Thursday":
    dayNumber = 4;
    break;
  case "Friday":
    dayNumber = 5;
    break;
  case "Saturday":
    dayNumber = 6;
    break;
  case "Sunday":
    dayNumber = 7;
    break;
  default:
    dayNumber = -1;
    console.log("Invalid dayName");
}

console.log(dayNumber);
