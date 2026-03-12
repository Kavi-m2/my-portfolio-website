# AGENTS.md

## Project

This is the portfolio website for **Kavinesh M**, focused on robotics, embedded systems, IoT, and electronics engineering.

Project folder:
`C:\Users\kavin\Downloads\portfolio-site`

Main files:
- `index.html`
- `assets/css/custom.css`
- `assets/js/custom.js`
- `assets/Kavinesh-M-Resume.pdf`
- `assets/imgs/kavinesh-profile.jpeg`

## Goal

Maintain and improve this portfolio as a modern robotics and embedded systems portfolio website.

Keep the website:
- futuristic
- dark themed
- high contrast
- clean and readable
- visually technical
- mobile friendly

## Design Rules

- Preserve the dark robotics/developer visual style.
- Keep neon blue, cyan, purple, and subtle orange highlights.
- Do not switch to a plain white or generic business theme.
- Keep animations smooth and lightweight.
- Keep hero micro-animations especially smooth and readable rather than flashy.
- Buttons should stay compact but clearly visible.
- Hero content must remain readable over the background.
- Profile image should stay properly cropped and slightly lowered in the hero frame.
- Keep the hero profile image clearly visible with no text panels, badges, or HUD details overlapping the front of the image.
- Keep the hero name as `KAVINESH` only unless explicitly changed by the user.
- Keep the top navbar strip slightly slimmer than the original template unless explicitly changed by the user.
- Top-left brand text should remain `MK` unless explicitly changed by the user.

## Content Rules

- Do not replace Kavinesh M's personal details unless the user asks.
- Preserve current education, experience, projects, achievements, email, LinkedIn, GitHub, and resume links unless updated by the user.
- Keep the portfolio focused on robotics, embedded systems, IoT, electronics, PLC, and VLSI.
- When adding projects, use real engineering language instead of generic marketing text.
- Keep project descriptions concise and technical.

## Editing Rules

- Prefer updating existing files instead of restructuring the whole project.
- Put layout/content changes in `index.html`.
- Put visual/design changes in `assets/css/custom.css`.
- Put animation or interaction changes in `assets/js/custom.js`.
- Do not remove the local preview scripts unless the user asks:
  - `start-portfolio.bat`
  - `start-portfolio.ps1`
  - `push-changes.bat`
- Do not remove Git configuration inside this folder.

## Preview

To preview locally:
- Run `start-portfolio.bat`

Expected local URL:
- `http://localhost:5500`

## Git Workflow

This folder is its own git repository.

Remote:
- `https://github.com/Kavi-m2/my-portfolio-website.git`

For future updates:
1. Edit files in this folder.
2. Test visually in the browser if possible.
3. Commit changes with a clear message.
4. Push to `main`.

Quick push helper:
- `push-changes.bat`

## Preferred Future Improvements

- Add real project-specific GitHub links when available.
- Replace placeholder or template leftovers if found.
- Improve accessibility and readability before adding decorative effects.
- Keep motion effects polished, not excessive.

## Avoid

- Do not convert this into React, Next.js, or another framework unless the user asks.
- Do not remove the existing robotics HUD hero design without a request.
- Do not reintroduce floating panels, badges, scan lines, or other front overlays on the hero image unless the user asks.
- Do not add unrelated sections like pricing, testimonials, or blog unless explicitly requested.
- Do not use generic lorem ipsum or placeholder personal text.
