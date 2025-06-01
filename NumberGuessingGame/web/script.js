const lowerBound = 1;
const upperBound = 100;
const maxAttempts = 7;

let secretNumber;
let attemptsMade;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

// Fade-in feedback text
function showFeedback(message) {
  feedback.classList.remove("show");
  void feedback.offsetWidth; // restart animation
  feedback.textContent = message;
  feedback.classList.add("show");
}

// Animated reveal of the number
function revealNumber(num) {
  let display = '';
  let i = 0;
  const numStr = num.toString();
  const interval = setInterval(() => {
    display += numStr[i];
    feedback.textContent = `The number was: ${display}`;
    i++;
    if (i >= numStr.length) clearInterval(interval);
  }, 300);
}

function startGame() {
  secretNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
  attemptsMade = 0;
  showFeedback('Guess a number between 1 and 100. Good luck!');
  attempts.textContent = `Attempts left: ${maxAttempts}`;
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  restartBtn.style.display = 'none';
  guessInput.focus();
}

function endGame() {
  guessInput.disabled = true;
  guessBtn.disabled = true;
  restartBtn.style.display = 'inline-block';
}

function checkGuess() {
  const guess = Number(guessInput.value);
  if (!guess || guess < lowerBound || guess > upperBound) {
    showFeedback(`Please enter a valid number between ${lowerBound} and ${upperBound}.`);
    return;
  }

  attemptsMade++;

  if (guess < secretNumber) {
    showFeedback("Too low! 📉");
  } else if (guess > secretNumber) {
    showFeedback("Too high! 📈");
  } else {
    showFeedback(`🎉 Congratulations! You guessed it in ${attemptsMade} attempts.`);
    confetti(); // Confetti effect on win
    endGame();
    return;
  }

  if (attemptsMade >= maxAttempts) {
    revealNumber(secretNumber);
    endGame();
  } else {
    attempts.textContent = `Attempts left: ${maxAttempts - attemptsMade}`;
  }

  guessInput.value = '';
  guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') checkGuess();
});

restartBtn.addEventListener('click', startGame);

startGame();
