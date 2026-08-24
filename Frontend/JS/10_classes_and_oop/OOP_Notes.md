# Classes and OOP Notes

## 1. OOP basics

OOP stands for Object-Oriented Programming.

It is a way to organize code with objects, classes, and reusable logic.

### Object
An object is a collection of properties and methods.

```js
const user = {
  username: "suryansh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(this.username);
  }
};
```

---

## 2. Constructor function

A constructor function creates multiple objects with the same structure.

```js
function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
}

const userOne = new User("Suryansh", 15, true);
const userTwo = new User("Yishuraj", 9, false);
```

`new` creates a new instance and avoids overwriting previous values.

---

## 3. Prototype

JavaScript objects can have prototypes that share methods.

```js
User.prototype.increment = function () {
  this.score++;
};

User.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};
```

Prototypes help reduce duplication.

---

## 4. `call()`

`call()` lets one function reuse another function’s context.

```js
function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}
```

This is useful when you want to borrow methods or set the `this` value explicitly.

---

## 5. Classes in ES6

Class syntax is cleaner and more modern.

```js
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}
```

This is the modern way to write constructors and methods.

---

## 6. Inheritance

Classes can inherit features from parent classes.

```js
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
```

This allows code reuse and organized structure.

---

## 7. Getter and setter

These allow controlled access to private-style properties.

```js
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}
```

This is useful for validation and transformation.

---

## 8. Static methods

Static methods belong to the class itself, not the instance.

```js
class User {
  static createId() {
    return `123`;
  }
}
```

```js
console.log(User.createId());
```

---

## 9. Object property descriptors

You can inspect and define property properties using `Object.getOwnPropertyDescriptor()` and `Object.defineProperty()`.

```js
const chai = {
  name: 'ginger chai',
  price: 250
};

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
```

This is useful when controlling property behavior such as enumerability and writability.

---

## 10. Four pillars of OOP

The main pillars are:
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

These concepts help build large, maintainable applications.

---

## 11. Summary

OOP is important because it helps you:
- model real-world entities
- reuse code
- organize logic into classes and objects
- build scalable JavaScript applications

The most relevant topics here are:
- constructor functions
- prototypes
- classes
- inheritance
- getters and setters
- static methods
