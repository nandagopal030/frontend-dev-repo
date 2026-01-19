'use strict';













































































































//----------------------------------------------------------------------------------------------------------------------------------------------------------------

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