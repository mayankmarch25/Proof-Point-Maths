# Proof Point Maths

Live at https://mayankmarch25.github.io/proofpointmaths/
Built with Jekyll on GitHub Pages, same engine as mayankmadhur.in.

Repo name is `proofpointmaths`. The `baseurl` line in `_config.yml` must
match that name **exactly, including capitals and hyphens**. If the two ever
disagree, the site loads as unstyled text because the stylesheet 404s.

---

## The rule that keeps this site tidy

**Root holds 5 files. Nothing else ever goes in root.**

Every new page goes in `pages/` with a `permalink:` line. The permalink
controls the URL, so the file can live anywhere. This is the one thing that
went wrong on the Healthcare Pulse repo, where 90 edition files ended up in root.

```
proofpointmaths/
├── index.html          <- 4 lines. Do not add content here.
├── _config.yml         <- site title, description, baseurl
├── README.md           <- this file
├── .gitignore
│                          (CNAME goes here later, see below)
│
├── _data/              <- ALL CONTENT LIVES HERE. Edit YAML, not HTML.
│   ├── contact.yml         phone, WhatsApp, email, address, timings
│   ├── programmes.yml      the four programme cards and fees
│   ├── method.yml          the four "why us" cards
│   ├── steps.yml           the joining process
│   └── faq.yml             questions parents ask
│
├── _includes/          <- reusable blocks, used by more than one page
│   ├── head.html  nav.html  footer.html
│   ├── programmes.html  faq.html  enquiry.html
│
├── _layouts/           <- page shells
│   ├── default.html        head + nav + content + footer
│   ├── home.html           the home page assembly
│   └── page.html           every inner page
│
├── pages/              <- every page except the home page
│   ├── programmes.html  fees.html  about.html  contact.html  404.html
│
└── assets/
    ├── css/style.css       one stylesheet, all of it
    ├── js/site.js          one script, all of it
    └── img/                brand assets, all generated from the master logo
        ├── logo-header.png     480px lockup, used in the nav
        ├── logo.png            1000px lockup, for print and decks
        ├── logo-mark.png       the pencil-P on its own, square
        ├── favicon.ico         browser tab
        ├── favicon-32.png
        ├── apple-touch-icon.png
        └── og-image.png        1200x630 card for WhatsApp and LinkedIn shares

## Brand colours

Both are sampled straight from the logo file, and both live in
`assets/css/style.css` as CSS variables. Change them there and the entire
site follows.

| Name | Hex | Used for |
|---|---|---|
| Navy | `#01213F` | text, buttons, closing band |
| Red | `#D32223` | accents, section labels, the QED square |
| Pencil wood | `#F4E7D4` | the featured programme card edge |

Motto: **Understand, practice, prove.** It appears in the nav beside the logo,
in the hero proof block, and in the footer.
```

---

## Common jobs

| I want to change | Edit this file | Touch HTML? |
|---|---|---|
| A fee | `_data/programmes.yml` | No |
| Phone, WhatsApp, address, timings | `_data/contact.yml` | No |
| Add or remove a programme | `_data/programmes.yml` | No |
| Add an FAQ | `_data/faq.yml` | No |
| Reword a "why us" card | `_data/method.yml` | No |
| Any colour or spacing | `assets/css/style.css` | No |
| Site title or meta description | `_config.yml` | No |
| Add a whole new page | new file in `pages/` | Yes, one file |

Fees appear in two places, the programme cards and the fees table. Both read
`_data/programmes.yml`, so you change the number once.

---

## Adding a new page

Create `pages/results.html`:

```
---
layout: page
permalink: /results/
title: Results
eyebrow: Evidence
heading: What students actually scored
lede: One line under the heading.
---

<p>Your content here, plain HTML.</p>
```

Then add one line to `_includes/nav.html`:

```
<a href="{{ '/results/' | relative_url }}">Results</a>
```

That is the whole process. Never create the file in root.

---

## Publishing

1. Push to the `main` branch of the repo `proofpointmaths`
2. Settings, Pages, source = Deploy from branch, `main` / root
3. Rebuild takes about 60 seconds

There is deliberately **no CNAME file** in this repo yet, because
`proofpointmaths.in` is not registered. A CNAME pointing at a dead domain makes
the whole site unreachable, including the github.io address.

## Switching to the real domain later

Do these four things together, not one at a time:

1. Confirm the domain resolves. https://dnschecker.org/#A/proofpointmaths.in
   must return four `185.199.x.153` addresses.
2. In `_config.yml`, set `url` to `https://proofpointmaths.in` and `baseurl` to `""`
3. Rename `CNAME-add-this-later.txt` to `CNAME`
4. Settings, Pages, Custom domain, enter `proofpointmaths.in`, Save, then tick
   Enforce HTTPS once it is available

DNS records to add at your registrar:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | mayankmarch25.github.io |

## If the site ever loads with no styling

The `baseurl` and the repo name have gone out of sync. Nothing else causes it.
Open `_config.yml` and make `baseurl` match the repo name character for character.

---

## Before going live, replace these placeholders

Search the repo for square brackets. All of them sit in `_data/` and `pages/`:

- `_data/contact.yml`: phone, WhatsApp number, email, street address, maps link
- `_data/programmes.yml`: the three `[Rs fee]` lines, `[year]`, and `[month year]`
  for when Classes 11 and 12 open
- `pages/fees.html`: payment terms, refund policy, sibling discount

The About page is already written with your real profile. Nothing to fill in there.

## Current model

Classes 5 to 10, weekend batches only, taught by the founder. Classes 11 and 12
are shown as Coming soon. To launch that batch later, open
`_data/programmes.yml` and delete the single line `status:   soon` from the last
block, then set the real schedule and fee. Nothing else changes anywhere.

The WhatsApp number must be country code first, no plus and no spaces,
for example `919876543210`.
