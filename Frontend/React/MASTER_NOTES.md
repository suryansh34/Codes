# React Learning Master Notes

This is the complete revision sheet for all the React learning folders in this workspace.

---

## 1. 01_import_export

### Topic
ES modules, `import`, `export`, default exports, named exports, namespace imports.

### Key ideas
- `export default` is used for a main value from a file.
- `export const ...` is used for named values.
- `import { value } from './file.js'` reads named exports.
- `import * as all from './file.js'` creates a namespace object.

### Example
```js
export const name = 'Suryansh';
export default ['a', 'b', 'c'];

import arr from './app.js';
import { name } from './app.js';
import * as all from './collection.js';
```

### Best practice
- Default export for main value
- Named exports for multiple utilities
- Use clear module boundaries

---

## 2. 02_folder

### Topic
Project structure and React app setup.

### Key ideas
- `src` holds React logic
- `public` holds static files
- `main.jsx` starts the app
- `App.jsx` is the root component
- `index.css` styles the app

### Important concept
React renders through components, not direct DOM code.

---

## 3. 03_Components

### Topic
Reusable React components.

### Key ideas
- Components are functions that return JSX.
- Component names should use PascalCase.
- Components can be reused across the app.

### Example
```jsx
function Card() {
  return <div className="card">Hello</div>;
}
```

### Best practice
- One component = one focus
- Keep reusable UI in separate files

---

## 4. 04_Props

### Topic
Passing data to components using props.

### Key ideas
- Props are similar to function arguments.
- Parent passes data to child.
- Props are read-only.

### Example
```jsx
function Card({ title, text }) {
  return <div><h2>{title}</h2><p>{text}</p></div>;
}
```

### Best practice
- Destructure props for cleaner code
- Use default values when needed

---

## 5. 05_card_project

### Topic
A simple card-based UI application.

### Key ideas
- Reusable repeating layout blocks
- Card component patterns
- Styling with CSS classes

### Best practice
- Keep card content dynamic via props
- Use consistent spacing and alignment

---

## 6. 06_css

### Topic
CSS styling in React.

### Key ideas
- Global CSS vs component CSS
- CSS file import in React
- CSS Modules for local styling

### Example
```jsx
import styles from './Button.module.css';
<button className={styles.primary}>Click</button>
```

### Best practice
- Keep naming clear
- Avoid global style conflicts

---

## 7. 07_tailwind

### Topic
Tailwind utility-first styling.

### Key ideas
- Write classes directly in JSX
- Faster styling workflow
- Consistent design patterns

### Example
```jsx
<div className="bg-slate-900 text-white p-6 rounded-xl">
  Hello Tailwind
</div>
```

### Best practice
- Use utility classes for common styling
- Add custom CSS only when necessary

---

## 8. 08_UI_project

### Topic
Building complete UI sections and landing page layouts.

### Key ideas
- Break large screens into reusable parts
- Navbar, hero, cards, section blocks
- Visual hierarchy and spacing

### Best practice
- Keep the page modular
- Maintain consistent spacing and alignment

---

## 9. 09_functions

### Topic
JavaScript and React functions.

### Key ideas
- Functions can handle events and calculations
- Callback functions and handlers are important in React
- Logic should be small and readable

### Example
```jsx
const handleClick = () => {
  console.log('Clicked');
};
```

### Best practice
- Name handlers clearly: `handleSubmit`, `handleDelete`
- Keep functions small and purposeful

---

## 10. 10_useState

### Topic
React state management using `useState`.

### Key ideas
- State stores data that changes over time
- `useState` causes re-render when updated
- Never mutate state directly

### Example
```jsx
const [count, setCount] = useState(0);
setCount(prev => prev + 1);
```

### Important rule
Always create a new object or array before updating state.

---

## 11. 11_form_handling

### Topic
Handling user input and form events.

### Key ideas
- Controlled form inputs
- `onChange` updates state
- `onSubmit` handles form submit

