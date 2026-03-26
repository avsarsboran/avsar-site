# AGENTS.md

## Cursor Cloud specific instructions

This is a **zero-dependency static website** (HTML, CSS, vanilla JS). There is no build system, no package manager, no linter, and no test framework.

### Running the dev server

Serve the site locally with any static file server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in Chrome.

### Project structure

| File | Purpose |
|---|---|
| `index.html` | Single-page landing page (Turkish leather goods brand) |
| `styles.css` | All styling — CSS custom properties, grid, flexbox, responsive |
| `script.js` | Testimonial slider logic (vanilla JS) |

### Notes

- No `npm install`, `pip install`, or other dependency step is needed.
- External resources (Google Fonts, Unsplash images) are loaded via CDN; the page degrades gracefully without internet.
- The only interactive JS feature is the testimonial slider (`← / →` buttons in the "Müşteri Yorumları" section).
