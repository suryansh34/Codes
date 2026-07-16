"""
Material Property Lookup AI
A Flask REST API that looks up engineering material properties,
with typo-tolerant fuzzy search (using Python's built-in difflib).

Run with:  python app.py
Then test:  http://127.0.0.1:5000/
"""

import json
import difflib
from pathlib import Path
from flask import Flask, jsonify, request

app = Flask(__name__)

# ---------------------------------------------------------------------
# Load dataset once at startup
# ---------------------------------------------------------------------
DATA_PATH = Path(__file__).parent / "data" / "materials.json"

with open(DATA_PATH, "r", encoding="utf-8") as f:
    MATERIALS = json.load(f)

# Build a quick lookup: lowercase name -> material dict
NAME_INDEX = {m["name"].lower(): m for m in MATERIALS}
ALL_NAMES_LOWER = list(NAME_INDEX.keys())


# ---------------------------------------------------------------------
# Helper functions
# ---------------------------------------------------------------------
def find_exact(name: str):
    """Case-insensitive exact match."""
    return NAME_INDEX.get(name.lower())


def find_fuzzy(query: str, limit: int = 5, cutoff: float = 0.4):
    """
    Typo-tolerant search using difflib.
    Returns a list of (material_dict, confidence_score) sorted by best match first.
    """
    query_lower = query.lower()

    # difflib gives us the closest matching NAMES first
    close_names = difflib.get_close_matches(
        query_lower, ALL_NAMES_LOWER, n=limit, cutoff=cutoff
    )

    results = []
    for name in close_names:
        score = difflib.SequenceMatcher(None, query_lower, name).ratio()
        results.append({
            "material": NAME_INDEX[name],
            "confidence": round(score, 3)
        })

    # Also catch simple "substring" matches difflib might miss
    # (e.g. searching "steel" should surface "Steel (Mild)" even if
    # get_close_matches ranks it lower)
    if not results:
        substring_matches = [
            NAME_INDEX[name] for name in ALL_NAMES_LOWER if query_lower in name
        ][:limit]
        results = [{"material": m, "confidence": 0.5} for m in substring_matches]

    return results


# ---------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "project": "Material Property Lookup AI",
        "description": "Flask API for looking up engineering material properties with fuzzy search.",
        "endpoints": {
            "GET /materials": "List all materials",
            "GET /materials/<name>": "Exact lookup by name",
            "GET /search?q=<query>": "Fuzzy / typo-tolerant search",
            "GET /categories": "List all material categories",
            "GET /materials/category/<category>": "Filter materials by category"
        },
        "total_materials": len(MATERIALS)
    })


@app.route("/materials", methods=["GET"])
def list_materials():
    return jsonify({
        "count": len(MATERIALS),
        "materials": MATERIALS
    })


@app.route("/materials/<name>", methods=["GET"])
def get_material(name):
    result = find_exact(name)
    if result:
        return jsonify(result)

    # No exact match -> suggest close matches instead of a bare 404
    suggestions = find_fuzzy(name, limit=3)
    if suggestions:
        return jsonify({
            "error": f"No exact match for '{name}'.",
            "did_you_mean": [s["material"]["name"] for s in suggestions]
        }), 404

    return jsonify({"error": f"No material found matching '{name}'."}), 404


@app.route("/search", methods=["GET"])
def search_materials():
    query = request.args.get("q", "").strip()
    limit = request.args.get("limit", default=5, type=int)

    if not query:
        return jsonify({"error": "Please provide a search query, e.g. /search?q=alumin"}), 400

    results = find_fuzzy(query, limit=limit)

    if not results:
        return jsonify({
            "query": query,
            "count": 0,
            "results": [],
            "message": "No close matches found. Try a different spelling."
        })

    return jsonify({
        "query": query,
        "count": len(results),
        "results": results
    })


@app.route("/categories", methods=["GET"])
def list_categories():
    categories = sorted(set(m["category"] for m in MATERIALS))
    return jsonify({"categories": categories})


@app.route("/materials/category/<category>", methods=["GET"])
def get_by_category(category):
    matches = [m for m in MATERIALS if m["category"].lower() == category.lower()]
    if not matches:
        return jsonify({"error": f"No materials found in category '{category}'."}), 404
    return jsonify({"category": category, "count": len(matches), "materials": matches})


# ---------------------------------------------------------------------
# Error handlers
# ---------------------------------------------------------------------
@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Endpoint not found. See / for available routes."}), 404


if __name__ == "__main__":
    app.run(debug=True)
