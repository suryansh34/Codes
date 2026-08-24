# Detailed Notes — 21_context_api

Purpose
- Intended to demonstrate React Context API for sharing state (e.g., theme) across components without prop drilling.

Current state (observations)
- `context/ThemeContext.jsx` is a placeholder component and not a Context object/provider.
- `Navbar.jsx` and `Nav2.jsx` currently receive `theme` via props — the Context is not used.

How to implement a proper Theme Context

```js
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}){
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
```

Consuming context inside a component

```js
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Nav2(){
  const { theme } = useContext(ThemeContext)
  return <div>{theme}</div>
}
```

Common mistakes to avoid
- Creating a component named `ThemeContext` (a React component) instead of exporting the actual context object from that file.
- Calling `useContext` outside of a provider — ensure `ThemeProvider` wraps the component tree.

Advanced topics to master
- Performance:
  - Split context into multiple contexts to avoid re-rendering large trees when unrelated state changes.
  - Use selectors (custom hooks) to only read the needed parts of context.

- Theming strategies:
  - Use CSS variables with a context provider that toggles a root CSS class/attribute.
  - Persist theme choice in `localStorage` and hydrate on app mount.

Mini refactor
- Replace `context/ThemeContext.jsx` placeholder with an actual context and provider, update `src/main.jsx` to wrap the app with `ThemeProvider`, and convert `Nav2`/`Navbar` to consume context.
