// HTML Elements
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll('.square');
const currentPlayerText = document.querySelector('#current-player');

// Tracking Variables
let currentPlayer = 'X';
currentPlayerText.textContent = currentPlayer;

// Functions
function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  currentPlayerText.textContent = currentPlayer;
}

function playTurn(event) {
  const square = event.target;
  if (square.textContent === '') {
    square.textContent = currentPlayer;
    switchPlayer();
  }
}

// Event Listeners
for (const square of squares) {
  square.addEventListener('click', playTurn);
}
