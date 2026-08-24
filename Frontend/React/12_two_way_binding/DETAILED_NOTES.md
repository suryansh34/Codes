# Detailed Notes — 12_two_way_binding

Purpose
- Demonstrates two-way binding in React through controlled components: form inputs mirror state and state updates reflect in the UI.

Key code snippet (from `src/App.jsx`)

```js
const [title, setTitle] = useState('aman')
<input value={title} onChange={e => setTitle(e.target.value)} />
```

Common mistakes
- Updating state incorrectly (mutating state directly) instead of using `setState` / `setTitle`.
- Binding performance issues when many inputs re-render unnecessarily — avoid by isolating inputs into memoized components.

Advanced topics to master
- Controlled components at scale:
  - Use form libraries (`react-hook-form`) to manage many fields with minimal re-rendering.
  - Use field arrays and nested structures for complex forms.

- Debouncing input updates:
  - For inputs that trigger expensive work (search, API calls), debounce or throttle the handler.

- Two-way binding beyond forms:
  - Synchronize UI with external sources (e.g., URL query params, localStorage) using `useEffect` and careful initialization.

Accessibility
- Ensure inputs have associated `label`s and update ARIA live regions for dynamic feedback when validation messages appear.
