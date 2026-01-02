'use strict';
//*************************************************************************** */
/*
// Always declare a variable at the top of the codebase
// Avoid using var insted use const always and if the value needed to be changed use let
// function has many types like normal function declaration, Anonymous funciton , function expression , Arrow fucntion
// objects always has a key value pairs and it has the properties and the methods inside it
// properties are the normal key value declaration 
// methods are the funcitons inside the objects (where in this case it is called as the methods when it is inside the object)


//scope chain
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    const output = `Hello my name is ${firstName} and my age is ${age} and my birthyear is ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'mapen';
      var illiniaml = true;
      const str = `oh my go u r a milliniaml , ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(1, 2));
    }
    console.log(illiniaml);
  }
  //   console.log(str);
  printAge();
  return age;
}

const firstName = 'nandas';
console.log(calcAge(1991));

//************************************************************** 

// Hoisting and TDZ practice

//Hoisting woth variables

console.log(me); // It outputs undefined
//from here to

//console.log(age); // error cannot access the age before initialization
//console.log(year); // error cannot access the year before initialization

var me = 'nanda';
//here the Temporaral dead zone will being acted upon
let age = 12;
const year = 1991;

// Hoisting with functions

console.log(addDecl(1, 2));
// console.log(addArrow(1, 2));
// console.log(addExpr(1, 2));

function addDecl(a, b) {
  return a + b;
}
var addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

//Example for hoisting
if (!numOfProds) deleteShoppingCart();
console.log(numOfProds); // THis results undefined and deleteShoppinCard had been triggered and all the products will be deleted

var numOfProds = 10;

function deleteShoppingCart() {
  console.log('All the products in the cart has been deleted');
}

// Window is an js object by using this we can find which is being decalered inside it
var x = 10;
let y = 20;
const z = 90;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// this keyword in practice

console.log(this); // ouput return the window object

const calaAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // now the this keyword is undefined
};
calaAge(1922);

// Arrow funciton

const calaAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // now the this keyword returns window because in the arrow function the funtion takes up the lexical part -> which means it takes the parent (this) as their this keyword
  // and while printing the parent this it returns window and now the arrow fucntion also returns window while it return window means we can easily access the values inside the function body
};
calaAgeArrow(122);

const nanda = {
  year: 1991,
  calcAge: function () {
    console.log(this); //nanda object
    console.log(2024 - this.year);
  },
};
nanda.calcAge(); //calling the method
console.log(this.nanda);

// Method borrrowing

const matilda = {
  year: 2008,
};
// here the method borrowing happens where the calcAge is being borrowed from nanda to matilda
// here we are copying the function not calling the function ()
matilda.calaAge = nanda.calcAge;
matilda.calaAge(); // here it calculates the matilda and the this keyword will pointout to matilda so the age will be calculated accordingly

const f = nanda.calcAge;
f();
*/

// pitfalls of this keywod for the regular funciton and arrow funcitons

// THis is not a  code block this is actually an object literal
// never ever use an arrow function as a method inside the object
var firstName = 'mama';
const nanda = {
  firstName: 'Banda',
  year: 1991,
  calcAge: function () {
    console.log(2024 - this.year);

    // solution 1
    //   const self = this; // It can be used as self / that
    //   const milliniaml = function () {
    //     console.log(self); // It searches for the self and the self stores the this and now it can be accesible for the parent this
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   milliniaml();
    // },

    // solution 2
    // no error becx we use arrow function
    const isminimal = () => {
      console.log('adkc  ca');
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isminimal();
  },
  greet: () => console.log(` heY ${this.firstName}`), // for arrow funcitons this is undefiend and it searches for its globel scope this there is no globel soce so returned undefiend here in this case
};

nanda.greet(); // returns the heY mama becz now the var firstName will fall under the global and it arrow fucntions will always looks for the global this which is parent this and because of the var it returns the heY mama
nanda.calcAge();



