# Aura Ankara — Heritage Modernist Fashion

> *Where Tradition Meets Tomorrow*

**Aura Ankara** is a premium, editorial-grade fashion e-commerce front-end for a Lagos-based luxury brand specializing in contemporary African fashion rooted in Ankara wax-print heritage. The site bridges ancestral craftsmanship with modernist silhouettes — designed for the global discerning citizen.

---

## ✦ Live Preview

> Run locally via Vite (see [Getting Started](#getting-started))

---

## ✦ Screenshots

| Home | Shop | Bookings |
|------|------|----------|
| Full-screen editorial hero with cinematic imagery | 14-item asymmetric product grid with hover overlays | Bespoke inquiry form with atelier details |

---

## ✦ Features

### Pages
| Page | File | Description |
|------|------|-------------|
| **Home** | `app/index.html` | Cinematic hero, brand philosophy, featured editorial grid, newsletter CTA |
| **Shop / Collection** | `app/products.html` | 14-item curated product grid with category sidebar filter |
| **Trustees** | `app/trustees.html` | Brand trust signals and heritage story |
| **Events** | `app/events.html` | Upcoming runway shows and exhibition listings |
| **Bookings** | `app/bookings.html` | Bespoke fitting & style consultation inquiry form |
| **Product PDPs** | `app/product-*.html` | Individual product detail pages (16 total) |

### Product Catalogue (16 Items)
**Women's Wear**
- The Olowalu Wrap — ₦367,500
- Zaria Midi Gown — ₦292,500
- The Indigo Wrap — ₦480,000
- Solar Flare Skirt — ₦442,500
- Sahara Jumpsuit — ₦412,500

**Men's Wear**
- Heritage Blazer — ₦465,000
- The Monarch Blazer — ₦675,000
- Oyo Print Shirt — ₦180,000
- Lagos Street Jacket — ₦315,000
- Harmattan Trousers — ₦240,000
- Eko Agbada Set — ₦825,000

**Accessories**
- Gele Set: Royal — ₦127,500
- Ankara Beaded Necklace — ₦165,000
- Wax Print Pocket Square — ₦52,500

**Bespoke**
- Imperial Two-Piece — ₦675,000
- Royal Velvet & Ankara Tuxedo — ₦1,275,000
- Custom Oba Robe — ₦1,800,000

---

## ✦ Design System: The Heritage Modernist

This project is built upon a meticulously crafted proprietary design system — documented in [`aura_heritage/DESIGN.md`](./aura_heritage/DESIGN.md).

### Color Palette — Tonal Depth & Warmth
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#9e370f` | Brand CTAs, active states, focus |
| `primary-container` | `#bf4f26` | Gradient endpoints, hover states |
| `secondary` | `#775a19` | Gold accent, decorative elements |
| `surface` / `background` | `#fafaf5` | Warm cream base — feels premium |
| `tertiary` | `#4c5c66` | Charcoal, secondary information |

### Typography
| Role | Font | Notes |
|------|------|-------|
| **Display / Headlines** | [Noto Serif](https://fonts.google.com/specimen/Noto+Serif) | Bold, italic, tight letter-spacing — the editorial voice |
| **Body / Labels** | [Manrope](https://fonts.google.com/specimen/Manrope) | Geometric sans-serif, clean and legible |

### Design Principles
- **0px Roundedness** — All elements are sharp and architectural, reinforcing the "Modernist" brand ethos
- **No Divider Lines** — Boundaries are defined purely through background color tonal shifts
- **Glassmorphism Navigation** — `backdrop-blur-xl` on the sticky nav lets vibrant imagery bleed through
- **Intentional Asymmetry** — Product grid cards are offset vertically to feel "placed" not "slotted"
- **Generous Editorial Spacing** — 32px+ vertical whitespace throughout to breathe like a high-fashion magazine
- **Marquee Ticker** — Scrolling announcement banner for events and promotions (CSS animation, no JS)

---

## ✦ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic page structure |
| **Tailwind CSS v4 (CDN)** | Utility-first styling with custom design tokens |
| **Vite 8** | Local dev server & build tooling |
| **Google Fonts** | Noto Serif + Manrope typography |
| **Material Symbols** | Ultra-thin icon set (1pt stroke weight) |
| **Vanilla JavaScript** | Form validation, interactive overlays |

> **Note:** Tailwind is configured inline via `tailwind.config` script blocks with the full custom color palette, 0px border-radius overrides, and custom font families baked in on every page.

---

## ✦ Project Structure

```
aura-ankara/
├── app/                          # Main application (Vite project)
│   ├── index.html                # Homepage
│   ├── products.html             # Shop / Collection listing
│   ├── trustees.html             # Brand trustees
│   ├── events.html               # Events & shows
│   ├── bookings.html             # Bespoke booking form
│   ├── product-*.html            # 16 product detail pages
│   ├── main.js                   # Entry script
│   ├── package.json              # Vite project config
│   └── public/                   # Static image assets
│       ├── ankara_necklace.png
│       ├── eko_agbada.png
│       ├── harmattan_trousers.png
│       ├── lagos_jacket.png
│       ├── oyo_shirt.png
│       ├── pocket_square.png
│       ├── favicon.svg
│       └── icons.svg
│
├── aura_heritage/                # Design system documentation
│   └── DESIGN.md                 # Full design system spec
│
├── aura_ankara_home/             # Screen capture: Home page
├── aura_ankara_products/         # Screen capture: Products page
├── aura_ankara_bookings/         # Screen capture: Bookings page
├── aura_ankara_events/           # Screen capture: Events page
├── aura_ankara_trustees/         # Screen capture: Trustees page
│
└── README.md
```

---

## ✦ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Cyssae/aura-ankara.git
cd aura-ankara

# Install dependencies
cd app
npm install
```

### Development

```bash
# Start the local dev server (from /app directory)
npm run dev
```

The site will be live at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

Output is placed in `app/dist/`.

---

## ✦ Key UX Interactions

- **Hero Section** — Full-viewport editorial image with glass overlay title panel and "Shop the Collection" CTA
- **Scrolling Marquee** — CSS-only infinite marquee announcing Lagos Fashion Week (no JavaScript)
- **Product Hover Reveal** — On hover, a "View Details" button slides up from the bottom of each product card (`translateY` transition)
- **Asymmetric Product Grid** — Cards are vertically offset by `md:mt-24` to create a staggered editorial rhythm
- **Booking Form Validation** — Client-side validation highlights empty required fields; success state replaces the form with a confirmation overlay
- **Glassmorphic Navbar** — Fixed navigation with `bg-[color]/80 backdrop-blur-xl` that gracefully overlays imagery

---

## ✦ Brand Identity

> *"Aura Ankara isn't just a label; it's a bridge. We take the vibrant, historical narratives woven into every wax-print thread and re-contextualize them for the global modernist."*

- **Established:** 2024
- **Based in:** Lagos, Nigeria
- **Atelier:** 42 Heritage Way, Victoria Island, Lagos
- **Philosophy:** Curating culture — African excellence through textile art
- **Target:** The discerning global citizen who values heritage, craft, and contemporary luxury

---

## ✦ Sustainability Note

All fabrics are sourced directly from artisan guilds in West Africa, ensuring fair trade and the preservation of traditional wax-print techniques.

---

## ✦ License

This project is a front-end design prototype. All images are used for demonstration purposes.

© 2024 Aura Ankara. All rights reserved.
