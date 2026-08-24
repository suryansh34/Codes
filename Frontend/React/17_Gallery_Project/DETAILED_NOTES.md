# Detailed Notes — 17_Gallery_Project

Purpose
- Implements an image gallery that fetches images from an API (`picsum.photos`), displays them in a responsive grid, and offers pagination.

Key code issues (from `src/App.jsx`)
- The `getData` function performs an axios GET using `index` as the page query and sets `userData`:

```js
const getData = async () => {
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
  setUserData(response.data)
}
```

- The `useEffect` incorrectly references `getData` without calling it:

```js
useEffect(function(){
    getData
}, [index])
```

This means the fetch is never executed on `index` change. It should call `getData()`.

Common mistakes seen
- Not calling the data-fetching function inside `useEffect` (as above).
- Using `idx` as `key` when rendering lists — prefer a stable unique key like `elem.id`.
- Not handling loading and error states — add `isLoading` and `error` state to improve UX.

Advanced topics to master
- Pagination strategies:
  - Client-driven page number (current approach) vs cursor-based pagination for large datasets.

- Image performance:
  - Use `loading="lazy"` and optimized `srcset` to serve appropriate resolutions.
  - Consider progressive loading and placeholders (blur-up) for better perceived performance.

- Caching & offline:
  - Cache image lists in memory or use service workers to enable offline browsing.

- Accessibility:
  - Ensure images include meaningful `alt` attributes and link targets have descriptive text.

Fix suggestions
- Update `useEffect` to call `getData()` and add cleanup/cancellation for outstanding requests:

```js
useEffect(()=>{
  let canceled = false
  const load = async ()=>{ const res = await axios.get(...); if(!canceled) setUserData(res.data) }
  load()
  return ()=>{ canceled = true }
}, [index])
```
