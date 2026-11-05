# StartPick

**Know what's worth building.**

Current milestone: pre-launch informational landing page, preliminary `/start` path selector, and transparent legal/information pages. No deployment, live market research, checkout or paid report delivery is included in this milestone.

## Develop locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run typecheck
npm run build
```

## Routes

- `/` — premium informational landing with no inputs
- `/start` — direction/discovery UI preview (not yet connected to research)
- `/privacy`, `/terms`, `/refunds`, `/disclaimer`, `/cookies`, `/contact`, `/accessibility`

Research visuals and example verdicts are **illustrative only**, not actual findings. The proposed $29 report is not purchasable yet.

Before launch, complete [LEGAL_LAUNCH_CHECKLIST.md](LEGAL_LAUNCH_CHECKLIST.md) and configure a real monitored support address using `NEXT_PUBLIC_SUPPORT_EMAIL`.

## V3 accessibility and trust refinements

- Clear illustrative status on mobile and desktop research mockups
- Reduced overlap and larger labels on narrow screens
- 44px minimum Start CTA, focus-visible states and meaningful skip link
- Print-friendly policy pages
- Pre-launch robots noindex default; set `NEXT_PUBLIC_SITE_LIVE=true` only after launch checks
- Automated source-level smoke checks via `npm test`
