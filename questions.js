// Reverse a String

// var nme = "Sayeed";
// // deeyaS
// // console.log(name[5] + name[4] + name[3] + name[2] + name[1] + name[0]);
// var reverse = "";
// for (var i = nme.length - 1; i >= 0; i--) {
//   reverse += nme[i];
// }
// console.log(reverse);

// Max and Min Values in Array

// var arr = [10, 35, 15, 20, 40];

// var max = arr[0];
// var min = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log("Max: ", max, " Min: ", min);

class Book {
  constructor(title, author, publishedYear, isRead) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isRead = isRead || false;
  }

  markAsRead() {
    return (this.isRead = true);
  }

  markAsUnread() {
    return (this.isRead = false);
  }

  getBookInfo() {
    return this;
  }
}

var book1 = new Book("The Catcher in Rye", "J.D Sallinger", 1987);
book1.markAsRead();
console.log(book1.getBookInfo());

function call() {}
