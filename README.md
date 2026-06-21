# Minhajuddin Ayubin — Portfolio

Two files make up this entire site:

- **`index.html`** — the design and code. You should never need to open this.
- **`content.js`** — every editable thing: your name, status, bio, experience, achievements, projects, skills, email, GitHub link. This is the only file you touch.

---

## 1. Put it live on GitHub Pages (free, static, no extra services)

1. Go to [github.com/new](https://github.com/new) and create a repo named exactly:
   ```
   Minhaj2003.github.io
   ```
   (must match your GitHub username exactly, lowercase doesn't matter)
2. Upload `index.html` and `content.js` to the repo (drag-and-drop on the "Add file → Upload files" page works fine).
3. Commit the upload.
4. Wait 1–2 minutes, then visit:
   ```
   https://minhaj2003.github.io
   ```
   Your site is live.

If you'd rather use a different repo name, that also works — just turn on Pages manually under **Settings → Pages → Source → Deploy from branch → main → / (root)**. The `username.github.io` repo name is just the one shortcut that goes live automatically at the root URL.

---

## 2. Edit anything — no coding

1. Open the repo on github.com.
2. Click **`content.js`**.
3. Click the **pencil icon** (top right of the file view) to edit.
4. Change whatever text you want — name, status, a project description, a GitHub link, anything between the quotes.
5. Scroll down, type a short commit message, click **Commit changes**.
6. Your live site updates automatically within a minute or two.

`content.js` has comments throughout explaining what each section does and exactly how to add or delete a project, achievement, or timeline entry (copy a `{ ... }` block, paste it, add a comma).

A couple of things that update themselves automatically, so you don't have to:
- The Skills bars are calculated from whatever's in each project's tech stack — add or remove a project and Skills updates on its own.
- "Months in research" in the hero recalculates itself from your start date every time someone loads the page.
- The footer year updates itself every January.

---

## 3. Getting it to outrank the old, wrong search result

Search engines need to crawl a page before it shows up — this isn't instant. Two things speed it up:
- Submit your URL in [Google Search Console](https://search.google.com/search-console) (free) — this tells Google to crawl it sooner rather than waiting to discover it naturally.
- Link to it from places that are already indexed and trusted — your GitHub profile README, any old certificate/profile pages, etc. Backlinks are what tell Google "this is the authoritative page for this name."

---

## 4. About the "opens in the cloud" email issue

A `mailto:` link (like the "Send me an email" button) always hands off to whatever email app is set as **default on the visitor's own device or browser** — that's a browser/OS setting, not something a website can control. If a browser defaults to Gmail-in-a-tab instead of a desktop app, that's true for any website's mailto link, not specific to yours. Nothing to fix here — it's working as designed; visitors with a desktop mail client set as default will get that instead.

The page itself no longer displays your raw email address as visible text anywhere — buttons just say "Send me an email." There's also a small "Copy email instead" link next to the contact buttons, for anyone whose mailto doesn't behave the way they want.
