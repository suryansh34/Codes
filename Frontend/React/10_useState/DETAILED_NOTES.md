# Detailed Notes — 10_useState

Purpose
- Demonstrates `useState` for object and array state, showing immutable updates via shallow copying.

Key examples observed
- `App2.jsx` uses object state and updates by creating a shallow copy:

```js
const [num, setNum] = useState({user: 'Aman', age: 18})
const btnClicked = ()=>{
  const newName = {...num}
  newName.user = 'Sarthak'
  newName.age = 24
  setNum(newName)
}
```

- `App3.jsx` uses array state and updates by cloning and pushing:

```js
const [num, setNum] = useState([10,20,30])
const btnClicked = ()=>{
  const newNum = [...num]
  newNum.push(99)
  setNum(newNum)
}
```

Important concepts
- Always treat state as immutable: create new objects/arrays when updating so React can detect changes.
- For multiple updates based on previous state, prefer functional updates to avoid stale closures:

```js
setNum(prev => ({...prev, age: prev.age + 1}))
setNum(prev => [...prev, 99])
```

Performance notes
- For large arrays, avoid copying entire arrays on tiny updates; consider data structures or methods that minimize work.
- Use `useReducer` for complex state transitions with many fields.

Edge cases
- Avoid using array index as `key` when rendering dynamic lists because reordering breaks identity.
