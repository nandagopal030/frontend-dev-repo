'use strict';
// Js Does not have the passing by value only -> passing by reference

//-------------------------------------------------------------------------------------------------------------------
//Default parameters
/*
const bookings = [];
const createBooking = function (
  flightNumber,
  noOfPassangers = 1,
  price = 199 * noOfPassangers,
) {
  //setting the default value as ES5 method code (old school method)
  //   noOfPassangers = noOfPassangers || 1;
  //   price = price || 199;
  const booking = {
    flightNumber,
    noOfPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('L7721');
createBooking('L7721', 2);
createBooking('L7721', 4);
// THis is how the default parameter is being skipped by using undefined
createBooking('L7721', undefined, 4000);
*/

//-------------------------------------------------------------------------------------------------------------------

// How passing Arguments works Value vs Reference
/*
const flight = '9201';
// while working with the object it copies the referece and now both are pointing out to the same ref and hence the change occurs
const nanda = {
  name: 'nandagopal',
  passport: 1234313234623,
};

const flightChekin = function (flightNumber, passenger) {
  flightNumber = 'Lh44'; //flightNumber is completely different variable so it won't change the existing
  passenger.name = 'mr ' + passenger.name;
  if (passenger.passport === 1234313234623) {
    alert('check in');
  } else {
    alert('worng passport');
  }
};
flightChekin(flight, nanda);
console.log(flight);
console.log(nanda);

// primitives
const flightNum = flight;
console.log(flightNum);

// Object is being copied as a reference
const passenger = nanda;
console.log(passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(nanda);
flightChekin(flight, nanda);
*/

//---------------------------------------------------------------------------------------------------------------------------------
/*
// First-Class functions and higher order functions

// Higher order funcitons
// A function that receives another functions as an argument that returns new functions or both

// Functions accepting callback functions

// Low level funcitons
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
//low lwvwl functions
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join();
};

//Higher order functions
const transformer = function (str, fn) {
  const allStrs = str.split(' ');
  console.log(`original str: ${str}`);
  console.log(`Transformed Str: ${fn(str)}`);

  console.log(`Transformed By ${fn.name}`);
};

transformer('javascript is a wonderful programming language', upperFirstWord);
transformer('javascript is a wonderful programming language', oneWord);

// callback function -> JS use callback all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);

['nanda', 'hariharan', 'mithun'].forEach(high5);
*/

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*
// Funciton returns another function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
//greetHey is also an another functions
greetHey('nanda');
greetHey('Monisha');

greet('Hello')('messi');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const a = greetArr('hey')('banda');

*/
//-----------------------------------------------------------------------------------------------------------------------------------------------

// The call and apply method
// this keyword

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(234, 'nanda abrakadabra');
lufthansa.book(234, 'michel');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//copying a funciton to a constant variable;

// THis won't work
const book = lufthansa.book; // copy of whole function
book(112, 'jaden');
