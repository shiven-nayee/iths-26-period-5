const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');

let player = 'X';
currentPlayer.textContent = player;

function handleClick(event) {
  const square = event.target; // the one square that was clicked

  // Don't let a player overwrite a square that's already taken
  if (square.textContent !== '') {
    return;
  }

  square.textContent = player;

  // Switch turns
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
  currentPlayer.textContent = player;
}

for (const square of squares) {
  square.addEventListener('click', handleClick);
}
