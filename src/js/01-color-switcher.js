
const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
const stopBtn = document.querySelector('button[data-stop]');

startBtn.disabled = false; 
startBtn.addEventListener('click', onStartBtnClick); 
stopBtn.addEventListener('click', onStopBtnClick);


function onStartBtnClick() {
    startBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
