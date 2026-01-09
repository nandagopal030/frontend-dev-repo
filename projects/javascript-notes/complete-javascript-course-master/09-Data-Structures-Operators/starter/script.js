'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starter, mainDish) {
    return [this.starterMenu[starter], this.mainMenu[mainDish]];
  },

  // This funciton represents the function parameter has got an single object as a parameter and this parameter is being destructured and then being used inside the function body
  orderDelivery : function({startIndex = 1, endIndex =1, day = 'any weekday', time = 'ketaneram'}){
    console.log(
      `Order Deliverd !! ${this.starterMenu[startIndex]} and the ordered date is ${day} and the time is ${time} 
      and endIndex is ${endIndex}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// this object is sent as the parameter for the fucntion inside the restarunt object
restaurant.orderDelivery({
  time: '22:30',
  day: 'today',
  startIndex : 1,
  endIndex: 2
});

//specifying an empty values in the parameter and calling the funciton again
restaurant.orderDelivery({
  day: 'wednesday',
  startIndex: 2
});
//-------------------------------------------------------------------------------------------------------------------------------------------------
/*
// Array Destructuring
const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//swap manually
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//switching variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [s, m] = restaurant.order(1, 1);
console.log(s, m);

// Destructuring in an nested array
const nested = [1, 2, [3, 4]];
const [a, , [b, c]] = nested;
console.log(a, b, c);

const [p = 1, q = 1, r = 1] = [1, 2];
console.log(p, q, r);
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Objects Destructuring
// Objects destructuring is a slight different from array destructuring where the names define in the variable need to be present in the object properties and it need to be defined with the curly braces { }
const {name, mainMenu, openingHours} = restaurant;
console.log(name, mainMenu, openingHours);

const {name: firstName, mainMenu : menus, openingHours : hours} = restaurant;
console.log(hours, firstName, menus);

// Adding default values to the objects
// where the menu does not exist
const {menu = [], categories = []} = restaurant;
console.log(menu, categories);

// Mutating variable

let a = 21;
let b = 22;

const obj = {
  a : 31,
  b: 32,
  c : 33
};

({a, b} = obj);
console.log(a, b);

// Nested Objects destructring
// openingHours is already been destructured above

const {
  fri: {open:o,  close:c},
      } = openingHours;
console.log(o, c);
