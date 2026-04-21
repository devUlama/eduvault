# EduVault UI Design Specification

## 1. Overview

EduVault is a mobile-first educational platform designed to help students access, store, and manage learning materials efficiently. The interface emphasizes clarity, accessibility, and a modern visual style using a purple-blue gradient theme.

This document provides a complete UI specification for frontend developers, including layout structure, spacing system, typography, colors, icons, and component behavior.

---

## 2. Design Principles

- **Mobile-first design**: All layouts are optimized for small screens first, then scaled up.
- **Clarity over complexity**: Minimal UI with clear hierarchy.
- **Consistency**: Reusable components and spacing system.
- **Accessibility**: Readable fonts, sufficient contrast, and touch-friendly elements.

---

## 3. Layout System

### 3.1 Grid System

- Base grid: 8px spacing system
- Columns: Single column (mobile)
- Max width: 480px
- Horizontal padding: 16px

### 3.2 Spacing Scale

| Token | Value |
| ----- | ----- |
| xs    | 4px   |
| sm    | 8px   |
| md    | 16px  |
| lg    | 24px  |
| xl    | 32px  |
| xxl   | 48px  |

### 3.3 Sections Spacing

- Between sections: 32px
- Between components: 16px
- Between text elements: 8px

---

## 4. Color System

### 4.1 Primary Colors

- Primary Gradient Start: #6A5AE0
- Primary Gradient End: #4B8DF8

### 4.2 Neutral Colors

- Background: #0F172A (dark)
- Card Background: #1E293B
- Text Primary: #FFFFFF
- Text Secondary: #94A3B8

### 4.3 Accent Colors

- Success: #22C55E
- Warning: #F59E0B
- Error: #EF4444

### 4.4 Usage Rules

- Use gradient for primary buttons and hero sections
- Use white text on dark backgrounds
- Maintain contrast ratio (minimum 4.5:1)

---

## 5. Typography

### 5.1 Font Families & Fallbacks

| Type                 | Font Family                  | Usage                                            |
| -------------------- | ---------------------------- | ------------------------------------------------ |
| Primary              | Inter, sans-serif            | Headings, body text, main UI text                |
| Secondary            | Roboto, sans-serif           | Subheadings, secondary text, forms               |
| Monospace            | Fira Code, monospace         | Code snippets, technical labels, developer tools |
| Decorative / Special | Poppins, sans-serif          | Call-to-action highlights, hero section emphasis |
| Fallbacks            | Arial, Helvetica, sans-serif | In case primary fonts fail to load               |

### 5.2 Font Weights & Styles

- **Inter**: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Roboto**: 400, 500, 700
- **Fira Code**: 400, 500
- **Poppins**: 500, 600, 700

### 5.3 Font Sizes & Line Heights

| Element    | Size | Weight | Line Height |
| ---------- | ---- | ------ | ----------- |
| Heading 1  | 28px | 700    | 1.2         |
| Heading 2  | 24px | 600    | 1.2         |
| Heading 3  | 20px | 600    | 1.2         |
| Body       | 16px | 400    | 1.5         |
| Small Text | 14px | 400    | 1.5         |
| Caption    | 12px | 400    | 1.5         |

### 5.4 Page Component Font Table

| Page  | Component                | Font Family | Weight | Size |
| ----- | ------------------------ | ----------- | ------ | ---- |
| Home  | Hero Heading             | Inter       | 700    | 28px |
| Home  | Hero Subheading          | Inter       | 400    | 16px |
| Home  | CTA Button               | Poppins     | 600    | 16px |
| Home  | Feature Card Title       | Inter       | 600    | 20px |
| Home  | Feature Card Description | Roboto      | 400    | 14px |
| Login | Input Labels             | Roboto      | 500    | 14px |
| Login | Input Text               | Inter       | 400    | 16px |
| Login | Button                   | Poppins     | 600    | 16px |
| About | Section Headings         | Inter       | 600    | 24px |
| About | Body Text                | Inter       | 400    | 16px |
| Cart  | Item Title               | Inter       | 600    | 16px |
| Cart  | Price Text               | Inter       | 400    | 16px |
| Cart  | Checkout Button          | Poppins     | 600    | 16px |

