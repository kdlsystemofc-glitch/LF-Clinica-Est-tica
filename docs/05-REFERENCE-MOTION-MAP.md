# 05 — REFERENCE MOTION MAP
## INTERACTION GRAMMAR & KINETIC CHOREOGRAPHY

---

### 1. MOTION GRAMMAR & CORE PHILOSOPHY

The motion in `forn.dk` is **architectural, deliberate, and physics-informed**. It rejects frivolous particle spam or random bounce animations. Every micro-motion serves one of three functions:
1. **Spatial Anchoring**: Orienting the eye to monumental type and subtle directional cues.
2. **Interactive Tactility**: Giving physical presence to cards, cursor vector elements, and carousel items.
3. **Continuous Kinetic Life**: Providing ambient vitality (breathing glyphs, rotating orbital rings, procedural canvas flows).

---

### 2. DETAILED MECHANICS & INTERACTION CHOREOGRAPHY

#### 1. Smart Navigation Physics
- **Trigger**: Scroll direction & page offset.
- **Scroll Down**: `transform: translateY(-200%)` with transition `ease all 0.5s`.
- **Scroll Up**: `transform: translateY(0)` with background `#fcfcfc` and border `1px solid #ddd` (`.floating` state).
- **Mobile Inversion**: On viewports `<768px`, the nav is positioned at the bottom of the screen (`bottom: 0; top: auto; border-top: 1px solid #ddd`), and hides with `transform: translateY(200%)`.

#### 2. Initial Splash Entrance Sequence
- **Duration**: `0.8s` staggered.
- **Steps**:
  1. SVG Wordmark paths transition fill from `#fff` (invisible) to `#00218f` (or client accent) with a `0.1s` sequential delay per letter.
  2. Vertical line and arrow grow downward.
  3. Decorative glyph column fades in with a gentle opacity/scale bloom (`0.2s` delay).

#### 3. Real-Time Vector Cursor Tracking (The Eye / Focal Vector)
- **Math**:
  ```javascript
  const rect = element.getBoundingClientRect();
  const mouseX = e.clientX - (rect.left + rect.width / 2);
  const mouseY = e.clientY - (rect.top + rect.height / 2);
  const maxDistance = 25; // max pixel travel
  const distance = Math.min(Math.sqrt(mouseX**2 + mouseY**2), maxDistance);
  const angle = Math.atan2(mouseY, mouseX);
  const offsetX = Math.cos(angle) * distance;
  const offsetY = Math.sin(angle) * distance;
  ```
- **Application**:
  - Center element (`#pupil` / nucleus): `transform: translate(var(--offset-x), var(--offset-y))`
  - Middle element (`#iris`): `transform: translate(var(--half-offset-x), var(--half-offset-y))`

#### 4. Scroll-Linked Orbital Rotation (`.pili-circle`)
- **Structure**: 18 glyphs mapped around a circular track via CSS trigonometry or transform-origin:
  ```css
  .pili-wrapper {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    transform: rotate(var(--angle));
  }
  ```
- **Kinetic Trigger**: As the user scrolls past the section, a window scroll listener increments `--offset`:
  ```javascript
  const scrollOffset = (window.scrollY - sectionTop) * 0.15;
  circleElement.style.setProperty('--offset', `${scrollOffset}deg`);
  ```

#### 5. Bento Card Hover Physics
- **Resting State**:
  - `p` (body text): `transform: translateY(40px); transition: ease all 0.25s;`
  - `a.cta` (action link): `opacity: 0; transition: ease all 0.3s;`
- **Hover State**:
  - `p`: `transform: translateY(0);`
  - `a.cta`: `opacity: 1; margin-top: 0;` (Arrow icon translates `+5px` to the right on further hover).

#### 6. Horizontal Story Carousel Drag & Snapping
- **Engine**: Embla Carousel / Touch-Drag Physics.
- **Physics**:
  - Active / Snapped slide: `opacity: 1; filter: grayscale(0); transform: scale(1);`
  - Inactive slides: `opacity: 0.3; filter: grayscale(1); transition: opacity 0.5s, filter 0.5s;`
  - Hover on Card: `transform: scale(1.02);`

#### 7. Procedural Canvas Mesh (Organic Life Tile)
- **Shader / 2D Canvas**: Smooth perlin noise / procedural wave deformation simulating cellular vitality and skin elasticity, rendering at 60fps with low CPU/GPU footprint.

#### 8. Monolithic Skyline Rise Effect
- **Tapestry Animation**: As the footer enters the viewport, the columns of the 1200px glyph tapestry stagger into view from the ground up, creating the perception of an ancient cathedral / skyline emerging from the earth.
