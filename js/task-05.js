// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

// function onInputElChange(event)  {
//     if (inputEl.value != "") {
//         outputEl.textContent = event.currentTarget.value;
//     } else {
//         outputEl.textContent = "Anonymous";}
// }

const onInputElChange = (event) => {
    outputEl.textContent = inputEl.value === "" ? "Anonymous" : event.currentTarget.value;
};
inputEl.addEventListener('input', onInputElChange);