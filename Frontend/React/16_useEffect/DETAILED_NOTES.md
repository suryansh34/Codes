# Detailed Notes — 16_useEffect

Purpose
- Demonstrates `useEffect` for side effects, dependency arrays, and lifecycle-like behaviors in functional components.

Key code points (from `src/App.jsx`)
- Multiple `useEffect` usages show different dependency arrays:

```js
useEffect(()=>{ aChanging() }, [a])

useEffect(()=>{ console.log('use effect is running...') }, [num])
```

Common mistakes observed
- Not invoking functions inside `useEffect`: ensure you call the function (e.g., `getData()`), not just reference it.
- Misunderstanding dependencies:
  - Omitting dependencies can lead to stale closures or missed updates.
  - Including objects/arrays without stable identity causes effects to re-run; memoize or derive stable values.
- Overusing `useEffect` for things that can be derived during render — prefer computing values directly when possible.

Advanced topics to master
- Cleanup functions: return a cleanup from `useEffect` to unsubscribe or cancel timers:

```js
useEffect(()=>{
  const id = setInterval(tick, 1000)
  return ()=> clearInterval(id)
}, [])
```

- Avoiding unnecessary runs:
  - Use `useCallback` / `useMemo` to keep dependencies stable when functions/values are passed to effects.

- Fetching patterns:
  - Use `AbortController` to cancel fetches on unmount.
  - Prefer `react-query` / `SWR` for robust data fetching and caching instead of manual useEffect fetch logic.

- Debugging tips:
  - Log the dependency array values to ensure they change as expected.
  - Use ESLint rule `react-hooks/exhaustive-deps` to catch missing dependencies.

Mini exercises
- Convert a `useEffect` that depends on an object to use a primitive dependency (e.g., `obj.id`) or memoize the object.
