# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Barakar Siddheswari Mandir, a Hindu temple in West Bengal, India. The site is built with vanilla HTML, CSS, and JavaScript—no build tools or frameworks.

## Development

To preview the site locally:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

Or simply open any HTML file directly in a browser.

## Architecture

```
├── index.html          # Landing page with hero, features, timings
├── overview.html       # Temple history and significance
├── how-to-reach.html   # Location, directions, transport info
├── gallery.html        # Photo gallery (placeholder images)
├── social-impact.html  # Community initiatives
├── css/
│   └── style.css       # All styles (CSS variables, responsive design)
├── js/
│   └── main.js         # Mobile menu toggle, dropdown handling
└── images/             # Image assets (add temple photos here)
```

## Key Patterns

- **Navigation**: Shared across all pages. The "More" menu is a dropdown with hover on desktop, tap-to-expand on mobile.
- **CSS Variables**: Color scheme defined in `:root` in style.css (--primary, --secondary, --accent, etc.)
- **Responsive**: Mobile breakpoint at 768px. Hamburger menu replaces horizontal nav on mobile.
- **Placeholders**: Gallery items and overview image use emoji placeholders—replace with actual images.

## Adding New Pages

1. Copy an existing page as template
2. Update the `<title>` and page content
3. Set the correct `class="active"` on the nav link
4. Add the nav link to ALL existing HTML files to keep navigation consistent
