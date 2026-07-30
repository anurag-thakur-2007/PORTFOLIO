# Design System Reference Guide

This guide documents the design system and tokens implemented in Anurag Thakur's portfolio website.

---

## 1. Color System

We utilize a high-contrast, clean color palette designed for high aesthetic value and readability.

| Token | Light Theme Value | Dark Theme Value | Usage |
| :--- | :--- | :--- | :--- |
| `background` | `#F8F8F7` (Soft Grayish White) | `#0A0A0A` (Near Black) | Main viewport canvas background |
| `foreground` | `#0A0A0A` (Near Black) | `#F8F8F7` (Soft Grayish White) | Standard typography & elements |
| `primary` | `#0A0A0A` | `#F8F8F7` | Core layout text, headers, and solids |
| `secondary` | `#F8F8F7` | `#0A0A0A` | Opposing solid colors |
| `accent-blue` | `#0052FF` (Modern Electric Blue) | `#0052FF` | Interactive highlights, links, cursor outline |
| `neutral-soft` | `#F4F4F3` (Very Soft Gray) | `#141414` (Dark Charcoal) | Section backgrounds, card foundations |
| `neutral-border` | `#E5E5E3` (Soft Gray Border) | `#222222` (Dark Charcoal Border) | Card boundaries and layout borders |
| `neutral-card` | `#FFFFFF` | `#111111` | Bento card and content box backgrounds |

---

## 2. Typography

We leverage two highly distinct Google Fonts loaded via Next.js Font system:
- **Headings (Display)**: `Space Grotesk` (variable `--font-space-grotesk` / `.font-display`)
  - Features wide tracking and clean editorial shapes.
- **Body & Controls (Sans)**: `Inter` (variable `--font-inter` / `font-sans`)
  - Optimized for readability, focus state labels, and numbers.

---

## 3. Layout Grid & Spacing

To align layout elements cleanly:
- **Layout Max-Widths**:
  - `max-w-7xl` (1280px) for general responsive pages.
  - `max-w-3xl` (768px) for concise editorial sections or details.
- **Grids**:
  - 12-column responsive layout grids (`grid grid-cols-1 md:grid-cols-12 gap-6`).
- **Spacing Units**:
  - Standard spacing variables matching Tailwind CSS v4 defaults (`p-4` / `gap-6` / `space-y-8` / `py-32`).

---

## 4. Animation Language & Transitions

Every interactive micro-animation conforms to uniform timing variables defined under the `@theme` directive in `globals.css`:

- **Apple Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo) for snappy yet smooth animations.
- **Spring Easing**: `cubic-bezier(0.43, 0.13, 0.23, 0.96)` for bounce effects.
- **Transition Speeds**:
  - `fast` (`200ms`) for subtle cursor hovers and color transformations.
  - `normal` (`400ms`) for layout slides, reveal overlays, and elevations.
  - `slow` (`800ms`) for large-scale page transitions and image animations.

---

## 5. Components Architecture

Foundation components are stored in `components/` and style utilities are integrated using Tailwind v4 custom utilities:
- **Bento Card (`.bento-card`)**: Rounded card with `24px` border radius, subtle shadows, and offset elevation on hover.
- **Underlined Link (`.link-underlined`)**: Smooth scale-in line beneath text that slides out on mouseout.
- **Custom Cursor Follower (`.cursor-follower` / `.cursor-follower-ring`)**: Lagging cursor overlay that expands over links and tracks custom hover text labels.
- **Border Glow Wrapper (`.border-glow-wrapper`)**: Dynamically tracks cursor coordinates to draw a radiating highlight along card borders.
