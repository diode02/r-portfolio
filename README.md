# Waqas portfolio

React 19 portfolio built with Vite. Use Node 24 LTS (`nvm use`).

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

`npm start` serves the production `dist/` folder after building. Deploy the contents of `dist/` to the static host, never the source root. Hash routing preserves existing URLs without server rewrites. The production site is https://waqasilyas.pages.dev/. Cloudflare Pages deploys the `master` branch with `npm run build`, output directory `dist`, and Node 24.

GitHub Actions verifies changes and uploads `portfolio-dist`; it does not publish the site. Confirm the existing hosting provider and deployment branch before replacing the live site. Obsolete compiled files were removed: they contained an unrelated template profile. Build from the current source for deployment.

Edit profile content in `src/portfolio.js`. The résumé URL still needs a real destination. Google Analytics retains the existing GA4 measurement ID; page views follow hash navigation. If changing the ID, update both `src/portfolio.js` and `index.html`.

The redesigned experience lives in `src/App.jsx` and `src/redesign.css`. It includes selected work, a filterable project archive, project detail routes, experience, about/education, and contact. Profile/project source data remains in `src/portfolio.js`. Seven years of experience reflects the owner’s supplied update. Project art is an editorial illustration rather than a product screenshot.

Light and dark themes persist locally; the mobile menu supports keyboard access, and motion respects reduced-motion preferences. Prior template components remain in source for reference but are not part of the active app.

Based on https://github.com/ashutosh1919/masterPortfolio/ and https://github.com/saadpasta/developerFolio. Illustrations: https://undraw.co/.

The `serve` dependency uses a patched `compression` override until its upstream dependency is updated. Keep this override when refreshing the lockfile.
