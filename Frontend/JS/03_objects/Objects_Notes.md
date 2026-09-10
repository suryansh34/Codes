# Objects Notes

## 1. What is an object?

An object is a collection of properties and methods.

```js
const JsUser = {
  name: "Suryansh",
  age: 21,
  email: "surya@gmail.com",
  isLoggedin: true
};
```

You can access properties using dot notation or bracket notation.

```js
console.log(JsUser.name);
console.log(JsUser["email"]);
```

---

## 2. Key names with spaces

When a property name contains spaces or special characters, use bracket notation.

```js
const JsUser = {
  "full_name": "Suryansh Sahu"
};

console.log(JsUser["full_name"]);
```

---

## 3. Symbols as object keys

Symbols are used to create unique keys.

```js
const mySym = Symbol("key1");

const JsUser = {
  [mySym]: "myKey",
  name: "Suryansh"
};
```

This is useful when you need unique property identifiers.

---

## 4. Updating object values

```js
JsUser.email = "surya@facebook.com";
```

If you freeze an object, values cannot be changed.

```js
Object.freeze(JsUser);
JsUser.email = "newemail@gmail.com"; // no effect
```

---

## 5. Adding methods to an object

```js
JsUser.greeting = function () {
  console.log("Hello Js User");
};

JsUser.greeting2 = function () {
  console.log(`Hello Js User, ${this.name}`);
};
```

`this` refers to the current object inside object methods.

---

## 6. Singleton objects

```js
const tinderUser = new Object();
```

This creates a singleton object.

An object created using literal syntax is not a singleton:

```js
const facebookUser = {};
```

---

## 7. Nested objects

```js
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    firstname: "ram",
    lastname: "surname"
  }
};

console.log(regularUser.fullname.firstname);
```

Optional chaining is helpful in case a nested property may not exist:

```js
console.log(regularUser.fullname?.firstname);
```

---

## 8. Merging objects

### `Object.assign()`

```js
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = Object.assign({}, obj1, obj2);
```

### Spread operator

```js
const obj4 = { ...obj1, ...obj2 };
```

Spread syntax is more common and cleaner.

---

## 9. Arrays of objects

```js
const users = [
  { id: 1, email: "some@gmail.com" },
  { id: 2, email: "some@gmail.com" }
];

console.log(users[1].email);
```

---

## 10. Object utilities

### `Object.keys()`
Returns all keys.

```js
console.log(Object.keys(facebookUser));
```

### `Object.values()`
Returns all values.

```js
console.log(Object.values(facebookUser));
```

### `Object.entries()`
Returns key-value pairs as arrays.

```js
console.log(Object.entries(facebookUser));
```

### `hasOwnProperty()`
Checks whether an object has a property.

```js
console.log(facebookUser.hasOwnProperty("name"));
```

---

## 11. Destructuring objects

```js
const course = {
  coursename: "javascript",
  price: "$99",
  courseInstructor: "john"
};

const { courseInstructor: instructor, price: p } = course;
console.log(instructor, p);
```

This gives shorter variable names for readability.

---

## 12. JSON

JSON is a lightweight format for data exchange.

```json
{
  "name": "Suryansh",
  "branch": "Data Science",
  "CGPA": "9.2"
}
```

JSON keys are always strings, and values are usually JSON-supported types.

---

## 13. Important takeaway

Objects are the heart of JavaScript data modeling. They are used for:
- config objects
- user data
- API responses
- nested data structures
- method containers

Learning object manipulation is essential before moving into advanced JavaScript and frameworks.
