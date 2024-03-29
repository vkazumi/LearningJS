/*
let js ='amazing';
console.log(40 + 8 + 23 - 10);

console.log("kZm");
console.log(23);

let firstName = "Matilda";
let first = 'jonas'
let firstNamePerson


console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name conventions

let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;


let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof '23');
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/* Learning let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1991;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Victor';
console.log(lastName);
*/

/* Basic Operators >>>>

// Math operators 

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; 
x--; // x = x - 1 
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/
/*Operator Precedence

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25-10-5);

let x, y;
x = y = 25-10-5; //  x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*

//test 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
//test 2
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

//test 3
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn,markHigherBMI);

*/
/*
//Strings and Template Liberals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

*/

//Taking decisions: If/Else Statements
/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start her driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

*/


/*
//test 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
//test 2
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

//test 3
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

let higherBMI;
if(BMIMark >= BMIJohn){
    higherBMI = ("Mark`s BMI is higher than John`s!")
} else {
    (BMIJohn >= BMIMark)
    higherBMI = ("John's BMI is higher than Mark's!")
}
console.log(higherBMI)
*/

//take two test

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;



// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark})is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})!`)
// }

// // type conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); 
// console.log(typeof NaN); //not a number is a number, but a Invalid Number.

// console.log(String(23), 23); // string - number

// // type coercion
// console.log('I am ' + 23 + ' years old.');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // = 11
// n = n - 1; // 10 - 1
// console.log(n)

//Truth and falsy Values above

/*

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!')
}


let height = 0;
if(height){
    console.log('YAY! Height is defined!')
} else {
    console.log('Height is UNDEFINED')
}

*/

// Equality Operators == vs. ===
/*
const age = '18';
if(age === 18) console.log('You just becamer an adult :D (strict)');

if (age == 18) console.log('You just becamer an adult :D (loose)');

const favourite = Number (prompt("What's your favorite number?"));
console.log(typeof favourite);

if(favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if(favourite === 7) {
    console.log('7  is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else{
    console.log('Number is not 23 or 7')
}

if(favourite !== 23) console.log('Why not 23?');

*/

// Logic operators

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision); // and operator** true and false = false 
// console.log(hasDriverLicense || hasGoodVision); // or operator** true or false = true
// console.log(!hasDriverLicense); // not operator**


// const shouldDrive = hasDriverLicense && hasGoodVision;

// // if(hasDriverLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive!')
// // } else {
// //     console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...');
// }


const scoreDolphins = (96 + 108 + 89) /3;
const scoreKoalas = (88 + 91 + 110) /3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDoplhins){
    console.log('Koalas wins the trophy');
} else if (scoreDolphins === scoreKoalas){
    console.log('Both win the trophy!');
}






