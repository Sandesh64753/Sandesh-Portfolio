# Portfolio

A simple static portfolio website containing `index.html`, `style.css`, and `script.js`.

## Overview

This repository contains a minimal personal portfolio/static site meant to showcase projects, skills and contact information. It's built with plain HTML, CSS and JavaScript and is designed to be easy to edit and deploy.

## Files

- `index.html` — Main HTML page for the portfolio.
- `style.css` — Styles for the site.
- `script.js` — Client-side JavaScript for interactive behavior.
- `README.md` — This file.

## Features

- Responsive, static site (no build step required).
- Easy to customize: update `index.html`, `style.css`, and `script.js`.

## How to run

The site is static — open `index.html` in your browser to view it. Two common ways:

- Double-click `index.html` in Explorer or open it from the browser (works for most simple uses).

- Serve via a local HTTP server (recommended if you use fetch/XHR or want a realistic environment). From the project root, using PowerShell:

```powershell
# If you have Python installed
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Or, on PowerShell you can open the file directly:

```powershell
Start-Process .\index.html
```

## Development notes

- Make small edits to `index.html` for content, `style.css` for look-and-feel, and `script.js` for behavior.
- No build tools required. If you add assets or external libraries, keep them in a sensible subfolder (e.g., `assets/` or `lib/`).

## Contributing

If you want to suggest improvements, open an issue or submit a pull request with a short description of changes.

## License

This repository is provided as-is. Add a license file if you plan to publish or share widely (e.g., MIT).

## Contact

Author: `Sandesh64753` (GitHub)
