# Detailed Notes — 14_local_storage

Purpose
- Demonstrates persisting data in the browser via `localStorage` and JSON serialization.

Key snippets and patterns

```js
// Save
localStorage.setItem('user', JSON.stringify(user))
// Load
const user = JSON.parse(localStorage.getItem('user'))
```

Common mistakes
- Storing non-serializable values (functions, DOM nodes) causes loss when serializing.
- Not handling `null` when reading: `JSON.parse(null)` throws; always guard with fallback: `JSON.parse(localStorage.getItem('user') || '{}')`.
- Not handling storage size limits and potential `QuotaExceededError`.

Advanced topics to master
- Synchronization across tabs:
  - Use the `storage` event to sync state when other tabs change localStorage.

- Migration & schema versioning:
  - Store a version alongside data and write migration routines for breaking changes.

- Security considerations:
  - Do not store sensitive data (passwords, tokens) in `localStorage`; prefer secure HTTP-only cookies.

- Alternatives:
  - Use IndexedDB (via `idb` library) for larger, structured data sets with transactions.

Example: hydrate state with `useEffect`

```js
useEffect(()=>{
  const saved = localStorage.getItem('notes')
  if(saved) setNotes(JSON.parse(saved))
}, [])

useEffect(()=>{
  localStorage.setItem('notes', JSON.stringify(notes))
}, [notes])
```
