// Weekly website stats email for Kayley.
// Pulls the last 7 days of Vercel Web Analytics for soulvibes.ca (plus the 7 days
// before, for comparison) and emails a short summary through Resend.
// Run by .github/workflows/weekly-analytics.yml every Friday morning.
//
// Needs (GitHub repo secrets): VERCEL_TOKEN, RESEND_API_KEY.
// Local test without sending: DRY_RUN=1 VERCEL_GLOBAL_CONFIG=<dir> node .github/scripts/weekly-analytics.mjs
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const PROJECT = process.env.VERCEL_PROJECT || "soul-vibes";
const SCOPE = process.env.VERCEL_SCOPE || "kayley-champagnes-projects";
const TO = "kayley@soulvibes.ca";
const FROM = "Soul Vibes Website <reports@soulvibes.ca>";
const METRIC = "vercel.analytics_pageview.count";

// Until both secrets are added in GitHub, skip quietly instead of failing every Friday.
if (!process.env.DRY_RUN && (!process.env.VERCEL_TOKEN || !process.env.RESEND_API_KEY)) {
  console.log("VERCEL_TOKEN or RESEND_API_KEY secret not set yet; skipping.");
  process.exit(0);
}

const DAY = 24 * 60 * 60 * 1000;
const now = new Date();
const weekStart = new Date(now - 7 * DAY);
const prevStart = new Date(now - 14 * DAY);

