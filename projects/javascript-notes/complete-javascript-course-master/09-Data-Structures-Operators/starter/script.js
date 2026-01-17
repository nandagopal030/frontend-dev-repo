'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
/*
<<<<<<< HEAD
// Short circuting (&&  ||)
// use Any data type , return ANY data type,
// short-circuting
// first truthy value will get printed here

console.log('-----OR------');

console.log(3 || 'jonas');
console.log('' || 'nanda');
console.log(undefined || null);
console.log(true || 0);

console.log(undefined || 0 || '' || 'Hello' || 22 || null);

// with || or operator
restaurant.numGuests = 22;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-----AND------');
// AND operator works different from OR operator
//   returns first falsy value
console.log(0 && 'jonas');
console.log(7 && 'nanda');

console.log('hello' && 22 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinash');
}
restaurant.orderPizza && restaurant.orderPizza('misroom', 'ssmsk');
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
//114. The Nullish Coalescing Operator (??)
restaurant.numguest = 0;
const guess = restaurant.numguest || 10;
console.log(guess);

// Nullish : null and undefined (NOT 0 or '')

const guest2 = restaurant.numguest ?? 10;
console.log(guest2);
*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Logical Assignment operators
/*
const rest1 = {
  name: 'capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La pizzara',
  owner: 'govindarajan',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator NULL or Undefined
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// In &&  operater the if the first value is falsy then returns the falsy value;
//            truthy           falsy
// rest2.owner = rest2.owner && '<ANonymous>>';
rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';

console.log(rest1);
console.log(rest2);
// =======
// looping for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);
console.log([...menu.entries()]);

console.log('-------------Old School Method---------------');
for (const item of menu.entries()) {
  console.log(`${item[0]}, ${item[1]}`);
}
console.log('-----------------New Javascript method---------------');

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// Optional Chanining
// Normal traditional method
/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//optionalChaining method
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day} we have ${open} hours`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

const user =  [
  { name: 'nanda',
    age: 22}
];

console.log(user[2]?.name ?? 'user does not exist');

*/
//--------------------------------------------------------------------------------------------------------------------------------
// for of loop for object keys, values, Entries
/*
// property Names
const openDays = Object.keys(openingHours);
console.log(openDays);

for(const day of openDays){
  console.log(day);
}
let openStr  = `We are open for ${openDays.length} `;

for(let day of openDays){
  openStr += `${day}, `;
}
console.log(openStr);

// property values
const values =  Object.values(openingHours);
console.log(values);


// entries are the index number -> returns key + value
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open,close}] of entries){
  console.log(` our shop is on ${key} and opens at ${open} then close at ${close}`);
}
*/

//------------------------------------------------------------------------------------------------------------------
// Sets
/*

// set is a collection of unique value
// set can also hold mixed data types

const orderSet = new Set(['pasta', 'pizza', 'pasta', 'pizza', 'bread']);
console.log(orderSet.size);
console.log(orderSet.has('butter'));

console.log(new Set('Jonas'));

console.log(orderSet.add('rissato'));
console.log(orderSet.delete('pasta'));
console.log(orderSet.add('pepronii'));
console.log(orderSet.add('rissato'));
// console.log(orderSet.clear());
console.log(orderSet);

// for of loops sets
for (const a of orderSet) console.log(a);
// main usecase of sets is to remove the duplicate values of an arrays

const staff = ['chef', 'waiter', 'chef', 'manager', 'waiter'];

const staffOri = new Set(staff);

// spread operator converts the set to an array now
const staffOriginal = [...new Set(staff)];
console.log(staffOriginal);
console.log(new Set(['chef', 'waiter', 'chef', 'manager', 'waiter']).size);
*/
//-----------------------------------------------------------------------------------------------------------------------------------

