# Soul Vibes — CLAUDE.md

This file is the project brief for Claude Code (or any AI coding assistant). It is read
automatically at the start of every session. It is written so that **Kayley can run this site
on her own machine with no other help**: follow "First-time setup" below, then ask Claude to
make the change you want in plain English.

## What this is

The website for **Soul Vibes**, Kayley Champagne's yoga therapy practice in Alberta, Canada.
Live at **https://soulvibes.ca**. Plain HTML, CSS, and JavaScript: no frameworks, no build
step, no server. Edit a file, push it, and the live site updates itself in about 30 seconds.

- **Owner:** Kayley Champagne, kayley@soulvibes.ca, Instagram @kc.soulvibes
- **GitHub:** `ChampK81/soul-vibes` (Kayley's account; MochaS29 is a collaborator)
- **Hosting:** Vercel (Kayley's account), auto-deploys the `main` branch
- **Built by:** Mocha (MochaS29). Questions: mocha.shmigelsky@gmail.com

## First-time setup on a new machine (Kayley: start here)

1. Install **Claude Code**: follow https://claude.com/claude-code (it walks you through
   installing everything it needs, including git).
2. Sign in to GitHub as **ChampK81** in your browser.
3. Open Terminal and run:
   ```bash
   git clone https://github.com/ChampK81/soul-vibes.git
   cd soul-vibes
   claude
   ```
   (git will ask you to log in to GitHub the first time; approve it in the browser.)
4. That's it. Tell Claude what you want changed, in plain English. To see the site locally
   before publishing, ask Claude to "open index.html in my browser" or run `open index.html`.
5. Publishing = pushing to `main`. Claude can do this for you ("commit and push my change").
   Then check **https://soulvibes.ca** on your **phone** to confirm it looks right.

There is no install step, no `npm install` needed to edit or preview the site. (The `package.json`
in the repo is only for the optional Playwright test suite, which is currently paused.)

## The pages

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `work-with-me.html` | Offerings, booking, upcoming workshops/events |
| `about.html` | Kayley's bio, credentials, land acknowledgement |
| `contact.html` | Contact form + newsletter signup (tabbed card) |
| `book.html` | Booking page (Acuity) |
| `client-intake.html` | **Private** intake form. Not linked from anywhere, `noindex`. Share by direct URL only. Self-contained styling (does not use `css/main.css`); the ~200KB size is a base64-embedded logo, that's normal. |

Shared files: `css/main.css` (all styles + design system) and `js/main.js` (mobile nav
toggle + active-link highlight; do not delete). Images live in `images/`.

## How deploys work

Every push to `main` auto-deploys to Vercel and is live at soulvibes.ca in ~30 seconds.
There is no staging site; `main` IS production. For anything risky, work on a branch, review,
then merge (that's how the new logo and favicon were done).

**After every publish, verify:** load https://soulvibes.ca (on a phone) and confirm the change
is actually there before calling it done. "Pushed" is not "verified."

DNS: domain registered at **Tucows**; A record → Vercel, CNAME www → `cname.vercel-dns.com`.
The MX records route kayley@soulvibes.ca email: **never delete or change the MX records.**

## Third-party services (no secrets live in this repo — keep it that way)

- **Acuity Scheduling** (booking): owner ID `39014675`. Booking opens as a modal popup from any
  element with the `data-open-booking` attribute; the modal JS is at the bottom of
  `work-with-me.html`. New book button: `<button class="btn btn-primary" data-open-booking>Book a Session</button>`
- **Stripe** (payments): connected inside Acuity, live mode, CAD. Managed entirely from the
  Acuity and Stripe dashboards, nothing in this repo.
- **Formspree** (contact + intake forms): form ID `xvzdkwdw`, shared by `contact.html` and
  `client-intake.html` (the intake hardcodes its email subject so it stands out in the inbox).
  Free tier = **50 submissions/month combined**; if forms start bouncing, that cap is why
  (upgrade is ~$10/mo).
- **MailerLite** (newsletter): account `2105320`, form `179059986540791003`. Two signup paths on
  the Contact page; both fire a client-side `fetch` with `mode: 'no-cors'` (the response is
  opaque; the code assumes success). This pattern exists to avoid a paid Formspree plan.

## Design system (in `css/main.css`)

CSS custom properties: `--bg #171315` (dark), `--text #f5f0eb`, `--muted #d7ccc8`,
`--soft #efe5df`, `--gold #b79b72` (accent), `--sage #8b9a8c`, `--radius 24px`, `--max 1180px`.
Key classes: `.container`, `.narrow`, `.split`, `.three-col`, `.hero`, `.image-break`,
`.card`/`.panel`, `.btn.btn-primary` (gold), `.btn.btn-ghost`, `.pill`.
**Mobile breakpoint: 980px** — grids collapse to one column, nav becomes a hamburger.

## Standing rules (learned the hard way — don't relearn them)

1. **The header logo is LOCKED.** `images/logo-wordmark.png` (transparent gold wordmark, pulse
   line stacked above the name, revised July 2026) and its CSS are final. Do not restyle,
   recrop, or "improve" it.
2. **Mobile first.** Kayley reviews everything on her phone. Check every change at phone width
   before publishing.
3. **Keep it plain.** No frameworks (React etc.), no CMS, no build tools. That simplicity is the
   point of this site.
4. **Never commit secrets.** No API keys or tokens in the repo, ever. (Form/account IDs above
   are public-by-design embed IDs, that's fine.)
5. **`client-intake.html` stays unlinked and `noindex`.** It exists because Acuity cannot send
   an intake form to an existing client outside a booking; don't go hunting for that Acuity
   feature, it doesn't exist. Long-term plan: attach the form to the 1:1 appointment type in Acuity.
6. **Co-hosted workshops may register through the co-host's Acuity** (e.g. a
   `canmorecounselling.as.me` link). That is on purpose; don't "fix" those links to Soul Vibes' Acuity.
7. **Empty events state:** when no workshops are upcoming, `work-with-me.html` keeps the
   `#upcoming` heading + intro paragraph with the inner flex container left EMPTY. No
   placeholder "no events" text.
8. **Kayley's voice is hers.** Her written content (guides, essays) may use em dashes and an
   honest, gritty tone; don't sand it into clinical wellness-speak. (Site body copy currently
   avoids em dashes; match whichever the surrounding text does.)

## Common changes

- **Edit text:** open the page's `.html`, change the text, push.
- **Add/remove a workshop:** `work-with-me.html`, the `#upcoming` section. Copy an existing
  event card and edit; when it's past, remove the card (see rule 7).
- **Change a price:** search the price in `work-with-me.html` (`.price-tag` spans + card
  highlight boxes).
- **Add an image:** drop the file in `images/`, reference as `src="images/name.jpg"`.
- **External-link button:** `<a class="btn btn-primary" href="https://..." target="_blank" rel="noopener">Register</a>`

## Git workflow

Small text/content edits go straight to `main`. Bigger or visual changes: make a branch,
review (on a phone), merge. Commit messages are a short plain description of what changed.

## Current open items (Jul 2, 2026)

- Branch **`free-download-cta`** (pushed, NOT merged): free-guide lead magnet on
  work-with-me.html, wired to MailerLite with a placeholder PDF. Waiting on Kayley's real PDF
  (drop it at `downloads/soul-vibes-free-guide.pdf`, keep the filename) and her copy review.
  Merge only when both are in.
- Kayley's admin list lives in `KAYLEY-TODO.md` (Stripe 2FA phone swap, 1:1 payment-method
  contradiction in Acuity, optional $45 group session).
- Optional polish, not urgent: branded 404, analytics. (sitemap.xml, robots.txt, JSON-LD, canonical
  tags, and absolute OG images were added in the Jul 2026 SEO pass. `client-intake.html` is deliberately
  NOT in robots.txt: a Disallow line would expose the private URL and block crawlers from seeing its
  noindex. When editing a page, keep its `<link rel="canonical">`/`og:url` and sitemap.xml in sync.)
