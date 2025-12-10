/*
console.log("I love Javascript");

// A value is basically a smallest unit of inforamtion we have in javascript (example)
let age = 10; //let is a datatype and age is the variable and 10 is the value (It is a declared statement)

// A variable would not start with a number / symbol it cause a unexpected syntax error  ( _   and   $ ) sign are only allowed
_name = "nanda";
$name = "gopal";
// let 3name = "nanda";  This will cause an error and the error will be displayed in console inside the browser
//should not start a variable with uppercase letter instead use the camel case (firstName)

let PI = 3.14;   //convention
console.log(PI);

//correct camel case approach    It is more descriptive variable assigning approach
let myCurrentJob = "Programmer";
let myOldJob = "Software";

//non descriptive approach
let job1 = "teacher";
let job2 = "student";

let _function = "reception"
let $function = "reception"

//A variable should not be used as a reserved javascript keyword example
// let new = "name";   here new is a reserve js keyword (It shows a unexpected tocken error)

//Another one reserved keyword and illegal to use example
let name = "banda"; //name is reserved keyword inseted we can use firstName / lastName in javascript

//A Variable which is all in Uppercase are reserved for constants
console.log(name);
console.log(_function);
console.log(myOldJob);

//boolean value
true;
console.log(true);

//typeof
let jobApplication = "Amazon";
console.log(typeof true);
console.log(typeof jobApplication);
console.log(typeof 'randyortan');
console.log(typeof 33);
//changing the value with the same variable

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = "YESS !!";
console.log(typeof javaScriptIsFun);

// undefined
let year;
console.log(typeof year); //this gives an output as an undefined

year = 1919;
console.log(typeof year); //this gives an output as an number

console.log(typeof null); //this gives an output as object


// let const var
// keyword ->  It is a reserved word like if for while new
// datatype -> It defines the kind of value a variable holds
// we use let  to redeclare at any point of our code

//let                  (block level scope)
let age = 30;
age = 31;     //This is called mutation where while we use let the variabel can be changed(mutable)
console.log(age);

// const
//Always make sure to use const if there is no change to be made in the further code for the paritcular variable assignment
const birthYear = 1919;  // where const is immutable if it is declared once it cannot be redeclared
// birthYear = 1920 causes a Typeerror in the console

//var (which was not nessasary to use to assign a variable it has the same functionality that let has )example
var job = 'coder';          //(Functional level scope)
job = 'high level designer';
console.log(job);  // no errror will be thrown

//javascript will not throws any error but still its a bad practice to write a code like this what javascript actuall do while we assign something is it will create a property in the global
lastName = 'kannan';
console.log(lastName);

// Basic Operators  ( - , / , ** , + )
//Math Operators
const now = 2025;
const ageNanda = now - 1991;
const ageSofi = now - 1980;

console.log(ageNanda, ageSofi);
console.log(ageNanda * 2, ageNanda / 2, 2 ** 3);

// String concatenation
const firstName = 'sporty';
const lastName = "Reymesterio";
console.log(firstName + ' ' + lastName);

//Assignment operators
let a = 5 + 10;
a += 10;
a *= 5;
a++;
a--;
a--;
console.log(a);

//Comparison Operators
// ( > , < , >= , <= , == , != , ===  )
const nandaAge = 22;
const hariAge = 27;
console.log(nandaAge > hariAge);
console.log(nandaAge <= hariAge);

console.log(now - nandaAge  > now - hariAge)   // At this comparison the javascript first does the operation in an specific order precedance first is now - nandaAge   and  afterwards now -hariAge and then it checks up the comparison

const additonOfAges = nandaAge + hariAge;
console.log(additonOfAges >= 30);



*/

// Operator precedence

const now = 2025;
const ageBandu = now - 1922;
const ageVandu = now - 1933;
// - (minus) has larger precedence than the > (greater than symbol)
console.log(now - ageBandu > now - ageVandu);

let x, y;
console.log(x = y = 25 - 10 - 5);
console.log(x, y)

//AVG

let averageAge = ageBandu + ageVandu / 2   // first it divides and next it adds (makes no sense)
console.log(averageAge)
let averageAge2 = (ageBandu + ageVandu) / 2   // first it adds due to () and next it divies (makes sense)
console.log(averageAge2)

