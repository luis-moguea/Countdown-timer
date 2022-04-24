const daysEl = document.querySelector("#d-1");
const hoursEl = document.querySelector("#h-1");
const minsEl =  document.querySelector("#m-1");
const secondsEl = document.querySelector("#s-1");



const newYears = "1 jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

         daysEl.textContent = days;
         hoursEl.textContent =  formatTime(hours);
         minsEl.textContent =  formatTime(mins);
         secondsEl.textContent =  formatTime(seconds);
 
}

function formatTime(time) {
       return time < 10 ? (`0${time}`) : time;
}

//Initial call
countdown();

setInterval(countdown, 1000);