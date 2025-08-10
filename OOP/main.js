class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}
let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("Toyota", 2014, 260000);
let car3 = new Car("Ford", 2001, 680000);
console.log(
  `Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`
);
console.log(car1.run());
// Needed Output
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"
//! ---------------------------------------------------------------------------------------------
// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }
// class Tablet extends Phone {
//   constructor(name, serial, price, size) {
//     super(name, serial, price);
//     this.size = size || "Unknown";
//   }
//   fullDetails() {
//     return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
//   }
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown
//! ---------------------------------------------------------------------------------------------
// class User {
//   #c;
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card;
//     this.transform = () => {
//       let creditCard = this.#c.toString().match(/\d{4}/g).join("-");
//       return creditCard;
//     };
//   }
//   get showData() {
//     return `Hello ${this.u} Your Credit Card Number is: ${this.transform()}`;
//   }
// }

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined
//! ---------------------------------------------------------------------------------------------
// String.prototype.addLove = function () {
//   return `I Love ${this} Web School`;
// };
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School
// let anotherStr = "JavaScript";
// console.log(anotherStr.addLove()); // I Love JavaScript Web School
//! ---------------------------------------------------------------------------------------------
// s
