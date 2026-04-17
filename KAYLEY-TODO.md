# Soul Vibes — Kayley's Setup To-Do List

---

## ✅ Already Done — No Action Needed

- **Website** — 4 pages live at [soul-vibes.vercel.app](https://soul-vibes.vercel.app)
- **Contact form** — live and delivering to kayley@soulvibes.ca (Formspree)
- **Booking modal** — Acuity calendar embedded and working on Work With Me page
- **Workshop events** — Burnout & The Body (May 9) and Stress & the Nervous System (June 4) listed
- **Logo, images, content** — all pages complete with real photos and text

---

## ⚠️ Still To Do — Complete in Order

---

### Task 1 — Complete Stripe Setup

**What:** Finish verifying your Stripe account so you can receive payments from clients.

**Steps:**
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Look for the banner at the top asking for more information
3. Fill in: legal name, date of birth, home address, SIN (last 4 digits), bank account details
4. Submit — Stripe verifies within minutes

**AI Prompt (paste into Claude or ChatGPT if stuck):**
```
I just created a Stripe account for my small yoga therapy business in Canada called Soul Vibes.
I need help completing my account activation so I can receive payments.
I'm on the Stripe dashboard and I'm not sure what information I need to provide or where to find it.
Walk me through it step by step as if I've never used Stripe before. I am not technical.
```

---

### Task 2 — Connect Stripe to Acuity

**What:** Switch Acuity's payment processor from Squarespace Payments to Stripe. Do this before cancelling Squarespace or payments will stop working.

**Steps:**
1. Log into [acuityscheduling.com](https://acuityscheduling.com)
2. Left sidebar → **Payment Settings**
3. Disconnect **Squarespace Payments**
4. Click **Connect with Stripe** → log in and authorize
5. Confirm your prices are set on each appointment type:
   - 1:1 Session → $75
   - Group Sessions → $45
   - Burnout & The Body Workshop → $30–$50 (sliding scale)

**AI Prompt (paste into Claude or ChatGPT if stuck):**
```
I use Acuity Scheduling for my yoga therapy business called Soul Vibes.
I need to switch my payment processor from Squarespace Payments to Stripe.
I have already created my Stripe account and it is verified.
Walk me through disconnecting Squarespace Payments and connecting Stripe inside Acuity,
step by step. I am not technical.
```

---

### Task 3 — Point soulvibes.ca to Your New Website

**What:** Update your domain so soulvibes.ca shows your new site instead of Squarespace.

**Step A — Update DNS records in Squarespace Domains:**
1. Log into Squarespace → **Settings → Domains**
2. Click **soulvibes.ca** → **DNS Settings**
3. Delete any existing **A records** for `@`
4. Add these two new records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

5. Save

**Step B — Add domain in Vercel:**
1. Go to [vercel.com](https://vercel.com) → log in → open the **soul-vibes** project
2. Click **Settings → Domains → Add Domain**
3. Type `soulvibes.ca` → click **Add**
4. Vercel verifies and issues SSL automatically (up to 24 hours)

**AI Prompt (paste into Claude or ChatGPT if stuck):**
```
I have a domain called soulvibes.ca that I manage through Squarespace Domains.
I need to point it to my Vercel website instead of Squarespace.
I need to add an A record pointing @ to 76.76.21.21
and a CNAME record pointing www to cname.vercel-dns.com.
Walk me through finding the DNS settings in Squarespace and adding these records step by step.
I am not technical.
```

---

### Task 4 — Cancel Squarespace

**Do this LAST — only after Tasks 1–3 are complete and soulvibes.ca is showing your new site.**

**Steps:**
1. Log into Squarespace → **Settings → Billing**
2. Click **Cancel Subscription**
3. When asked about your domain — choose **keep domain** or **transfer domain out** (NOT delete)
4. Confirm cancellation

**AI Prompt (paste into Claude or ChatGPT if stuck):**
```
I want to cancel my Squarespace website subscription but keep my domain soulvibes.ca
so I can continue using it with my new website on Vercel.
Walk me through cancelling Squarespace without losing my domain.
I have already moved my DNS records to point to Vercel.
I am not technical.
```

---

### Task 5 — Test Everything

**What:** Full run-through before announcing the site.

- [ ] Visit **soulvibes.ca** — new site loads (not Squarespace)
- [ ] Click **Book a Session** — Acuity calendar opens in a popup
- [ ] Make a test booking — payment screen appears (Stripe connected)
- [ ] Submit the **contact form** — email arrives at kayley@soulvibes.ca
- [ ] Open on your **phone** — everything looks good on mobile
- [ ] Click all nav links — Home, Work With Me, About, Contact all work

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

*Last updated: April 16, 2026 — built by Mocha (MochaS29)*
