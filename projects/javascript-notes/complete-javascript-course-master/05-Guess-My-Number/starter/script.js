'use strict';

// Javascript DOM Manupulation (DOM Notes)
/*
DOM !== JAVASCriPT (DOM is actually part of Web API's) (Web API's are like libraries where we can implement on the JS Code)
what is DOM ?
DOM is a Document Object Model which is a structured representation of html documents. Allows Javascript to access HTML Elements and Styles to manupulate them.
is basically a connection point between the Html and Js code

A DOM is a complete represntation of the HTML document

*/

// querySelector is a selector where this works exactly like a css where if we need to access the class we can do it with ( . ) Dot operator or if we need to use access the ID we can use the #
// document.querySelector('.message') -> This selects the whole element
/* 
console.log(document.querySelector('.message'));

//document.querySelector('.message').textContent -> This selects the whole element + the textContent
console.log(document.querySelector('.message').textContent);

// ID
console.log(document.querySelector('#label'));

// Working code
document.querySelector('.message').textContent = 'Correct Number!!!';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 100000;

// When i use = 199 this actually manupulates the value and ends up showing the result as an output
document.querySelector('.guess').value = 199;
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no guess
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  }
  //when is guess is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '😁 Hurray Correct Number';
    displayMessage('😁 Hurray Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high 📉' : 'Too Low 📈';
      displayMessage(guess > secretNumber ? 'Too high 📉' : 'Too Low 📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🧨You lost the game';
      displayMessage('🧨You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is greater than the secretNumber
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🧨You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When guess is lower than the secretNumber
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🧨You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#202020ff';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.number').textContent = secretNumber;
});
