```markdown
# Design System Document: The Heritage Modernist

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system is not a template; it is a gallery. It rejects the "boxy" nature of standard e-commerce in favor of a high-end editorial experience that celebrates the vibrant soul of African heritage through a lens of contemporary luxury. 

The system moves beyond traditional grids by utilizing **Intentional Asymmetry** and **Generous Whitespace**. Elements should feel "placed" rather than "slotted." By layering oversized serif typography over high-fashion imagery and utilizing a tonal-depth approach to UI, we create a digital environment that feels as tactile and premium as a physical Ankara textile.

---

## 2. Colors: Tonal Depth & Warmth
The palette is rooted in the earth, using deep terracotta and ochre to provide a sense of history, while elegant creams and charcols provide the "editorial" breathability required for luxury.

### The Palette
- **Primary (`#9e370f`) & Primary Container (`#bf4f26`):** The lifeblood of the system. Used for brand-defining moments and CTAs.
- **Secondary (`#775a19`):** Our "Gold Accent." Use this for high-end decorative elements and premium interactive states.
- **Surface & Background (`#fafaf5`):** A warm, off-white "Cream" that feels more expensive and softer on the eyes than pure white.
- **Tertiary (`#4c5c66`):** The "Charcoal." Provides a sophisticated anchor for secondary information and subtle UI elements.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. 
*   *Example:* A product description section using `surface-container-low` should sit against a `surface` background. The transition is felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use `surface-container` tiers (Lowest to Highest) to create "nested" depth.
*   **Level 1 (Base):** `surface`
*   **Level 2 (Sectioning):** `surface-container-low`
*   **Level 3 (Interactive Cards):** `surface-container-highest`

### The "Glass & Gradient" Rule
To avoid a flat, "webby" look, main CTAs should utilize a subtle linear gradient from `primary` to `primary-container`. For floating navigation or over-image menus, use **Glassmorphism**: semi-transparent `surface` colors with a 20px-40px backdrop-blur to allow the vibrant fabric patterns to bleed through the UI.

---

## 3. Typography: The Editorial Voice
We pair the timeless authority of a Serif with the functional clarity of a Sans-Serif.

*   **Display & Headlines (`notoSerif`):** These are our "Statement Pieces." Use `display-lg` for hero titles with tight letter-spacing (-0.02em). Headlines should feel bold and unapologetic, mimicking the layout of a high-fashion magazine.
*   **Title & Body (`manrope`):** A modern, geometric sans-serif that ensures legibility. `body-lg` is the workhorse for storytelling, while `label-md` handles the technical details of the garment.
*   **Hierarchy Note:** Always maintain a high contrast between Display and Body sizes. If everything is loud, nothing is heard.

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines. We use light and layering.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **Ambient Shadows:** For floating elements (like a "Quick Add" button), use extra-diffused shadows. 
    *   *Spec:* Blur: 40px, Spread: -5px, Opacity: 6% of `on-surface`.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.
*   **Sharpness (`0px` Radius):** This system uses a **0px Roundedness Scale**. Every element is sharp and architectural. This reinforces the "Modernist" aspect of the brand and contrasts beautifully with the organic flow of Ankara patterns.

---

## 5. Components: Architectural Primitives

### Buttons
*   **Primary:** Sharp corners (`0px`), `primary` background, `on-primary` text. Use a subtle gradient.
*   **Secondary:** `surface` background with a "Ghost Border" (`outline-variant` at 20%).
*   **Interaction:** On hover, shift the background to `primary-container`. No "bounce" animations—use smooth, 300ms linear fades.

### Input Fields
*   **Style:** Underline only. Use `outline` color for the 1px bottom border. 
*   **States:** On focus, the underline transitions to `primary` 2px. Labels should be in `label-sm` and uppercase for a "technical spec" look.

### Cards & Imagery
*   **Forbidden:** Divider lines. 
*   **Spacing:** Use generous vertical whitespace (32px+) to separate content blocks. 
*   **Imagery:** Images should be the hero. Use overlapping layouts where the image bleeds off the edge of the container or overlaps with a `display-sm` headline.

### The "Heritage Pattern" Component
A unique component for this system: A decorative background container that uses `surface-variant` with a low-opacity (5%) Ankara pattern overlay. Use this sparingly behind product titles to ground them in the brand's roots.

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace asymmetry. Center-aligning everything is for templates; we are building an experience.
*   **Do** use "Editorial Spacing." Give your elements 2x more breathing room than you think they need.
*   **Do** use `primary` for focus states and critical paths to maintain the "Vibrant" brand promise.

### Don't:
*   **Don't** use rounded corners. The `0px` rule is absolute to maintain a high-fashion, architectural feel.
*   **Don't** use generic icons. If icons are needed, they should be ultra-thin (1pt stroke) and minimal.
*   **Don't** use drop shadows as a default. Tonal layering is the primary method of separation.
*   **Don't** clutter. If a page feels busy, remove an element; don't try to "organize" it with boxes.