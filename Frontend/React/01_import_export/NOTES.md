# Notes — 01_import_export

Summary of learning from the `01_import_export` folder: examples and patterns for ES module imports/exports and small JS/JSX snippets.

## Files
- `app.js`: exports
  - `export default arr` — default export (an array `arr`).
  - `export var name = [...]` — named export (`name`).

- `collection.js`: exports
  - `export default user2` — default export (string `user2`).
  - `export let age = 30`, `export let skills = "coding"` — named exports.

- `script.js`: imports and usage
  - `import arr from './app.js'` — importing the default export.
  - `import {name} from './app.js'` — importing a named export.
  - `import * as all from './collection.js'` — namespace import; `all` is an object with the module's exports (e.g., `all.default`, `all.age`).
  - Example console logs are present to show how to access values and array elements.

- `hello.jsx` and `tempCodeRunnerFile.js`:
  - `hello.jsx` shows a plain function `code()` and notes that calling as `code()` or using a JSX-like `<code/>` comment are conceptually similar in demo context.
  - `tempCodeRunnerFile.js` contains a simple function returning a string (minor note: the line `return "suryansh"; "sahu"` returns only the first string — subsequent expression is ignored).

## Key Concepts
- Default vs named exports:
  - A module can have one `default` export and multiple named exports.
  - Default imports do not use braces: `import value from './mod.js'`.
  - Named imports use braces: `import {name, age} from './mod.js'`.

- Namespace import:
  - `import * as ns from './mod.js'` collects all exports under `ns` (access `ns.default` for the default export).

- Practical tips:
  - Use named exports for utilities that may be imported selectively.
  - Use default export for the primary value of a module (e.g., a main array or default component).
  - When importing both default and named exports from the same file, you can write `import def, {named} from './mod.js'`.
  - Watch return statements: only the first returned value is used; writing multiple comma/semicolon-separated strings after `return` doesn't return multiple values.

## Quick examples

```js
// app.js
export default [2,3,5]
export const name = ["alice","bob"]

// script.js
import arr, {name} from './app.js'
import * as col from './collection.js'
console.log(arr[0], name[0], col.age)
```

## Next steps you might want
- Convert `hello.jsx` into a small React component.
- Add comments in each source file linking back to these notes.

---
Generated from the source files in this folder to capture import/export patterns and small gotchas.
