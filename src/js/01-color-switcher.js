function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.setAttribute("disabled", "disabled");
let timerId = null;


btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click', stopChangeColor);

function startChangeColor(e) {

  timerId = setInterval(() => {
  body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute("disabled", "disabled");
  btnStop.removeAttribute("disabled", "disabled");
 };

function stopChangeColor() {
  clearInterval(timerId);
  btnStart.removeAttribute("disabled", "disabled")
  btnStop.setAttribute("disabled", "disabled");
} 
