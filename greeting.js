const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// this helps submitted name store in localStrage
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// if you submit name
function handleSubmit(event) {
  event.preventDefault(); // this will prevent default function of submit
  const currentValue = input.value; // put name value in currentValue
  paintGreeting(currentValue);
  saveName(currentValue);
}

// if there isn't submitted name
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
// if there is submitted name
function paintGreeting(text) {
  // classList is adding classname
  form.classList.remove(SHOWING_CN); // if you want to paint, hide form!
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    // bring "paintGreeting" from local storage
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
