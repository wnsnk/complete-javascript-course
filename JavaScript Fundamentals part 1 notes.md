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
Assigns a string, integer, float or boolean to a variable.
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
```let john&sarah = 'js'``` Gives a SyntaxError
- Naming a variable the same as a reserved keyword:
```let new = 1``` Gives a SyntaxError
### Not illegal but reserved:
- ```let name = 'John'``` Might sometimes work but name is also a reserverd keyword. So this might cause problems.
- Naming a variable starting with a uppercase letter:
```let Person = 'John'``` Not really illegal but this way of writing is reserved for OOP.
- Naming a variable full uppercase.
```let DATE = '22-06'``` Also not illegal but this is reserved for constants (variables that never change, same as in Python)