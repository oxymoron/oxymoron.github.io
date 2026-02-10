# CLAUDE.md

Guide for AI assistants working on this repository.

## Project Overview

Personal Jekyll-based static blog for **azubkov.com**, hosted on GitHub Pages. The site documents Andrey Zubkov's relocation from Korea to the USA (2015–2017) with photo galleries and personal experiences. Built on the **Clean Blog** Bootstrap theme with custom AngularJS components.

## Repository Structure

```
├── _layouts/            # Jekyll layout templates (default.html, post.html)
├── _includes/           # Reusable template fragments (header, footer, nav, carousel, photos)
├── _posts/              # 51 blog posts in markdown (2015-03 to 2017-03)
├── _sass/               # Sass partials (_blog.scss, _resume.scss)
├── css/                 # Bootstrap 3.x, Clean Blog theme CSS, blog.scss entry point
├── js/                  # jQuery, Bootstrap, AngularJS controllers, Flickr photo data
├── img/                 # Hero/background images
├── fonts/               # Bootstrap Glyphicons
├── index.html           # Homepage with pagination
├── about.html           # Resume/professional bio
├── contact.html         # Contact form
├── rus-kor.html         # AngularJS-powered items listing
├── _config.yml          # Jekyll configuration
├── CNAME                # Custom domain: azubkov.com
├── Guardfile            # LiveReload configuration
└── .gitignore           # Ignores _site/, .sass-cache/, .idea/
```

## Build & Development

### Prerequisites

- Ruby with Jekyll gem installed
- Guard gem (optional, for live reload)

### Commands

```bash
# Build the site
jekyll build

# Serve locally with auto-rebuild
jekyll serve

# Live reload during development (watches _site/ for changes)
guard
```

### Configuration

`_config.yml` settings:
- **Markdown:** kramdown
- **Pagination:** 15 posts per page
- **Plugins:** jekyll-sitemap

### No CI/CD

There are no GitHub Actions workflows. Deployment is automatic via GitHub Pages on push to `master`.

## Content Conventions

### Blog Posts

Posts live in `_posts/` using the naming convention: `YYYY-MM-DD-slug-title.md`

**Front matter fields:**

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Post title |
| `description` | Yes | Subtitle/excerpt shown below the title |
| `layout` | Yes | Always `post` |
| `image` | No | Hero background image filename (from `/img/`) |
| `photoset` | No | Date key referencing a photo album in `js/flickr.js` |
| `carousel` | No | `true` for carousel display, omit for photo grid |
| `ogimage` | No | Open Graph image URL for social sharing |

### Pages

Top-level HTML pages use this front matter pattern:

| Field | Description |
|---|---|
| `layout` | `default` |
| `title` | Page title |
| `navTitle` | Short label for navigation menu (falls back to `title`) |
| `description` | Page subtitle |
| `group` | Set to `"navigation"` to appear in navbar |
| `order` | Navigation sort order (1=Home, 2=Resume, 3=Contact) |
| `image` | Hero background image |

## Layout System

**Template hierarchy:** `default.html` is the base layout; `post.html` extends it.

- `default.html` → includes `header.html` + page content + `footer.html`
- `post.html` → adds Disqus comments, ShareThis social buttons, optional photo galleries

**Key includes:**
- `header.html` — Navbar + hero image section
- `footer.html` — Social links, copyright, Google Analytics (UA-47970192-1)
- `nav.html` — Bootstrap navbar with dynamic page listing
- `carousel.html` — Bootstrap carousel for photo galleries
- `photos.html` — Responsive photo grid

## JavaScript

No build pipeline or module bundler. Scripts are loaded directly.

- **`js/azubkov.js`** — AngularJS 1.3.14 controllers:
  - `AmazonCtrl` — Amazon purchase history display
  - `SaleCtrl` — Interactive inventory with filtering/sorting
- **`js/flickr.js`** — Hardcoded Flickr photo URLs organized by date keys (referenced by `photoset` front matter)
- **`js/jquery.js`** / **`js/bootstrap.min.js`** / **`js/clean-blog.js`** — Vendor libraries

## Styling

- Bootstrap 3.x as the base framework
- Clean Blog theme (`css/clean-blog.css`)
- Custom Sass partials compiled via `css/blog.scss`:
  - `_sass/_blog.scss` — Menu colors, callout boxes
  - `_sass/_resume.scss` — About page styling
- **Key colors:** Primary green `#81d425`, accent orange `#aa6708`

## External Services

- **Disqus** — Comments on blog posts
- **Google Analytics** — UA-47970192-1
- **Flickr** — Photo hosting (URLs in `js/flickr.js`)
- **AngularJS 1.3.14** — CDN-loaded for interactive pages
- **Font Awesome 4.1.0** — Icons via CDN
- **Google Fonts** — Lora, Open Sans

## Git Conventions

- **Default branch:** `master`
- **Commit style:** Short, feature-focused messages (e.g., "Update footer.html", "Accepted offer")
- **No tests** — There is no test suite in this project

## Important Notes

- The site content is primarily in English with some Russian-language posts
- Photo galleries depend on `js/flickr.js` data — when adding photo posts, add URLs there first
- The AngularJS code in `azubkov.js` is standalone and only used on `rus-kor.html`
- No package.json or Gemfile exists — dependencies are managed manually
- The `.gitignore` excludes `_site/`, `.sass-cache/`, and JetBrains IDE files
