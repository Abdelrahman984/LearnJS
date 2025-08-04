// for (let index = 0; index < 10; index++) {
//   let productContainer = document.createElement("div");
//   productContainer.className = "product-container";

//   let heading = document.createElement("h2");
//   let desc = document.createElement("p");

//   let headingTxt = document.createTextNode(`Product ${index + 1} Title`);
//   let descTxt = document.createTextNode(`Product ${index + 1} Description`);

//   heading.appendChild(headingTxt);
//   desc.appendChild(descTxt);

//   productContainer.appendChild(heading);
//   productContainer.appendChild(desc);

//   document.body.appendChild(productContainer);
// }

// let images = document.images;
// for (let i = 0; i < images.length; i++) {
//   images[i].setAttribute(
//     "src",
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   );
//   images[i].setAttribute("alt", "Elzero Logo");

//   images[i].style.backgroundColor = "black";
// }

// let input = document.querySelector("form input");
// let us = document.querySelector("form .result .us-dollar");
// let eg = document.querySelector("form .result .eg-pound");

// input.oninput = () => {
//   us.innerHTML = input.value;
//   eg.innerHTML = (input.value * 15.6).toFixed(2);
// };
// document.forms[0].onsubmit = (e) => e.preventDefault();

// let div1 = document.querySelector("div.one");
// let div2 = document.querySelector("div.two");

// let tmp = div1.title;
// div1.title = div2.title;
// div2.title = tmp;

// tmp = div1.innerHTML;
// div1.innerHTML = div2.innerHTML;
// div2.innerHTML = tmp;

// div2.innerHTML = div2.innerHTML + " 2";
// // div2.appendChild(document.createTextNode(" 2"));

// console.log(div1.outerHTML);
// console.log(div2.outerHTML);

// let images = document.images;
// for (let i = 0; i < images.length; i++) {
//   if (images[i].hasAttribute("alt")) images[i].alt = "Old";
//   else images[i].alt = "Elzero New";
//   console.log(images[i]);
// }

// let numElement = document.querySelector("form input[type = number]");
// let txtElement = document.querySelector("form input[type = text]");
// let selectElement = document.querySelector("form select");
// let submitElement = document.querySelector("form input[type = submit]");
// let ResultsElement = document.querySelector("form .results");

// let num;
// let txt;
// let select;

// document.forms[0].oninput = () => {
//   num = numElement.value;
//   txt = txtElement.value;
//   select = selectElement.value;
// };

// document.forms[0].onsubmit = (e) => {
//   e.preventDefault();
//   ResultsElement.innerHTML = "";
//   for (let i = 0; i < num; i++) {
//     let res = document.createElement(select);
//     res.textContent = txt;
//     ResultsElement.appendChild(res);
//   }
// };
// console.log(ResultsElement);

// window.onload = () => {
//   for (let i = 0; i < document.links.length; i++) {
//     if (
//       document.links[i].classList.contains("open") &&
//       document.links[i].innerHTML === "Elzero"
//     ) {
//       document.links[i].click();
//     }
//   }
// };

// let addEle = document.querySelector(".classes-to-add");
// let removeEle = document.querySelector(".classes-to-remove");
// let res = document.querySelector(".classes-list div");
// let target = document.querySelector(".element"); // ← العنصر الأساسي

// let addClasses = [];
// let removeClasses = [];

// addEle.onblur = function () {
//   if (addEle.value != "") {
//     addClasses = addEle.value.toLowerCase().split(" ").sort();
//     addEle.value = "";
//     console.log(addClasses);

//     addClasses.forEach((cls) => {
//       target.classList.add(cls);
//     });
//     updateClassList();
//   }
// };
// removeEle.onblur = function () {
//   if (removeEle.value != "") {
//     removeClasses = removeEle.value.toLowerCase().split(" ").sort();
//     removeEle.value = "";
//     console.log(removeClasses);

//     removeClasses.forEach((cls) => {
//       target.classList.remove(cls);
//     });
//     updateClassList();
//   }
// };

// // ✅ فنكشن لعرض الكلاسات الحالية
// function updateClassList() {
//   res.innerHTML = ""; // نظف المحتوى القديم
//   let currentClasses = Array.from(target.classList).sort();
//   currentClasses.forEach((cls) => {
//     let span = document.createElement("span");
//     span.textContent = cls;
//     res.append(span);
//   });
// }

// document.querySelector("p").remove();

// let ele = document.querySelector(".our-element");
// let bef = document.createElement("div");
// ele.before(bef);
// let aft = document.createElement("div");
// ele.after(aft);

// bef.className = "start";
// bef.title = "Start Element";
// bef.setAttribute("data-value", "Start");

// aft.className = "end";
// aft.title = "End Element";
// aft.setAttribute("data-value", "End");

// console.log(bef.outerHTML);
// console.log(aft.outerHTML);

// console.log(document.querySelector("div").lastChild.textContent.trim());
// console.log(
//   document
//     .querySelector("div span")
//     .nextSibling.nextSibling.nextSibling.textContent.trim()
// );

document.addEventListener("click", (e) => {
  console.log(`This Is ${e.target.tagName}`);
});
