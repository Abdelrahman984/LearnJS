let myBirthDay = new Date("7 31 2004");
let curDate = new Date();
let myAge = curDate - myBirthDay;
console.log((myAge / 1000).toFixed() + " Seconds");
console.log((myAge / 1000 / 60).toFixed() + " Minutes");
console.log((myAge / 1000 / 60 / 60).toFixed() + " Hours");
console.log((myAge / 1000 / 60 / 60 / 24).toFixed() + " Days");
console.log((myAge / 1000 / 60 / 60 / 24 / 30).toFixed() + " Months");
console.log((myAge / 1000 / 60 / 60 / 24 / 30 / 12).toFixed() + " Years");
//! --------------------------------------------------------------------------
// let firstDate = new Date(0);
// firstDate.setFullYear(firstDate.getFullYear() + 10);
// firstDate.setHours(0, 0, 1);
// console.log(firstDate);
// // Needed Output
// // "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
//! --------------------------------------------------------------------------
// let lastDayPrevMonth = new Date();
// lastDayPrevMonth.setDate(0);
// console.log(lastDayPrevMonth);
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(
//   `Previous Month Is ${
//     months[lastDayPrevMonth.getMonth()]
//   } And Last Day Is ${lastDayPrevMonth.getDate()}`
// );
// // Needed Output
// // Thu Jul 31 2025 01:30:59 GMT+0300 (Eastern European Summer Time)
// // Previous Month Is July And Last Day Is 31
//! --------------------------------------------------------------------------
// let start = performance.now();
// for (let i = 1; i <= 99999; i++) {
//   console.log(i);
// }
// let end = performance.now();
// console.log(`Loop Took ${Math.trunc(end - start)} Milliseconds.`);
//! --------------------------------------------------------------------------
// function* gen() {
//   let index = 14;
//   let num = 0;
//   while (true) {
//     yield index;
//     index = index + 140 + num;
//     num += 200;
//   }
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
//! --------------------------------------------------------------------------
// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// function* genAll() {
//   yield* new Set(genNumbers());
//   yield* new Set(genLetters());
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}
