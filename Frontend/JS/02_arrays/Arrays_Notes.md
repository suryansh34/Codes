# Arrays Notes

## 1. What is an array?

An array is a special kind of object used to store multiple values in a single variable.

```js
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]); // 0
```

Arrays are zero-indexed, meaning the first element is at index `0`.

---

## 2. Creating arrays

### Literal syntax

```js
const superheros = ["hanuman", "thor", "ironman"];
```

### Constructor syntax

```js
const myArr2 = new Array(1, 2, 3, 4);
```

---

## 3. Array methods

### `push()`
Adds an element at the end.

```js
myArr2.push(6);
```

### `pop()`
Removes the last element.

```js
myArr2.pop();
```

### `unshift()`
Adds an element at the beginning.

```js
myArr2.unshift(9);
```

### `shift()`
Removes the first element.

```js
myArr2.shift();
```

### `join()`
Converts an array into a string.

```js
const newArr = myArr2.join();
console.log(newArr); // "1,2,3,4"
console.log(typeof newArr); // string
```

---

## 4. Concatenation

### `concat()`

```js
const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

const allHeros = marvelHeros.concat(dcHeros);
```

### Spread operator

```js
const allNewHeros = [...marvelHeros, ...dcHeros];
```

The spread operator is cleaner and more common in modern JavaScript.

---

## 5. Flattening nested arrays

```js
const anotherArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);
```

`flat(Infinity)` flattens all nested arrays.

---

## 6. Checking arrays

### `Array.isArray()`

```js
console.log(Array.isArray("Suryansh")); // false
```

---

## 7. Converting to array

### `Array.from()`
Converts iterable values into arrays.

```js
console.log(Array.from("Suryansh"));
```

It also works with objects if you provide a proper structure.

```js
console.log(Array.from({ name: "Suryansh" }));
```

This example returns an empty array because there is no iterable structure.

### `Array.of()`
Creates an array from a list of values.

```js
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
```

---

## 8. Deep copy vs shallow copy

### Primitive values
Primitive values are copied by value.

### Arrays and objects
Arrays and objects are copied by reference.

```js
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);
```

Now both arrays may reflect the change because they point to the same reference.

Use spread syntax to copy arrays safely:

```js
const arr3 = [...arr1];
```

---

## 9. Important takeaway

Arrays are one of the most important data structures in JavaScript and are heavily used in DOM work, APIs, loops, and real-world apps.

Common array operations:
- add/remove items
- merge arrays
- flatten nested arrays
- convert strings to arrays
- filter and transform data

---

## 10. Summary

Key array methods:
- `push()`
- `pop()`
- `unshift()`
- `shift()`
- `join()`
- `concat()`
- `flat()`
- `Array.isArray()`
- `Array.from()`
- `Array.of()`

These are the most common methods used in JavaScript development.
