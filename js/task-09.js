function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('.widget');
const colorValueEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

function onBodyChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = getRandomHexColor();
}

buttonEl.addEventListener('click', onBodyChangeColor);