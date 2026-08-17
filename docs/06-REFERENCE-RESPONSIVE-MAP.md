# 06 — REFERENCE RESPONSIVE MAP
## MULTI-VIEWPORT GEOMETRY & MOBILE INVERSION RULES

---

### 1. BREAKPOINT TAXONOMY

| Breakpoint Tier | Viewport Width | Primary Design Context | Reference Strategy |
|---|---|---|---|
| **XL Desktop** | `> 1440px` | Ultra-wide monitors (up to `1920px`) | Full spatial luxury, `193.5px` display headings, `14rem` section breathing room, max-width wrapper `1920px`. |
| **Standard Desktop** | `1024px – 1440px` | Laptops & standard screens | Hero inner container scales from `1200px` to `900px`, bento tiles adjust flex-basis, full motion fidelity. |
| **Tablet** | `768px – 1024px` | iPads & portrait tablets | Display font scales to `175.9px`, hero inner container scales to `700px`, bento hides secondary glyph tile (`.item.pili`). |
| **Mobile** | `< 768px` (Target `390 × 844`) | Smartphones | **Complete Mobile Architectural Inversion**: Navigation docks to bottom, display font scales to `87.9px`, sections stack with intentional narrative rhythm. |

---

### 2. SCENE-BY-SCENE RESPONSIVE ADAPTATION MATRIX

```
+-----------------------------------------------------------------------------------------------+
| SCENE                | DESKTOP (1440px+)               | MOBILE (<768px / 390x844)            |
+----------------------+---------------------------------+--------------------------------------+
| 00. Navigation       | Fixed Top Bar (Border-bottom)   | Docked Bottom Bar (Border-top)       |
| 01. Splash Hero      | Horizontal Row (1200px container)| Vertical Stack (100dvh, glyph column)|
| 02. Left Statement   | Left 4rem indent, 193.5px type  | Left 2rem indent, 87.9px type        |
| 03. Right Statement  | Left glyph wing + Right text    | Row-reverse, right 2rem indent       |
| 04. Stories Carousel | 500px wide cards, drag indicator| 340px wide cards, swipe indicator    |
| 05. Bento Grid       | Multi-column flex-wrap (20px)   | Single/Dual column fluid card stack  |
| 06. Staggered Type   | 3-col diagonal (0/6rem/12rem)   | Stepped vertical cascade (0/2rem/4rem)|
| 07. Marquee Focal    | 100% SVG with cursor tracking   | 230vw scaled SVG with touch/gyro tracking|
| 08. Orbiting Circle  | 500px diameter ring (193.5px)   | 300px diameter ring (114px text)     |
| 09. Contact Section  | 2-column side-by-side inputs    | 1-column stacked full-width inputs   |
| 10. Monolithic Footer| Full-width 1200px skyline       | Horizontally scrollable/scaled skyline|
+-----------------------------------------------------------------------------------------------+
```

---

### 3. DETAILED RESPONSIVE MECHANISMS

#### 1. Navigation Inversion (Bottom Thumb-Zone Dock)
- On desktop, the navigation is fixed at the top of the viewport.
- On mobile (`max-width: 768px`), the navigation moves to the bottom (`top: auto; bottom: 0;`), providing effortless single-thumb access to the WhatsApp booking CTA.

#### 2. Typographic Fluidity & Word Breaking
- Giant display headings scale via strict harmonic ratios:
  - `193.516px` (Desktop) → `175.924px` (Tablet) → `87.962px` (Mobile).
  - Headings implement `-webkit-hyphens: auto; hyphens: auto; word-break: break-word;` to guarantee zero horizontal overflow on narrow mobile screens (such as iPhone SE or 390px widths).

#### 3. Bento Grid Mobile Restructuring
- On desktop, the 7 tiles form an interlocking asymmetric puzzle.
- On mobile:
  - The Founder portrait (`Tile 1`) takes full width (`100%`), establishing an immediate human connection.
  - The 4 Service cards stack neatly, keeping their `40px` border-radius and large touch-friendly button targets.
  - The decorative glyph tile (`Tile 3`) is hidden (`display: none`), prioritizing essential content and eliminating vertical bloat.
  - The procedural canvas (`Tile 6`) maintains an elegant square aspect ratio (`min-height: 250px`).

#### 4. Touch-First Carousel Gestures
- The swipe indicator text automatically toggles from `"Drag"` (on pointer devices) to `"Swipe"` (on touch devices) via `@media (hover: none)`.
- Cards shrink to `340px` width with `padding: 1.25rem` and `border-radius: 40px`, ensuring the edge of the next card peeks into the viewport, prompting natural horizontal swiping.

#### 5. Form Input Fluidity
- Underline-only inputs (`border: none; border-bottom: 1px solid #000`) switch from side-by-side flex groups to 100% width single-column rows with large touch hit areas (`height: 48px`).
