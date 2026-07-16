# Material Property Lookup AI

A Flask REST API for looking up engineering material properties (density,
melting point, tensile strength, thermal conductivity, Young's modulus),
with **typo-tolerant fuzzy search** so users don't need to spell material
names exactly right.

## Project Structure
```
material-lookup-ai/
├── app.py              # Flask application (all routes/logic)
├── requirements.txt    # Dependencies
├── data/
│   └── materials.json  # Dataset of 27 materials
└── README.md
```

## Setup

```bash
# 1. Create a virtual environment (recommended)
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Mac/Linux

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the server
python app.py
```

Server runs at `http://127.0.0.1:5000`

## The "AI" Component

Instead of requiring exact material names, the API uses **fuzzy string
matching** (Python's `difflib`, based on the Ratcliff-Obershelp sequence
matching algorithm) to find the closest matching material even when the
user makes a typo — e.g. searching `"alumnium"` still correctly returns
`"Aluminum"` with a confidence score. This is a lightweight, explainable
form of approximate/intelligent search rather than exact string matching.

## API Endpoints

### `GET /`
API info and list of available endpoints.

### `GET /materials`
Returns all materials in the dataset.

### `GET /materials/<name>`
Exact (case-insensitive) lookup.
```
GET /materials/Aluminum
GET /materials/steel (mild)
```
If no exact match, returns fuzzy `did_you_mean` suggestions with a 404.

### `GET /search?q=<query>&limit=5`
Fuzzy/typo-tolerant search. Returns materials ranked by confidence score (0-1).
```
GET /search?q=alumnium      -> finds "Aluminum" despite the typo
GET /search?q=steel         -> finds all steel variants
GET /search?q=carbn fiber   -> finds "Carbon Fiber Composite"
```

### `GET /categories`
Lists all material categories (Metal, Polymer, Ceramic, Composite, etc.)

### `GET /materials/category/<category>`
Filter materials by category.
```
GET /materials/category/Metal
```

## Testing with curl

```bash
curl http://127.0.0.1:5000/
curl http://127.0.0.1:5000/materials/Aluminum
curl "http://127.0.0.1:5000/search?q=alumnium"
curl http://127.0.0.1:5000/categories
```

Or import into Postman and hit the same URLs.

## Possible Extensions (if you have extra time)
- `POST /materials` to add new materials at runtime
- Unit comparison endpoint (e.g. `/compare?materials=Steel,Aluminum`)
- Swap `difflib` for `rapidfuzz` (pip install) for better fuzzy scoring
- Deploy to Render/PythonAnywhere for a live demo link
