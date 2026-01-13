# Copilot Instructions for shopping-list-web

## Project Overview
- **Framework:** React 19 + TypeScript, built with Vite, styled with Tailwind CSS.
- **Purpose:** Minimal, modern web app scaffold for a shopping list or similar SPA.
- **Structure:**
  - `src/` contains all app code.
    - `App.tsx` is the main entry point.
    - `main.tsx` bootstraps React into `#root` in `index.html`.
    - `components/`, `hooks/`, `services/`, `types/` are present for modular code, but may be empty initially.

## Key Workflows
- **Development:**
  - Start dev server: `npm run dev` (Vite, HMR enabled)
  - Build for production: `npm run build` (TypeScript + Vite)
  - Preview production build: `npm run preview`
  - Lint: `npm run lint` (uses ESLint with TypeScript, React, and Vite plugins)
- **Type Checking:**
  - TypeScript strict mode is enabled. Use `tsconfig.app.json` for app code, `tsconfig.node.json` for config files.

## Patterns & Conventions
- **Component Organization:**
  - Place UI components in `src/components/`.
  - Custom hooks go in `src/hooks/`.
  - API/data logic in `src/services/`.
  - Shared types in `src/types/`.
- **Styling:**
  - Tailwind CSS is enabled via Vite plugin. Use utility classes in JSX.
- **ESLint:**
  - Configured in `eslint.config.js` with recommended rules for JS, TS, React, and Vite.
  - Lint all code with `npm run lint`.

## Integration Points
- **External Libraries:**
  - `axios` for HTTP requests (see `package.json`).
  - Tailwind CSS for styling.
- **Vite Plugins:**
  - `@vitejs/plugin-react` for React Fast Refresh.
  - `@tailwindcss/vite` for Tailwind integration.

## Examples
- See `src/App.tsx` and `src/main.tsx` for minimal React/Vite setup.
- Add new components to `src/components/` and import them in `App.tsx`.

## Tips for AI Agents
- Follow the directory structure for new code.
- Use strict TypeScript types.
- Prefer functional React components.
- Use Tailwind utility classes for styling.
- Keep code modular and organized by feature.

---
For more, see [README.md](../../README.md) and config files in the project root.
