# Royi Rassin's Portfolio Website

Modern, minimal portfolio website built with vanilla HTML, CSS, and JavaScript + Vite.

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Building

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

This site is automatically deployed to GitHub Pages from the `main` branch.

## Tech Stack

- **Build Tool**: Vite
- **Fonts**: Geist Sans & Geist Mono (self-hosted)
- **Styling**: Vanilla CSS with CSS Custom Properties
- **JavaScript**: Vanilla JS with Intersection Observer API

## Maintenance

To add a new publication:

1. Open `index.html`
2. Find the `<section id="research">` section
3. Duplicate a `.paper-card` div
4. Update the content
5. Build and push: `npm run build && git add . && git commit && git push`

## License

MIT
