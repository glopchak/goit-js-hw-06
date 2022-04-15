
const inputEl = document.querySelector("#validation-input");

const inputElBorder = function (event) {

    if (event.target.value.length === +inputEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener('blur', inputElBorder);
