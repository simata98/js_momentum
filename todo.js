const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"), // toDoForm.queryselector find only inside of toDoForm
  toDoList = document.querySelector(".js-toDoList");

// the reason of using toDos inside of double quote is to save a string on a variable
const TODOS_LS = "toDos";
// you can save toDos in array
const toDos = [];
// localStorage setting
function saveToDos() {
  // localStorage.setItem(TODOS_LS, toDos); <-- error
  // localStorage can store only string. So we should use JSON.stringfy
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  // appendChild = put in father element
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId; // put newId number in li.id (for css)
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // when you submitted, it'll be empty
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    // forEach executes sort by insert
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
