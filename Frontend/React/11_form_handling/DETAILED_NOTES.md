# Detailed Notes — 11_form_handling

Purpose
- Demonstrates basic form submission handling in React using `onSubmit` and preventing default browser behavior.

Key example (from `src/App.jsx`)

```js
const submitHandler = (e) => {
  e.preventDefault()
  console.log('Form Submitted')
}

<form onSubmit={submitHandler}>
  <input type="text" placeholder='Enter Your Name:' />
  <button>Submit</button>
</form>
```

Common mistakes
- Forgetting `e.preventDefault()` which causes a full-page reload and resets state.
- Reading values directly from DOM elements instead of using controlled inputs leads to less predictable state handling.
- Not validating input before submission (e.g., missing required fields) — always validate on submit and provide user feedback.

Controlled vs Uncontrolled
- Controlled inputs: component state owns the value (`value={state}` + `onChange`), making it easy to validate and reset.
- Uncontrolled inputs: use refs to access DOM values; acceptable for simple forms but less flexible.

Advanced topics to master
- Form validation strategies:
  - Synchronous: simple checks in submit handler.
  - Asynchronous: server-side validation and debounced uniqueness checks.
  - Libraries: `react-hook-form`, `Formik` for scalable form state management.

- Performance:
  - Minimize re-renders by isolating input components and using `useCallback` for handlers.
  - Use `react-hook-form` for minimal re-renders and built-in validation.

- Accessibility:
  - Associate inputs with labels using `label` and `htmlFor`.
  - Provide ARIA attributes for complex widgets and error messages.

Mini exercise
- Convert the example to a controlled input and add simple validation:

```js
const [name, setName] = useState('')
const submitHandler = (e) => { e.preventDefault(); if(!name) return setError('Required') }
<input value={name} onChange={e=>setName(e.target.value)} />
```
