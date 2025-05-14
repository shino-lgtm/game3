let count = 0;
let timeLeft = 10;
let gameStarted = false;
let timer;

const clickButton = document.getElementById("clickButton");
const countDisplay = document.getElementById("count");
const timerDisplay = document.getElementById("timer");

clickButton.addEventListener("click", () => {
  if (!gameStarted) {
    gameStarted = true;
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        clickButton.disabled = true;
        clickButton.textContent = "終了！";
      }
    }, 1000);
  }

  if (timeLeft > 0) {
    count++;
    countDisplay.textContent = count;
  }
});
