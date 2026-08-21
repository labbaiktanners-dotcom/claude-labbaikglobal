# Fix YouTube link not opening in preview

## Problem
The footer YouTube icon has the correct `target="_blank" rel="noopener noreferrer"` markup, but clicking it inside the Lovable preview shows `ERR_BLOCKED_BY_RESPONSE / www.youtube.com refused to connect`. This happens because the preview iframe's sandbox/COOP handling can intercept or block standard `_blank` navigation to external sites.

## Goal
Make the YouTube social link open reliably for end users, with a graceful fallback when the browser/popup blocker prevents a new tab.

## Plan
1. Add a small JavaScript click handler to the YouTube anchor (and consistently to all external social links) that calls `window.open(url, '_blank', 'noopener,noreferrer')` and falls back to copying the URL to the clipboard if the popup is blocked.
2. Keep the existing `target="_blank"` markup as the no-JS fallback for accessibility and SEO.
3. Add a subtle tooltip/aria hint on the social icons indicating "Opens in new tab".
4. Verify the link works on the published URL (where iframe sandbox restrictions do not apply).

## Files to change
- `src/components/site/Footer.tsx` — add controlled click handler and fallback for external social links.

## Out of scope
- No visual theme changes.
- No backend or contact-form changes.
