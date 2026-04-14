# The Century of Conflict — Interactive Review Website
### Ryan Chen & Aaron Castro

---

## 🗂 Project Structure

```
century-of-conflict/
│
├── index.html          ← Main page (all 7 sections live here)
├── css/
│   └── style.css       ← All styling & colors
├── js/
│   └── main.js         ← All content data + interactive logic
└── assets/
    └── images/         ← Put your map images & primary source images here
```

---

## 🚀 How to Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** → **New repository**
2. Name it: `century-of-conflict` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
**Option A — Drag and Drop (easiest):**
1. On your new repository page, click **uploading an existing file**
2. Drag your entire project folder contents in
3. Click **Commit changes**

**Option B — GitHub Desktop App (recommended):**
1. Download [GitHub Desktop](https://desktop.github.com)
2. Clone your repository to your computer
3. Copy all project files into the cloned folder
4. Commit and push

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select `main` branch → `/ (root)` → **Save**
4. Your site will be live at: `https://YOUR-USERNAME.github.io/century-of-conflict/`
   (takes ~1 minute to go live)

---

## ✏️ How to Edit Content

All content is in **`js/main.js`**. Look for the `✏️ EDIT` markers.

### Adding Quiz Questions
Find `QUIZ_DATA` in `main.js`. Add a new object to any section's array:
```javascript
{
  q: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0   // ← index of the correct answer (0 = first option)
}
```

### Adding Timeline Events
Find `TIMELINE_DATA` in `main.js`. Add to `intro` or `ww2` arrays:
```javascript
{
  year: "1916",
  title: "Battle of Verdun",
  detail: "One of the longest and most destructive battles of WWI..."
}
```

### Adding Flashcards
Find `FLASHCARD_DATA` in `main.js`:
```javascript
{ front: "Term or concept", back: "Definition or explanation" }
```

### Changing Colors
Open `css/style.css`. At the very top, find `:root { }` and change the hex values:
```css
:root {
  --red:   #8b1a1a;   /* ← change this to any color */
  --cream: #f4f0e6;   /* ← page background */
  --ink:   #1a1714;   /* ← text & navbar */
  --gold:  #b8872a;   /* ← accent dates/labels */
}
```

---

## 🗺 Adding Real Maps (Leaflet.js)

Replace any `<div class="map-placeholder">` in `index.html` with:

```html
<div id="my-map" style="height: 400px; border-radius: 4px;"></div>
```

Then in `js/main.js`, add at the bottom:
```javascript
// Add Leaflet CSS to <head> in index.html first:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css">
// <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>

const map = L.map('my-map').setView([50, 10], 4); // center on Europe
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
// Add markers:
L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris — French capital");
```

---

## 📺 Adding YouTube Videos

In `index.html`, find the `video-placeholder` divs in Section 5 (Cold War).
Replace them with:
```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
  width="100%" height="180" 
  frameborder="0" allowfullscreen>
</iframe>
```
Get the Video ID from the YouTube URL: `youtube.com/watch?v=VIDEO_ID`

---

## 🖼 Adding Images (Maps & Primary Sources)

1. Place image files in `/assets/images/`
2. For the before/after maps in WWII section, find this in `index.html`:
   ```html
   <div class="map-placeholder small">
   ```
   Replace with:
   ```html
   <img src="assets/images/europe-1939.jpg" alt="Europe 1939" style="width:100%; border-radius:4px;">
   ```
3. For gallery images, update `GALLERY_DATA` in `main.js`:
   ```javascript
   { src: "assets/images/propaganda-poster.jpg", caption: "British WWI Recruitment Poster, 1915", alt: "Recruitment Poster" }
   ```

---

## 📦 Libraries Used (loaded automatically — no install needed)
- **Chart.js** — economic graphs (CDN)
- **Google Fonts** — Playfair Display, Source Serif 4, Special Elite (CDN)

---

*Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools. Just open `index.html` in a browser to preview.*
