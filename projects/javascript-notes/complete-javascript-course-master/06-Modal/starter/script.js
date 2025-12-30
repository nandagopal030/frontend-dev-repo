'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

const openAll = function () {
  //   console.log('Button Clikercc');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeAll = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener('click', openAll);

btnCloseModel.addEventListener('click', closeAll);
overlay.addEventListener('click', closeAll);

// Key events are the global event specifiers
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeAll();
  }
});
