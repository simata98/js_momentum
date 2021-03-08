const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  // '?' means "if it is true" ':' means " if it is not true"
  // I did this beacause I can watch seconds "00 ~ 09"
  clockTitle.innerText = `${hours}:${minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); // I can update every 1 sec.
}

init();

// clock is working! but it isn't now on time...
