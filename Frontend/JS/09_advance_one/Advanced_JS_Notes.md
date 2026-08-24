# Advanced JavaScript Notes

## 1. Promise basics

A Promise represents a value that may be available now, later, or never.

It is useful for asynchronous tasks such as:
- API requests
- database calls
- file operations
- network communication

```js
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task is complete');
    resolve();
  }, 1000);
});
```

---

## 2. `then()`, `catch()`, `finally()`

```js
promiseOne.then(function () {
  console.log('Promise consumed');
});
```

```js
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myusername) => {
    console.log(myusername);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log('The promise is either resolved or rejected'));
```

Important concepts:
- `resolve()` = success
- `reject()` = failure
- `then()` = handle success
- `catch()` = handle error
- `finally()` = runs regardless

---

## 3. Async / Await

`async` functions make asynchronous code easier to read.

```js
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
```

`await` pauses execution until the Promise resolves.

---

## 4. Fetch API

```js
fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

`fetch()` returns a Promise.

The response is usually converted to JSON with:

```js
response.json()
```

---

## 5. Why async matters

Modern JavaScript is often asynchronous because:
- network calls take time
- database operations are slow
- user interactions happen unpredictably

Without async handling, UI and logic would block or behave incorrectly.

---

## 6. Summary

This file introduces the asynchronous programming model in JavaScript.

The most important topics are:
- Promise creation and chaining
- `then()` and `catch()`
- `async` and `await`
- `fetch()`
- general async flow

These are foundational for real-world frontend and backend development.