### Example
```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Best practice
- Use `preventDefault()` for submit logic
- Validate input before processing

---

## 12. 12_two_way_binding

### Topic
Two-way data binding between input and state.

### Key ideas
- User input updates state
- State updates input value
- This keeps the UI and state in sync

### Example
```jsx
const [text, setText] = useState('');
<input value={text} onChange={(e) => setText(e.target.value)} />
```

---

## 13. 13_Notes_App

### Topic
A note-taking app using React state.

### Key ideas
- Add notes
- Display notes in list form
- Manage dynamic array data

### Best practice
- Use unique IDs for each note
- Render lists with `map()`
- Use stable keys

---

## 14. 14_local_storage

### Topic
Persisting data in browser storage.

### Key ideas
- `localStorage` stores data in the browser
- Use `JSON.stringify` and `JSON.parse`
- Data persists across refreshes

### Example
```js
localStorage.setItem('notes', JSON.stringify(notes));
const saved = JSON.parse(localStorage.getItem('notes') || '[]');
```

### Best practice
- Handle missing values safely
- Save data when state changes

---

## 15. 15_api_calls

### Topic
Fetching data from API endpoints.

### Key ideas
- Use `fetch` or `axios`
- Async operations require loading and error states
- API data is often managed with `useState` and `useEffect`

### Example
```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

### Best practice
- Show loading state while fetching
- Handle network errors gracefully

---

## 16. 16_useEffect

### Topic
Side effects in React using `useEffect`.

### Key ideas
- Effects run after render
- Use for API calls, timers, subscriptions, cleanup
- Dependency array controls when it runs

### Example
```jsx
useEffect(() => {
  console.log('Mounted');
  return () => console.log('Cleanup');
}, []);
```

### Best practice
- Put all dependencies in the array
- Clean up timers and listeners properly

---

## 17. 17_Gallery_Project

### Topic
Image gallery and media layout.

### Key ideas
- Display images in grid format
- Reuse image cards with props
- Use CSS for layout and hover effects

### Best practice
- Keep image ratios consistent
- Make gallery responsive

---

## 18. 18_React_Router_DOM

### Topic
Client-side routing in React.

### Key ideas
- `BrowserRouter` wraps app routes
- `Routes` define route mapping
- `Route` renders a component for a path
- `Link` handles navigation without reload

### Example
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### Best practice
- Use `Link` instead of `<a>` for internal navigation
- Wrap app with router correctly

---

## 19. 19_advanced_routing

### Topic
Advanced routes, dynamic paths, nested routes, and 404 handling.

### Key ideas
- Dynamic parameters: `/course/:id`
- `useParams()` reads route values
- NotFound pages handle invalid URLs

### Example
```jsx
<Route path="/course/:id" element={<CourseDetail />} />
```

### Best practice
- Use clear route structure
- Add fallback page for invalid routes

---

## 20. 20_bonus_content

### Topic
Extra React ideas and advanced patterns.

### Key ideas
- Useful extension concepts beyond basics
- Better structure and reusable logic
- Helps improve real-world app building

### Best practice
- Refactor repeated logic into reusable functions/hooks
- Keep code clean and maintainable

---

## 21. 21_context_api

### Topic
Global data sharing through Context API.

### Key ideas
- Shared data without prop drilling
- `createContext()` creates a global store
- `useContext()` reads the value in child components

### Example
```jsx
const ThemeContext = createContext();

<ThemeContext.Provider value={{ dark, setDark }}>
  <App />
</ThemeContext.Provider>
```

### Best practice
- Use Context for global state like theme/auth/settings
- Avoid overusing it for every local state

---

# Quick Revision Checklist

## React basics
- Components
- JSX
- Props
- State
- Events
- Lists

## Intermediate topics
- Forms
- Local storage
- API fetch
- useEffect
- Routing

## Advanced topics
- Dynamic routes
- Context API
- Reusable architecture
- App-level state sharing

---

# Important React Rules

1. Components must start with uppercase letters.
2. State should not be mutated directly.
3. Use `key` properly while mapping arrays.
4. Use `useEffect` for side effects only.
5. Prefer `Link` over raw anchor tags for routing.
6. Keep components small and reusable.
7. Use props for parent-to-child communication.
8. Use context only for app-wide shared data.

---

# Final advice

To master React, focus on these three habits:
- Build small components
- Practice state updates carefully
- Reuse logic instead of duplicating code

This project set is a strong foundation for becoming comfortable with modern React development.
