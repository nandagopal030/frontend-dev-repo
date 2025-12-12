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

//BMI = mass / (height  *  height )

//challange-1 calculate the BMI

let massMark = 78;
let heightMark = 1.6;
let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);



// String and Template literals

const firstName = "Nanda";
const job = "Developer";
const birthYear = 1981;
const year = 2025;

//normal String
console.log("Hii i'am " + firstName + "and my age is " + (year - birthYear) + " , " + job + "!");

//Template literals ( `` )
console.log(`Hii i am ${firstName} and my age is ${year - birthYear} , ${job}!`);

//String with multiline using template literals
console.log(`String \n\
    with \n\
    multilne `)

//\n\ is basically used for next line
console.log(`String
    with
    multiline`)

    // Taking Decisions if/else Statements
    //This struture is called the controlled structure
    const age = 15;

    if (age > 18) {
        console.log(`sarah you are ready for your driving liscense 😁`);
    } else {
        const yearsLeft = 18 - age;
    console.log(`Sorry sarah you still need ${yearsLeft} years to get your license 😒`)
}

let year = 1998;
let century;
if (century <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//BMI With John and mark
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
    console.log(` John's BMI ${BMIJohn} is higher than ${BMIMark}`)
}


//Type converison and coercion
// Type conversion is we are manually converting type from one type to another by adding the certain type and type coercion is javascript will automatically convert it.


//Type converision (Manually)
let year = "1991";
console.log(year + 11);   //without type conversion
console.log(Number(year) + 11); //output 2002 with type coercion

let word = "nanda";
console.log(Number(word));  // NaN error (Not a Number error)
console.log(typeof NaN);    // Numbertype

//js can convert only 2 to 3 types we can convert it through a number , string and boolean we cannot convert to undefined and null

//Type coercion      (+  converts everything to a string and ( - , / , %) converts everything to a number)
console.log("I am " + 22 + " Years old");  //This is exactly type coerction where when the + operator is being used in between the Strings means js will automatically convert the number into string
console.log('23' - '10 ' - 3);  //10  now this time js converts the string to a number and applies the coercion

console.log('23' + '10' + 10);   //231010  now this is the plot twist when we use the + operator js converts the number to string
console.log('23' * 2);  // 46 now 46 appears because if * operator and this is called the type coercion

console.log('10' + '1' - 2 + '11');   // output 9911
console.log(10 - 1 - 5 - 2 + '10');  // output  210


//Implicit and explicit conversion
//Implicit conversion (or coercion) is when a programming language automatically changes a data type (like int to float) without programmer action, usually for safe operations like adding smaller to larger types; explicit conversion (or casting) is when the programmer manually forces a type change using syntax like (int)value

//Javascript falsy values  ->  ( 0 , undefined , ' ', null, NaN )
console.log(Boolean(0));  //false
console.log(Boolean('nanda'));  //true
console.log(Boolean(' '));  //true
console.log(Boolean(NaN));  //false
console.log(Boolean({}));  //true


const money = 0;   //0 is a falsy value in boolean it returns false

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("Get some money my friend");
}

//let height = 0;   //even though a 0 value is being defined it gives UNDEFINED Height as an output
let height;  // now it is actually undefined

if (height) {
    console.log("Height is being DEFINED");
} else {
    console.log("UNDEFINED Height");
}


// Equality operators   ==  and  ===
// assignment is the = and comparison operator is ===
let age = 18;
if (age === 18) console.log("Congrats you are offically an adult");
else console.log("You are too young to go to the gym");

//Double ( == ) equal does the type coercion whereas a triple equal does not gives any type coercion ( === )

//  ===   this is called strict equal to it does not convert it into type coercion it only returns the true if both the values are exactly same
//  ==    this is called the loose equal to where it convert both the values to a single datatype it is in the mixture if string and numbers

a = 18;
b = 18;
if (a === 18) {
    console.log("Values to be true");
} else {
    console.log("Values to be false");
}

//example
const myAge = '18';
if (18 == myAge) console.log("loose is being consoled becz of age")    //loose will get printed
if (18 === myAge) console.log("Strict is being consoled becz of age");


//strict and loose examples 
//aviod the loose operator and always use the strict operator for comparison
18 === 18
true
18 === 19
false
18 == 19
false
'18' == 18
true


//example code 

const favourate = Number(prompt("Enter your favourate number"));   //type conversion happening here  if WE DONT add the type conversion in this specific  line it will be converted to string
console.log(favourate);
console.log(typeof favourate);    // In this console it is a string

if (favourate === 23) {      // it will print because of the loose '23' == 23 (Type coercion will happen here); if 23 === 23 ans true 
    console.log("Cool! 23 its a great number");
} else if (favourate === 7) {
    console.log("7 is also a great number")
} else if (favourate === 9) {
    console.log("9 is also a great number")
} else {
    console.log("no number is great number except 7,9,23");
}


// Different operator  !=  and !==
// !=    -> loose
// !==   -> Strict
if (favourate !== 23) console.log("Why not 23!!");      // By using the strict operator


*/
