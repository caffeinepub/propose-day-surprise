# Specification

## Summary
**Goal:** Build a playful single-page “Propose Day Surprise” React UI with a dodging “No” button and a “Yes” reveal message + image.

**Planned changes:**
- Create a centered single-page layout with heading “Will you always be mine?”, a constrained two-button row (Yes / No), and an initially empty output area.
- Style the page with Comic Sans-like typography, warm yellow/orange diagonal gradient background, prominent heading shadow, pill buttons with drop shadows and hover effects, and a rounded/glowing output image style.
- Implement “No, never!” behavior: on hover, move to a random position within the button container; on click, show an alert with: “Haha! You can't say no! Gotta be mine! 😜”.
- Implement “Yes ❤️” behavior: on click, render “Yay! You're mine forever! 💖” plus the static image asset (alt: “Happy Propose Day”) in the output area, then smoothly scroll the output into view.
- Add the required static image under `frontend/public/assets/generated` and reference it via a public URL path from the UI.

**User-visible outcome:** Users see a themed “Propose Day Surprise” page where the “No” button dodges the cursor and shows a playful alert if clicked, while clicking “Yes” reveals a success message and a romantic image that scrolls into view.
