# Detailed Notes — 08_UI_project

Purpose
- A larger UI-oriented project composed of many small components under `Components/Section1` and `Section2`. This is a good example of breaking a complex page into focused parts.

Key observed component: `src/Components/Section1/Navbar.jsx`

```js
const Navbar = () => (
  <div className='flex items-center justify-between px-20 py-5'>
    <h4 className='bg-black text-white px-6 py-3 rounded-full text-sm'>Tagret Audience</h4>
    <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-wider text-sm'>Digital Banking Platform</button>
  </div>
)
```

What this demonstrates
- Composition: the UI is built from many specialized components (e.g., `Navbar`, `HeroText`, `ImageContainer`).
- Utility classes (likely Tailwind) are used for layout and spacing (`flex`, `items-center`, `px-20`).

Design guidance
- Break sections into presentational and container components: container handles data, presentational only renders props.
- Keep props minimal: pass only what the child needs (avoid passing entire objects unless necessary).

Performance & maintainability
- Avoid deep prop drilling: if many components need the same state, consider Context API.
- Group related components into folders (already done in `Section1`), with an `index.js` to simplify imports.

Accessibility
- Ensure buttons have discernible text and consider focus styles for keyboard users.

Developer ergonomics
- Use consistent naming conventions: `Section1`, `Section2` — prefer descriptive names like `HeroSection`.
- Add storybook or simple component previews for visual testing during development.
