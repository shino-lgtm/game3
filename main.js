const button = document.getElementById("clickButton");
const countDisplay = document.getElementById("count");
const timeDisplay = document.getElementById("time");

let count = 0;
let timeLeft = 10;
let gameStarted = false;
let timer;

button.addEventListener("click", () => {
  if (!gameStarted) {
    gameStarted = true;
    timer = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        button.disabled = true;
        button.textContent = "終了！";
      }
    }, 1000);
  }

  if (timeLeft > 0) {
    count++;
    countDisplay.textContent = count;
  }
});
