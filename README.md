# 🚀 TechSkill Academy — Live Full-Stack & AI Bootcamp

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A high-converting, fully responsive, interactive landing page built with pure Vanilla HTML5, CSS3, and modern JavaScript (ES6+). Designed specifically for a live cohort tech education platform, this project features real-time 3D CSS animations, dynamic form validation, interactive accordions, context-aware cursor lighting, and accessible modal popups.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Folder & File Architecture](#-folder--file-architecture)
- [How Files Are Connected](#-how-files-are-connected)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started & Installation](#-getting-started--installation)
- [Detailed Component Breakdown](#-detailed-component-breakdown)
  - [1. HTML Structure (`index.html`)](#1-html-structure-indexhtml)
  - [2. CSS Styling & 3D Layer (`style.css`)](#2-css-styling--3d-layer-stylecss)
  - [3. JavaScript Interactivity (`script.js`)](#3-javascript-interactivity-scriptjs)
- [Accessibility (a11y) & Performance](#-accessibility-a11y--performance)
- [Troubleshooting & Common Pitfalls](#-troubleshooting--common-pitfalls)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌐 Overview

**TechSkill Academy** provides a modern platform interface for live interactive programming bootcamps. Unlike static video course landing pages, this project highlights real-time human interaction using simulated live classroom feeds, live Q&A countdowns, active chat panels, and real-time form feedback.

---

## 📁 Folder & File Architecture

To ensure all scripts and styles load smoothly, all three core project files must sit in the **root level** of the same directory:

```text
techskill-academy/
├── index.html        # Main HTML structure, layout, & ARIA landmarks
├── style.css         # Modern design system, 3D CSS transforms, & responsiveness
└── script.js        # Interactive UI logic, mobile menu, FAQ accordion, & form validation
```

---

## 🔗 How Files Are Connected

The HTML document explicitly links the stylesheet in the document head and executes the JavaScript logic right before the closing `</body>` tag.

### 1. Linking CSS in `<head>`
```html
<!-- Inside index.html -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechSkill Academy — Live Full-Stack & AI Bootcamp</title>

  <!-- Connect external stylesheet -->
  <link rel="stylesheet" href="./style.css">
</head>
```

### 2. Linking JavaScript before `</body>`
```html
<!-- Inside index.html -->
  ...
  <!-- Connect external script file -->
  <script src="./script.js"></script>
</body>
</html>
```

---

## ✨ Key Features

- **⚡ Real-Time Form Validation:** Instant feedback on field input (Name, Email, 10-digit Phone, Track selection) with helper text and custom status icons.
- **📱 Responsive Mobile Drawer Navigation:** Accessible mobile menu with animated hamburger toggles and backdrop dismissal.
- **🎨 Custom 3D & Spatial Design:** Pure CSS 3D rotating cubes, perspective cards (`transform-style: preserve-3d`), gradient mesh backgrounds, and cursor-following glow lighting.
- **🎥 Simulated Live Stage Preview:** Interactive visual representing a live virtual classroom with active participant feeds and chat streams.
- **❓ FAQ Accordion System:** Multi-item collapsible Q&A section with smooth toggle states and keyboard focus support.
- **🎉 Animated Success Modal:** Dynamic dialog popup triggered upon validated form submission, with backdrop lock and ESC/overlay close handling.

---

## 🛠️ Tech Stack

| Technology | Purpose & Usage |
| :--- | :--- |
| **HTML5** | Semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), custom `aria-*` attributes. |
| **CSS3** | Modern Layouts (Flexbox, CSS Grid), CSS Custom Properties (Variables), 3D Transforms, Glassmorphism, Responsive Media Queries. |
| **JavaScript (ES6+)** | DOM manipulation, Regex-based pattern validation, Event delegation, dynamic modal management. |
| **Google Fonts** | *Space Grotesk* for bold headlines & *Inter* for clean body typography. |

---

## 🚀 Getting Started & Installation

### Prerequisites
- Any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge, Brave).
- Optional: Code editor such as VS Code (with *Live Server* extension recommended).

### Quick Setup Instructions

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/your-username/techskill-academy.git
   cd techskill-academy
   ```

2. **Verify File Structure:**
   Ensure the three files are saved in the exact same directory:
   - `index.html`
   - `style.css`
   - `script.js`

3. **Run the Project:**
   - Double-click `index.html` to view directly in your web browser.
   - Alternatively, right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🧩 Detailed Component Breakdown

### 1. HTML Structure (`index.html`)
- **Semantic Sections:** Includes Hero, Features Grid, Curriculum Timeline, Mentor Profiles, Graduate Testimonials, FAQ Accordion, and Enrollment Form.
- **Accessible Inputs:** Floating label design pattern paired with dedicated error containers (`<small class="error-msg">`) and `aria-live="polite"` regions for screen readers.

### 2. CSS Styling & 3D Layer (`style.css`)
- **Design Tokens:** Centralized color schemes, typography scales, glassmorphic blurs (`backdrop-filter`), and lighting shadows.
- **3D Graphics Engine:** Uses `perspective: 1000px` on parent containers to render true 3D CSS cubes without external 3D libraries (e.g., Three.js).
- **Responsive Breakpoints:** Tailored CSS media queries for mobile devices (`< 768px`), tablets (`768px - 1024px`), and ultra-wide displays.

### 3. JavaScript Interactivity (`script.js`)
- **Interactive Cursor:** Tracks mouse coordinates (`e.clientX`, `e.clientY`) to smoothly position a subtle glow spotlight across the viewport.
- **Form Validator:**
  - Name: Must be at least 2 characters.
  - Email: Matches standard RFC email regex format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
  - Phone: Enforces exactly 10 numeric digits.
  - Track: Requires an explicit selection.
- **Modal Lifecycle:** Traps focus and disables background page scrolling when the success modal is active.

---

## ♿ Accessibility (a11y) & Performance

- **ARIA Attributes:** Utilizes `aria-expanded`, `aria-controls`, `aria-hidden`, `aria-live`, and `role="dialog"` for assistive devices.
- **Keyboard Navigation:** Full tab order navigation across all interactive inputs, menu items, accordion headers, and buttons.
- **Optimized Assets:** Uses responsive web images loaded over HTTPS with explicit `width`, `height`, and `loading="lazy"` tags to prevent layout shifts (CLS).

---

## 🔍 Troubleshooting & Common Pitfalls

| Issue | Cause | Resolution |
| :--- | :--- | :--- |
| **Styles missing / Page unstyled** | CSS file linked incorrectly or misnamed. | Verify `href="./style.css"` matches the file name. Ensure browser didn't rename it to `style (1).css`. |
| **Buttons / Form non-functional** | JS file not linked properly. | Check `index.html` before `</body>` for `<script src="./script.js"></script>`. |
| **CORS / Image load errors** | Offline environment blocking Unsplash CDNs. | Connect to the internet or replace external image URLs with local image files. |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve layout designs, add additional interactive features, or enhance accessibility.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ for modern interactive web learning.
</p>
