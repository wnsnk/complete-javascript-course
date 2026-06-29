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