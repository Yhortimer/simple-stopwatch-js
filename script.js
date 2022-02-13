/* imports the timer 'div' as a variable, using its id, so we can modify it as we wish */
const timer = document.getElementById("stopwatch");

var hours = 0;
var minutes = 0;
var seconds = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);
    seconds += 1;

    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes == 60) {
      hours += 1;
      minutes = 0;
      seconds = 0;
    }

    if (seconds < 10 || seconds == 0) {
      seconds = "0" + seconds;
    }
    if (minutes < 10 || minutes == 0) {
      minutes = "0" + minutes;
    }
    if (hours < 10 || hours == 0) {
      hours = "0" + hours;
    }

    timer.innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hours = 0;
  seconds = 0;
  minutes = 0;
}

/* Bluring BG image */

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let restart = document.querySelector("#restart");

start.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./img/blured.jpg)";
});

stop.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./img/desaturated.jpg)";
});

restart.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(./img/not_blured.jpg)";
});
