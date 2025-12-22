/*
'use strict';      // This is called the javascript strict mode when we use this on the top page of our javascript application this would catch the unfound errors which are being written in the code
const hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("You can drive your car : ");
console.log("Hello");

const interface = 'Audio';    //errror :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:8:7)
const private = "i am a private"; //error :: The ( private ) is a reserved keyword and ( if ) ( while ) ( for ) many things which was not mentioned here is a reserved keyword so if we use the reserved keyword with mentioning the strict mode it throws an error



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
    

*/