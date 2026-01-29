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

//movements
const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = '';
  
  movs.forEach(function (mov, i) {
    const type = mov > 1 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
          <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//balance
const calPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} eur`;
};


const createUserNames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

//Chaining methods display the summary
const calcDisplaySummary = function (acc) {
  //IN
  const incomes = acc.movements
    .filter(mov => mov > 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;
  //Out
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  //Interest 1.2% for the deposited amount
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//Updating UI
function updateUI(acc) {
  //Display moments 
  displayMovements(acc.movements);

  //Display Balance 
  calPrintBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);

}


//Event handler main event login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // preventing form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome Back  ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }

  //Clear userName
  inputLoginUsername.value = inputLoginPin.value = '';
  inputClosePin.blur();

});

// Transfer amount section 
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAct = accounts.find((acc) => acc.userName === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAct &&
    receiverAct?.userName !== currentAccount.userName) {
    currentAccount.movements.push(-amount);
    receiverAct.movements.push(amount);
    updateUI(currentAccount);
  }

})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = inputLoanAmount.value;
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});


btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc =>
      acc.userName === currentAccount.userName);
    console.log(index);
    //Delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
})
let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
  console.log(sorted)
})



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
// Working with Arrays
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Map  method() -> main usuage is like sum of adding the array elements
console.log('----------Map Method()--------');

// Modern way of looping to an array and calculating the value

const euroToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementsUsd = movements.map(mov => mov * euroToUsd);

// No mutation was being done here
console.log(movements);
console.log(movementsUsd);

// Older way of looping through an array using forEach and for of
const conversionArray = [];
movements.forEach(function (mov) {
  conversionArray.push(mov * 1.1);
});
console.log(conversionArray);

const movementsForOf = [];
for (const mov of movements) {
  movementsForOf.push(mov * 1.5);
}
console.log('movementsForOf', movementsForOf);

const movementDescription = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: Yout ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`,
);
console.log(movementDescription);
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Wroking with filters -> main usage of filters is also to return some spicified value in an array using any condition
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0; //this will directly return true or false;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawls = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawls);

const withdrawls2 = movements.filter(mov => mov < 0);
console.log(withdrawls2);

*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// The Reduce Method -> is mainly used for boiling down the array into one single value that could be anything
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> snowball
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  console.log(`accumulator + current = ', ${acc} + ${cur}`);
  return acc + cur;
}, 0); // 0 is the iteration starting point
console.log(balance);

// Arrow function
const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
console.log('balance3', balance3);

//old school
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
  console.log(`acc - ${acc},  mov - ${mov}`);
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

//------------------------------------------------------------------------------------------------------------------------------------------
//Method Chaining
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
console.log(movements);

//chaining methods can make the performance issues so make the chain lesser
// It is a bad practice in js
const totalDeposites = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(i, mov);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposites);
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------
/*
// Find method

// Find method is bit similar to Filter method
// filter returns all the elements (Array) match the condiotion where find returns the first element

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawel = movements.find(ele => ele <= 0);
console.log(firstWithdrawel);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// FindLast and FindlastIndex method();
//The findLast will start looping from last index of the array and returns a value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const last = movements.findLast(arr => arr < 0);
console.log(last);

const largestLargeMomentIndex = movements.findLastIndex(mov => Math.abs(mov) > 2000);
console.log(largestLargeMomentIndex);
console.log(`your latest movement is ${movements.length - largestLargeMomentIndex} movements ago`);

*/
//----------------------------------------------------------------------------------------------------------------------------------
/*
// some and every methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// some
console.log(movements);
// Finds the Equality
console.log(movements.includes(-130));

// Finds the Condition
console.log(movements.some(mov => mov > 20000))


// Every
// The every returns true if all the elements satisfy the condition

console.log(account4);
console.log(account4.movements.every(mov => mov >0)); // checkes every movements and checks it is all positive and it returns true;

// Seperate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.some(deposit));
console.log(movements.some(deposit));
console.log(movements.some(deposit));

*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// flat and flatmap

// the flat method combines the nested flat array into a single one
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr.flat());

const arrDeep = [[1,2,[3,4], [5,6,7]],[8,9]];
console.log(arrDeep.flat(2)); // (2) denotes go indepth of 2 levels

const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat()
console.log(accountMovements);
console.log(allMovements)

const overallBalance = allMovements.reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance);

//chaining ;;
const overallBalance2 =  accounts.map(acc => acc.movements)
                                .flat()
                                .reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance2);

// flatMap()
// flatMap() cannot go further one level deep like flat so use it according to the situation
const overallBalance3 =  accounts.flatMap(acc => acc.movements)
                                .reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance3);

*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// Sorting Arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Strings;
const names = ['madan', 'adam', 'kandhan', 'lurugan'];
console.log(names.sort());

// Numbers;
console.log(movements);

// This will be converted into the strings and then sorted as a string method
console.log(movements);

//Ascending
// movements.sort((a,b)=>{
//   if(a > b)
//     return 1;
//   if(a < b)
//     return -1;
// });
// console.log(movements);

// movements.sort((a,b) => a - b);
// console.log(movements);

// //Decending
// movements.sort((a,b)=>{
//   if(a < b)
//     return 1;
//   if(a > b)
//     return -1;
// });
// console.log(movements);


movements.sort((a,b) => b - a);
console.log(movements);

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
