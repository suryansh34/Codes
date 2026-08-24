# Detailed Notes — 03_Components

Purpose
- Demonstrates building and reusing a simple React component (`Card.jsx`). Good for practicing component structure and composition.

Key file: `src/Components/Card.jsx`

```js
function Card(){
    return (
    <div className="card">
        <h1>Suryansh</h1>
        <p>Lorem ipsum...</p>
    </div>    
)}

export default Card;
```

What this demonstrates
- A presentational component that renders static content.
- `App.jsx` imports `Card` and renders it multiple times to show reuse.

How to improve and extend
- Make the component accept props so it can display different content per instance.

```js
function Card({title, body}){
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}
```

- Add PropTypes (or TypeScript) to document expected props.
- Add semantic markup and accessibility: use `article` for card content, supply `alt` on images, ensure keyboard focus for interactive elements.

Example: usage in `App.jsx`

```js
<Card title="Suryansh" body="Short bio..." />
```

Styling notes
- Centralize shared layout styles in `App.css` and component-specific styles either via CSS Modules or inline CSS-in-JS patterns.
