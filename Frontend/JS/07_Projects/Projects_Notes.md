# Projects and DOM Practice Notes

## 1. Project type overview

This folder contains small JavaScript projects built around the DOM.

The projects focus on:
- event handling
- color change on click
- BMI calculation
- digital clock
- number guessing game
- keyboard event detection
- temperature conversion
- price calculator

These are practical examples of using JavaScript with HTML and CSS.

---

## 2. Project 1: Color Changer

Concept:
- select all buttons
- attach click event listeners
- change the background color based on the clicked button ID

```js
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

This teaches:
- `querySelectorAll()`
- `forEach()`
- `addEventListener()`
- `event.target`

---

## 3. Project 2: BMI Calculator

Concept:
- take height and weight values from form inputs
- prevent default form submission
- calculate BMI
- display result

```js
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`;
});
```

Important checks:
- empty values
- negative values
- invalid numbers

---

## 4. Project 3: Digital Clock

Concept:
- update time every second with `setInterval()`

```js
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

This shows how JS interacts with time and the DOM.

---

## 5. Project 4: Guess the Number

Concept:
- random number is generated
- user enters a guess
- app validates the guess
- compares with the random number
- shows low/high hints
- tracks remaining guesses

Key parts:
- `Math.random()`
- `parseInt()`
- `addEventListener('click')`
- validation functions

```js
let randomNumber = parseInt(Math.random() * 100 + 1);
```

This project is a classic DOM logic exercise.

---

## 6. Project 5: Keyboard Check

Concept:
- listen for keydown events
- display key, key code, and code values

```js
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  `;
});
```

This demonstrates:
- keyboard events
- `event.key`
- `event.keyCode`
- `event.code`

---

## 7. General lessons from these projects

These projects teach real-world JavaScript patterns:
- DOM selection
- event listeners
- updating elements dynamically
- form handling
- input validation
- timer logic
- random values

These are the same skills used in almost every web app.

---

## 8. Summary

This folder is important because it connects theory to real UI work.

The most important skills you learn here are:
- reading user input
- responding to events
- changing the webpage dynamically
- building small interactive apps
