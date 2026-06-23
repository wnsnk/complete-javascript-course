# JavaScript Fundamentals part 1 Notes
## Lecture 6 & 7: Hello World! & A brief introduction to JavaScript
### Alert
```js
alert('Hello World!')
```
Opens a messagebox.
### let
Declare a variable:
```js
let variable_1 = 'string';
let variable_2 = 5;
let variable_3 = true;
```
Assigns a string, number or boolean to a variable.
### If statement
```js
if variable_1 === 'string' alert('variable_1 is a string');
```
### Math
You can do math in the console of Javascript. For example:
```js
8 * 7; 
let a = 5;
let b = 8;
a + b;
```
## Lecture 8: Linking a javascript file
### Add Javascript directly to HTML (inline script).
In the head section of the HTML:
```
<script>
    Add Javascript here.
</script>
```
### Semicolon: ;
Add a semicolon after each line to let the script know this is the end of the line.
```js
let variable_1 = 'string';
let variable_2 = 5;
let variable_3 = true;
if variable_1 === 'string' alert('variable_1 is a string');
```
### console.log()
```js
1 + 1;
```
Won't output anything in the console.
To print something in the console use console.log:
```js
console.log(1 + 1);
```
### create a external javascript file
1. Create a new Javascript file <filename>.js
2. (Usually) at the end of the body tag create a new script tag and add the script to the source.
```
<body>
    <h1>Adding a Javascript FIle</h1>

    <script src='script.js'></script>
</body>
```
## Lecture 9: Values and Variables

declaring a variable with let:
```js
let firstName = 'John';
console.log(firstName);
```
### How to name variables:
The standard in JavaScript is you name variables using camelCase. this means the first word is lowercase and other words have the first letter in uppercase. You can only use letters (uppercase and lowercase), numbers underscores and the dollar sign.
The variable is case sensitive.
Variables should be descriptive.
### Illegal variable names:
- naming a variable starting with a number: 
```let 3years = 3;``` Gives a SyntaxError
- naming a variable with symbols:
```let john&sarah = 'js';``` Gives a SyntaxError
- Naming a variable the same as a reserved keyword:
```let new = 1;``` Gives a SyntaxError
### Not illegal but reserved:
- ```let name = 'John';``` Might sometimes work but name is also a reserverd keyword. So this might cause problems.
- Naming a variable starting with a uppercase letter:
```let Person = 'John';``` Not really illegal but this way of writing is reserved for OOP.
- Naming a variable full uppercase.
```let DATE = '22-06';``` Also not illegal but this is reserved for constants (variables that never change, same as in Python)
## Lecture 11: Data Types
A value is either a object or a primitive:
- Primitive:
```js
let firstName = 'Jack';
let age = 30;
```
- Object:
```js
let me = {name: 'Jack'};
```

### Primitive Data Types:
There are 7 primitive data types:
1. number
Is always a float. a integer is also treated as a float for example 25 is always treated as 25.0
2. string
A sequence of characters always put in single or double quotes.
'This is a string'
"This is also a string"
3. boolean 
true or false. (lowercase!!!)
4. undefined
When a value is left empty, the variable is undefined (Same as None in Python?)
This means you can create a variable and also leave it empty for now
```let hobbies;```

5. null
also means empty value 
6. symbol (es2015)
value that is unique and cannot be changed
7. bigint (es2020)
larger integers than the number type can hold.


### Commenting code
In javascript the way to comment your code is with a double forward slash '//'
You can also comment out code without deleting it.
'ctrl' + '/' comments the current line.
- To comment out multiple lines start with '/*' 
- and end with '*/'

### Checking the type of a variable.
You can check the type of a variable with 'typeof'
```js
console.log(typeof true);
// Returns boolean

let a = 2;
console.log(typeof a);
//Returns number
``` 

### Dynamic Typing.
JavaScript has dynamic typing. Don't have to manually define the data type. This also means a variable can be changed later into a different data type:
you ONLY use let when declaring a variable. After declaring a variable once you never use let again.
```js
let age = 'under aged';
age = 18;
```
### Undefined & null
- Undefined is a empty value. 
    ```js
    let year; 
    console.log(year); //Returns undefined
    console.log(typeof year); //Also returns undefined
    ```
- null is similar to undefined.

    This is a bug never corrected for legacy reasons. It should return null but it returns object. Keep this in mind.
    ```js
    console.log(typeof null) //Returns object
    ```
