# Events Notes

## 1. What are events?

Events are actions that happen in the browser, such as:
- click
- keypress
- submit
- mouseover
- keydown

JavaScript listens for these events and responds.

---

## 2. `addEventListener()`

This is the main way to handle events.

```js
const gfg = document.querySelector('.gfg');
gfg.addEventListener('click', e);
```

This means: when the user clicks the element, run the function `e`.

---

## 3. Event object

When an event occurs, JavaScript passes an event object.

```js
button.addEventListener('click', function (e) {
  console.log(e);
  console.log(e.target);
});
```

`e.target` tells you which element fired the event.

---

## 4. Common events

- `click`
- `submit`
- `keydown`
- `keyup`
- `mouseover`
- `change`

Example:

```js
window.addEventListener('keydown', (e) => {
  console.log(e.key);
});
```

---

## 5. Preventing default behavior

Forms submit by default and reload the page.

```js
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
```

This prevents the default browser action.

---

## 6. Why events matter

Events are what make pages interactive.

Examples:
- button click changes background color
- form submit checks input
- keyboard press displays key details
- submitting data triggers logic

---

## 7. Summary

Dom + events = interactivity.

Events connect user actions to JavaScript logic.

The essential concept is:
- element listens for event
- event triggers function
- function handles behavior
