# Technical Dossier Template

This folder contains a standalone, generic technical resume/dossier export that can be used as a design reference for Site Manager templates.

It intentionally contains **placeholder content only**. Do not commit real personal contact details, private employment notes, reference details, or other sensitive information into this template.

## Preview

<p>
  <img width="600" alt="Technical dossier template preview" src="technical-dossier-preview.svg" />
</p>

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Multi-page landing page for the generic technical dossier. |
| `cv.html` | CV page with experience, skills, certifications, and education sections. |
| `projects.html` | Project/portfolio proof-of-work page. |
| `contact.html` | Privacy-safe placeholder contact page. |
| `assets/site-style.css` | Shared stylesheet used by every page in the template and GitHub Pages demo. |
| `technical-dossier-preview.svg` | Generated preview image for the dossier template. |
| `resume-page-maintenance-check.py` | Lightweight checker for stale pages and broken local references. |

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/index.html`

The static files do not require the Site Manager Node server, database, or Docker stack.

## Validate

```bash
./resume-page-maintenance-check.py
./resume-page-maintenance-check.py --json
```

## Template notes

This example is intentionally separate from the main application frontend in `public/` and `public-readonly/`. Use it as a reference for future themes, exported resume pages, or experimental layouts without replacing the installable Site Manager app.
