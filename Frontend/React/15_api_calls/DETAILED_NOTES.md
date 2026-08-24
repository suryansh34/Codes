# Detailed Notes — 15_api_calls

Purpose
- Demonstrates fetching remote data in React using `axios` (and shows commented `fetch` alternatives). Includes basic list rendering of fetched data.

Key patterns (from `src/App.jsx`)

```js
const [data, setData] = useState([])
const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
  setData(response.data)
}
<button onClick={getData}>Click Here to get Data</button>
{data.map(elem => <h3 key={elem.id}>{elem.author}</h3>)}
```

Common mistakes
- Not handling loading and error states — always show feedback while fetching and when errors occur.
- Forgetting to cancel requests on unmount (use AbortController with `fetch` or cancellation tokens in `axios` for long requests).
- Directly mutating response data before setting state — always treat response as immutable and set new state.

Advanced topics to master
- State management for fetched data:
  - Use SWR or React Query for caching, background refresh, retries, and pagination.

- Pagination & infinite scrolling:
  - Implement cursor-based or page-based fetching and UI patterns for loading more items.

- Error handling strategies:
  - Implement retries with exponential backoff for transient failures.

- Performance & caching:
  - Cache frequently-used endpoints in memory or IndexedDB.
  - Normalize data shapes for large datasets (e.g., using normalizr) to simplify updates.

Security & best practices
- Never trust client data — validate on the server.
- Avoid embedding secrets in frontend code; use environment variables and server-side proxies for sensitive tokens.
