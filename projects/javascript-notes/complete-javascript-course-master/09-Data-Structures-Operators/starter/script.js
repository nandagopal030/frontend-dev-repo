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


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours);
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // older javascript object literals writing method

  // order: function (starter, mainDish) {
  //   return [this.starterMenu[starter], this.mainMenu[mainDish]];
  // },

  // Newer javascript method
  order(starter, mainDish) {
    return [this.starterMenu[starter], this.mainMenu[mainDish]];
  },



  openingHours: openingHours, // old school javascript method
  //enhanced object literals
  openingHours, // new javascript es6 methods

  // This funciton represents the function parameter has got an single object as a parameter and this parameter is being destructured and then being used inside the function body
  orderDelivery({
    startIndex = 1,
    endIndex = 1,
    day = 'any weekday',
    time = 'ketaneram',
  }) {
    console.log(
      `Order Deliverd !! ${this.starterMenu[startIndex]} and the ordered date is ${day} and the time is ${time} 
      and endIndex is ${endIndex}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `I had used many ingridients and it is as follows ${ing1}, thn ${ing2}, then ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};
console.log(restaurant);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// this object is sent as the parameter for the fucntion inside the restarunt object
/*
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
*/
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

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
/*
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

*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Spread operator
// When ever we need the induvidual elements instead of using for loop we can use the spread operator
// According to Es16 the srpead operator also works on the objects

/*

let arr = [7,8,9];
console.log(arr);
let dirtyArray = [1,2,3,arr[0], arr[1], arr[2]];
console.log(dirtyArray);

let goodArr = [1,2,...arr];
console.log(goodArr);
console.log(...goodArr);


const newMenu = [...restaurant.starterMenu , 'italian delight']
console.log(newMenu);

// copy an array
const mainMenuCopy = [...restaurant.mainMenu];

//Join two array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Except objects all the others are iterables (arrays, strings, maps, sets)
// spread operators can oly be used while we use it for an array or we send it as a parameter

const str = 'jonas';
console.log(...str);

// const ingridients = [
//   // prompt('Enter the ingrident1'), prompt('Enter the ingrident 2'),prompt('Enter the ingrident 3 '),
// ]

//older method of calling the funciton by passing arguments
// restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);

// By using spread operator ...
// restaurant.orderPasta(...ingridients);

// Objects

const newRestaurent = {foundIn : 1992, ...restaurant , founder : 'nanda'};
console.log(restaurant);
console.log(newRestaurent);

// shallow copy (The original reference is dito copyed and nothing can be changed from the original)

const restaturantCopy = {...restaurant};
restaturantCopy.location = 'chennai';
console.log(restaurant);
console.log(restaturantCopy);

*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
//The spread operator because it applies on the = RIGHT Side
// The rest operator because it applied on the = LEFT Side

// 1) Destruturing
const numbers = [1, 2, 3, 4];
console.log(-1, 0, ...numbers);

//Left side because Left side of the assignment
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

//The rest operator should always appers at the end of the statement to carry all the things ...others
const [pizza, , rizzato, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rizzato, others);

//objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
// this function argument is taken as a rest operator
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2, 3);
add(1, 2, 3, 4, 5);
add(192, 11, 331);

let x = [2, 3, 4];
add(...x);

restaurant.orderPizza('onion', 'chicken', 'pasta', 'pepronies');

*/

//--------------------------------------------------------------------------------------------------------------------------

// looping for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);
console.log([...menu.entries()]);

console.log('-------------Old School Method---------------');
for (const item of menu.entries()) {
  console.log(`${item[0]}, ${item[1]}`)
}
console.log('-----------------New Javascript method---------------');

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// Optional Chanining
// Normal traditional method 
if(restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//optionalChaining method
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun'];

for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`${day} we have ${open} hours`);
}
//Methods


