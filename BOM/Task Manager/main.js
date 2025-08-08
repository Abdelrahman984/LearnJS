let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksHolder = document.querySelector(".tasks");
let tasksArray = [];
let completedNum = document.querySelector("#completed");
window.addEventListener("load", displayCompleted);

let data = localStorage.tasks;
if (data) {
  tasksArray = JSON.parse(data);
  addElementsToPageFrom(tasksArray);
}

submit.addEventListener("click", () => {
  if (input.value !== "") {
    addTasksToArray(input.value);
    input.value = "";
  }
  input.focus();
  displayCompleted();
});
tasksHolder.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("del")) {
    tasksArray = tasksArray.filter((task) => {
      return task.id != ev.target.parentElement.getAttribute("data-id");
    });
    ev.target.parentElement.remove();
    addDataToLocalStorageFrom(tasksArray);
    displayCompleted();
  }
  if (ev.target.classList.contains("task")) {
    let task = tasksArray.find(
      (t) => t.id == ev.target.getAttribute("data-id")
    );
    if (task) {
      task.completed = !task.completed;
      ev.target.classList.toggle("done");
      addDataToLocalStorageFrom(tasksArray);
      displayCompleted();
    }
  }
});

function addTasksToArray(taskName) {
  const obj = {
    id: Date.now(),
    title: taskName,
    completed: false,
  };
  tasksArray.push(obj);
  addElementsToPageFrom(tasksArray);
  addDataToLocalStorageFrom(tasksArray);
}
function addElementsToPageFrom(tasksArray) {
  tasksHolder.innerHTML = "";
  tasksArray.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    if (task.completed) div.className = "task done";
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);

    tasksHolder.appendChild(div);
  });
}
function addDataToLocalStorageFrom(tasksArray) {
  window.localStorage.tasks = JSON.stringify(tasksArray);
}
function displayCompleted() {
  let totalTasks = tasksArray.length;
  let completedTasks = tasksArray.filter(
    (ele) => ele.completed === true
  ).length;
  completedNum.innerHTML = `Completed: ${String(completedTasks).padStart(
    2,
    "0"
  )} / ${String(totalTasks).padStart(2, "0")}`;
}
