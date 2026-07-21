
# Soul Vibes — Kayley's To-Do List

---

## ✅ Already Done — No Action Needed

**Original launch setup (spring 2026), all complete:**

- **Website** — 5 pages live at [soulvibes.ca](https://soulvibes.ca) with logo, real photos, and content
- **Domain** — soulvibes.ca pointed to Vercel (Tucows DNS), SSL active, email at kayley@soulvibes.ca untouched and working
- **Payments** — Stripe verified and connected inside Acuity (live mode, CAD); Squarespace cancelled
- **Booking** — Acuity calendar embedded and working (popup modal + book page)
- **Contact form** — live and delivering to kayley@soulvibes.ca (Formspree)
- **Newsletter signup** — MailerLite wired up on the Contact page
- **Client intake form** — private page, submissions arrive with subject "✦ New Client Intake — Soul Vibes" (see "Sending a Client Their Intake Form" below)
- **Full site test** — booking, forms, mobile, and navigation all verified on the live site
- **Search engine optimization (July 21, 2026)** — page titles, descriptions, social-share previews, sitemap, and business info for Google are all live

---

## ⚠️ Still To Do — SEO Follow-Ups (added July 21, 2026)

The website itself is now fully optimized for search. The three tasks below are the
parts only you can do, because they need accounts in your name. Do them in order. Tasks A and
B are each about 15 minutes.

---

### Task A: Google Search Console (tells Google your site exists)

**What:** A free Google tool that asks Google to read your site and shows you what people
searched for when they found you.

**Steps:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign
   in with a Google account (your Gmail is fine).
2. Click **Add property**. Choose the **URL prefix** option (the box on the right).
3. Enter exactly: `https://www.soulvibes.ca/` and click **Continue**.
4. On the verification screen, choose **HTML tag**. Copy the whole line of code it shows you
   (it starts with `<meta name="google-site-verification"`).
5. **Send that line to Mocha** (or paste it into Claude with the prompt below). It needs to be
   added to the website's code, which takes 2 minutes. Wait for the "it's live" reply.
6. Go back to Search Console and click **Verify**. You should see "Ownership verified".
7. In the left menu click **Sitemaps**, type `sitemap.xml` in the box, and click **Submit**.
   Status should show "Success".
8. Done. Check back in a week or two: the **Performance** tab will start showing what people
   search to find you.

**AI Prompt (paste into Claude if stuck):**
```
I run soulvibes.ca, a plain HTML website on Vercel (code at github.com/ChampK81/soul-vibes).
I am verifying the site in Google Search Console using the HTML tag method.
Here is my verification tag: [paste the meta tag here]
Please add it to the <head> of every page, publish the change, and tell me when
it is live so I can click Verify. I am not technical.
```

---

### Task B: Google Business Profile (the big one for local searches)

**What:** The free listing that makes you show up in Google Maps and in searches like "yoga
therapy near me". For a local wellness business this matters more than anything on the website.

**Steps:**
1. Go to [google.com/business](https://google.com/business) and click **Manage now**. Sign in
   with the same Google account as Task A.
2. Business name: **Soul Vibes**.
3. Business category: search for **Yoga studio** or **Yoga instructor** and pick the closest
   match (you can refine later).
4. When asked "Do you want to add a location customers can visit?" answer **No** (unless you
   have a studio address you want public). This makes you a "service area business", which is
   right for home visits, rented spaces, and virtual work.
5. Set your **service area**: add your town/city and the nearby communities you actually serve.
6. Add your contact details: your phone number and website `https://www.soulvibes.ca`.
7. Google will ask you to **verify** the business. It offers one or more of: a short video of
   you/your workspace, a phone call, or a postcard. Follow whichever it offers; verification
   can take a few days.
8. Once verified, fill out the profile fully. Every field helps you rank:
   - **Description**: a couple of sentences in your own voice about trauma-informed yoga therapy.
   - **Services**: 1:1 Yoga Therapy, Group Sessions, Workshops, Virtual Sessions.
   - **Hours**, **photos** (your headshot, workshop photos), and the **booking link**
     `https://www.soulvibes.ca/book.html`.
9. Ongoing (optional but powerful): ask happy clients for a Google review, and post workshop
   announcements to the profile like you would to Instagram.

**AI Prompt (paste into Claude if stuck):**
```
I am setting up a Google Business Profile for my yoga therapy practice, Soul Vibes,
in Alberta, Canada. I work from rented spaces and online, so I do not want my home
address shown. Walk me through the setup as a service-area business step by step,
including verification. I am not technical.
```

---

### Task C: One sentence on the website about virtual sessions (needs your words)

**What:** The site's behind-the-scenes tags now tell Google you offer virtual sessions across
Canada, but Google trusts what visitors can actually *read* on the page far more. One visible
sentence would help you show up for searches like "online yoga therapy Canada".

**Steps:**
1. Decide if you're ready to advertise virtual sessions publicly.
2. If yes, write one sentence in your own voice. Example shape (change it to sound like you):
   *"Sessions are available in person in Alberta and virtually across Canada."*
3. Send it to Mocha (or use the "Making Future Changes" prompt below) and say where you want
   it: the homepage and/or the Work With Me page. The booking page already says "Sessions
   available virtually and in-person", so that line could simply be extended.

---

## Sending a Client Their Intake Form

Your private intake page is live at:
**https://soulvibes.ca/client-intake.html**

To send it to a client:
1. Email or text them the link
2. They fill it out in their browser
3. Submitted answers arrive in your inbox at kayley@soulvibes.ca with the subject **"✦ New Client Intake — Soul Vibes"**

**Treat this URL like a password:**
- Only share it with clients directly (email, text, booking confirmation note)
- Do not post it on Instagram, your website, or any public channel
- The page is hidden from Google but anyone with the link could open it

---

### Future improvement (no rush)

The cleanest long-term home for intake responses is *inside Acuity*, attached to each client's profile alongside their bookings. Acuity doesn't currently let us send forms to existing clients without re-booking, which is why we built this private page as a workaround.

When you're ready, we can:
1. Attach your intake form to the "1:1 Session" appointment type in Acuity so every new booking auto-includes it (ideal for new clients).
2. Keep this private page as a backup for one-off needs.

The current setup works fine — only revisit when convenient.

---

## Making Future Changes to the Website

If you want to update text, add a new event, change pricing, or anything else:

**AI Prompt to start any website change:**
```
I have a plain HTML website for my yoga therapy business Soul Vibes.
It is hosted on Vercel and the code is on GitHub at github.com/ChampK81/soul-vibes.
I want to make a change to [describe what you want — e.g. "add a new workshop date"
or "update the text in my about page"].
The page I want to edit is called [filename — e.g. work-with-me.html or about.html].
Help me find the right section and make the change.
I am not technical but I want to learn. Walk me through it step by step.
```

---

*Last updated: July 21, 2026 — built by Mocha (MochaS29)*
