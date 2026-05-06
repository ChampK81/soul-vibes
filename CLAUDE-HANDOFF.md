# Soul Vibes — Claude Code Handoff Document

This document gives Claude Code everything it needs to work on the Soul Vibes website. Share this file at the start of any Claude Code session.

---

## What This Project Is

A plain HTML/CSS/JavaScript website for **Kayley Champagne**, a yoga therapist in Alberta, Canada. Business name: **Soul Vibes** (soulvibes.ca). The site replaces a Squarespace site and is hosted on Vercel.

**Owner:** Kayley Champagne — kayley@soulvibes.ca  
**Instagram:** @kc.soulvibes  
**Built by:** Mocha (MochaS29 on GitHub)

---

## Where Everything Lives

### Code
The website is plain HTML, CSS, and JavaScript — no frameworks, no build step, no node server. There are 4 pages and two shared files.

```
soul-vibes/
├── index.html           ← Homepage
├── work-with-me.html    ← Offerings, booking, events
├── about.html           ← Kayley's bio, credentials, land acknowledgement
├── contact.html         ← Contact form (Formspree)
├── client-intake.html   ← Private intake form (Formspree, noindex, share-by-URL only)
├── css/
│   └── main.css         ← All styles, design system, responsive layout
├── js/
│   └── main.js          ← Mobile nav toggle, active link detection
├── images/              ← All photos and assets
│   ├── logo-final.png   ← Logo (white background, used in header)
│   ├── kayley.png       ← Kayley's portrait (used on About page)
│   ├── workshop-burnout.jpg ← Workshop poster image
│   └── [background images for heroes and breaks]
├── tests/               ← Playwright test suite (currently paused)
├── .github/workflows/   ← GitHub Actions (weekly tests, currently paused)
├── KAYLEY-TODO.md       ← Kayley's setup checklist
└── CLAUDE-HANDOFF.md    ← This file
```

### GitHub
- **Repo:** github.com/ChampK81/soul-vibes
- **Owner account:** ChampK81 (Kayley)
- **Collaborator:** MochaS29 (Mocha)
- **Branch:** `main` — the only branch. All changes go here.
- **To push changes:** `git add [file] && git commit -m "description" && git push`

### Vercel
- **Live URL:** soul-vibes.vercel.app
- **Future domain:** soulvibes.ca (DNS not yet pointed)
- **How deploys work:** Vercel auto-deploys every time a commit is pushed to `main` on GitHub. No manual deploy needed — just push and it goes live within ~30 seconds.
- **Vercel account:** Kayley's account, connected to the ChampK81 GitHub repo

---

## Third-Party Services

### Acuity Scheduling (Booking)
- Kayley's booking calendar is embedded on `work-with-me.html`
- **Owner ID:** 39014675
- **Embed URL:** https://app.acuityscheduling.com/schedule.php?owner=39014675
- The booking opens as a **modal popup** when any `[data-open-booking]` button is clicked
- To add a new "Book" button anywhere: `<button class="btn btn-primary" data-open-booking>Book a Session</button>`
- The modal JS is at the bottom of `work-with-me.html`

### Formspree (Contact Form + Client Intake)
- **contact.html** submits to Formspree → kayley@soulvibes.ca (subject derived from the dropdown the user picks)
- **client-intake.html** submits to the same Formspree endpoint → kayley@soulvibes.ca (subject hardcoded as `✦ New Client Intake — Soul Vibes` for inbox triage)
- **Form ID:** xvzdkwdw (shared by both forms)
- **Endpoint:** https://formspree.io/f/xvzdkwdw
- Both forms use AJAX submission — success/error states show without page reload
- **Free tier:** 50 submissions/month total across both forms — monitor and upgrade (~$10/mo) if Kayley starts hitting the limit

### client-intake.html (Private Intake Page)
- Lives at `soulvibes.ca/client-intake.html` — full intake form (personal info, emergency contact, about-you questions, practice preferences, consents, waiver, signature)
- **Not linked** from any nav, footer, or other page — share-by-direct-URL only
- `<meta name="robots" content="noindex, nofollow">` so it won't appear in search results
- Built as a workaround because Acuity doesn't currently let Kayley send intake forms to existing clients without re-booking them
- Self-contained styling — does **not** use the main `css/main.css`. Has its own palette (plum/cream) and Cormorant Garamond + Jost fonts inlined in the file
- The header logo is a base64-encoded PNG embedded in the HTML — that's why the file is ~200KB
- **Long-term plan:** migrate intake data home to Acuity (attach form to appointment type). See KAYLEY-TODO.md "Future improvement" note

