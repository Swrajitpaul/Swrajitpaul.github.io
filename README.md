# Swrajit Paul — Portfolio

Personal portfolio site, deployed at <https://swrajitpaul.github.io>.

Built with **Vue 3 + Vite + Vue Router**. Auto-deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## Local development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # output to dist/
npm run preview  # preview the production build
```

## Deployment

Pushes to `main` trigger the deploy workflow.

> One-time setup: in the repo settings, set **Pages → Source** to **GitHub Actions**.

The site uses HTML5 history routing. `public/404.html` redirects unknown paths back to `index.html` so deep links work on GitHub Pages.

## Project layout

```
public/         # static assets (images, PDFs, favicon, 404.html)
src/
  assets/       # global CSS
  components/   # shared components (NavBar, AppFooter, ProjectsSubNav)
  router/       # vue-router config
  views/        # one component per route
  App.vue       # root layout
  main.js       # app entry
```
