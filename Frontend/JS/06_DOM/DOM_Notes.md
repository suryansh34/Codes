# DOM Notes

## 1. What is DOM?

DOM stands for Document Object Model.

It is the browser’s representation of an HTML page as a tree of objects.

JavaScript can access and manipulate HTML using the DOM.

---

## 2. Selecting elements

### `document.getElementById()`

```js
const title = document.getElementById("title");
```

### `document.querySelector()`

```js
const firstItem = document.querySelector(".list_item");
```

### `document.querySelectorAll()`

```js
const allItems = document.querySelectorAll(".list_item");
```

This returns a NodeList.

---

## 3. Accessing children and parents

```js
const parent = document.querySelector(".parent");
console.log(parent.children[0].innerHTML);
```

Some important properties:
- `parent.children`
- `parent.firstElementChild`
- `parent.lastElementChild`
- `dayOne.parentElement`
- `dayOne.nextElementSibling`

```js
const dayOne = document.querySelectorAll(".day")[2];
console.log(dayOne.parentElement);
```

---

## 4. `childNodes` vs children

```js
console.log(parent.childNodes);
```

`childNodes` includes text nodes and comments, while `children` contains only element nodes.

---

## 5. Changing text and HTML

### `innerHTML`

```js
secondLang.innerHTML = "Mojo";
```

### `textContent`

```js
newli.textContent = "Gojo";
```

### `innerText`

```js
title.innerText
```

It only shows visible text, while `textContent` includes hidden text as well.

---

## 6. Creating new elements

```js
const div = document.createElement("div");
```

Then set attributes or styles:

```js
div.className = "main";
div.id = "myId";
div.style.backgroundColor = "green";
div.style.padding = "12px";
```

Add text:

```js
const addText = document.createTextNode("Chai aur Code");
div.appendChild(addText);
```

Append to body:

```js
document.body.appendChild(div);
```

---

## 7. Appending and removing elements

### Append new list item

```js
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = langName;
  document.querySelector(".langauge").appendChild(li);
}
```

### Remove element

```js
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
```

### Replace element

```js
const newli = document.createElement("li");
newli.textContent = "Gojo";
secondLang.replaceWith(newli);
```

---

## 8. `outerHTML`

This replaces the whole element, including its tag.

```js
firstLang.outerHTML = "<li>Koko</li>";
```

---

## 9. Event handling

```js
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target.id);
  });
});
```

`e.target` tells which element triggered the event.

---

## 10. Important takeaway

DOM manipulation is how JavaScript changes the page dynamically.

Key ideas:
- select elements
- read or update content
- create and remove elements
- handle user events
- change CSS and attributes

This is the foundation of interactive web pages.
