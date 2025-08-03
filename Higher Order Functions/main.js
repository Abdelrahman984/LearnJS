myNums = [1, 2, 3, 4, 5];
newArray = [];
for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] * 2);
}
console.log(newArray); // Output: [2, 4, 6, 8, 10]

// myNums = [1, 2, 3, 4, 5];
// newArray = myNums.map(function (val) {
//     console.log(val); // Logs each value
//     return val * 2;
// });
// console.log(newArray); // Output: [2, 4, 6, 8, 10]

// myNums = [1, 2, 3, 4, 5];
// newArray = myNums.map(val => val * 2);
// console.log(newArray);

// let swappingCases = "hElLo wOrLd";
// let newArray = swappingCases
//   .split("")
//   .map(function (char) {
//     return char === char.toUpperCase()
//       ? char.toLowerCase()
//       : char.toUpperCase();
//   })
//   .join("");
// console.log(newArray); // Output: "HeLlO WoRlD"

// let myNums = [-1, 2, 3, -4, 5, -6, 0];
// let newArray = myNums.map(function (val) {
//   return -val;
// });
// console.log(newArray); // Output: [1, -2, -3, 4, -5, 6, 0]

// let str = "Hel145lo765 333Wor9l5d";
// let newstr = str
//   .split("")
//   .map(function (char) {
//     return isNaN(parseInt(char)) ? char : "";
//   })
//   .join("");
// console.log(newstr);

// let friends = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Alex",
//   "David",
//   "Adam",
//   "Eve",
//   "Ashley",
// ];
// let aFriends = friends.filter(function (ele) {
//   return ele.startsWith("A");
// });
// console.log(aFriends);

// let nums = [1, 2, 3, 4, 5, 6, 7, 88];
// let even = nums.filter(function (ele) {
//   return ele % 2 === 0;
// });
// console.log(even);

// let sentence = "I Love Foood Code Too Playing Much";
// let res = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");
// console.log(res);

// let str = "Hel145lo765 333Wor9l5d";
// let newstr = str
//   .split("")
//   .filter(function (char) {
//     return isNaN(parseInt(char));
//   })
//   .join("");
// console.log(newstr);

// let mix = "A13BS2ZX";
// let res = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele * ele;
//   })
//   .join("");
// console.log(res);

// let nums = [10, 20, 30, 40, 50];
// let res = nums.reduce(function (acc, cur) {
//   return acc + cur;
// }, 5);
// console.log(res);

// let theBiggest = ["Bla", "Other", "AAA", "Battery", "Test", "Propaganda"];
// let check = theBiggest.reduce(function (pre, cur) {
//   console.log("pre =>" + pre);
//   console.log("cur =>" + cur);
//   return pre.length > cur.length ? pre : cur;
// });
// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
// let res = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (pre, cur) {
//     console.log("pre =>" + pre);
//     console.log("cur =>" + cur);
//     return pre + cur;
//   });
// console.log(res);

// let lis = document.querySelectorAll("ul li");
// let divs = document.querySelectorAll(".class-content div");
// lis.forEach(function (ele) {
//   ele.onclick = function () {
//     lis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     ele.classList.add("active");
//     divs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString
//   .split(",")
//   .filter((ele, _, arr) => isNaN(Number.parseInt(ele)))
//   .map((ele) =>
//     ele
//       .split("")
//       .filter((ele, index, arr) => ele !== arr[++index])
//       .reduce((acc, ele) => acc + ele)
//   )
//   .map((ele, ind, arr) => {
//     arr.length = arr.length--;
//     return ele === "_" ? (ele = " ") : ele;
//   })
//   .reduce((acc, ele, index, arr) => acc + ele);
// console.log(solution);

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let res = mix
//   .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
//   .reduce((acc, cur) => acc + cur);
// console.log(res); // Elzero

// let myString = "EElllzzzzzzzeroo";
// let res = myString.split("").filter((ele, idx, arr) => ele !== arr[++idx]).join("");
// console.log(res); // Elzero

// let myArray = ["E", "l", ["z", ["e", "r"]], "o"];
// let res = myArray.reduce(function (acc, cur) {
//   if (cur.length > 1) {
//     for (let index = 0; index < cur.length; index++) {
//       let nested = cur.reduce(function (acc, cur) {
//         return acc + cur;
//       });
//       return acc + nested;
//     }
//   }

//   return acc + cur;
// });
// console.log(res); // Elzero

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let res = numsAndStrings
//   .filter((ele) => !isNaN(parseInt(ele)))
//   .map((ele) => -ele);
// console.log(res); // [-1, -10, 10, 20, -5, -3]

// let nums = [2, 12, 11, 5, 10, 1, 99];
// let res = nums.reduce((acc, cur) => (cur % 2 === 0 ? acc * cur : acc + cur), 1);
// console.log(res); // 500

