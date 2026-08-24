# Control Flow Notes

## 1. If statement

```js
const isUserloggedIn = true;

if (isUserloggedIn) {
  console.log("User is logged in");
}
```

If the condition is true, the block runs.

---

## 2. Comparison operators

Common operators:
- `<`
- `>`
- `<=`
- `>=`
- `==`
- `!=`
- `===`
- `!==`

Use `===` and `!==` for safer comparisons because they compare both value and type.

```js
if (temperature === 40) {
  console.log("temperature is 40");
}
```

---

## 3. If-else and else-if

```js
const balance = 1000;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}
```

This allows multiple conditions in sequence.

---

## 4. Logical operators

### `&&` (AND)
Both conditions must be true.

```js
if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}
```

### `||` (OR)
At least one condition must be true.

```js
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
```

---

## 5. Truthy and falsy values

### Falsy values
- `false`
- `0`
- `-0`
- `BigInt 0n`
- `""`
- `null`
- `undefined`
- `NaN`

### Truthy values
- non-empty strings
- non-zero numbers
- arrays
- objects
- functions

```js
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
```

An empty array is truthy, even though it looks empty.

---

## 6. Checking empty objects and arrays

```js
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
```

```js
if (userEmail.length === 0) {
  console.log("Array is empty");
}
```

---

## 7. Nullish Coalescing Operator (`??`)

Used when working with server responses where `null` or `undefined` may appear.

```js
let val1;
val1 = null ?? 10 ?? 20;
console.log(val1); // 10
```

It ignores `null` and `undefined` and chooses the first valid value.

---

## 8. Ternary operator

```js
const iceTeaPrice = 100;

iceTeaPrice <= 80
  ? console.log("less than 80")
  : console.log("more than 80");
```

This is shorthand for an if-else statement.

---

## 9. Switch statement

Useful when you have many fixed conditions.

```js
let month = 7;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log(`Not from month 1-6, month is ${month}`);
}
```

`break` stops further checking once the match is found.

---

## 10. Important takeaway

Control flow lets JavaScript respond differently depending on data and logic.

The key concepts:
- if / else
- logical operators
- truthy / falsy
- switch
- ternary
- nullish coalescing

These are essential for writing interactive programs.
