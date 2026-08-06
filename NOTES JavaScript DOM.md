# JavaScript in the browser: DOM and Events NOTES

## Lecture 75: What's the DOM and DOM manipulation

### What is the DOM

The DOM is a structured representaton of HTML Documents. Allows JavaScript to acces HTML Elements and styles to manipulate them.

## lecture 76: Selecting and Manipulating an element

### Selecting an element

You can use CSS Selectors to specify what you want to select.

```js
document.querySelector("use css selector here");
```

### Changing the text of an element

```js
document.querySelector("#id").textContent = "Hello World";
```

### Getting the value from a input element

For example user input in a form.

```js
document.querySelector("#form").value;
```

### Changing the value from a input element

```js
document.querySelector("#form").value = "hi";
```

## Lecture 77: Handling click events

```js
document.querySelector("#button").addEventListener("click", function () {
  console.log(document.querySelector("#form").value);
});
```

## Lecture 83

Queryselector will only target the first element that meets the condition.
if you want to target all you use

```js
document.querySelectorAll(".class");
```
