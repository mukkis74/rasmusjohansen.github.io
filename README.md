# rwjohansen.com

Personal site for Rasmus Johansen — Senior QA & Test Automation Engineer, Berlin.

## Structure

- `index.html` — the entire site (HTML, CSS and JS inline; no build step)
- `cv/Rasmus-Johansen-CV.pdf` — CV, linked from the hero and contact sections
- `CNAME` — serves this repo at rwjohansen.com via GitHub Pages

## Local preview

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deploying

GitHub Pages, `main` branch, root folder. Any push to `main` publishes.

## Before publishing

- [ ] Replace the highlighted placeholder paragraph in the About section with real background
- [ ] Point the two "View on GitHub" links at the specific project repos (currently the profile)
- [ ] Consider swapping the contact email for a domain address

## Repo hygiene (recommended, separate from the site)

`node_modules/` is currently committed — 5,996 of 6,031 tracked files. It is
already listed in `.gitignore`, so it was committed before that rule existed.
To untrack it without deleting anything locally:

```bash
git rm -r --cached node_modules reports allure-results
git commit -m "Stop tracking generated directories"
git push
```

`src/server.js` is an Express server that serves the CV at `/download/cv`.
GitHub Pages serves static files only and never runs it, so that endpoint has
never worked in production. The CV is now a plain static file at
`cv/Rasmus-Johansen-CV.pdf`, which works on Pages without a server.
