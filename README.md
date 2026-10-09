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

Put project media in `images/projects/`. In `projects.html`, set each cover button's `data-media-src` to its file path. Keep `data-media-type="image"` for images, or change it to `data-media-type="video"` for a video. Videos can also use an optional `data-media-poster` image path. Clicking a cover opens the image enlarged or plays the video in a player.

```html
<button class="media-placeholder" data-media-type="image" data-media-src="images/projects/dashboard.webp">
```

```html
<button class="media-placeholder" data-media-type="video" data-media-src="images/projects/wordpress-demo.mp4" data-media-poster="images/projects/wordpress-poster.webp">
```
