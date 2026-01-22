'use strict';













































































































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


