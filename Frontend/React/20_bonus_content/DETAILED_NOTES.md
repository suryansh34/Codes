# Detailed Notes — 20_bonus_content

Purpose
- Folder for extras: small components, helpers, and experimental ideas. Observed `Navbar.jsx` demonstrates a common event handler bug.

Bug found in `src/components/Navbar.jsx`

```js
function changeTheme(){ props.setTheme('Dark') }
return <button onClick={changeTheme()}>Change Theme</button>
```

Problem: `changeTheme()` is invoked immediately during render. The `onClick` prop should receive a function reference, not the result of a call. Fix:

```js
<button onClick={changeTheme}>Change Theme</button>
// or inline
<button onClick={() => props.setTheme('Dark')}>Change Theme</button>
```

Common mistakes collected
- Calling handlers in JSX instead of passing the function reference.
- Passing props that are undefined (e.g., `props.setTheme` missing) — add prop checks or defaults.

Advanced topics to master
- Theme systems:
  - Implement theming with CSS variables and a ThemeContext provider instead of prop-drilling.
  - Support dark/light mode via `data-theme` attribute on `<html>` and toggle CSS variables.

- Testing interactive components:
  - Write unit tests that assert handlers are called (jest + React Testing Library) and ensure no immediate invocation happens.
