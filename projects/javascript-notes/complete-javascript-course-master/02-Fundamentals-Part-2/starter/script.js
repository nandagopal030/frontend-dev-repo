/*
'use strict';      // This is called the javascript strict mode when we use this on the top page of our javascript application this would catch the unfound errors which are being written in the code
const hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("You can drive your car : ");
console.log("Hello");

const interface = 'Audio';    //errror :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:8:7)
const private = "i am a private"; //error :: The ( private ) is a reserved keyword and ( if ) ( while ) ( for ) many things which was not mentioned here is a reserved keyword so if we use the reserved keyword with mentioning the strict mode it throws an error

===================================================================================================================================================

//Function     ->  (Reusable chunk of code)   -> Functions are fundamental building block of javascript

// A Function is a piece of code block which can be called again and again , it can also be reused by giving different arguments , it can also receive a data and return a data back
// eg

function logger() {
    console.log("my name is a logganadhan");
}
// calling / running / invoking function
logger();
logger();
logger();

//function with parameter and argument and with return type

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and juice with ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(1, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(4, 8);
console.log(appleOrangeJuice);

const num = Number(3);
console.log(num);



// Function Declarations and Expressions

//Function Declarations

function age(birthYear) {
    return 2025 - birthYear;
}
const birth1 = age(1991);
console.log(birth1);


// Function Expression
//  The function expression is also known as a anonymous function (Function Expression) which does not have a function name
//  A function is just a value we can just store it on a variable

const calcAge2 = function (birthYear) {     // function expression
    return 2025 - birthYear;                // function expression
}
const birth2 = calcAge2(1991);
console.log(birth1, birth2);

//  The main difference between the function declaration and the function expression is
//  In the Function declaration we can call the function before declaring it but
//  In the Function Expression we cannot call the function before calling it (Error will be thrown)



//Arrow Functions

// Function Expression
const calcAge3 = function (birthYear) {
    return birthYear - 2024;
}

//The Arrow Function expression finishes in single line and  the return will happen here implicitely ( where we dont have to define any return type ) ( we can also add more parameter and more line of codes )

const age3 = birthYear => 2024 - birthYear;

console.log(age3);


// Arrow function with More than 1 parameter we need to use the bracket
// Arrow function do not have this keyword
const retiermentYear = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retier = 65 - age;
    return `${firstName} retiers in ${retier} Years`;
}
console.log(retiermentYear(1991, 'nanda'));
console.log(retiermentYear(1981, 'Bob'));


// Functions calling other Functions
const cutPieces = function (fruit) {
    return fruit * 2;
}

function fruitProcessor(apple, banana) {
    const slicedApple = cutPieces(apple);
    const slicedBanana = cutPieces(banana);
    const juice = `This man got ${apple} apples which was being sliced into ${slicedApple} pieces, and got ${banana} bananas with ${slicedBanana} pieces`;
    return juice;
}
console.log(fruitProcessor(3, 4));

//Reviewing the Functions (lessons)
//A Function calling another Function

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const calcRetierment = function (birthYear) {
    console.log(`My birthYear is ${birthYear}`);
    const age = calcAge(birthYear);
    const retier = 64 - age;
    console.log(`My Retierment is at ${retier}`);
    if (retier < 0) {
        return -1;                             // when we use the return statement it will immedietly break the function and returns the value
    } else {
        return retier;
    }
}
console.log(calcRetierment(1911));



//Find the Average score of 2 teams and return the team which has the double the value of another team if no team attains the requirement return no team wins

const calcAverage = (sc1, sc2, sc3) => {
    const avg = (sc1 + sc2 + sc3) / 3;
    return avg;
}
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);


const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No team wins...`;
    }
}
console.log(checkWinner(scoreDolphins, scoreKoalas));
// console.log(checkWinner(300,10));

const a1 = 10;
const a2 = 10;
const b1 = 22;
const b2 = 22;

===================================================================================================================================================



//============================================================================================================================================
// Arrays
// An Arrays is a big container we can throw variables and later we can reference them, Arrays are mutable

// ways to create an array
const friend1 = 'michal';
const friend2 = 'romeo';
const friend3 = 'kathara';

const friends = ['michal', 'romeo', 'kathara'];
console.log(friends);

const years = new Array(1991, 2002, 2003);   // new is a keyword and Array is Function
console.log(years);

console.log(friends.length);
console.log(friends[2]);

console.log(friends[friends.length - 1]);   //inside the friends[]   This ( [] ) bracket we can also use expressions like this
friends[2] = 'jay';
console.log(friends);

//A full array cannot be mutated like this in the format
// Uncaught TypeError: Assignment to constant variable.
//    at script.js:183:9
// friends = ['Randy', 'kaber'];

//Array with multiple data type values
const firstName = 'frankestain';
const personalInfo = [firstName, 2025 - 1991, 'teacher', friends];
console.log(personalInfo);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const birthYears = [1911, 1902, 1903, 1989, 1969];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[2]);

console.log(age1, age2, age3);

// We can also add functions inside the array because in javascript expressions can be added inside the array
const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[2])];
console.log(ages);

// Array Operation (Methods)

const friends = ['mary', 'spiderman', 'deadpool'];
console.log(friends);
const newFriends = friends.push('john');    //Push is a funciton which pushes the data into the array at the end of it.

console.log(friends); // 'john' was being added at the beginning
console.log(newFriends);  //when i console.log(newFriends) it will immedieatly return the length of the particular array, It is one of the method to find the length

// Add
friends.unshift('batman'); // adding the element at the front
console.log(friends);

// pop -> Remove the elements from the last
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//shift  -> Remove the element from the first
friends.shift();
console.log(friends);

//indexOf  ->  This is a function which finds the position of the element

console.log(friends.indexOf('spiderman'));
console.log(friends.indexOf('antman'))    // This results -1 if no elements inside the array

//includes -> This determines if it is there inside the array of not

console.log(friends.includes('spiderman'));
console.log(friends.includes('nanoman'));

if (friends.includes('spiderman')) {
    console.log("Ypu have a friend names spidyyy");
}
===================================================================================================================================================


===================================================================================================================================================
// Objects in Javascript  -> fundamental concepts in JS
// nanda is an object and it has the key value pair which is key : value  and the key is also known as the properties of the object
// This syntax means object literal syntax
// In objects the order of the element is not more important for reteriving purpose but in Array the order of the element is very important.
//objects more unstructured data

const nanda = {
    firstName: 'Randyortan',
    lastName: 'gopal',
    age: 2025 - 2003,
    job: 'teacher',
    friends: ['hari', 'bisop', 'soldier']
}

console.log(nanda);
// reterive data in an object
// Dot ( . ) notation vs Bracket notation ( [] ) when to use and where to use

//when directly accesing the Objects properties it is important to use . notation
console.log(nanda.firstName);
console.log(nanda.lastName);

// when we concatinate and use the object properites , it is very important to use bracket notation
const conc = 'Name';
console.log(nanda['first' + conc]);
console.log(nanda['last' + conc]);

const findField = ("What do you want to know about nanda -> firstName, lastName, age, job, friends");

//console.log(nanda.findField);     // Throws an undefined output because js cannot find outthe findField inside the objects properties so it searches for findField and there is no raw findField so it returns undefined

//Instead use the bracket operator

if (nanda[findField]) {
    console.log(nanda[findField]);
} else {
    console.log(`wrong value ${nanda[findField]} , Instead  you want to know about nanda -> firstName, lastName, age, job, friends`);
}

nanda.twitter = 'bambade';
nanda.insta = 'loosucutie';

console.log(nanda);
const nandaFriends = prompt("Enter nanda's 3 friends");
if (nanda[nandaFriends]) {
    console.log(`${nanda.firstName}, has ${nanda.friends.length} frineds and his best friend is ${nanda.friends[0]}`);
}


//objects methods

//Any function that is attached to an object is called a method
// Javascript objects can contain mixed datatypes in any order and even it can also contain the funcitons

const nanda = {
    firstName: 'Randyortan',
    lastName: 'gopal',   //string
    age: 2025 - 2003,    // expression in numbers
    job: 'teacher',
    birthYear: 1991,
    friends: ['hari', 'bisop', 'soldier'],  // Array
    hasDriversLicense: false,    // Boolean

    //expression
    // calcAge: function (birthYear) {   // Functions
    //     return 2020 - birthYear;
    // }

    // using this
    // calcAge: function () {
    //     console.log(this);
    //     return 2020 - this.birthYear;
    // }

    // We can update the age inside the object using this
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he ${this.hasDriversLicense ? 'a' : "No"} driving license `;
    }
}

//without using this keyword
//console.log(nanda.calcAge(1991));    // Accessing the js objects functions using the DOt ( . ) Operator
//console.log(nanda['calcAge'](1991)); // Accessing the js objects functions using the Bracket [] operator

//with using this keyword
// console.log(nanda.calcAge());

//Age
console.log(nanda.age);
console.log(nanda.age);
console.log(nanda.getSummary());

==================================================================================================================================================

// ===============================================================================================================================================
// Looping
// for loops works in a conditional based way where it breaks untill it is false

for (let rep = 1; rep <= 10; rep++) {
    console.log(`My repetation at the gym is ${rep} 🏋️‍♂️🏋🏿‍♂️`);
}

// looping breaking and continuing

const jonasLife = [
    'jonas',
    'scheddleman',
    2002 - 1990,
    'teacher',
    ['hari', 'sori', 'soori'],
    true
]

// Adding a value to an empty array
const types = [];

for (let i = 0; i < jonasLife.length; i++) {
    //Reading an element
    // console.log(jonasLife[i], typeof jonasLife[i]);

    //Filling an element
    // types[i] = typeof jonasLife[i];

    //Filling the element from the last so we use push
    // types.push(typeof jonasLife[i]);

}
console.log(types);

const years = [1992, 1983, 1823, 2003];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2030 - years[i]);
}
console.log(ages);

//continue and break
// break is used to completly terminate the entier loop
// continue we can exit the current iteration of the loop

//continue statement

const nandaLife = [
    'nanda',
    'michel jordan',
    2025 - 2003,
    ['western', 'eastern', 'modern'],
    true
]

console.log('--working of continue statement');

for (let i = 0; i < nandaLife.length; i++) {
    if (typeof nandaLife[i] !== 'string') continue;
    console.log(nandaLife[i]);
}

console.log('--- working of a break statement');

for (let i = 0; i < nandaLife.length; i++) {
    if (typeof nandaLife[i] === 'number') break;
    console.log(nandaLife[i]);
}


// Looping Backwards and Looping Inwards 

const nandaLife = [
    'nanda',
    'michel jordan',
    2025 - 2003,
    ['western', 'eastern', 'modern'],
    true
]

// Looping Backwards
for (let i = nandaLife.length; i >= 0; i--) {
    console.log(i, nandaLife[i]);
}

//Looping inside loops 

for (let i = 0; i < 4; i++) {
    console.log('-------- Starting Exercise Reps');

    for (let j = 0; j < 6; j++) {
        console.log(`Gym kahan sei repetation ${j} 🏋️‍♂️🏋️‍♂️`);
    }
}

//While loops

for (let i = 0; i < 10; i++) {
    console.log(`Lifting weight repetation for about ${i} reps 🏋️‍♂️`);
}

let reps = 1;
while (reps < 10) {
    console.log(`WHILE LOOP : Lifting weight repetation ${reps} 🏋🏿‍♂️`);
    reps++;
}

*/
//Dice Rolling example uisng while loop

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You Rolled a dice as ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}