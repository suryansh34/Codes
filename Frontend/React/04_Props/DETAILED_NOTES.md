# Detailed Notes — 04_Props

Purpose
- Shows how to pass data into components via props and how to use that data inside a presentational component.

Key file: `src/Components/Card.jsx`

```js
const Card = (props) => {
  return (
    <div className='parentCard'>
      <div className="card">
        <img src={props.img} alt="profile" />
        <h1>{props.user}</h1>
        <p>{props.description}</p>
        <button>Click Here</button>
      </div>
    </div>
  )
}

export default Card
```

Important takeaways
- Props are read-only: a component should not mutate `props`. Use local `useState` if you need to modify values.
- Destructure for clarity:

```js
const Card = ({img, user, description}) => ( ... )
```

- Provide `alt` text for images and sensible fallbacks when props are missing:

```js
<img src={img} alt={user ? `${user} avatar` : 'avatar'} />
```

Example of mapping data into multiple `Card` components (from `App.jsx`)

```js
const data = [
  {img: '...', user: 'Aman', description: 'A Police Officer'},
  {img: '...', user: 'Suryansh', description: 'A BTech Student'},
]

return <div className='parentCard'>{data.map((d, i) => <Card key={i} {...d} />)}</div>
```

Further improvements
- Use unique `key` values (avoid array index when items can reorder).
- Add PropTypes or convert to TypeScript to document expected props and types.
- Lift state up if parent needs to control card interactions (e.g., selection, favorite).
