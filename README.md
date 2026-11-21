# Aziz Shaker — Portfolio

Static site (HTML + CSS + vanilla JS, no build step). English / Arabic (RTL), light / dark.

- **All content:** `js/data.js` (projects, services, stack, timeline, UI text).
- **GitHub sync:** on load the site reads `github.com/aziz-shaker` repos, shows each project's last-update date,
  and automatically adds any new repo that has a "Website" (homepage) link set.
- **Photos:** `assets/aziz-cut.webp` (hero cutout, transparent) and `assets/photo.webp` (About).
- **Screenshots:** `assets/shots/<id>.webp`.
- **LinkedIn:** set `links.linkedin` in `js/data.js` and the icon appears.

Run locally: `python -m http.server 5173` → http://localhost:5173 (`?lang=ar` forces Arabic).
Deploy: push to GitHub and import into Vercel (framework: Other, no build command).
