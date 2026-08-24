# Detailed Notes — 09_functions

Purpose
- Demonstrates listening to DOM/interaction events inside a React component (input typing, button clicks, wheel scrolling) and handling them with functions.

Key observations from `src/App.jsx`
- The component defines `inputChanging`, `btnClicked`, and `pageScrolling` functions and attaches `onWheel` to the top-level `div`.

Important patterns
- Event callbacks receive event objects — e.g., the wheel handler uses `elem.deltaY` to determine scroll direction.
- Keep event handlers lightweight; delegate heavy computation or network calls to web workers or debounced functions.

Example: wheel handler usage

```js
const pageScrolling = (deltaY)=>{
  if(deltaY>0) console.log('scrolling down')
  else console.log('scrolling up')
}

<div onWheel={(e) => pageScrolling(e.deltaY)}>
  ...
</div>
```

Best practices
- Debounce or throttle high-frequency events like `onWheel` or `onMouseMove` to avoid performance issues.
- For cross-browser consistency, normalize event values or use libraries that abstract differences.
- Use `useCallback` when passing handlers to memoized children to avoid unnecessary re-renders.

Testing
- Simulate events with testing libraries (React Testing Library) and assert behavior.
