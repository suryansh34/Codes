# Detailed Notes — 06_css

Purpose
- Demonstrates component-level CSS using CSS Modules to scope styles and avoid naming collisions.

Key files
- `src/Components/button/Button.jsx` — imports `Button.module.css` and applies classes via the imported `styles` object.
- `src/Components/header/Header.jsx` — imports `Header.module.css` and combines classes using template literals.

What CSS Modules do
- When you `import styles from './Button.module.css'`, each class name is converted to a unique identifier during build (e.g., `btn_abc123`) so styles are local to the module.

Example patterns

```js
import styles from './Button.module.css'
return <div className={styles.btn}>This is button</div>
```

Notes from `Header.jsx`
- It uses `className={`${styles.header}`}` and `className={styles.logo}` — prefer the simpler `className={styles.header}` unless combining multiple classes.

Best practices
- Keep component styles colocated: the component file and its module CSS in the same folder.
- For conditional classes, use libraries like `clsx` or `classnames`:

```js
import cx from 'clsx'
<div className={cx(styles.header, cond && styles.active)} />
```

- Use CSS variables for theming if multiple components share color tokens.

Accessibility & semantics
- Ensure the component markup uses semantic elements (e.g., `header`, `button`) and that interactive elements are keyboard-accessible.

Refactor tips
- If many components share styles, extract shared classes into a global CSS file (e.g., `src/styles/common.module.css`) and import where needed.
