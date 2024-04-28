let [seconds, minutes, hours] = [0, 0, 0];
let time = document.getElementById("time");
let timer = null;
let stopflag = false;
let pauseFlag = false;

function pause() {
  pauseFlag = false;
  clearInterval(timer);
  renderPLayPauseButton();
}

function stopwatch() {
  pauseFlag = !pauseFlag;
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  time.innerHTML =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
}
function watchStart() {
  pauseFlag = true;
  renderPLayPauseButton();
  if (stopflag == false) {
    if (timer !== null) {
      clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
  }
}

function pauseStopWatch() {}

function watchStop() {
  stopflag = true;
  pauseFlag = false;
  renderPLayPauseButton();

  clearInterval(timer);
}

function renderPLayPauseButton() {
  let plyButton = document.getElementById("ply-btn");
  let playButton = document.getElementById("play-button");
  let pauseButton = document.getElementById("pause-button");
  if (pauseFlag) {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  } else {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  }
  if (stopflag) {
    plyButton.disabled = true;
  } else {
    plyButton.disabled = false;
  }
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  time.innerHTML = "00:00:00";
  stopflag = true;
  pauseFlag = false;
  renderPLayPauseButton();
}
