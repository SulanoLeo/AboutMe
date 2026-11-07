# Portfolio — GitHub Pages Setup

## File Structure

Upload these files to your GitHub repo exactly like this:

```
your-repo/
├── index.html          ← main page
├── images/
│   └── hero.png        ← your hero photo
└── README.md
```

## Steps to Deploy

1. Create a new GitHub repo (e.g. `your-username.github.io` for root, or any name for project page)
2. Upload `index.html` to the root
3. Create an `images/` folder and upload `hero.png` inside it
4. Go to **Settings → Pages → Source → Deploy from branch → main / root**
5. Your site will be live at `https://your-username.github.io`

## Image path used in index.html

```css
background-image: url('images/hero.png');
```

This is a relative path — works on both root and project GitHub Pages.

## Project Covers

Project cards are rendered in `index.html` for GitHub Pages and in `page.tsx` for the Next.js version. Add each project's screenshot, repository, and demo URLs to its project card/data entry. Internal projects can show an `Internal Tool` badge and open approved screenshots in the built-in lightbox without exposing a live system. Use relative paths for GitHub Pages media and add `target="_blank"` with `rel="noopener noreferrer"` to external links.

```html
<article data-image="images/projects/dashboard.webp"
         data-github-url="https://github.com/your-account/project"
         data-demo-url="https://example.com/demo">
```

Use a descriptive `alt` attribute for project screenshots. When a screenshot or link is not available, keep the card's “coming soon” placeholder instead of using a made-up URL. Only publish screenshots or walkthroughs approved for public viewing; do not link internal videos until their data has been blurred. For Next.js, `page.tsx` uses `next/image` with static image imports; place imported image assets in the repository and keep them available to the build.
