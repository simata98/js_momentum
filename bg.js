const body = document.querySelector("body");

const IMG_NUMBER = 3;

function painImage(imgNum) {
  const image = new Image(); // equals to document.createElement("img")
  image.src = `images/${imgNum + 1}.gif`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  painImage(randomNumber);
}

init();
