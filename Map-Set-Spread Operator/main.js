// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log([...n1, ...n2].length * Math.max(...n2)); // 210
//! -------------------------------------------------------------------------
// const setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers); // 10, 20, 2
// console.log([...setOfNumbers][setOfNumbers.size - 1]); // 2
//! -------------------------------------------------------------------------
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends.sort())]);
// // Needed Output
// // (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];
//! -------------------------------------------------------------------------
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// let myMap = new Map(Object.entries(myInfo));
// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("role"));
// // Needed Output
// // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// // 3
// // true
//! -------------------------------------------------------------------------
// let theNumber = 100020003000;
// console.log(+[...new Set(theNumber.toString())].filter((e) => +e).join(""));
// console.log(
//   +[
//     // '+' converts final string to a number
//     ...new Set( // 'new Set' removes duplicate characters
//       theNumber.toString() // convert number to string → "100020003000"
//     ), // Set will keep: "1", "0", "2", "3"
//   ]
//     .filter((e) => +e) // remove "0" (because +e → 0 is falsy)
//     .join("") // join array into string "123"
// ); // final '+' turns "123" into 123
// // Needed Output
// // 123
//! -------------------------------------------------------------------------
// let theName = "Elzero";
// console.log([...theName]);
// console.log(theName.split(""));
// console.log(Array.from(theName));
// console.log(Object.assign([], theName));
// let arr = [];
// for (let i = 0; i < theName.length; i++) {
//   arr.push(theName[i]);
// }
// console.log(arr);
// // Needed Output
// // ["E", "l", "z", "e", "r", "o"];
//! -------------------------------------------------------------------------
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// // let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// // let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// // Move numbers to the front
// chars.sort((a) => (typeof a === "number" ? -1 : 1));
// let nums = chars.filter((e) => +e).length;
// chars.copyWithin(0, nums, nums * 2);
// console.log(chars);
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]
//! -------------------------------------------------------------------------
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
console.log((numsOne.push(...numsTwo), numsOne));

// Needed Output
// [1, 2, 3, 4, 5, 6];s
