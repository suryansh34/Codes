# Detailed Notes — 05_card_project

Purpose
- A richer card UI component illustrating a job/posting-style card with multiple props, nested structure, and icon usage.

Key file: `src/components/Card.jsx`

Highlights from the implementation
- Uses a named export `export const Card = (props) => { ... }` (not default).
- Imports an icon from `lucide-react` and uses it inline: `import { Bookmark } from 'lucide-react'`.
- Props observed: `brandLogo, company, datePosted, post, tag1, tag2, pay` — these drive the content.

Sample component excerpt

```js
export const Card = (props) => (
  <div className="card">
    <div className="top">
      <img src={props.brandLogo} alt="brand logo" />
      <button>Save <Bookmark size={10} /> </button>
    </div>
    <div className="center"> ... </div>
    <div className="bottom"> ... </div>
  </div>
)
```

Best practices and suggestions
- Export style: either use `export default Card` or keep the named export but be consistent across project imports.
- Accessibility: ensure `alt` attributes are meaningful and buttons have accessible labels.
- Performance: if many `Card` instances render in a list, consider `React.memo(Card)` to avoid unnecessary re-renders when props don't change.

Prop validation example (using PropTypes)

```js
import PropTypes from 'prop-types'
Card.propTypes = {
  brandLogo: PropTypes.string,
  company: PropTypes.string,
  datePosted: PropTypes.string,
  post: PropTypes.string,
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  pay: PropTypes.string,
}
```

Usage pattern

```js
<Card
  brandLogo="/logos/brand.png"
  company="Nachio"
  datePosted="2d ago"
  post="Frontend Developer"
  tag1="React"
  tag2="Remote"
  pay="₹40k"
 />
```

Notes on icons
- `lucide-react` provides SVG icon components — they are lightweight and accessible when used properly (e.g., add `aria-hidden` or `aria-label` where appropriate).