## Lecture 12: let, const and var
### Different ways of declaring variables
#### let
let is a modern way to declare a variable, easy to reassign/mutate
```js
let age = 30;
age = 31;
```
#### const
const (constants) is used for variables that don't change. Raises a TypeError when you try to reassign it.
```js
const BIRTHYEAR = 1990;
BIRTHYEAR = 1991; //Raises TypeError
```
You also can not leave a constant empty like you can do with let.
```js
const BIRTHYEAR; 
//Raises a SyntaxError: Missing initializer in const declaration
```
#### var
var is the old way of declaring a variable (prior to es6). Should not be used in modern code. 
```js
var job = 'plumber'
job = 'programmer'
```
#### assigning a variable without declaring it
This does work but can lead to problems.
```js
lastName = 'Smith'
console.log(lastName)
```
## lecture 13 Basic Operators
You can log multiple things by seperating them with a comma.
```js 
console.log(19, 50)
```
### Mathematical operators
Mathematical operators: + - * / 
```js
const year = 2026
const ageJohn = currentYear - 1990;
const ageEric = currentYear - 1974;
console.log(ageJohn, ageEric) ;

console.log(ageJohn / 2, ageEric * 10);
```
You can use the + operator to join strings.
```js
const firstName = 'John';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);
```
### Assignment operators
+=, -= *=, /= (Works the same as in Python.)
```js
let x = 10 + 5; //15
x += 10; // x + 10 = 25
x *= 10; //x * 10 = 250
```
++ adds 1 to the variable, -- removes 1 from the variable
```js
let x = 100;
x++; //x + 1 = 101
x = 100;
x--; //x - 1 = 99
```

### Comparing Operators
returns true or false (boolean).
Operators: > (greater), < (lesser), >= (greater or equal), <= (lesser or equal)

```js
console.log(100 > 50); 
//Returns true because 100 is bigger than 50.
```
## Lecture 14 Operator Precedence
The order in which operators are executed.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence 

```js
let x, y; //You can declare multiple variables at once
x = y = 5 + 5;
//x = 10 and y = 10

const ageJohn = 30;
const ageMark = 20;
const averageAge = (ageJohn + ageMark) / 2;
// Division gets executed before addition so use bracket's.
```
## Lecture 17: Strings and Template Literals
### Template Literals
Can assemble multiple pieces in one string. (LIke a F-string in Python)
But you have to use backticks (`) instead of (') or (")
Add variables with a dollar sign and curly braces. ```${variable}```
```js
const firstName = 'John';
const job = 'Programmer';
const birthYear = 1990;

const john = `I'm ${firstname}, i am a ${job}. I was born in ${birthYear}`;
```
You can also use back ticks to write all strings!

### New Line character
The new line character is \n\.
```js
const string = 'Hello\n\how are you?'
```
If you use backticks you can also just press enter like you would do outside of programming.
```js
const string = `Hello
How are you?`
```
## Lecture 18: Taking decisions: if / else statements
### if / else controle structure
2 examples of a if / else statement. 
The else block is optional.
```js
const age = 19;

if (age >= 18) {
    console.log('Can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Too young, wait ${yearsLeft} years.`);
}
```
```js
const birthYear = 1990;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
};
```
## Lecture 20 Type Conversion and Coercion
### Type Conversion
When we manually change the type of a variable

#### Converting string to a number
```js
let year = '1990';
year += 18; // 199018
year = '1990';
year = number(year);
year += 18; // 2008
```
Converting a normal string (without a number) returns NaN (not a number)
#### Converting to string
```js
string(1999);
```
#### Converting to boolean
```js
Boolean(1);
```

### Type Coercion
When JavaScript changes the type of a variable automatically behind the scenes.
```js
console.log('i am' + 23 + 'years old'); 
// automatically converts this number into a string
console.log('23' - '10' - 3); 
// automatically converts string into numbers (not when using + !!!!)
```
```js
let n = '1' + 1; //converts number to string: 11
n = n - 1; //converts string to number: 10
```
## Lecture 21: Truthy and Falsy Values
### falsy
falsy values are not false but will become false when converted to a boolean.
There are 5 'falsy' values:
1. 0
2. '' (empty string)
3. undefined
4. null
5. NaN
*false is not falsy because IT IS already false*
### truthy
everything thing else becomes true when converted to a boolean.
for example any number that is not 0, string with text etc.
### Type Coercion in boolean
Happens automatically in if/else statements:
```js
let money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log('Get a job!');
}
```
```js
let height; //Is left empty so undefined!
if (height) {
    console.log('is defined');
} else {
    console.log('is not defined');
}
```