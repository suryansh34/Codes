# Closures and Advanced Concepts Notes

## 1. Scope and lexical environment

JavaScript uses lexical scoping, which means inner functions can access variables from outer functions.

```js
function outer() {
  let username = "suryansh";

  function inner() {
    console.log(username);
  }

  inner();
}
```

This is the foundation of closures.

---

## 2. What is a closure?

A closure is created when an inner function has access to variables from its outer function even after the outer function has finished execution.

```js
function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

The inner function retains access to `name`.

---

## 3. Practical closure example

```js
function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

document.getElementById('orange').onclick = clickHandler('orange');
document.getElementById('green').onclick = clickHandler('green');
```

This is a common real-world use case where closures preserve function-specific state.

---

## 4. Why closures are important

Closures are useful for:
- data privacy
- state retention
- event handlers
- callbacks
- function factories

---

## 5. Summary

Closures allow inner functions to remember the environment in which they were created.

This is a very important JavaScript concept and is often used in:
- DOM events
- callbacks
- module patterns
- functional programming

Understanding closures helps you write cleaner and more powerful JS logic.
