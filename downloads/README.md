# Downloads

Files served for download from the site (e.g. the free lead-magnet guide).

## Free guide (Work With Me page CTA)

- **File:** `soul-vibes-free-guide.pdf`
- Right now this is a **branded placeholder** so the signup → download flow is
  fully testable on the `free-download-cta` branch.

### To go live with the real guide

1. Replace `soul-vibes-free-guide.pdf` with Kayley's real PDF — **keep the same
   filename** so no code changes are needed. (Or rename it and update the
   `href` on the `#fg-download` link in `work-with-me.html`.)
2. Tweak the heading / description / bullet copy in the `#free-guide` section of
   `work-with-me.html` if the guide's title or contents differ.
3. Merge `free-download-cta` → `main` to publish to soulvibes.ca.

### How delivery works

- The email is captured to the Soul Vibes **MailerLite** list (same account/form
  as the newsletter signup on the Contact page — account `2105320`).
- On success the page reveals a **Download the guide (PDF)** button pointing at
  this file. No backend or automation setup required.
- Optional: Kayley can add a MailerLite automation to also email the PDF link to
  new subscribers in this list.
