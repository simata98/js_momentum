const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"), // toDoForm.queryselector find only inside of toDoForm
  toDoList = document.querySelector(".js-toDoList");

// the reason of using toDos inside of double quote is to save a string on a variable
const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "💯";
  const span = document.createElement("span");
  span.innerText = text;
  // appendChild = put in father element
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // when you submitted, it'll be empty
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  } else {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
