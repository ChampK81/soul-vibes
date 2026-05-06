# Soul Vibes — Kayley's Setup To-Do List

---

## ✅ Already Done — No Action Needed

- **Website** — 4 pages live at [soul-vibes.vercel.app](https://soul-vibes.vercel.app)
- **Contact form** — live and delivering to kayley@soulvibes.ca (Formspree)
- **Booking modal** — Acuity calendar embedded and working on Work With Me page
- **Client intake form** — private page at [soulvibes.ca/client-intake.html](https://soulvibes.ca/client-intake.html), submissions delivered to kayley@soulvibes.ca with subject "✦ New Client Intake — Soul Vibes" (see "Sending a Client Their Intake Form" section below)
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
   - Burnout & The Body Workshop → $40

**AI Prompt (paste into Claude or ChatGPT if stuck):**
```
I use Acuity Scheduling for my yoga therapy business called Soul Vibes.
I need to switch my payment processor from Squarespace Payments to Stripe.
I have already created my Stripe account and it is verified.
Walk me through disconnecting Squarespace Payments and connecting Stripe inside Acuity,
step by step. I am not technical.
```

---

### Task 3 — Point soulvibes.ca to Your New Website (Tucows DNS)

**What:** Update your domain's DNS at Tucows so `soulvibes.ca` loads your new Vercel site.

**⚠️ Before you touch anything — protect your email:**
If `kayley@soulvibes.ca` is routed through Tucows, there will be **MX records** in the DNS list. **Do not delete those** — they keep your email working. You only need to change the `A` and `CNAME` records for `@` and `www`. If you are unsure what's in there, screenshot the current DNS table and send it to Mocha first.

**Step A — Update DNS records at Tucows:**
1. Log into your Tucows domain control panel (or Hover, if that's how you access it)
2. Open **soulvibes.ca** → **DNS** (or **DNS Settings**)
3. Find and **delete** any existing records of these types:
   - `A` record with host `@` (the apex / root domain)
   - `AAAA` record with host `@` (if present)
   - `CNAME` record with host `www`
4. Add these **two new records**:

| Type  | Host / Name | Target / Value          | TTL  |
|-------|-------------|-------------------------|------|
| A     | `@`         | `76.76.21.21`           | 1 hr |
| CNAME | `www`       | `cname.vercel-dns.com`  | 1 hr |

5. Leave all **MX records** (email) untouched.
6. Save. Propagation is usually 15 minutes to 1 hour (can take up to 24 hours).

**Step B — Add the domain in Vercel:**
1. Go to [vercel.com](https://vercel.com) → log in → open the **soul-vibes** project
2. Click **Settings → Domains → Add Domain**
3. Add `soulvibes.ca` → click **Add**
4. Add `www.soulvibes.ca` too — Vercel will auto-configure it to redirect to the apex
5. Vercel verifies DNS and issues the SSL certificate (green padlock) within a few minutes of propagation

**How to check it worked:**
- Visit `https://soulvibes.ca` — you should see the new Soul Vibes site
- Visit `https://www.soulvibes.ca` — should redirect to `https://soulvibes.ca`
- Send yourself a test email at `kayley@soulvibes.ca` to confirm email still works

**AI Prompt (paste into Claude or ChatGPT if stuck):**
```
I have a domain called soulvibes.ca registered through Tucows.
I need to point it to my Vercel website.
I need to:
- Add an A record with host @ pointing to 76.76.21.21
- Add a CNAME record with host www pointing to cname.vercel-dns.com
- Leave all MX records (email) untouched
Walk me through finding the DNS settings in the Tucows control panel and adding
these records step by step. I am not technical.
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

*Last updated: May 6, 2026 — built by Mocha (MochaS29)*
