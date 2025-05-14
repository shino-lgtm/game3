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

      // 残り時間が少ないと色を変える
      if (timeLeft <= 3) {
        timeDisplay.style.color = "#ff4444";
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        button.disabled = true;
        button.textContent = "終了！";
        document.getElementById("info").classList.add("end-effect");
        showConfetti();
      }
    }, 1000);
  }

  if (timeLeft > 0) {
    count++;
    countDisplay.textContent = count;

    // アニメーション追加
    countDisplay.classList.remove("pulse");
    void countDisplay.offsetWidth;
    countDisplay.classList.add("pulse");
  }
});

function showConfetti() {
  const body = document.body;
  for (let i = 0; i < 100; i++) {
    const dot = document.createElement("div");
    dot.style.position = "fixed";
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.zIndex = 9999;
    dot.style.opacity = 1;
    dot.style.transition = "all 1.2s ease-out";
    body.appendChild(dot);

    setTimeout(() => {
      dot.style.transform = `translateY(${Math.random() * 300 + 200}px) rotate(720deg)`;
      dot.style.opacity = 0;
    }, 10);

    setTimeout(() => body.removeChild(dot), 1500);
  }
}