### Stripe (Payments)
- Connected to Acuity for payment processing
- Set up in Acuity → Payment Settings
- Kayley manages this directly in her Acuity and Stripe dashboards

---

## Design System

All design tokens are CSS custom properties in `css/main.css`:

```css
--bg: #171315          /* dark background */
--text: #f5f0eb        /* primary text */
--muted: #d7ccc8       /* secondary text */
--soft: #efe5df        /* headings on dark */
--gold: #b79b72        /* accent colour */
--sage: #8b9a8c        /* green accent */
--radius: 24px         /* card border radius */
--shadow: 0 18px 45px rgba(0,0,0,0.22)
--max: 1180px          /* max content width */
```

**Key layout classes:**
- `.container` — centred content wrapper (max 1180px)
- `.narrow` — centred narrow column (max 760px)
- `.split` — 2-column grid
- `.three-col` — 3-column grid
- `.hero` — full-width hero section with background image
- `.image-break` — full-width image divider section
- `.card` / `.panel` — card components
- `.btn.btn-primary` — gold gradient button
- `.btn.btn-ghost` — outlined ghost button
- `.pill` — small label badge

**Mobile breakpoint:** 980px — all grids collapse to single column, nav becomes a hamburger toggle.

---

## Current Offerings & Pricing

| Offering | Price | Booking |
|----------|-------|---------|
| 1:1 Session | $75 / 60 min | Acuity modal |
| Group Sessions | $45 / 90 min | Enquire via contact |
| Burnout & The Body Workshop | $40 | Acuity modal |
| Stress & the Nervous System Talk | Free | External link (Airdrie Public Library) |

---

## Current Events

### Burnout & The Body: A Yoga Therapy & Self-Compassion Workshop
- **Date:** May 9, 2026
- **Time:** 10 AM – 12 PM MST
- **Format:** Online via Zoom
- **Price:** Sliding scale $30–$50
- **Facilitators:** Chey Johns & Kayley Champagne
- **Supported by:** Canmore Counselling
- **Registration:** Via Acuity (booking modal)

### Stress & the Nervous System: An Introduction to Yoga Therapy
- **Date:** Thursday, June 4, 2026
- **Time:** 6:30 PM – 8:00 PM MT
- **Format:** In-person
- **Location:** Rotary Create Space 3, Airdrie Public Library
- **Price:** Free
- **Registration:** https://bookings.yourapl.ca/event/4002417

---

## How to Make Common Changes

### Update text on any page
Open the relevant `.html` file, find the text, edit it, save, commit, and push.

### Add a new workshop or event
Open `work-with-me.html`. Find the `<!-- Upcoming Workshops -->` section. Copy an existing event block and update the details. Push.

### Change a price
Search for the price in `work-with-me.html` and update it. Prices appear in `.price-tag` spans and in the offering card highlight boxes.

### Add a new image
Copy the image file into the `images/` folder. Reference it in HTML as `src="images/filename.jpg"`.

### Change the booking link for an event
Find the `<a>` or `<button>` tag for that event. If it opens the Acuity modal, it will have `data-open-booking` attribute. If it links externally, it will have `href="..."`. Update accordingly.

### Add a "Book" button that opens Acuity
```html
<button class="btn btn-primary" data-open-booking>Book a Session</button>
```

### Add a button that links to an external URL
```html
<a class="btn btn-primary" href="https://..." target="_blank" rel="noopener">Register</a>
```

---

## What NOT to Change

- Do not add frameworks (React, Vue, etc.) — this is intentionally plain HTML
- Do not change the Formspree form ID (`xvzdkwdw`) unless creating a new Formspree form
- Do not change the Acuity owner ID (`39014675`) unless Kayley gets a new Acuity account
- Do not delete `js/main.js` — it controls the mobile nav

---

## Git Workflow

All work goes directly to `main`. No branches needed for a site this simple.

```bash
# Make a change, then:
git add [filename]
git commit -m "Short description of what changed"
git push
# Vercel deploys automatically — live in ~30 seconds
```

---

*Handoff document — Soul Vibes website. Last updated May 6, 2026.*
