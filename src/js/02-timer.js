// Описаний в документації
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const daysTimer = document.querySelector('span[data-days]');
const hoursTimer = document.querySelector('span[data-hours]');
const minutesTimer = document.querySelector('span[data-minutes]');
const secondsTimer = document.querySelector('span[data-seconds]');
startBtn.addEventListener('click', onStart);

let chosenDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        startBtn.disabled = false;
        chosenDate = selectedDates[0].getTime();
        if (chosenDate - Date.now() < 0) {
            alert('Please choose a date in the future');
        } return chosenDate; 
        
  },
};

flatpickr('input#datetime-picker', options);

function onStart() {
startBtn.disabled = true;
    setInterval(countdownToChosenDate, 1000);
    
}

function countdownToChosenDate() {
    const currentDate = Date.now();
    const timeDifference = chosenDate - currentDate;
    const convertedToMsTime = convertMs(timeDifference);

    updateTime(convertedToMsTime);
    
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor(
    (((ms % day) % hour) % minute) / second
  ));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};

function updateTime({ days, hours, minutes, seconds }) {
    daysTimer.textContent = `${days}`;
    hoursTimer.textContent = `${hours}`;
    minutesTimer.textContent = `${minutes}`;
    secondsTimer.textContent = `${seconds}`;
}