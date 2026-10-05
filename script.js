// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');

// How do we show the score on the page? (JS 04)
  // tic-tac-toe.html: under the message <p>, add 3 paragraphs:
    // id "x-score" that says X: 0
    // id "o-score" that says O: 0
    // id "draw-score" that says Draws: 0
  // select each one and store it in xScoreText, oScoreText and drawScoreText

// Arrays
// How do we create an array?
// Create a const called winningLines: an array that holds all 8 ways to win.
// Each way to win is its own array of 3 square numbers. The board is numbered:
//   0 | 1 | 2
//   3 | 4 | 5
//   6 | 7 | 8
// The top row is [0, 1, 2]. Find the other 7 (3 rows, 3 columns, 2 diagonals).
const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7]
]

// Counters
// How do we create a counter? (JS 04)
  // A counter is a number that starts at 0 and goes up by 1
  // make a variable named moves, starts at 0          (let or const? it changes!)
  // make xWins, oWins and draws, each starts at 0
  // Adding 1 reads right to left:  moves = moves + 1  ->  take moves, add 1, store it back in moves

// How can we simplify the code by only using the current player?
  // Check the current player
  // if the current player is X
    // switch the current player text content to O
  // else the current player is O
    // Change the current player to X
function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

// How do we count the moves? (JS 04)
  // playTurn: inside the IF, right after the square gets the current player
    // add 1 to moves
    // THEN call checkWinner (it needs the new count)

// How can we use the currentPlayer and switchPlayer function to simplify our code?
function playTurn(event) {
  // Get the div that was clicked with the event target
  const square = event.target;
  console.log('Event Square:', square);

  // If the square text content is empty the play the current player
    // SET THE CLICKED SQUARE's TEXT CONTENT TO CURRENT PLAYER
  if (square.textContent === "") {
    square.textContent = currentPlayer.textContent;
    checkWinner();
    switchPlayer();
  }

  // Check the winner first by calling checkWinner before switching the player
  console.log(switchPlayer);
  console.log(currentPlayer);
}

// Create a function called checkWinner
  // FOR EACH line of winningLines
    // first  = the textContent of the square at line[0]   (hint: squares[line[0]])
    // second = the textContent of the square at line[1]
    // third  = the textContent of the square at line[2]
    // IF first is NOT empty AND first equals second AND first equals third
      // log first + ' wins!' to the console

// How do we keep score? (JS 04)
  // checkWinner: inside the IF, after setting gameOver to true
    // IF first is 'X'
      // add 1 to xWins
      // show 'X: ' + xWins in xScoreText
    // OTHERWISE
      // add 1 to oWins
      // show 'O: ' + oWins in oScoreText
    // return          (stop checkWinner right now: the game is decided)
// How do we know it's a draw? (JS 04)
  // checkWinner: AFTER the FOR EACH loop ends (still inside checkWinner)
    // IF moves is 9          (we only get here if nobody won, because of return)
      // show "It's a draw!" in messageText
      // set gameOver to true
      // add 1 to draws
      // show 'Draws: ' + draws in drawScoreText
function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;
    if (first !== '' && first === second && first === third) {
      console.log(first + ' wins!');
    }
  }
}

// What should Reset forget, and what should it remember? (JS 04)
  // resetGame: set moves back to 0
  // do NOT reset xWins, oWins or draws: the scoreboard remembers every game

// Event Listeners
for (const square of squares) {
  square.addEventListener('click', playTurn)
}
