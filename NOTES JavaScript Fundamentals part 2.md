# JavaScript Fundamentals part 2 Notes
## Lecture 33: Activating strict mode
at the top of the script write:
```js
'use strict';
```
strict mode has to be the first line.
Strict mode makes it easier to avoid bugs. It will create visible errors and forbids us to do certain things.
## Lecture 34: Functions
A piece of code that we can reuse over and ver again.
Start with the function keyword abd than name the function and add ().
Between the curly braces add your code.
```js
function logger() {
    console.log('Hello World!');
}
// Calling / running / invoking the function
logger();
```
### Function with parameters and returning a value.
```js
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
```

## Lecture 35: Function Declarations vs. Expressions
There are two ways to write a function:
### Declaring:
```js
function calcAge1(birthYear) {
    const currentYear = 2026;
    return currentYear - birthYear;
}

const age1 = calcAge1(1990);
```
### Expression:
```js
const calcAge2 = function (birthYear) {
    return currentYear - birthYear;
}

const age2 = calcAge2(1995);
```
### What is the big difference?
You can call function declarations before they are defined in the code:
```js

const age1 = calcAge(1990); // Gets called before function is defined!
function calcAge(birthYear) {
    const currentYear = 2026;
    return currentYear - birthYear;
}

const age2 = calcAge(1990); // Gets called after function is defined!

console.log(age1. age2);
```
### Which one should i use?
Most of the time it does not matter.

## Lecture 36: Arrow Functions
Faster to write only one line of code. automatically returns a variable.
```js
const calcAge = birthYear => 2026 - birthYear;

const age = calcAge(1990);
```
You can use multiple lines of code but then you need to write the return statement and curly braces
```js
yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2026 - birthYear;
    const retirement = 67 - age;
    return `${firstName} retires in ${retirement} years.`;
}
```
## Lecture 37: Functions calling other functions:
```js
function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
```
## Lecture 38: Reviewing Functions
```js
const calcAge = function (birthYear) {
    return 2026 - birthYear;
}
yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 67 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `Enjoy your retirement!`;
    }
    
}
```

## Lecture 40: Introduction to Arrays
A array is a list of values. Works the same as a list in Python
There are two ways to create an array
```js
const fruits = ['apples', 'bananas', 'pears'];
console.log(fruits[0]); // Returns apples
console.log(fruits.length); // Returns 3

const years = new Array(1990, 1995, 2000, 2005);
years[1] = 1996; // Replaces 1995 with 1996
```
## Lecture 41 Basic Array Operations
### Add something to an array
```js
const friends = ['john', 'eric'];
friends.push('mark'); // Adds mark to the end of friends

friends.unshift('ron'); // adds ron to the beginning of friends
```
### Remove something from array
```js
friends.pop(); // removes the last thing from the array

friends.shift(); // removes the first thing from the array
```
### Find index of a value
```js
console.log(friends.indexOf('eric'));
```
### Check if value is in an array
returns a boolean
```js
console.log(friends.includes('charlie')); 
```
## Lecture 43: Introduction to Objects
```js
const personalInfo = {
    firstName: 'John',
    lastName: 'Johnson',
    age: 2026-1990,
}
```
## lecture 44 dot vs bracket notation
### Dot notation
```js
console.log(personalInfo.firstName);
```
### Bracket notation
```js
console.log(personalInfo['firstName']);

const nameKey = 'Name';
console.log(personalInfo['first' + nameKey]);
console.log(personalInfo['last' + nameKey]);
```
### adding things to a object
```js
personalInfo.location = 'Netherlands';
personalInfo['Friends'] = ['Charlie', 'Alan', 'Jake'];
```

### Example
```js
console.log(`${personalInfo.firstName} has ${personalInfo.Friends.length} friends an his best friend is called ${personalInfo.Friends[0]}!`);
```
## Lecture 45: Object Methods
You can add functions to a object
```js
const personalInfo = {
    firstName: 'John',
    lastName: 'Johnson',
    calcAge: function (birthyear) {
        return 2026 - birthyear;
    }
}
```
### The this keyword
Works kind of like the self keyword in Python.
```js
const personalInfo = {
    firstName: 'John',
    lastName: 'Johnson',
    birthYear: 1990,
    calcAge: function () {
        return 2026 - this.birthYear;
    }
}
```
```js
const personalInfo = {
    firstName: 'John',
    lastName: 'Johnson',
    birthYear: 1990,
    calcAge: function () {
        this.age = 2026 - this.birthYear;
        return this.age;
    }
}

console.log(personalInfo.age);
```
## Lecture 47: The for loop
```js
for(let rep = 1; rep <= 10; rep ++) {
    console.log(`count: ${rep}`)
}
```
## Lecture 48: Looping arrays, breaking and continuing
### Looping arrays
```js
const myArray = [
    'apples',
    900,
    true,
    '900',
];

const types = [];

for (index=0; index < myArray.length; index++) {
    console.log(myArray[index]);

    // types[index] = typeof myArray[index]; OR:
    types.push(typeof myArray[index]);
}
```
### Continue
continue is to exit the current iteration of the loop and continue to the next one.
```js
for (index=0; index < myArray.length; index++) {
    if (typeof myArray[index] !== 'string') continue;
    // if the type of value is not a string the next line does not get printed but the loop continues to the next thing in the array.
    console.log(myArray[index]);
}
```
### break
break is used to complety break out of the loop.
```js
for (index=0; index <= myArray.length; index++) {
    if (typeof myArray[index] !== 'string') break;
    // if the type of value is not a string the loop breaks and does not go further.

    console.log(myArray[index]);
}
```