// New operations to make set Useful
/*
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

// logging the common item on the two Foods

// intersection method
const commonItems = italianFoods.intersection(mexicanFoods);
console.log('intersection', commonItems);

console.log('Common foods on set are ', commonItems);
console.log([...commonItems]);

// union method

const commonItemsFusion = italianFoods.union(mexicanFoods); // union using union method of two sets
console.log('union', commonItemsFusion);

console.log([...italianFoods, ...mexicanFoods]); // union of two arrays

// difference
const differenceItems = italianFoods.difference(mexicanFoods);
console.log('Differnece : ', differenceItems);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('difference Mexican foods: ', uniqueMexicanFoods);

// SymmetricDifference

const mexicanSymmetricItallin = mexicanFoods.symmetricDifference(italianFoods);
console.log('mexicanSymmetricItallian : ', mexicanSymmetricItallin);

// isDisjointFrom  checks if both has a unique value and does not contains duplicate
console.log(italianFoods.isDisjointFrom(mexicanFoods));

// Other methods are
// isSubsetOf() and isSupersetOf();
*/
//------------------------------------------------------------------------------------------------------------------------------------------
/*
// Maps Fundamentals
// Map Methods -> set, get
// map is like an object it also contains the key value pairs but the cache is the key
// can be of any types strings, numbers, array, set or another map

const rest = new Map();
//set
rest.set('name', 'mary, jennifer');
rest.set(true, 'Open to work').set(false, 'close to work');
rest.set(1, 'portugal');
rest.set(2, 'france').set('open', 11).set('close', 23);

rest
  .set('Have kids', 2)
  .set('Have Husband', false)
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
console.log(rest);

const time = 3;
console.log(rest.get(1));

//get
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

//has
console.log(rest.has('categories'));
//delete
console.log(rest.delete(1));
console.log(rest);

//size
console.log(rest.size);

//clear()
// console.log(rest.clear());
console.log(rest);

//if we pass the array the reference point needed to be cleared (memory management)
const arr = [1, 2];
rest.set(arr, 'pass');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

// Maps seen so far

const question = new Map([
  ['question', 'which is the best programming language in the world ?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try Again!!!'],
]);

console.log(question);

console.log(Object.entries(openingHours));

const hours = new Map(Object.entries(openingHours));
console.log(hours);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} is ${value}`);
  }
}

// const userAns = Number(prompt("Enter the corrrect option"));
// console.log(question.get(question.get('correct') === userAns));

// convert Maps to arrays
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//Working with strings part 1
/*
const airline = 'Kingfisher M89 mayan';
console.log(airline[0]);
console.log(airline[1]);
const plane = 'Boyang 69 ang';
console.log(plane[1]);

console.log('Boyang 89'.length);
console.log(airline.length);

console.log(plane.indexOf('6'));
console.log(plane.lastIndexOf('g'));

console.log(airline.slice(2));
console.log(airline.slice(10, 14).length);

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(1, -1));

// string slice method using functions

const checkMiddleSeats = seat => {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'M') console.log('you got the middel seat');
  else console.log('lucky fellow ');
};
checkMiddleSeats('M1B');
checkMiddleSeats('B1');

*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Working with strings part - 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passanger = 'jONAs';
const passangerLower = passanger.toLowerCase();
const passengerFinal =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passengerFinal);

//Comparing emails with funciton and using the trim() methods
const emailGlobal = 'hello@jonas.io';
function checkEmail(email) {
  const normalization = email.toLowerCase().trim();
  if (normalization === emailGlobal) {
    console.log(true);
  }
  return normalization;
}
console.log(checkEmail('  HellO@JoNas.Io \n'));

// replacing  -> replace() and replaceAll() methods
const priceGB = '288,97$';
const priceInd = priceGB.replace(',', '.').replace('$', '%');
console.log(priceInd);

const announcement =
  'All passangers come to the boarding door 23 !! boarding door 23..';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

//regular expressions
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.startsWith('Air'));
console.log(plane.includes('Boening'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Air') && plane.endsWith('neo')) {
  console.log('part of a new Air bus family');
}

const checkbag = function (bag) {
  const bagLower = bag.toLowerCase();
  if (bagLower.includes('knife') || bagLower.includes('gun')) {
    console.log('You are not onboarding');
  } else {
    console.log('wellcome aboard');
  }
};
checkbag('A person with a Gun and a Knife and bring some snacks');
checkbag('A person with a bags and suitecase');
checkbag('A child with a breifcase adn guns');
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Working with strings part-3   split(), join()

console.log('a+very+nice+string'.split('+'));
console.log('nandagopal k'.split(' '));

const [firstName, lastName] = 'nandagopal k'.split(' ');
console.log(firstName, lastName);

const newName = ['mr', firstName, lastName.toUpperCase()].join(' -- ');
console.log(newName);

// split, slice, join in a fucntion

const capitalize = function (name) {
  const nameSplit = name.split(' ');
  const namesUpper = [];
  for (const n of nameSplit) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));    // mwthod 1
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // method 2
  }
  // console.log(namesUpper);
  console.log(namesUpper.join(' '));
};
capitalize('jagan mogan priya ramya riya');
capitalize('nanda rachel michel');

//padding   padStart(), padEnd()   -> used in a credit card number
const message = 'Go to sleep whenever you are tired';
console.log(message.padStart(40, '+').padEnd(46, '*'));
console.log(message.length);
console.log('nanda'.padStart(40, '+').padEnd(70, '*'));

// credit card last 4 digit number

const createCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(createCreditCard('8198812892189'));
console.log(createCreditCard(93223903290234912));

//Repeat
const weather = 'Bad weather all the depature are delayed';
console.log(weather.repeat(9));

const planesInLine = function (n) {
  console.log(
    `There are ${n} number of planes are being waiting ${'🛬🌍'.repeat(n)}`
  );
};

planesInLine(8);
planesInLine(3);
