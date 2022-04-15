// style. fontSize =` ${event. currentTarget. value} px`;

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function onFontSizeInput () {
    textEl.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener("input", onFontSizeInput);