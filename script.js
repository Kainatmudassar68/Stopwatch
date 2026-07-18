const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

let startTime = 0;
let elapsedTime = 0;
let timer = null;
let running = false;

function startTimer() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        running = true;
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    display.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}.` +
        `${String(milliseconds).padStart(2, "0")}`;
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;

    display.textContent = "00:00:00.00";
    lapList.innerHTML = "";
}

function addLap() {
    console.log("Lap clicked");

    if (running) {
        const lap = document.createElement("li");
        lap.textContent = display.textContent;
        lapList.appendChild(lap);
    }
}

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");


startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);