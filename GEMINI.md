# lp-portfolio: Developer & Cloud Architect Portfolio

---
project_type: Next.js (React) Web Application
primary_stack: Next.js (App Router), React, Sass/SCSS, Framer Motion
main_developer: LP Shahim (Cloud Specialist / People Fanatic)
---

## Project Overview

`lp-portfolio` is the personal portfolio website of **LP Shahim**, a Cloud Architect and DevOps professional. It serves as a modern, interactive web application highlighting his background, cloud specialization, projects, articles, and reading list.

The application leverages a modern, component-driven frontend architecture to fetch live data from public integrations (such as GitHub starred repositories and Medium articles) and render them dynamically.

### Key Architecture & Technologies
- **Next.js 16 (App Router)**: Utilizing server and client component separation, metadata generation, and optimized font loading (`Inter`, `Outfit` from Google Fonts).
- **React 19**: Modern React state and component lifecycle management.
- **Sass/SCSS**: Modular stylesheets (`*.module.scss`) coupled with global variables and mixins for robust, cohesive theme management.
- **Framer Motion**: Smooth animations and transitions (e.g., Hero, sliders, page content).
- **Swiper & Swiper React**: Responsive slider/carousel controls (e.g., in `TechSlider`).
- **Dynamic Content Integration**:
  - **GitHub API**: Fetches recent starred repositories using on-demand/revalidated fetching (`lib/github.js`).
  - **Medium RSS Feed**: Fetches latest blog posts from Medium and parses them via an RSS-to-JSON parser (`lib/medium.js`).
- **Automation / DevOps**:
  - **Daily Magic README**: A cron-based GitHub Action (`daily-readme.yml`) that runs a Node script (`scripts/update-readme.js`) to rotate a random geeky/programming GIF inside `README.md`.
  - **Next.js CI/CD**: Automatic builds and deployment using GitHub Actions (`nextjs.yml`).

---

## Directory Structure

- `app/`: Next.js App Router folders and routes (`layout.js`, `page.js`, and pages for `/about`, `/contact`, `/portfolio`, `/reading`, `/writing`).
- `components/`: Modular UI components organized by page section (e.g., `about/`, `contact/`, `home/`, `portfolio/`, `reading/`, `shared/`, `writing/`).
- `data/`: Local static datasets used across pages (e.g., `skills.js`, `experience.js`, `books.js`, `socials.js`).
- `lib/`: API fetch wrappers and utility libraries for third-party integrations (GitHub, Medium).
- `public/`: Static resources including `cv.pdf` and vector images.
- `scripts/`: Operational/automated tooling scripts.
- `styles/`: Global stylesheets, variables, and mixins.

---

## Building and Running

Ensure Node.js is installed on your local environment (Node 18+ recommended).

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Running in Development Mode
To start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### 3. Building for Production
To generate an optimized production build:
```bash
npm run build
```

### 4. Running the Production Build Local Server
Once the build is completed, start the production server:
```bash
npm run start
```

### 5. Code Linting
Run the project-configured ESLint rules:
```bash
npm run lint
```

---

## Development Conventions

### Styling and Theme
- **Theme Support**: The application is built with dark-mode support by default (`data-theme="dark"` on `<html>`).
- **Sass Modules**: Always prefer CSS/SCSS modules (`[ComponentName].module.scss`) for component styling. This prevents class name collisions.
- **Design Tokens**: Standardize font families, colors, and margins by referencing standard variables from `styles/variables.scss` and `styles/mixins.scss` (e.g., `--font-main`, `--font-heading`).

### Code Quality and Standards
- **Component Design**: Organize page modules logically under `components/<page-name>/`. Keep styling files local to their components.
- **Dynamic Imports & Hydration**: Because animation and slider libraries (e.g., Framer Motion, Swiper) might depend on browser APIs, be mindful of client/server component separation (`"use client"` directive).
- **Resource Management**: Large assets or icons should be optimized. Prefer vector images (`.svg`) where possible. Use `next/image` patterns as configured in `next.config.mjs` for remote patterns (e.g., Amazon, Medium, OpenLibrary covers).

### CI/CD and Automation
- **GitHub Workflows**:
  - `nextjs.yml`: Automated deployment of the portfolio.
  - `daily-readme.yml`: Runs the `update-readme.js` script to refresh the `README.md` file dynamically.
  - `lighthouse.yml`: Performance, accessibility, and SEO audit on pull requests or pushes.
  - `release.yml`: Release automation with Semantic Release (`.releaserc`).
- **Commit Messages**: Adhere to conventional commit standards to support automatic version increments and CHANGELOG updates via Semantic Release.
