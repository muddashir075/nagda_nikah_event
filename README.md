# सामुहिक निकाह सम्मेलन - नागदा

Static event website — plain HTML/CSS/JS, no backend, no build step.

## Structure

```
event-website/
├── frontend/          ← All website files (deploy this)
│   ├── index.html
│   ├── css/style.css
│   ├── js/main.js
│   └── assets/images/
├── index.html         ← Root redirect to frontend/
├── _config.yml        ← GitHub Pages config
└── .gitignore
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to repo → Settings → Pages
3. Under "Source" select **Deploy from a branch**
4. Branch: `main` (or `master`), Folder: **/ (root)**
5. Save — your site will be live at `https://<username>.github.io/<repo-name>/`

The root `index.html` auto-redirects to `frontend/index.html`.

## Local Preview

Just open `frontend/index.html` directly in a browser — no server needed.

## Adding Images

Drop your images into `frontend/assets/images/`:
- `person1.jpg` through `person4.jpg` — organizer team photos
- `375a23d9-...jpg` — event poster (already in place)


Lightweight event landing page — plain HTML/CSS/JS frontend + minimal Flask backend.

## Structure

```
event-website/
├── frontend/          # Static site (HTML, CSS, JS)
│   ├── index.html
│   ├── css/style.css
│   ├── js/main.js
│   └── assets/images/ # Add hero-bg.jpg and team photos here
├── backend/           # Flask API
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
│   └── .env.example
└── .gitignore
```

## Quick Start

### Frontend only (no backend needed)
Just open `frontend/index.html` in a browser. The form will show a fallback success message.

### With backend
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env       # edit as needed
python app.py
```
Visit http://localhost:5000

### Production
```bash
gunicorn app:app --bind 0.0.0.0:5000
```

## Hosting Options
- Frontend only: GitHub Pages, Netlify, Vercel (free, zero compute)
- Full stack: Render free tier, Railway, Fly.io (minimal compute)

## Images
Add your images to `frontend/assets/images/`:
- `hero-bg.jpg` — hero background
- `person1.jpg` through `person4.jpg` — team photos

Avatar fallbacks are built-in if images are missing.
