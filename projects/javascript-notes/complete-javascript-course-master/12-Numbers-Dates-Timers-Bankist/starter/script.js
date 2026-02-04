'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year} `;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}€</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGEDIN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
const year = now.getFullYear();
labelDate.textContent = `${day}/${month}/${year}  ${hours}: ${min}: ${sec}`;




btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const hours = `${now.getHours()}`.padStart(2,0);
    const min = `${now.getMinutes()}`.padStart(2,0);
    const sec = now.getSeconds();
    const year = now.getFullYear();
    labelDate.textContent = `${day}/${month}/${year}  ${hours}: ${min}: ${sec}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer Date 
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    //Add transfer Date 
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//-----------------------------------------------------------------------------------------------------------------
//converting and checking numbers
/*
// This is an issue in javascript
console.log(0.1 + 0.2 == 0.3);

//conversion
console.log(Number('22'));
console.log(+'22'); // The + plus Symbol makes the number cohertion

console.log('-------------------parseInt---------------------------------------');
//Parsing
console.log(Number.parseInt('22px', 10));
console.log(Number.parseInt('w2px', 10));
console.log(Number.parseInt('2.3'));
console.log(Number.parseFloat('2.3'));

console.log('-------------------isNaN---------------------------------------');
// isNAN
// Check if the value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0)); // Infinity

console.log('----------------------isFinite()--------------------------------');
//isFinite
// Check if the value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'30x'));
console.log(Number.isFinite(23 / 0));

console.log('----------------------isInteger()---------------------------------');
//isInteger
// check if the value is a Integer
console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(+'90x'));
console.log(Number.isInteger(20 / 0));

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// MAth and Rounding
console.log('------------------------------sqrt()------------------------------------------')
console.log(Math.sqrt(25))
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(22, 3, 52, 4, 6, 76, 73, 90));
console.log(Math.max(2, 3, 4, 5, 5, 23, '44px', 90));

console.log(Math.min(2, 3, 4, 12, 1));
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(randInt(10, 20));
console.log(randInt(0, 3));

// Rounding Integers    all of this work do the type conversion as well
console.log(Math.trunc(23.9));
console.log(Math.trunc(23.4));

console.log(Math.round(25.3));
console.log(Math.round(25.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.8));

console.log(Math.floor(23.3));
console.log(Math.floor(23.3));

console.log('-----0------------comparison of floor() and trunc() -----------------');
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));  // during the negative number it works the opposite

// Rounding decimals
console.log((2.3).toFixed(0));
console.log((2.3).toFixed(3));
console.log((2.332131).toFixed(5));
*/

//--------------------------------------------------------------------------------------------------------------------------------------------
//Remainder Operator
/*
console.log(8 % 2);
console.log(8 / 2);

console.log(7 / 2);
console.log(7 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(22));
console.log(isEven(7));
console.log(isEven(2320));


labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if(i % 2 === 0) row.style.backgroundColor = 'orange';
    if(i % 3 === 0) row.style.backgroundColor = 'blue';
  });
  console.log('clickerd');
});
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// Numeric separaters
// underscores gives certain meaning for thousands
/*
const diameter = 239_430_000_000;
console.log(diameter);

const priceInCents = 243_90;
console.log(priceInCents);

const transferFee1 = 19_1;
const transferFee2 = 122_100;

console.log(Number('2030_01')); //NAN it cannot be converted into a number function
console.log(parseInt('230_00'));
*/
//000000000000---------------------------------------------------------------------------------------------------------------------------------------------------
// working with BigInt
/*
console.log(2 ** 53 - 1);
console.log(2 ** 53 - 0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 - 1);

console.log(2898238983289982398239844313);
console.log(8329898328932189238998239889n);
console.log(BigInt(39090230139002320332910323));

// Operations
console.log(10000n + 100000n);
const huge = 94290902392099329032932901n;
const bit = 491939
console.log(huge * BigInt(bit));

console.log(20n > 19);
console.log(20n === 20);
console.log(20 == 20n);
console.log('20n' == 20);;

console.log(11n / 3n);
console.log(11 / 3);
*/
//------------------------------------------------------------------------------------------------------------------------------------------

// Creating Dates and times
/*
const now = new Date();
console.log(now);
console.log(new Date('ue Feb 03 2026 12:17:39 GMT+0530 '));

console.log(accounts);
console.log(new Date(2049 , 10, 2, 3, 19, 11));
console.log(new Date (2033, 11, 32, 42, 12, 33));

console.log(new Date(0));
console.log(new Date(2037 * 24 * 60 * 60 * 20));
*/
/*
//working with Dates
const future = new Date(2037, 10, 19, 15, 24);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // format of international standard
console.log(future.getTime());
console.log(new Date(2142237240000));

console.log(Date.now());

future.setFullYear(2992);
console.log(future);
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