function query({ since, until, groupBy, unique, limit = 10 }) {
  const args = ["metrics", METRIC, "-p", PROJECT, "--scope", SCOPE,
    "--since", since.toISOString(), "--until", until.toISOString(), "--format", "json"];
  if (unique) args.push("-a", "unique/visitor_id");
  if (groupBy) args.push("--group-by", groupBy, "--limit", String(limit));
  if (process.env.VERCEL_TOKEN) args.push("--token", process.env.VERCEL_TOKEN);
  if (process.env.VERCEL_GLOBAL_CONFIG) args.push("--global-config", process.env.VERCEL_GLOBAL_CONFIG);
  const out = execFileSync("vercel", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  const rows = JSON.parse(out.slice(out.indexOf("{"))).summary || [];
  const key = unique ? "vercel_analytics_pageview_count_unique_visitor_id" : "vercel_analytics_pageview_count_sum";
  return rows.map((r) => ({ name: groupBy ? r[groupBy] : null, value: r[key] || 0 }));
}

const total = (rows) => rows.reduce((n, r) => n + r.value, 0);

const views = total(query({ since: weekStart, until: now }));
const visitors = total(query({ since: weekStart, until: now, unique: true }));
const prevViews = total(query({ since: prevStart, until: weekStart }));
const prevVisitors = total(query({ since: prevStart, until: weekStart, unique: true }));
const pages = query({ since: weekStart, until: now, groupBy: "request_path", limit: 8 });
const sources = query({ since: weekStart, until: now, groupBy: "referrer_hostname", limit: 6 });
const devices = query({ since: weekStart, until: now, groupBy: "device_type", limit: 4 });

const PAGE_NAMES = {
  "/": "Home", "/index": "Home", "/index.html": "Home",
  "/work-with-me": "Work With Me", "/work-with-me.html": "Work With Me",
  "/about": "About", "/about.html": "About",
  "/contact": "Contact", "/contact.html": "Contact",
  "/book": "Book a Session", "/book.html": "Book a Session",
};
const SOURCE_NAMES = {
  "": "Typed the address or a direct link (email, text, bookmark)",
  "instagram.com": "Instagram", "l.instagram.com": "Instagram", "www.instagram.com": "Instagram",
  "facebook.com": "Facebook", "l.facebook.com": "Facebook", "m.facebook.com": "Facebook", "lm.facebook.com": "Facebook",
  "www.google.com": "Google", "google.com": "Google", "www.google.ca": "Google",
  "www.bing.com": "Bing", "linktr.ee": "Linktree",
};
const DEVICE_NAMES = { mobile: "Phone", desktop: "Computer", tablet: "Tablet" };

// Merge rows that map to the same friendly name (e.g. /about and /about.html).
function friendly(rows, names) {
  const merged = new Map();
  for (const r of rows) {
    const raw = r.name ?? "";
    const label = names[raw] ?? (raw || names[""] || "Unknown");
    merged.set(label, (merged.get(label) || 0) + r.value);
  }
  return [...merged].map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
}

function change(cur, prev) {
  if (!prev) return cur ? "new this week" : "";
  const pct = Math.round(((cur - prev) / prev) * 100);
  if (pct === 0) return "same as last week";
  return `${pct > 0 ? "up" : "down"} ${Math.abs(pct)}% from last week (${prev})`;
}

const fmt = (d) => d.toLocaleDateString("en-CA", { month: "short", day: "numeric", timeZone: "America/Edmonton" });
const range = `${fmt(weekStart)} to ${fmt(now)}`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const GOLD = "#b79b72";
const INK = "#2b2326";
const MUTED = "#7a6e68";

function listSection(title, rows, empty) {
  const body = rows.length
    ? rows.map((r) => `<tr><td style="padding:6px 0;color:${INK};">${esc(r.name)}</td><td style="padding:6px 0;text-align:right;color:${INK};font-weight:600;">${r.value}</td></tr>`).join("")
    : `<tr><td style="padding:6px 0;color:${MUTED};">${empty}</td></tr>`;
  return `<h2 style="font-size:15px;color:${GOLD};margin:24px 0 6px;text-transform:uppercase;letter-spacing:.06em;">${title}</h2>
<table role="presentation" width="100%" style="border-collapse:collapse;font-size:15px;">${body}</table>`;
}

const html = `<!doctype html><html><body style="margin:0;background:#f5f0eb;font-family:Helvetica,Arial,sans-serif;">
<div style="max-width:560px;margin:0 auto;padding:24px 20px;">
<div style="background:#ffffff;border-radius:16px;padding:24px 22px;">
<p style="margin:0;font-size:13px;color:${MUTED};">soulvibes.ca &middot; ${range}</p>
<h1 style="font-size:22px;color:${INK};margin:6px 0 18px;">Your website this week</h1>
<table role="presentation" width="100%" style="border-collapse:collapse;"><tr>
<td style="width:50%;padding:12px;background:#f5f0eb;border-radius:12px;">
<div style="font-size:30px;font-weight:700;color:${INK};">${visitors}</div>
<div style="font-size:14px;color:${INK};">visitors</div>
<div style="font-size:12px;color:${MUTED};margin-top:4px;">${change(visitors, prevVisitors)}</div></td>
<td style="width:12px;"></td>
<td style="width:50%;padding:12px;background:#f5f0eb;border-radius:12px;">
<div style="font-size:30px;font-weight:700;color:${INK};">${views}</div>
<div style="font-size:14px;color:${INK};">page views</div>
<div style="font-size:12px;color:${MUTED};margin-top:4px;">${change(views, prevViews)}</div></td>
</tr></table>
${listSection("Most visited pages", friendly(pages, PAGE_NAMES), "No visits yet")}
${listSection("Where visitors came from", friendly(sources, SOURCE_NAMES), "No visits yet")}
${listSection("What they used", friendly(devices, DEVICE_NAMES), "No visits yet")}
<p style="font-size:13px;color:${MUTED};margin:24px 0 0;line-height:1.5;">Visitors are different people (or devices). Page views count every page they opened. Your own visits are included. Full details are in the Analytics tab of your Vercel dashboard.</p>
</div>
<p style="font-size:12px;color:${MUTED};text-align:center;margin:14px 0 0;">Sent every Friday morning by your website.</p>
</div></body></html>`;

const textList = (rows) => rows.map((r) => `  ${r.name}: ${r.value}`).join("\n") || "  No visits yet";
const text = `Your website this week (${range})

Visitors: ${visitors} ${change(visitors, prevVisitors)}
Page views: ${views} ${change(views, prevViews)}

Most visited pages:
${textList(friendly(pages, PAGE_NAMES))}

Where visitors came from:
${textList(friendly(sources, SOURCE_NAMES))}

What they used:
${textList(friendly(devices, DEVICE_NAMES))}

Your own visits are included. Full details are in the Analytics tab of your Vercel dashboard.`;

const subject = `Soul Vibes website: ${visitors} visitors this week`;

if (process.env.DRY_RUN) {
  writeFileSync(process.env.DRY_RUN_OUT || "weekly-analytics-preview.html", html);
  console.log(subject + "\n\n" + text);
} else {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [TO], subject, html, text }),
  });
  if (!res.ok) {
    console.error(`Resend error ${res.status}: ${await res.text()}`);
    process.exit(1);
  }
  console.log(`Sent: ${subject}`);
}
