# Detailed Notes — 02_folder

Purpose
- Minimal Vite + React starter to demonstrate app mounting, strict mode, and a simple component structure.

Key files
- `index.html` — application shell; includes `<script type="module" src="script.js"></script>` in some templates or the dev server injects the module script.
- `src/main.jsx` — entry point that mounts the React tree.

`src/main.jsx` explained

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- `createRoot` (React 18+) creates a concurrent-enabled root. `StrictMode` helps highlight unsafe lifecycle usage and other warnings in development.

`src/App.jsx` overview
- The current `App` returns two simple divs with static content. It's intentionally minimal to show structure.

Recommendations and deeper notes
- Project structure: keep `main.jsx` minimal — mount provider wrappers (Router, ThemeProvider) here.
- Prefer `index.css` for global resets and import component-level styles from within components.
- For learning, replace the hard-coded names with an array and map to child components to illustrate composition.

Example: turn the two divs into mapped children

```js
const people = ['Ramesh', 'Suresh']
return (
  <div>
    {people.map(name => (
      <div key={name}><h1>{name}</h1></div>
    ))}
  </div>
)
```

Dev commands

```bash
npm install
npm run dev
```
