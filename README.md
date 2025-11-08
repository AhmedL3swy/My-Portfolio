# Ahmed L3swy — Portfolio

A clean, responsive personal portfolio website showcasing projects, images, and a customizable theme switcher. This repository contains a static front-end site built with HTML, CSS, and vanilla JavaScript.

## Quick overview

- Purpose: Showcase the developer's work, skills, and contact information.
- Status: Static site (ready to open locally or deploy to GitHub Pages / any static host).

## Featured functionality

- Responsive layout for desktop and mobile
- Theme / color skins with a style switcher
- Portfolio images and sections ready for customization

## Repository structure

```
index.html
css/
  style.css              # Main styles
  style-switcher.css     # Styles for the theme switcher UI
  skins/                 # Color variants (color-1..color-5.css)
images/
  portfolio/            # Portfolio images
js/
  script.js             # Site scripts
  style-switcher.js     # Theme switching logic
```

## How to preview locally

Option 1 — Open directly

1. Double-click `index.html` in your file explorer or open it in your browser.

Option 2 — Simple HTTP server (recommended for some browser features)

Using Python (works if Python is installed):

```powershell
# from the repository root
python -m http.server 8000; # then open http://localhost:8000
```

Or use VS Code Live Server extension to preview and auto-reload while editing.

## Development notes

- Editing styles: update files in `css/` and `css/skins/` for color themes.
- Scripts: `js/script.js` contains the main interactive logic; `js/style-switcher.js` manages the theme.
- Add portfolio images under `images/portfolio/` and update `index.html` to reference them.

## Deployment

This is a static site and can be deployed to any static hosting service, e.g. GitHub Pages, Netlify, Vercel, or an S3 static site.

For GitHub Pages (project site):

1. Push the repository to GitHub.
2. In repository Settings → Pages, choose the `master` (or `main`) branch and the root folder.

## Contributing

Small PRs are welcome. Suggested workflow:

1. Fork the repo.
2. Create a topic branch for your change.
3. Make edits, test locally, and open a pull request with a clear description.

Please avoid large refactors without prior discussion.

## License

This repository is provided under the MIT License — see `LICENSE` if included, or add one if you want an explicit license.

## Author & Contact

Ahmed L3swy

Email / Contact: (add preferred contact method here)

---

If you'd like, I can also:

- Add a small screenshot or demo GIF (place under `images/` and reference it in this README).
- Add a `LICENSE` file (MIT) and a tiny CONTRIBUTING.md.
