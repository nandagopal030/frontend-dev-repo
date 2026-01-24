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


//----------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
const lufthansa = {
    airline : 'luftansa',
    iatacode : 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline}
            flight ${this.iatacode}${flightNum}`
        );
    this.bookings.push({flight: `${this.iatacode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'nanda gopal');
lufthansa.book(233, 'Randy appan');
console.log(lufthansa);


const errowings = { 
    name : 'Eurrowings',
    airline : 'luftansa',
    iatacode : 'EW',
    bookings : [],
};

const book = lufthansa.book;



// Call method()

// Now it does not work
// book(32, 'sarah balck');

// The call() method is maily used for send the this keywords which are being missing
// First argument is the this keyword argument and the second argument is the actual book arguments
book.call(errowings, 32, 'sarah black');
book.call(lufthansa, 416, 'rey mesterio');

const swiss = { 
    airline : 'MKBT Airlines',
    iatacode : 'KKL',
    bookings :[],
};
book.call(swiss, 990, 'Barodha singh');

//apply method()
// In apply method the first argument need to be the this keyword and the second argument need to be a
// array of data

const flightData = [416, 'nanda vopal'];
book.apply(errowings, flightData);

book.call(swiss, ...flightData);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// bind method();
//book.call(errowings, 32, 'sarah black');

// TO always bind the this keyword to a funtion we are using bind();
// No longer needed to specify the this keyword

const bookEW = book.bind(errowings);
const bookLh = book.bind(lufthansa);
const bookSw = book.bind(swiss);
bookEW(112, 'Stefenmarkings');

// TO set a flight for a specific flight number 

const bookEw23 = book.bind(errowings, 23);
bookEw23('ana');
bookEw23('mary');

//with event listners

lufthansa.plane = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.plane++;
    console.log(this.plane);
}

//object calling the function
//lufthansa.buyPlane();
//lufthansa.buyPlane();


// Here eventlistner function calling another function so the lufthansa.buyplane(this keyword) becomes a button itself
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

//partial application
//common tax finding function to calculate the tax;;
const addTax = (rate, value ) => value + value * rate;
console.log(addTax(0.1,200));

// binding this function with bind();
// null defines that this keyword
const addVT  = addTax.bind(null, 0.23);
console.log(addVT(300));
console.log(addVT(100));

//One function returning another funciton

const addTaxRate = function(value){
    return function(rate){
        return value *  rate;
    }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(200));

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------=
/*

//Immedietly invoke function expressions
// All the data inside a function like this is private and it is being encapsulated -> making the data to be protected / being private
// In modern javascript immedietly invoked funciton expression is not being used nowdays

// A normal function expression

const oneCall = function(){
    console.log('This funciton will work only once');
}
oneCall();

// A function expression which can invoke only once
(function(){
    console.log('This is an expression function which can invoke only once');
})();

// An Arrow function which can invoke only once
(() => console.log("This is an expression with an arrow function this cannot run again"))();

{
    const isPrivate = 23;
    var notPrivate = 34;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CLOSURES
// A closure makes the functions remember all the variables that existed at the functions birthplace


// Because of closure a Variable environment cannot be moved to the garbage colletor where it moved to the Heap
/*
const closureFunction = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} - Passengers`);
    }
}

const boiler = closureFunction();
boiler(); // 1 - passengers
boiler(); // 2 - passengers
boiler(); // 3 - passengers

console.dir(boiler); // inside the scopes there will be a closure function where it shows the passenger count variable Environment was being carried with the function 
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// closure example functions 
/*

//Example 1
let f;

const g = function () {
    const a = 10;
    f = function () {
        console.log(a * 2);
    }
}
const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);
//Reassigning f function
h();
f()
console.dir(f);

//Example 2
// Closure even has priority over the scope chain

const boardingPassengers = function (n, wait) {
    const pergroup = n / 3;
    //callback function
    setTimeout(function () {
        console.log(`We are now onboarding all the ${n} passengers`);
        console.log(`There are three group each with ${pergroup} in numbers`)
    }, wait * 1000);
    console.log(`Will be OnBoarderd @ ${wait} seconds`);
}
// Global variable as the priority
// const pergroup = 1000;
boardingPassengers(180, 3);


*/