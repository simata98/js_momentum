const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"), // toDoForm.queryselector find only inside of toDoForm
  toDoList = document.querySelector(".js-toDoList");

// the reason of using toDos inside of double quote is to save a string on a variable
const TODOS_LS = "toDos";

// you can save toDos in array
let toDos = [];

// delete todo things
function deleteToDo(event) {
  const btn = event.target; // target helps which button clicked
  // parentNode helps find child's parent. you can see by "console.dir()"
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // filter gives array that checked 'filterFn'
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); // li.id is string...
  });
  toDos = cleanToDos;
  saveToDos();
}

// localStorage setting
function saveToDos() {
  // localStorage.setItem(TODOS_LS, toDos); <-- error
  // localStorage can store only string. So we should use JSON.stringfy
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  // appendChild = put in father element
  li.appendChild(delBtn);
  li.appendChild(span);
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
