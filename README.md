# Going the Distance Website v1.0

Static multi-page pre-launch website package for:
**Going the Distance — The 2027 Appalachian Trail Campaign for Cancer Research**

## Pages
- `index.html` — homepage / primary donor funnel
- `hike.html` — route, mileage rules, verification, opening section research
- `cause.html` — cancer-research mission and transparent money flow
- `partners.html` — public partnership overview
- `partner-info.html` — detailed Founding Community Partner product
- `updates.html` — pre-launch field notes / future trail journal
- `faq.html` — donor and business FAQs
- `disclosures.html` — pre-launch transparency and legal/operational boundaries

## Configuration
Edit `assets/site-config.js`.

Set:
- `rallyUpUrl` once the public RallyUp campaign URL is ready
- `campaignStatus`
- `trailMilesCompleted`
- `pledgedSupport`
- `donationsReceived`
- `currentLocation`
- `plannedStart`

All pledge/donate buttons use the single `rallyUpUrl` setting. When blank, they show a pre-launch modal instead of sending visitors to a dead link.

## Before public launch
1. Confirm CRI account/payment/receipt structure.
2. Obtain CRI approval for public name/logo/relationship language.
3. Replace or approve placeholder campaign image(s).
4. Add the live RallyUp URL in `site-config.js`.
5. Finalize sponsorship agreement and business terms.
6. Publish a final privacy policy appropriate to analytics/forms actually used.
7. Update the official Appalachian Trail mileage to the 2027 figure when ATC publishes it.
8. Replace placeholder partner cards with actual partners.
9. Add real analytics/referral tracking only after deciding the privacy approach.
10. Run mobile/browser/accessibility checks on the production host.

## Deployment
This is a static site and can be hosted on GitHub Pages, Netlify, Cloudflare Pages, Vercel static hosting, or a conventional web host. Upload the entire folder without changing its internal structure.
