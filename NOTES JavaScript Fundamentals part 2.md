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