# Portfolio Site

A plain HTML/CSS/JS portfolio site — no build step, no framework, no npm install.
Everything runs by just opening the files or serving the folder statically.

## Structure

```
index.html        Portfolio (landing page) — project card grid
about.html         About Me — bio + photo
resume.html        Resume — experience, education, skills
css/
  tokens.css        Design tokens: every color, font size, and spacing value
                     used across the site. Change a value here and it updates
                     everywhere it's used.
  style.css         Shared styles: reset, nav, buttons, cards, footer.
  about.css         Layout specific to about.html.
  resume.css        Layout specific to resume.html.
js/
  nav.js            Mobile menu open/close toggle. That's its only job.
images/
  favicon.svg       Placeholder favicon.
```

## Editing content

Replace the placeholder copy directly in the HTML files:

- **Projects**: in `index.html`, duplicate one `<article class="card">...</article>`
  block per project, and update the title, description, and swap
  `Project image` for `<img src="images/your-image.jpg" alt="...">`.
- **About**: in `about.html`, replace the bio paragraphs and swap the
  `Profile photo` placeholder div for an `<img>` tag (a commented-out example
  is already in the file).
- **Resume**: in `resume.html`, duplicate a `.resume-entry` block per job or
  degree, and update the skills tag list. If you have a PDF resume, point the
  "Download PDF" button's `href` at it.

## Editing the design (colors, type, spacing)

Everything visual is controlled from `css/tokens.css`. Don't add new raw hex
codes or pixel values in the other stylesheets — add or adjust a token
instead, so the whole site stays consistent. For example, to change the
accent color site-wide, edit `--color-accent` once in `tokens.css`.

## Previewing locally

Any static file server works, for example from this folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deploying

This is a static site, so any static host works. GitHub Pages is a simple
free option:

1. Push this folder to a GitHub repository.
2. In the repo settings, enable GitHub Pages for the main branch.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

Netlify or Vercel also work — both let you drag-and-drop this folder to
deploy without any configuration.
