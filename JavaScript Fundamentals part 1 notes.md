# JavaScript Fundamentals part 1 Notes
## Lecture 1: A brief introduction
### Alert
```js
alert('text')
```
Opens a messagebox.
### let
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
## Lecture 2: Linking a javascript file
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