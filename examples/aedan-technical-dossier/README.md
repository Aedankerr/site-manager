# Aedan Technical Dossier Example

This folder contains a standalone static resume/dossier export that can be used as a design reference for Site Manager templates.

## Preview

<p>
  <img width="600" alt="Technical dossier static export preview" src="technical-dossier-preview.svg" />
</p>

<p>
  <img width="600" alt="Living memory map interface preview" src="living-brain-interface-preview.svg" />
</p>

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Standalone technical resume/dossier page. |
| `living-brain-interface.html` | Standalone memory-map style interface prototype. |
| `living-brain-live-data.json` | Example live-data feed consumed by the memory-map interface. |
| `technical-dossier-preview.svg` | Generated preview image for the standalone dossier page. |
| `living-brain-interface-preview.svg` | Preview image for the memory-map interface. |
| `resume-page-maintenance-check.py` | Lightweight checker for stale pages and broken local references. |

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/index.html`
- `http://localhost:8080/living-brain-interface.html`

The static files do not require the Site Manager Node server, database, or Docker stack.

## Validate

```bash
./resume-page-maintenance-check.py
./resume-page-maintenance-check.py --json
```

## Template notes

This example is intentionally separate from the main application frontend in `public/` and `public-readonly/`. Use it as a reference for future themes, exported resume pages, or experimental layouts without replacing the installable Site Manager app.
