# 🎓 Campus Companion AI

**An IBM University Engagement Project**

Campus Companion AI is an AI-powered college assistant web interface built with
Flask. It helps students get instant information about the Academic Calendar,
Attendance Rules, Examination Information, Admissions, Scholarships,
Placements, Library, Hostel, and Campus Facilities.

> **Note:** This repository provides the web interface only. The conversational
> AI itself is provided by **IBM watsonx Orchestrate**, which is meant to be
> embedded into the `#watsonx-chat` container on the "Ask AI" page.

---

## ✨ Features

- Modern, IBM-inspired UI (blue & white, glassmorphism, rounded cards)
- Fully responsive design (mobile, tablet, desktop)
- Light / Dark mode toggle with persisted preference
- Smooth scrolling, scroll-reveal animations, hover effects
- Home page with Hero, Features preview, How It Works, Benefits, and FAQ
- Dedicated Features page with all service cards
- Ask AI page with a ready-to-use IBM watsonx Orchestrate widget container
- About and Contact pages with a client-side validated contact form
- Clean Flask backend using Jinja2 templates and Blueprint-free simple routing

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Backend    | Python, Flask                        |
| Frontend   | HTML5, CSS3, Bootstrap 5, Vanilla JS |
| Icons      | Bootstrap Icons (CDN)                |
| Fonts      | Google Fonts — Inter & Poppins       |
| AI Engine  | IBM watsonx Orchestrate (embed-ready)|

No React, no Next.js, no Vue — pure server-rendered Flask templates with
vanilla JavaScript for interactivity.

---

## 📋 Requirements

- Python 3.9 or higher
- pip (Python package manager)
- A modern web browser
- Internet connection (for CDN-hosted Bootstrap, icons, and fonts)

---

## 🚀 Installation & Running

1. **Clone or download this repository**

   ```bash
   git clone <your-repo-url>
   cd CampusCompanionAI
   ```

2. **(Recommended) Create a virtual environment**

   ```bash
   python -m venv venv

   # Activate it:
   # Windows
   venv\Scripts\activate
   # macOS / Linux
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask application**

   ```bash
   python app.py
   ```

5. **Open your browser** and navigate to:

   ```
   http://127.0.0.1:5000/
   ```

The app runs in debug mode by default for development convenience. For
production deployment, use a WSGI server such as Gunicorn or Waitress and
disable debug mode.

---

## 📁 Project Structure

```
CampusCompanionAI/
│
├── app.py                   # Flask application entry point & routes
├── requirements.txt         # Python dependencies
├── README.md                # Project documentation (this file)
├── .gitignore                # Git ignore rules
│
├── templates/                # Jinja2 HTML templates
│   ├── layout.html           # Base layout (navbar, footer, dark mode)
│   ├── index.html            # Home page
│   ├── about.html             # About page
│   ├── features.html          # Features page
│   ├── chat.html               # Ask AI page (watsonx Orchestrate container)
│   ├── contact.html            # Contact page
│   └── 404.html                # Custom 404 error page
│
└── static/
    ├── css/
    │   └── style.css           # Full stylesheet (design tokens, dark mode, animations)
    ├── js/
    │   └── script.js            # Dark mode, scroll effects, validation, animations
    └── images/                  # Static image assets (currently uses CDN icons)
```

---

## 🤖 Embedding the IBM watsonx Orchestrate Chat Widget

The `templates/chat.html` file contains a dedicated placeholder container:

```html
<div id="watsonx-chat"></div>
```

To connect the live AI assistant:

1. Obtain your embed script / integration credentials from your IBM watsonx
   Orchestrate deployment (Integration ID, Region, Service Instance ID, etc.).
2. Open `templates/chat.html` and locate the `extra_scripts` block near the
   bottom of the file.
3. Replace the placeholder comment with your official IBM watsonx Orchestrate
   embed script, targeting the `#watsonx-chat` container.
4. Restart the Flask server — the live assistant will now render on the
   "Ask AI" page.

---

## 🖼️ Screenshots

> Add screenshots of your running application here.

```
docs/screenshots/home.png
docs/screenshots/features.png
docs/screenshots/chat.png
docs/screenshots/about.png
docs/screenshots/contact.png
```

---

## 🔭 Future Scope

- Live integration with IBM watsonx Orchestrate chat widget
- User authentication for personalized academic data
- Integration with university ERP/LMS systems for real-time data
- Multi-language support for regional student populations
- Push notifications for exam schedules and scholarship deadlines
- Analytics dashboard for administrators to track common student queries
- Voice-based interaction support
- Progressive Web App (PWA) support for offline access

---

## 📄 License

This project was created for educational purposes as part of the **IBM
University Engagement Program**. Feel free to adapt it for academic or
non-commercial use.

---

## 🙌 Acknowledgements

- **IBM watsonx Orchestrate** — AI engine powering Campus Companion AI
- **Bootstrap 5** — Responsive front-end framework
- **Bootstrap Icons** — Icon library
- **Google Fonts** — Inter & Poppins typefaces

---

*Built with 💙 for students, powered by IBM watsonx Orchestrate.*
