# Functions, Scope, and Arrow Functions Notes

## 1. Why functions?

Functions let us reuse code instead of writing the same logic again and again.

```js
function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("R");
  console.log("Y");
  console.log("A");
  console.log("N");
  console.log("S");
  console.log("H");
}
```

To execute a function:

```js
sayMyName();
```

---

## 2. Function parameters and return values

### Without return value

```js
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
```

This prints the result but does not return it.

### With return value

```js
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);
console.log(result); // 7
```

Anything written after `return` will not execute.

---

## 3. Default parameters

```js
function loginUserMessage(username = "Suryansh") {
  if (!username) {
    console.log("Please login with username.");
  } else {
    return `${username} just logged in`;
  }
}

console.log(loginUserMessage("Aashu"));
```

Default values are useful when no argument is passed.

---

## 4. `this` keyword

`this` depends on the context in which a function is called.

### Inside an object method

```js
const user = {
  username: "surya",
  price: 99,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
};
```

Here, `this` refers to the `user` object.

### Inside a regular function

```js
function chai() {
  let username = "suryansh";
  console.log(this.username);
}
```

In a regular function, `this` is not the same as inside object methods. It may be `undefined` in strict mode.

---

## 5. Arrow functions

Arrow functions provide a shorter way to write functions.

### Standard arrow function

```js
const chai = () => {
  let username = "suryansh";
  console.log(this.username);
};
```

Arrow functions do not have their own `this`; they use the surrounding lexical scope.

### Implicit return arrow function

```js
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(3, 4, 5));
```

This returns directly without the `return` keyword.

---

## 6. Scope

### Block scope
Variables declared with `let` and `const` are block-scoped.

```js
if (true) {
  let a = 10;
  const b = 20;
  console.log(a, b);
}
```

### Global scope

```js
let a = 10;
const b = 20;
var c = 30;
```

`var` is function-scoped and can cause issues in modern JavaScript, so `let` and `const` are preferred.

---

## 7. Nested scope / closure

```js
function one() {
  const username = "suryansh";

  function two() {
    const website = "surya.com";
    console.log(username);
  }

  two();
}
```

The inner function can access variables from the outer function.

This is called closure.

---

## 8. IIFE (Immediately Invoked Function Expression)

IIFE runs immediately after it is created.

```js
(function chai() {
  console.log("Hemlo Ji");
})();
```

Arrow version:

```js
(() => {
  console.log("Hemlo Ji 2.0");
})();
```

Why use IIFE?
- To avoid polluting the global scope
- To create a private scope

---

## 9. Hoisting

Hoisting means function and variable declarations are conceptually moved to the top of their scope.

```js
console.log(addTwo(2));

const addTwo = function (num) {
  return num + 2;
};
```

This can cause confusion if you try to use a variable before initialization.

---

## 10. Important takeaway

Functions are essential in JavaScript because they:
- improve reusability
- organize code
- help write modular logic
- support callback and event-driven behavior

Remember:
- prefer `const` and `let`
- use arrow functions for short logic
- avoid `var` in modern code
- understand closure and scope

---

## 11. Summary

Topics covered in this folder:
- function declaration and return values
- default parameters
- `this` keyword
- arrow functions
- scope and nested functions
- closure
- IIFE
- hoisting
