
'use strict';      // This is called the javascript strict mode when we use this on the top page of our javascript application this would catch the unfound errors which are being written in the code
const hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("You can drive your car : ");
console.log("Hello");

const interface = 'Audio';    //errror :: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:8:7)
const private = "i am a private"; //error :: The ( private ) is a reserved keyword and ( if ) ( while ) ( for ) many things which was not mentioned here is a reserved keyword so if we use the reserved keyword with mentioning the strict mode it throws an error 