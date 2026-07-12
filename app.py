"""
Campus Companion AI
--------------------
An IBM University Engagement Project.

This Flask application serves as the front-end interface for
Campus Companion AI, a college assistant powered by IBM watsonx
Orchestrate. This application does NOT implement the AI itself;
it provides the web interface and a placeholder container where
the IBM watsonx Orchestrate chat widget can be embedded.

Run with:
    python app.py
"""

from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

# ---------------------------------------------------------------------------
# Application configuration
# ---------------------------------------------------------------------------
app.config["SECRET_KEY"] = "campus-companion-ai-secret-key"
app.config["JSON_SORT_KEYS"] = False

# ---------------------------------------------------------------------------
# Context processor - injects data into every template automatically
# ---------------------------------------------------------------------------
@app.context_processor
def inject_globals():
    return {
        "site_name": "Campus Companion AI",
        "current_year": datetime.now().year,
    }


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@app.route("/")
def home():
    """Home page with hero section, features preview, how it works, benefits, FAQ."""
    return render_template("index.html", active_page="home")


@app.route("/about")
def about():
    """About page describing the project and its purpose."""
    return render_template("about.html", active_page="about")


@app.route("/features")
def features():
    """Features page showcasing all Campus Companion AI capabilities."""
    return render_template("features.html", active_page="features")


@app.route("/chat")
def chat():
    """Ask AI page - hosts the IBM watsonx Orchestrate chat widget container."""
    return render_template("chat.html", active_page="chat")


@app.route("/contact")
def contact():
    """Contact page with contact form and information."""
    return render_template("contact.html", active_page="contact")


# ---------------------------------------------------------------------------
# Error handlers
# ---------------------------------------------------------------------------
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", active_page=""), 404


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