---

## 6. Icons

### 6.1 Icon Sizes & Usage

| Icon Type             | Recommended Size | Usage                                     | Style             | Notes                                                     |
| --------------------- | ---------------- | ----------------------------------------- | ----------------- | --------------------------------------------------------- |
| Navigation / Menu     | 24px × 24px      | Header, bottom navigation, hamburger menu | Outline           | High contrast (#FFFFFF on dark bg or #0F172A on light bg) |
| Action / Button       | 20px × 20px      | Buttons, floating actions                 | Filled            | Centered with padding                                     |
| Feature / Section     | 32px × 32px      | Feature cards, services, highlights       | Filled or Outline | Depends on emphasis                                       |
| Illustrative / Hero   | 64px × 64px+     | Hero section, banners                     | Filled            | Soft gradient, minimal detail                             |
| Notification / Status | 16px × 16px      | Alerts, badges, tooltips                  | Filled            | Readable at small size                                    |
| Social / External     | 24px × 24px      | Footer, About page                        | Outline           | Consistent spacing                                        |

### 6.2 Icon Design Rules

1. **Format:** SVG (scalable and easy to recolor)
2. **Style:** Flat, minimal, modern, aligned with purple-blue theme
3. **Padding:** 4–8px around icons
4. **Consistency:** Uniform stroke width (2px recommended)
5. **Hover / Active States:** Slight color shift or brightness increase; pressed scale 0.95x

### 6.3 Recommended Icon Resources

| Resource                                        | Type             | Notes                        |
| ----------------------------------------------- | ---------------- | ---------------------------- |
| Heroicons (https://heroicons.com/)              | Outline & Solid  | Tailwind-friendly, free SVGs |
| FontAwesome (https://fontawesome.com/)          | Free & Pro       | Both font and SVG icons      |
| Feather Icons (https://feathericons.com/)       | Outline          | Minimal, lightweight SVGs    |
| Material Icons (https://fonts.google.com/icons) | Filled & Outline | Google-backed, scalable      |
| IconScout (https://iconscout.com/)              | Free & Premium   | Search by style, size, color |
| SVGRepo (https://www.svgrepo.com/)              | Free SVGs        | Easy to download & customize |

---

## 7. Components

### 7.1 Buttons

- Primary: Gradient (#6A5AE0 → #4B8DF8), white text, border radius 12px, padding 12px 16px
- Secondary: Transparent background, border 1px solid #4B8DF8, text #4B8DF8
- States: hover (brightness increase), active (scale 0.98), disabled (opacity 0.5)

### 7.2 Cards

- Background: #1E293B, border radius 16px, padding 16px, soft shadow

### 7.3 Input Fields

- Height: 48px, border radius 12px, padding 12px, border 1px solid #334155, focus border #4B8DF8

---

## 8. Page Specifications

### 8.1 Home Page

- Hero Section: Avatar illustration, heading, subheading, CTA button
- Features Section: Cards (3–4 items) with icon + text
- Popular Resources: Scrollable cards

### 8.2 Login Page

- Logo at top center, input fields, login button, "Forgot Password" link

### 8.3 About Page

- Description text, mission statement, team section

### 8.4 Cart Page

- List of selected items, price summary, checkout button

---

## 9. Interaction Guidelines

- Animations: 200–300ms
- Ease-in-out transitions
- Avoid excessive motion

---

## 10. Responsiveness

- Breakpoints: Mobile (0–480px), Tablet (481–768px), Desktop (769px+)
- Layout adjusts from single to multi-column

---

## 11. Accessibility

- Minimum touch target: 44px
- Semantic HTML
- Alt text for images

---

## 12. Developer Notes

- Use CSS variables for colors and spacing
- Component-based structure (React recommended)
- Maintain consistency across pages

---

## 13. Future Enhancements

- Dark/light mode toggle
- Offline support
- Push notifications

---

**End of Document**
