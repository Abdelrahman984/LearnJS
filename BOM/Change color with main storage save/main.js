let li = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (localStorage.color) {
  exp.style.backgroundColor = localStorage.color;
  // Remove active from all
  li.forEach(function (el) {
    el.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${localStorage.color}"]`)
    .classList.add("active");
  console.log(document.querySelector("[data-color]"));
}
li.forEach(function (item) {
  item.onclick = function () {
    // Remove active from all
    li.forEach(function (el) {
      el.classList.remove("active");
    });
    item.classList.add("active");

    let color = item.getAttribute("data-color");
    exp.style.backgroundColor = color;
    localStorage.color = color;
  };
});
