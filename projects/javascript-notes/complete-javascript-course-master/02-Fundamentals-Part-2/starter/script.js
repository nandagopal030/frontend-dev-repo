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

*/