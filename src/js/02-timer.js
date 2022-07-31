import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix'

const inputChose = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timerDates = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
let timerId = null; 
btnStart.setAttribute("disabled", "disabled");
const today = new Date;

let chosenData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        chosenData = new Date(selectedDates[0]);
        const delta = chosenData - today;
    
        if (delta <= 0) {
            Notiflix.Notify.failure("Please choose a date in the future");
        }
        else {
        btnStart.removeAttribute("disabled", "disabled");
        return chosenData = new Date(selectedDates[0]);
        }
    },
};

flatpickr(inputChose, options);

btnStart.addEventListener('click', startTimer);

function startTimer(e) {
    timerId = setInterval(timer, 1000);
}

function timer() {
    const today = new Date
    const diferens = chosenData - today;

    if (diferens <= 0) {
        clearInterval(timerId)
        Notiflix.Notify.info("SALE is FINISHED, Sorry if you dont catch")
        // window.alert("SALE is FINISHED, Sorry if you didn't catch");
        return 
    }

    const objectTimes = convertMs(diferens);

    
    btnStart.setAttribute("disabled", "disabled")
    timerDates.textContent = `${objectTimes.days} :`;
    timerHours.textContent = `${objectTimes.hours} :`;
    timerMinutes.textContent = `${objectTimes.minutes} :`;
    timerSeconds.textContent = `${objectTimes.seconds}`;
   
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return  {days, hours, minutes, seconds };
}



