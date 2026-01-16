console.log("Hello, Interactive Graphic Design!");

const questions = Array.from(document.querySelectorAll(".quiz-question"));
const feedbackArea = document.getElementById("feedback-area");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreText = document.getElementById("score-text");

const qNum = document.getElementById("q-num");
const qTotal = document.getElementById("q-total");

const finishScreen = document.getElementById("finish-screen");
const finalScore = document.getElementById("final-score");
const finishRestart = document.getElementById("finish-restart");

let currentIndex = 0;
let score = 0;
let answered = false;

qTotal.textContent = String(questions.length);

const funWrongRed = [
  "AIRBALLLLL 🧱💀 Try the next one!",
  "That answer bricked harder than a bad jumper. 😭",
  "Oof… that was NOT it. Reset your shot meter. 🎮",
  "Nahhhh, the rim said “nope.” ❌🏀",
];

const funWrongYellow = [
  "Oooooo, so close… but still a miss. 😅",
  "You hit the front rim — almost! 🏀",
  "Close enough to scare the net, not enough to score. 😂",
  "That one was *nearly* cash… nearly. 💸",
];

const funRight = [
  "BUCKETS! ✅🔥",
  "SWISHHHH! 🏀💨",
  "MONEY. 💵✅",
  "You’re in your prime right now! 😤🏆",
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderFeedback(colorClass, html) {
  feedbackArea.innerHTML = "";
  const box = document.createElement("div");
  box.classList.add(colorClass, "active");

  const p = document.createElement("p");
  p.innerHTML = html;

  box.appendChild(p);
  feedbackArea.appendChild(box);
}

function clearFeedback() {
  feedbackArea.innerHTML = "";
}

function showQuestion(index) {
  questions.forEach((q) => q.classList.remove("active"));
  questions[index].classList.add("active");

  answered = false;
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";
  clearFeedback();

  // enable buttons
  const buttons = questions[index].querySelectorAll(".answer-buttons button");
  buttons.forEach((btn) => (btn.disabled = false));

  // hide explanation
  const explanation = questions[index].querySelector(".correct-explain");
  if (explanation) explanation.style.display = "none";

  qNum.textContent = String(index + 1);
  scoreText.textContent = `Score: ${score}`;
}

function lockAnswers() {
  const active = questions[currentIndex];
  active
    .querySelectorAll(".answer-buttons button")
    .forEach((b) => (b.disabled = true));
}

function finishQuiz() {
  // hide quiz UI, show finish overlay
  questions.forEach((q) => q.classList.remove("active"));
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";
  clearFeedback();

  finalScore.textContent = `Final Score: ${score} / ${questions.length}`;
  finishScreen.style.display = "flex";

  // restart confetti animation each time
  const confetti = finishScreen.querySelector(".confetti");
  if (confetti) {
    const html = confetti.innerHTML;
    confetti.innerHTML = "";
    confetti.innerHTML = html;
  }
}

function handleAnswer(btn) {
  if (answered) return;
  answered = true;

  const isCorrect = btn.dataset.correct === "true";
  const feedbackColor = btn.dataset.feedback || "red";

  lockAnswers();

  const activeQuestion = questions[currentIndex];
  const explanation = activeQuestion.querySelector(".correct-explain");

  if (isCorrect) {
    score += 1;

    if (explanation) explanation.style.display = "block";

    const hype = pick(funRight);
    const explainText = explanation ? ` ${explanation.textContent}` : "";
    renderFeedback("green", `<strong>${hype}</strong>${explainText}`);
  } else {
    if (feedbackColor === "yellow") {
      renderFeedback("yellow", `<strong>${pick(funWrongYellow)}</strong>`);
    } else {
      renderFeedback("red", `<strong>${pick(funWrongRed)}</strong>`);
    }
  }

  scoreText.textContent = `Score: ${score}`;

  if (currentIndex < questions.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    // last question answered -> finish
    finishQuiz();
  }
}

// attach listeners (HTML-driven)
questions.forEach((q) => {
  q.querySelectorAll(".answer-buttons button").forEach((btn) => {
    btn.addEventListener("click", () => handleAnswer(btn));
  });
});

nextBtn.addEventListener("click", () => {
  currentIndex += 1;
  showQuestion(currentIndex);
});

function restartQuiz() {
  finishScreen.style.display = "none";
  currentIndex = 0;
  score = 0;
  showQuestion(currentIndex);
}

restartBtn.addEventListener("click", restartQuiz);
finishRestart.addEventListener("click", restartQuiz);

// Start
showQuestion(currentIndex);
