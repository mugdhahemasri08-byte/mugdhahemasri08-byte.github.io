# Mugdha Hema Sri — GenAI Engineer Portfolio

Personal portfolio site featuring a GenAI engineer profile and three interactive demos: RAG Search, Web Search, and Multimodal Search. Built as a static site and deployed via GitHub Pages.

## Live Pages
- Main portfolio: `index.html`
- RAG Search demo: `ragsearch.html`
- Web Search demo: `websearch.html`
- Multimodal Search demo: `multimodel.html`

## Key Features
- Clean, responsive portfolio layout with sections for About, Skills, Projects, and Contact
- Interactive demo pages for:
  - Retrieval-Augmented Generation (RAG)
  - Web search Q&A
  - Multimodal search (text, image, audio, video)
- Environment-based API configuration for local vs production backends

## Tech Stack
- HTML, CSS, JavaScript
- Bootstrap 5 and Bootstrap Icons
- Google Fonts (Inter, Poppins)
- GitHub Pages for hosting

## Project Structure
- `index.html` — Main portfolio landing page
- `ragsearch.html` — RAG Search demo UI
- `websearch.html` — Web Search demo UI
- `multimodel.html` — Multimodal Search demo UI
- `config.js` — Environment toggle and API endpoints
- `profile.jpg`, `image.png` — Assets
- `CNAME` — Custom domain configuration for GitHub Pages

## Configuration
All API endpoints are managed in `config.js`.

Set the environment:
- `ENV = "LOCAL"` for local backend
- `ENV = "PROD"` for production backend

Example:
```js
const ENV = "PROD"; // or "LOCAL"
```

## Run Locally
Because this is a static site, you can open `index.html` directly or run a local server.

Option 1: Open the file
- Double-click `index.html`

Option 2: Run a simple local server
```bash
python -m http.server 5500
```
Then open `http://localhost:5500/index.html`.

## Deploy to GitHub Pages
1. Push the repository to GitHub.
2. In the repo settings, enable GitHub Pages.
3. Select the `main` branch (or the branch you use) and `/` (root) as the source.
4. If using a custom domain, keep `CNAME` in the root.

## Contact
For collaborations and opportunities:
- Email: `mugdhahemasri08@gmail.com`
- Location: Hyderabad
- LinkedIn and GitHub are linked from the site footer.


