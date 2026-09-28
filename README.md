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
