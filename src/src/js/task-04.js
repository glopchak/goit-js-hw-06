let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const counter = document.querySelector('span');


decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
};

function onIncrementBtnClick() {
    counterValue += 1;
    counter.textContent = counterValue;
};

