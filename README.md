# TinDog

A modern single-page application built with **React 19**, **TypeScript**, and **Vite** — converted from the original HTML/CSS/Bootstrap project.

## Tech Stack

- **React 19** with TypeScript
- **Vite 8** for fast development and optimized builds
- **Bootstrap 5** via `react-bootstrap` for responsive layout
- **React Icons** for Font Awesome icons
- **Vitest** + **React Testing Library** for unit tests
- **ESLint** for linting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start development server           |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview production build           |
| `npm run lint`    | Run ESLint                         |
| `npm run test`    | Run tests with Vitest              |
| `npm run typecheck` | Run TypeScript type checking     |

## Project Structure

```
src/
├── components/        # React components (Navbar, Hero, Features, etc.)
│   └── __tests__/     # Component tests
├── data/              # Mock JSON data
├── styles/            # CSS stylesheets
├── types/             # TypeScript type definitions
├── App.tsx            # Root component
└── main.tsx           # Entry point
public/                # Static assets (images)
legacy/                # Original HTML/CSS project (reference)
```

## Original Project

Created as part of a Udemy course using HTML, CSS, and Bootstrap.
