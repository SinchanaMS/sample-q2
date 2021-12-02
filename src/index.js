import "./styles.css";

var inputText = document.querySelector("#input-text");

var largeBtn = document.querySelector("#large");
var smallBtn = document.querySelector("#small");
var currentFontSize = window.getComputedStyle(inputText).fontSize;
var size = parseFloat(currentFontSize);
console.log(size);

function enlargeFont() {
  inputText.style.fontSize = size + 2 + "px";
}

function decreaseFont() {
  inputText.style.fontSize = size - 2 + "px";
}
largeBtn.addEventListener("click", enlargeFont);
smallBtn.addEventListener("click", decreaseFont);
