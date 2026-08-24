# Detailed Notes — 01_import_export

Purpose
- Small demo showing ES module `export` / `import` patterns across plain JS files. Good for learning module boundaries, default vs named exports, and namespace imports.

Files and what's exported
- `app.js`

```js
var arr = [2,3,5,6,8]
export var name = ["suryansh","sahu","hello","jio"]
export default arr
```

- `collection.js`

```js
let user2 = "Aman"
export let age = 30
export let skills = "coding"
export default user2
```

How the imports work (examples from `script.js`)

```js
import arr from './app.js'            // default import — receives the value from export default
import { name } from './app.js'       // named import — must match exported name
import * as all from './collection.js'// namespace import — an object containing all exports

console.log(arr)       // [2,3,5,6,8]
console.log(name[0])   // "suryansh"
console.log(all.age)   // 30
console.log(all.default) // the default export (user2)
```

Key ideas and best practices
- Default vs named:
  - Default export is the module's primary value. You can import it with any local name: `import foo from './mod'` (the exported symbol's original name does not need to match `foo`).
  - Named exports must be imported using the same exported identifier (or aliased): `import { name as alias } from './app.js'`.

- Namespace imports (`import * as ns`) are useful for grouping many small exports, but they add verbosity (`ns.something`) and make tree-shaking less obvious in some bundlers.

- When to use what:
  - Use named exports when a module exports several utilities: `export function add() {}` and `export function sub() {}`.
  - Use default export when the module's main purpose is a single value (e.g., a React component or a single configuration object).

Common pitfalls seen in this folder
- Forgetting `.js` extension in environments that require it for ES modules in the browser (the project uses `type="module"` in HTML) — include `./app.js` not `./app` when loading directly in browser.
- Using the same identifier name in local scope shadows imported bindings.
- Misunderstanding multiple `return`-style expressions: `return "suryansh"; "sahu"` only returns the first string — the rest are unreachable.

Small checklist for refactoring these files
- Prefer `const`/`let` instead of `var` for predictable scoping.
- Add JSDoc comments on exported functions/objects if they are public API for others to consume.
- When a module has both default and named exports that are conceptually related, consider splitting into two modules: one for the main value (default) and one for utilities (named).

Mini exercises
- Change `app.js` to export the array as a named export instead of default, then update `script.js` accordingly.
- Replace `var` with `const` and verify behavior.

References
- ES Modules (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
