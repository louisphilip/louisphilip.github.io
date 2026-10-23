# Spec: Quotes to Live By

---
spec_type: feature
status: approved
created: 2026-10-23
updated: 2026-10-23
author: LP Shahim
---

## Purpose

I've collected quotes since roughly 2023 — from books, people and unknown corners of the internet — that shaped how I think about leadership, faith, habits and growth, but they live in a private notes file nobody sees, including future me. The site shows what I build (Portfolio), write (Writing) and read (Reading), but not the ideas that changed me; a Quotes page closes that gap and gives visitors a more personal window into who I am.

## Scope

**In scope**
- A new public Quotes page, linked from the header navigation.
- A "Constellation" hero: every quote is a star, clustered by theme, with theme names floating as a word cloud sized by quote count.
- A Spotlight that shows one quote large, with its credit, a Shuffle control and a copy control; selecting a star puts that quote in the Spotlight.
- A Quote Wall listing every quote with its credit, filterable by source type (Book, Person, Unknown) and theme.
- A "Shaped by" shelf of the most-quoted books and people that filters the wall.
- A curated, structured dataset derived from `quotes.txt`: duplicates merged, obvious typos fixed, non-quotes dropped or distilled, personal in-jokes excluded, and reliable attributions added where the source was missing.

**Out of scope**
- Committing the raw `quotes.txt` notes file — it stays local only.
- Auto-syncing from a notes app; new quotes are added to the dataset by hand.
- Visitor submissions, likes, comments or any backend.

## Functional Requirements

- **Must**: Be served at `/quotes` and be linked from the desktop and mobile navigation.
- **Must**: Show every quote with a credit — author, work (with reference such as a Bible verse), or "Unknown".
- **Must**: Mark commonly-attributed-but-unverified quotes as "attributed to" rather than stating authorship as fact.
- **Must**: Let visitors filter the wall by source type and by theme, and show how many quotes match.
- **Must**: Let visitors select a star in the constellation with a mouse or keyboard to show that quote in the Spotlight.
- **Must**: Provide a Shuffle control that shows a random quote in the Spotlight.
- **Must**: Load quotes from a static dataset with no network calls.
- **Must Not**: Include `quotes.txt` or the excluded personal entries (friends' in-jokes) in the repository or build.
- **Must Not**: Invent attributions; when the origin is not reliably known the credit is "Unknown".
- **Should**: Show a random quote in the Spotlight on each visit.
- **Should**: Let visitors copy a quote with its credit to the clipboard, with visible success or failure feedback.
- **Should**: Let a click on a "Shaped by" item filter the wall to that book or person.
- **Should**: Collapse passages longer than 60 words behind a "Read more" toggle.

## Non-Functional Requirements

- **Performance**: No new runtime dependencies; no images or external requests on the page; page remains statically exportable.
- **Accessibility**: WCAG 2.1 AA contrast in the dark theme; every control reachable by keyboard; the constellation uses a single tab stop with arrow-key navigation; animations respect `prefers-reduced-motion`.
- **Consistency**: Uses the site's existing design tokens, fonts and SCSS module conventions.
- **Determinism**: Star layout must be identical between the static build and the browser (no hydration mismatch).

## Acceptance Criteria

- Given a visitor on any page, when they open the navigation, then a "Quotes" link to `/quotes` is present.
- Given the Quotes page, when it loads, then a constellation of stars with theme labels and a Spotlight quote with its credit are visible.
- Given the constellation has focus, when the visitor uses arrow keys and presses Enter, then the focused star's quote appears in the Spotlight.
- Given the Spotlight, when the visitor presses Shuffle, then a different quote is shown.
- Given the wall, when the visitor selects "Books" and the "Faith" theme, then only book-sourced faith quotes are shown and the count matches.
- Given the "Shaped by" shelf, when the visitor selects an entry, then the wall shows only quotes from that book or person.
- Given a quote with no reliable source, when it is displayed, then its credit reads "Unknown".
- Given the repository, when inspected, then `quotes.txt` is not tracked and is ignored by git.

## Open Questions

- [ ] Add a search box to the wall if the collection grows beyond ~300 quotes? — Owner: LP Shahim, Target: TBD
