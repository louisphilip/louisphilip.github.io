# Spec: Private Health and Performance Dashboard

---
spec_type: feature
status: draft
created: 2026-06-06
updated: 2026-06-06
author: LP Shahim
---

## Purpose

The purpose of this feature is to create a secure, private dashboard on the user's personal website containing a highly customized training, posture, and nutrition plan. This plan is tailored specifically to address the user's clinical conditions (herniated disc, high cholesterol, heartburn/GERD, bad programmer posture, and winged scapula) while safely preparing them to return to the sports they love (running, cycling, padel, and golf) without pain or risk of reinjury.

## Scope

**In scope**
- Creating a fully responsive, private web page in the Next.js App Router.
- Obfuscating the page URL via a highly secure, unguessable URL slug (`/health-routine-7a29e9`) to protect sensitive health data under static hosting constraints.
- Adding a `robots.txt` configuration or meta tags to prevent search engine indexing of the private page.
- Implementing an interactive "Tabbed Dashboard" containing:
  - **Daily Routine & Posture**: McGill Big 3 for lumbar stabilization, serratus anterior/lower trap activation for winged scapula, and desk posture reminders.
  - **Weekly Training Split**: Balanced gym/home workouts targeting glute and hamstring strengthening (avoiding heavy spine compression or end-range lumbar flexion).
  - **Weekly Nutrition Menu**: A 7-day structured meal plan tailored for low saturated fat (high cholesterol) and low acid/heartburn trigger foods.
  - **Sports-Specific Prehab**: Quick warm-up/activation routines specifically for Golf, Padel, Running, and Cycling.
- Designing the UI to match the clean, modern dark aesthetic of the main portfolio site.

**Out of scope**
- Interactive back-end data logging, persistent calorie tracking databases, or third-party auth provider setups.
- Generic physical therapy replacing medical advice. The exercises and nutrition parameters must strictly respect clinically safe, non-invasive movements and evidence-based cardiac/GERD dietary guidelines.

## Functional Requirements

- **Must**: The page must be served at the obfuscated slug `/health-routine-7a29e9`.
- **Must**: The page must not be linked from any public headers, footers, or menu bars.
- **Must**: The page must include `<meta name="robots" content="noindex, nofollow" />` in its HTML head to prevent indexing by crawlers.
- **Must**: Implement an interactive tabbed navigation layout ("Daily Routine", "Weekly Gym Split", "Nutrition Plan", "Sports Prehab") utilizing React state for active tab selection.
- **Must**: Incorporate the following clinical parameters:
  - **Cholesterol Guidelines**: Saturated fats <7% of daily calories; omit trans fats; promote soluble fiber (oats, legumes, berries) and Omega-3 rich fats (salmon, nuts, olive oil).
  - **Herniated Disc Safety**: Exclude lumbar flexion (no traditional sit-ups, crunches, deep slouched squatting, or loaded lumbar twists). Incorporate the McGill Big 3 (McGill Curl-up, Side Plank, Bird-Dog).
  - **Heartburn Prevention**: Small frequent meals; avoid eating within 3 hours of sleep; omit classic trigger foods (citrus fruits, caffeine/coffee, heavy spices, peppermint, chocolate, fried items).
  - **Winged Scapula Drills**: Serratus push-ups (push-up plus), wall slides with forearm press, band pull-aparts.
- **Should**: Include clear visual callouts or "Spine Safety Rules" emphasizing spinal hygiene.
- **Should**: Use Framer Motion transitions for elegant tab changes.
- **Must Not**: Include any external links or tracker scripts that could leak the private URL.

## Non-Functional Requirements

- **Security**: The page relies on simple URL-obfuscation security. No client-side bundle should expose confidential API keys.
- **Performance**: Page load speed (LCP) should remain under 1.5 seconds, avoiding heavy external media resources.
- **Accessibility**: Support WCAG 2.1 contrast guidelines (especially important in the dark theme) and support keyboard navigation for tabs.

## Acceptance Criteria

- **AC 1: URL & Search Obfuscation**
  - Given a user navigates to `/health-routine-7a29e9`, when the page is loaded, then the customized health dashboard is displayed.
  - Given a search engine crawler visits the site, when reading the DOM, then the `<meta name="robots" content="noindex, nofollow">` tag is found, preventing indexation.
- **AC 2: Tabbed Dashboard Interactivity**
  - Given the dashboard is loaded, when the user clicks on "Nutrition Plan", then the active tab content switches immediately to the 7-day structured low-cholesterol/low-heartburn menu.
- **AC 3: Clinically Safe Instructions**
  - Given the training and sports prehab sections, when reviewed, then they must contain explicit safety notes instructing against lumbar flexion and heavy compression, and detail McGill Big 3 and serratus anterior drills.
- **AC 4: Visual Integration**
  - Given the private page is rendered, when viewed on mobile or desktop, then the styling seamlessly matches the dark theme, outfit/inter fonts, and colors of the primary portfolio site.

## Open Questions

- [ ] Confirm if the user has a specific preference for calorie or macro targets (e.g., high protein, caloric deficit/surplus) to adjust the weekly structured menu. — Owner: LP Shahim, Target: 2026-06-07
- [ ] Determine if the user has a preferred day-by-day split (e.g., 3-day gym, 2-day home, sports on weekends) for the weekly schedule. — Owner: LP Shahim, Target: 2026-06-07
