const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerID = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(){
    startBtn.setAttribute('disabled', '');
    stopBtn.disabled = false;
    timerID = setInterval(changeBcgColor, 1000)
    }
    

function onStopBtnClick(){
    startBtn.removeAttribute('disabled', '');
    stopBtn.disabled = true;
    clearInterval(timerID);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBcgColor(){
 return body.style.backgroundColor = getRandomHexColor();
}

