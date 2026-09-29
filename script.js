console.log('Hello World!!')
const resetButton = document.querySelector('#reset');

let counter = 0;

function count() {
  counter = counter + 1;
  console.log('Current clicks: ' + counter);
}

resetButton.addEventListener('click', count);
