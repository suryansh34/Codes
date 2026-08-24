# Detailed Notes — 07_tailwind

Purpose
- Demonstrates using Tailwind CSS utility classes directly in JSX for rapid UI prototyping and consistent utility-driven styling.

Observed file
- `src/App.jsx` uses Tailwind classes: `className='h-screen w-full bg-amber-500'` — this indicates Tailwind is expected to be configured in the project.

Tailwind basics
- Tailwind provides low-level utility classes (e.g., `p-4`, `text-sm`, `bg-amber-500`) so you compose UI without writing custom CSS.
- Typical setup steps:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then in `src/index.css` include:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Best practices
- Use `@apply` sparingly to create semantic component classes when utilities get repetitive.
- Keep Tailwind config (`tailwind.config.js`) tidy and define custom color scales or breakpoints only when needed.
- Use `clsx` or conditional utilities to toggle classes based on state.

Accessibility
- Tailwind is purely styling — ensure you still add `aria-*` attributes and proper semantics to markup.

When not to use Tailwind
- For highly dynamic styles or complex animations, a CSS or CSS-in-JS approach may be more maintainable.
