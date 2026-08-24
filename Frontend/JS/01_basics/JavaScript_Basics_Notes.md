# JavaScript Basics Notes

These notes are based on the JavaScript files in this folder and summarize the core concepts learned.

---

## 1. Variables and Declarations

### `const`
- Used for values that should not be reassigned.
- Best choice for constants.

```js
const accountID = 13554523;
```

### `let`
- Used for variables whose value may change later.

```js
let accountEmail = "surya@google.com";
```

### `var`
- Older way of declaring variables.
- Prefer not to use it in modern JavaScript because it can cause issues with block scope.

```js
var accountPassword = "1234";
```

### `undefined`
- A variable declared but not assigned a value.

```js
let accountState;
console.log(accountState); // undefined
```

### `console.table()`
- Prints arrays/objects in a table format for easier debugging.

```js
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
```

---

## 2. Data Types in JavaScript

JavaScript has two broad categories of data types:

### Primitive Data Types
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

### Non-Primitive / Reference Types
- Object
- Array
- Function

### Example

```js
const accoountID = 35205;
let temp = null;
let temp2;
```

### `typeof`
Used to check the type of a value.

```js
console.log(typeof null);        // object
console.log(typeof undefined);   // undefined
console.log(typeof temp);        // object
console.log(typeof temp2);       // undefined
```

> Note: `typeof null` returns `"object"` in JavaScript, which is a known quirk.

---

## 3. Type Conversion

Type conversion changes one data type into another.

### Converting Number to String

```js
let score = 33;
let ScoreInString = String(score);
console.log(typeof ScoreInString); // string
```

### Converting String to Number

```js
let score2 = "33abc";
let score2InNumber = Number(score2);
console.log(score2InNumber); // NaN
```

`NaN` means "Not a Number".

### Converting to Boolean

```js
let police = "surya";
let policeIsLoggedIN = Boolean(police);
console.log(policeIsLoggedIN); // true
```

Boolean conversion rules:
- `"surya"` → `true`
- `""` → `false`
- `0` → `false`
- `1` → `true`

---

## 4. Operations

### Unary Operator

```js
let value = 3;
let negValue = -value;
console.log(negValue); // -3
```

### Modulus Operator

```js
console.log(2 % 3); // 2
```

### String Concatenation

```js
console.log("2" + 2 + 2); // "222"
```

This happens because JavaScript joins strings left-to-right.

### Increment Operator

```js
let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101
```

---

## 5. Comparison Operators

### Basic comparison

```js
console.log(2 > 1); // true
```

### `==` vs `===`
- `==` checks only value
- `===` checks both value and type

```js
console.log("2" === 2); // false
```

### JavaScript quirks with `null`

```js
console.log(null > 0);    // false
console.log(null == 0);   // false
console.log(null >= 0);   // true
```

This happens because JavaScript converts `null` to `0` in some comparisons.

### `undefined`

```js
console.log(undefined == 0); // false
```

This is generally considered false and should be handled carefully.

---

## 6. Strings

### Concatenation (older style)

```js
let name = "Suryansh";
let repoCount = 2;

console.log("My name is: " + name + ", my repo count is: " + repoCount);
```

### Template Literals (modern style)

```js
console.log(`Hello my name is ${name}, My Repo Count is ${repoCount}`);
```

This is cleaner and easier to read.

### Creating a String Object

```js
const name = new String("SURYANSH");
console.log(name[3]);         // Y
console.log(name.length);    // 8
console.log(name.toUpperCase());
```

### Useful String Methods

```js
console.log(name.charAt(0));
console.log(name.substring(1, 4));
console.log(name.slice(-7, -4));
```

### `trim()`

```js
const name2 = "   surya   ";
console.log(name2.trim());
```

### `replace()`

```js
const url = "https://google.com/suryansh%20sahu";
console.log(url.replace('%20', '-'));
```

### `includes()`

```js
console.log(url.includes('google')); // true
```

### `split()`

```js
const name3 = "s-u-r-y-a";
console.log(name3.split('-')); // ["s","u","r","y","a"]
```

---

## 7. Numbers and Math

### Number Wrapping

```js
const Balance = new Number(10000000);
```

Useful methods:
- `toString()`
- `toFixed(2)`
- `toPrecision()`
- `toLocaleString('en-IN')`

### Examples

```js
const number = 100.440134;
console.log(number.toPrecision(5));

const num = 3257014;
console.log(num.toLocaleString('en-IN'));
```

### `Math` Object

```js
console.log(Math);
```

Common methods:
- `Math.abs(-4)`
- `Math.round(4.2)`
- `Math.ceil(4.2)`
- `Math.floor(4.5)`
- `Math.min(3, 6, 2, 4)`
- `Math.max(3, 6, 2, 4)`

### Random Number

```js
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
```

This gives a number between 1 and 10.

### Random Number in a Range

```js
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```

This generates a random value between `min` and `max` inclusive.

---

## 8. Date and Time in JavaScript

### Current Date

```js
let myTime = new Date();
console.log(myTime);
```

### Common Date Methods

```js
console.log(myTime.toString());
console.log(myTime.toDateString());
console.log(myTime.toLocaleString());
```

### Create a Custom Date

```js
const myCreatedDate = new Date(2006, 6, 15, 12, 0);
console.log(myCreatedDate.toDateString());
```

### Date from a String

```js
const myCreatedDate2 = new Date("2006-06-15");
console.log(myCreatedDate2.toDateString());
```

### Timestamp

```js
let myDOB = new Date("2006-06-15");
let myTimestamp = Date.now();
console.log(myTimestamp);
```

`Date.now()` gives the number of milliseconds since 1 January 1970.

### Converting Date to Milliseconds

```js
console.log(myDOB.getTime());
```

---

## 9. Primitive vs Non-Primitive Data Types

### Primitive Data Types
Primitive values are stored in stack memory.

```js
let myyoutubeChannel = "harrybeta21dotcom";
let youtubeChannel = myyoutubeChannel;
youtubeChannel = "java@gmail.com";
```

Here, changing `youtubeChannel` does not affect `myyoutubeChannel`.

### Non-Primitive Data Types
Objects and arrays are stored in heap memory and are reference-based.

```js
let accountDetails1 = {
    username: "helloworld2",
    age: 24,
    rollno: 3546
};

let accountDetails2 = accountDetails1;
accountDetails1.age = 46;

console.log(accountDetails1.age); // 46
console.log(accountDetails2.age); // 46
```

Both variables point to the same object.

---

## 10. Dynamic Typing

JavaScript is a dynamically typed language.

This means:
- variables do not need explicit type declarations
- the type is determined during runtime

```js
const value = 100;
```

The value is treated as a number automatically.

---

## 11. Summary of Important Concepts

### Best Practices Learned
- Use `let` and `const` instead of `var`
- Prefer `===` over `==`
- Use template literals for strings
- Use `console.table()` for debugging objects and arrays
- Be careful with `null` and `undefined`
- Understand primitive vs reference values

### Core Topics Covered
- Variables
- Data types
- Type conversion
- Comparison operators
- Strings
- Numbers and Math
- Dates
- Memory behavior

---

## Final Note

This folder covers the basic foundations of JavaScript. These concepts are very important because they form the base for arrays, functions, objects, DOM, events, and more advanced JavaScript topics.

Practice these examples manually and try small variations to understand them deeply.
