# Detailed Notes — 19_advanced_routing

Purpose
- Covers more advanced routing features: dynamic routes, 404 handling, nested pages, and route parameters.

Key patterns observed (from `src/App.jsx`)
- Dynamic route example: `Route path='/courses/:id' element={<CourseDetail/>}` — this allows `CourseDetail` to read `id` via `useParams()`.
- Catch-all 404 route: `Route path='*' element={<NotFound/>}`.

Common mistakes
- Order: place more specific routes before less specific ones when not using nested routing, although React Router v6 matches best-fit so order is less critical than before.
- Forgetting to use `useParams()` inside dynamic route components to read parameters.
- Not using `Navigate` for redirects when a route must send users to a new path.

Advanced topics to master
- Nested routes & layout routes:
  - Define a parent route with an `element` that renders an `<Outlet/>` for child routes.

- Data loading on routes:
  - Use loaders (in React Router v6.4+) or data-fetching patterns to declaratively fetch data for routes and handle errors.

- SEO & SSR considerations:
  - For public-facing apps, consider server-side rendering frameworks (Next.js, Remix) to improve SEO for route-based pages.

- Transition UX:
  - Show loading states between route changes and preserve scroll positions or use `useNavigation` in newer router versions.
