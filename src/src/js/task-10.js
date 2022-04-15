function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');



function onBtnCreateClick() {
  createBoxes();
};

function createBoxes() {
  
  const amount = input.value;
  const items = [];

  for (let i = 1; i <= amount; i += 1) {
    const createDiv = document.createElement('div');
    
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = (i * 10) + 20 + 'px';
    createDiv.style.height = (i * 10) + 20 + 'px';
    
    items.push(createDiv);
    
  }
  boxes.append(...items); 
  console.log(boxes);
  
};

function onBtnDestroyClick() {
  destroyBoxes();
};

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';  
};

btnCreate.addEventListener('click', onBtnCreateClick);
btnDestroy.addEventListener('click', onBtnDestroyClick);

