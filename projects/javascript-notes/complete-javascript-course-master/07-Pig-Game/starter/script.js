'use strict';

let bothScores = document.querySelectorAll('.score');
let currentScores = document.querySelectorAll('.current-score');

let buttonRoll = document.querySelector('.btn--roll');
let buttonHold = document.querySelector('.btn--hold');
buttonRoll.disabled = false;
buttonHold.disabled = false;
const diceE1 = document.querySelector('.dice');

let activePlayer = 0;
let scores = [0, 0];
let currentscore = 0;
let playing = true;

// Getting scores to zero function
const zeroScoreBoard = function () {
  scores = [0, 0];
  currentscore = 0;
  activePlayer = 0;
  playing = true;
  for (let i = 0; i < bothScores.length; i++) {
    bothScores[i].textContent = 0;
    currentScores[i].textContent = 0;
  }
  buttonRoll.disabled = false;
  buttonHold.disabled = false;

  // Reset player states
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
};
// click NEW GAME to change the p-1 and p-2 to zero
const newGame = document
  .querySelector('.btn--new')
  .addEventListener('click', zeroScoreBoard);

//Rollin a dice where it spins and generate a random number from 1 to 6
const randomNumber = function () {
  if (!playing) return;
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  // console.log(diceNumber);
  diceE1.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    const currentE1 = document.querySelector(`#current--${activePlayer}`);
    currentscore = Number(currentE1.textContent);
    currentscore += diceNumber;
    currentE1.textContent = currentscore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }
};
const rollDice = document
  .querySelector('.btn--roll')
  .addEventListener('click', randomNumber);

const holdBtn = document
  .querySelector('.btn--hold')
  .addEventListener('click', function () {
    if (!playing) return;

    scores[activePlayer] += currentscore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      buttonRoll.disabled = true;
      buttonHold.disabled = true;
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      currentscore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    }
  });
