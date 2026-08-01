# EEMS Artist Website

A responsive, animated one-page artist hub for EEMS with Spotify and SoundCloud players, official artwork, merchandise, community links, Instagram, and TikTok.

## Site sections

- Spotify artist player
- SoundCloud community favourite and current profile selections
- Official EEMS visual artwork and Instagram link
- The Smee Society merchandise store
- Linktree destinations including Discord, Amazon Wish List, and PayPal
- Responsive layouts, keyboard focus styles, reduced-motion support, and lazy-loaded media

## Publish with GitHub Pages

### 1. Create the repository

1. Sign in to GitHub and create a new repository.
2. A good repository name is `eems-artist-page`.
3. Make the repository **Public** when using GitHub Free.
4. Do not add another README, `.gitignore`, or licence during repository creation.

### 2. Upload this project

Extract the ZIP, then upload **all files and folders inside it** to the root of the repository. Make sure the hidden `.github` folder is included.

Alternatively, from a terminal inside this project folder:

```bash
git init
git add .
git commit -m "Launch EEMS artist website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/eems-artist-page.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for `Deploy EEMS site to GitHub Pages` to finish.

The website will normally appear at:

```text
https://YOUR-USERNAME.github.io/eems-artist-page/
```

Every push to the `main` branch automatically republishes the site.

## Make it your main GitHub website

For the shorter address `https://YOUR-USERNAME.github.io/`, name the repository exactly:

```text
YOUR-USERNAME.github.io
```

## Run locally

Open `index.html` directly, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project files

- `index.html` — page content
- `styles.css` — visual design and responsive layout
- `script.js` — visualizer and interactions
- `favicon.svg` — browser icon
- `.github/workflows/deploy.yml` — automatic GitHub Pages deployment
- `.nojekyll` — serves the site as plain static files
