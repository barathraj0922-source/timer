let minutes = 25;
let seconds = 0;
let timerInterval = null;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateTimer() {
    let min = String(minutes).padStart(2, "0");
    let sec = String(seconds).padStart(2, "0");

    timerDisplay.textContent = `${min}:${sec}`;
}

startButton.addEventListener("click", function () {
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function () {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Time's up!");
            return;
        }

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        updateTimer();
    }, 1000);
});

stopButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;

    minutes = 25;
    seconds = 0;

    updateTimer();
});

updateTimer();