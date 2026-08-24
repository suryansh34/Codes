# Iterations and Loops Notes

## 1. `for` loop

Used when the number of iterations is known.

```js
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
```

You can also create nested loops:

```js
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

---

## 2. Break and continue

### `break`
Stops the loop immediately.

```js
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("Detected 5");
    break;
  }
  console.log(i);
}
```

### `continue`
Skips the current iteration and moves to the next one.

```js
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(i);
}
```

---

## 3. `while` loop

Runs while a condition is true.

```js
let index = 0;

while (index <= 10) {
  console.log(index);
  index = index + 2;
}
```

---

## 4. `do while` loop

The code executes at least once before checking the condition.

```js
let score = 11;

do {
  console.log("Score is: " + score);
  score++;
} while (score <= 10);
```

---

## 5. `for...of` loop

Used to iterate over arrays and strings.

```js
const myArray = [2, 3, 4, 5];

for (const num of myArray) {
  console.log(num);
}
```

Strings can also be iterated:

```js
const greeting = "Hello Beta";

for (const greet of greeting) {
  if (greet === " ") continue;
  console.log(greet);
}
```

---

## 6. `Map`

A `Map` stores key-value pairs and preserves insertion order.

```js
const map = new Map();
map.set("Brother", "Member_1");
map.set("Mother", "Member_3");

for (const [key, value] of map) {
  console.log(key, value);
}
```

`Map` is iterable, unlike plain objects.

---

## 7. `for...in` loop

Used to loop through object keys.

```js
const myObj = {
  js: "Javascript",
  cpp: "C++",
  py: "Python"
};

for (const key in myObj) {
  console.log(`${myObj[key]} shortcut is : ${key}`);
}
```

It can also iterate over arrays, but it gives indexes as keys.

```js
const animal = ["dog", "bandar", "hathi"];

for (const key in animal) {
  console.log(animal[key]);
}
```

---

## 8. `forEach()`

A built-in array method that runs a callback for each item.

```js
const coding = ["Javascript", "C++", "Python"];

coding.forEach((val) => {
  console.log(val);
});
```

You can also access index and original array:

```js
coding.forEach((val, index, arr) => {
  console.log(`Value: ${val}, index: ${index}`);
});
```

`forEach` does not return a new array.

---

## 9. `filter()`

Returns a new array with elements that pass a condition.

```js
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);
console.log(newNums);
```

Example with objects:

```js
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992 }
];

const userBooks = books.filter((book) => book.genre === "Non-Fiction");
```

---

## 10. `map()`

Creates a new array by transforming items.

```js
const myNumbers = [1, 2, 3, 4, 5];

const newNums = myNumbers.map((number) => number * 10);
console.log(newNums);
```

Chaining is possible:

```js
const result = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num > 30);
```

---

## 11. `reduce()`

Used to reduce an array to one value, usually a sum.

```js
const myNums = [1, 2, 3];

const total = myNums.reduce((acc, currVal) => acc + currVal, 0);
console.log(total); // 6
```

`acc` is the accumulator and `currVal` is the current value.

Example with shopping cart:

```js
const shoppingCart = [
  { itemName: "JS Course", price: 2999 },
  { itemName: "C Course", price: 1999 }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
```

---

## 12. Important takeaway

Loops and iteration methods are used to:
- repeat logic
- traverse arrays and objects
- transform data
- filter relevant items
- compute totals

The most useful ones are:
- `for`
- `while`
- `for...of`
- `for...in`
- `forEach`
- `filter`
- `map`
- `reduce`
