# Proof Point Maths

Live at https://proofpointmaths.in
Built with Jekyll on GitHub Pages, same engine as mayankmadhur.in.

---

## The rule that keeps this site tidy

**Root holds 5 files. Nothing else ever goes in root.**

Every new page goes in `pages/` with a `permalink:` line. The permalink
controls the URL, so the file can live anywhere. This is the one thing that
went wrong on the Healthcare Pulse repo, where 90 edition files ended up in root.

```
proofpointmaths/
├── index.html          <- 4 lines. Do not add content here.
├── _config.yml         <- site title, description, domain
├── CNAME               <- the custom domain
├── README.md           <- this file
├── .gitignore
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
    └── img/
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

1. Push to the `main` branch of the GitHub repo
2. Settings, Pages, source = Deploy from branch, `main` / root
3. Add `proofpointmaths.in` as the custom domain, and at your DNS provider point
   the apex A records to GitHub Pages and `www` as a CNAME to the repo
4. Tick Enforce HTTPS once the certificate is issued

Rebuild takes about 60 seconds after each push.

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
