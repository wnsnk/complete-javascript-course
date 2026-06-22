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