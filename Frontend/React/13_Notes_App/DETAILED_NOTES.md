# Detailed Notes — 13_Notes_App

Purpose
- Builds a simple notes application demonstrating stateful lists, adding/removing items, and basic UI layout.

Key patterns (from `src/App.jsx`)
- Managing multiple pieces of state for controlled inputs (`title`, `details`).
- Storing a list of notes in component state (`task`) and mapping to render cards.

Important code patterns

```js
const [task, setTask] = useState([])
const submitHandler = (e)=>{
  e.preventDefault()
  setTask(prev => [...prev, {title, details}])
  setTitle(''); setDetails('')
}

const deleteNote = (idx) => setTask(prev => prev.filter((_, i) => i !== idx))
```

Common mistakes
- Using array index as `key` can cause UI issues when items reorder — prefer unique IDs (e.g., `uuid`).
- Mutating arrays directly (using `splice`) then setting same reference — always return a new array to trigger re-render.

Advanced topics to master
- Persistence:
  - Sync notes to `localStorage` or an indexedDB for offline support.
  - Use `useEffect` to hydrate state on mount and persist on changes.

- Performance:
  - Virtualize long lists (react-window/react-virtualized) to handle many notes.

- Collaboration & syncing:
  - Implement optimistic updates with server sync and conflict resolution strategies.

Accessibility & UX
- Ensure each note card is keyboard-focusable and provide confirmation for destructive actions (delete).
