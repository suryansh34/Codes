# Detailed Notes — 18_React_Router_DOM

Purpose
- Demonstrates using `react-router-dom` to build page routes and navigation across `Home`, `About_Us`, `Contact`, and `Products` pages.

Key issue observed (from `src/App.jsx`)
- `BrowserRouter` is imported but not used. The app renders `Navbar` and `Routes` directly. For routing to work in the browser, the tree must be wrapped with `BrowserRouter`:

```js
import { BrowserRouter } from 'react-router-dom'

createRoot(...).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

Or wrap inside `App`:

```js
return (
  <BrowserRouter>
    <Navbar />
    <Routes> ... </Routes>
  </BrowserRouter>
)
```

Common mistakes
- Forgetting to wrap `Routes` with a router provider (BrowserRouter/HashRouter) prevents links and route matching from working.
- Using `<a>` tags instead of `<Link>` causes full page reloads; use `Link`/`NavLink` for client-side navigation.

Advanced topics to master
- Nested routes and layout routes: structure routes to allow persistent layout components (headers/footers) while rendering nested children.
- Route guards and authentication: protect routes and redirect unauthenticated users.
- Code splitting: use `React.lazy` and `Suspense` to lazy-load route components for performance.
- URL state: use query parameters and `useSearchParams` for filter/sort state.
