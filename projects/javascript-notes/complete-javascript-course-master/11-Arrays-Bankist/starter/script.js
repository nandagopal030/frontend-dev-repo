'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements) {

  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 1 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
          <div class="movements__value">${mov}</div>
    </div>`
    containerMovements.insertAdjacentHTML('afterbegin', html);
  }
  )
}
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML)





















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Lecture notes

// Array with builtIn methods ()

/*

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

//slice() -> Works like exactly string slicing
console.log('--------Slice Method ()- --------');
console.log(arr);
console.log(arr.slice(1));
console.log(arr.slice(4, 5))
console.log(arr.slice(-1))
console.log(arr.slice(-2))
console.log(arr.slice(1, -2));

//Spice() -> Mutates the original Array
console.log('-----------Spice Method() -----------');
console.log([...arr]);
console.log(arr.splice(-1));
console.log(arr);
// console.log(arr.splice(2));
// console.log(arr);
console.log(arr.splice(1, 3)); // The 3 defines the delete syntax and this line of code defines except 1 and from 1 start delete the next 3 consiqutive array;
console.log(arr);


//REVERSE() -> used to reverse an array 
console.log('----------------------Reverse Method()- -----------');
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['k', 'g', 't', 'h', 't'];
arr2.reverse();
console.log(arr2);


//CONCAT() -> used to combain 2 methods
console.log('-----------------------Concat Method()----------------');
console.log(arr.concat(arr2));
//concat using the spread operator
console.log([...arr, ...arr2]);


//JOIN () -> combaining any symbol at the middle of the array
console.log(arr2.join('-'))
console.log(typeof arr2 ); // Now this becomes an object 😒


*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
//The New at Method
const arr = [29 , 36 , 53];
//traditional method
console.log(arr[2]); 
//new es6 modern method using at method
console.log(arr.at(0));

//getting last element in an array
console.log(arr.slice(-1)[0]);
console.log(arr[arr.length -1]);
console.log(arr.at(-1));

console.log('nanda'.at(0));
console.log('nanda'.at(-1));

*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Looping Arrays: ForEach Method()
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


console.log('----------------ForOF () Loop -------------------------');
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You had deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You had withdrawn ${Math.abs(movement)}`);
  }
}

//forEach method needs a callback method  and the forEach method itself calls the callbackFunciton !!!Important Note

console.log('-----------ForEach () Loop -------------------');


// The syntax for the forEach Loop is always matters 
// where the callback function need to have the (element, index, array ) in this order and the 
// Name of the order does'nt matter.

// The continue and the break statement cannot break the forEach() loop
// If we need to use break or continue in the array we can use for of () loop


movements.forEach(function (movement, index, array) {
 if (movement > 0) {
    console.log(`Movement ${index + 1} You had deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} You had withdrawn ${Math.abs(movement)}`);
  }
});

*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ForEach with maps and sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Maps
currencies.forEach(function (values, key, map) {
  console.log(`${key} : ${values}`);
})

// Sets
const states = new Set(['Tamilnadu', 'Andrapradesh', 'up', 'Karnataka', 'Tamilnadu', 'Kerla', 'up', 'Mp']);
console.log(states);
states.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
})

*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Working with Arrays 

// Map  method()
console.log('----------Map Method()--------');

// Modern way of looping to an array and calculating the value

const euroToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});
// No mutation was being done here
console.log(movements);
console.log(movementsUsd);

// Older way of looping through an array 
const conversionArray = [];
movements.forEach(function(mov){
  conversionArray.push(mov * 1.1);
});
console.log(conversionArray);



