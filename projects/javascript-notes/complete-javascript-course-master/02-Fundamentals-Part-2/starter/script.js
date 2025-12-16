/*
'use strict';      // This is called the javascript strict mode when we use this on the top page of our javascript application this would catch the unfound errors which are being written in the code
const hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("You can drive your car : ");
console.log("Hello");

const interface = 'Audio';    //errror :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:8:7)
const private = "i am a private"; //error :: The ( private ) is a reserved keyword and ( if ) ( while ) ( for ) many things which was not mentioned here is a reserved keyword so if we use the reserved keyword with mentioning the strict mode it throws an error

*/


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