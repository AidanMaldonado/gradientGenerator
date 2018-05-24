//Selectors grab html elements
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#gradient");
const button = document.querySelector("button");

//Function assigns the color chosen by the user to the gradient, prints out gradient values
function setGradient () {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

//Event listener for the first input
color1.addEventListener('input', () => {
  setGradient();
});

//Event listener for the second input
color2.addEventListener('input', () => {
  setGradient();
});
