# CI/CD Frontend Demo

A minimal frontend project scaffolded with [Vite](https://vitejs.dev/), designed for demonstrating CI/CD pipeline integration.

## Tech Stack

- **Build Tool:** Vite 6
- **Language:** JavaScript (ES Modules)
- **Styling:** Plain CSS with CSS Variables

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:3000` with hot module replacement.

### Build

```bash
npm run build
```

Outputs production-ready static files to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
cicd-frontend-demo/
??? public/          # Static assets
??? src/
?   ??? main.js      # Application entry point
?   ??? style.css    # Global styles
??? index.html       # HTML entry
??? vite.config.js   # Vite configuration
??? package.json
??? README.md
```

## License

MIT
