---
name: Desi Pop Scrapbook
colors:
  surface: '#fff8f8'
  surface-dim: '#f1d2da'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f3'
  surface-container: '#ffe8ed'
  surface-container-high: '#ffe1e8'
  surface-container-highest: '#fadbe3'
  on-surface: '#28171c'
  on-surface-variant: '#5b3f48'
  inverse-surface: '#3e2b31'
  inverse-on-surface: '#ffecf0'
  outline: '#8f6e78'
  outline-variant: '#e3bdc7'
  surface-tint: '#b90068'
  primary: '#b40065'
  on-primary: '#ffffff'
  primary-container: '#e10080'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb0ca'
  secondary: '#00696b'
  on-secondary: '#ffffff'
  secondary-container: '#56f5f8'
  on-secondary-container: '#006e70'
  tertiary: '#005cab'
  on-tertiary: '#ffffff'
  tertiary-container: '#0075d6'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e3'
  primary-fixed-dim: '#ffb0ca'
  on-primary-fixed: '#3e001f'
  on-primary-fixed-variant: '#8d004e'
  secondary-fixed: '#5af8fb'
  secondary-fixed-dim: '#2ddbde'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f51'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a5c8ff'
  on-tertiary-fixed: '#001c3a'
  on-tertiary-fixed-variant: '#004786'
  background: '#fff8f8'
  on-background: '#28171c'
  surface-variant: '#fadbe3'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 84px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 44px
  accent-label:
    fontFamily: beVietnamPro
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  button-text:
    fontFamily: Epilogue
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 18px
spacing:
  stack-overlap: -24px
  margin-page: 40px
  gutter-collage: 16px
  sticker-padding: 12px
---

## Brand & Style

This design system celebrates the maximalist, energetic spirit of South Asian pop culture blended with a modern "boss bitch" corporate-edge. It is a digital scrapbook that feels tactile, curated, and intentionally chaotic. The target audience is Gen-Z and Young Millennial creatives who value cultural heritage reimagined through a lens of irony and high-fashion drama.

The visual style is a fusion of **Tactile/Skeuomorphism** and **Brutalism**. It rejects standard grid-based layouts in favor of a layered, collage-based composition. Every element should feel like it was cut out of a magazine, taped down, or slapped on as a sticker. High-contrast colors and aggressive drop shadows create a sense of physical depth on a flat screen.

## Colors

The palette is rooted in a saturated, high-energy "Desi Pop" spectrum. 
- **Saturated Pink (#FF1493)**: The primary driver of the "boss" energy, used for major CTAs and highlights.
- **Bright Cyan/Teal (#00CED1) & Electric Blue (#1E90FF)**: Secondary shades that provide a cool, electric contrast to the warm tones.
- **Green, Orange, & Yellow Pops**: Reserved for "sticker" elements, doodle accents, and success states.
- **Neutral Base (#FDF5E6)**: A warm, off-white "paper" color that serves as the canvas for the collage, preventing the saturated colors from feeling overly clinical.

## Typography

This design system utilizes a hierarchy that mirrors a festival poster or a personalized diary.
- **Headlines**: Use **Epilogue** in its heaviest weights. It should be typeset tightly with negative letter spacing to create a chunky, "block-print" feel.
- **Body Text**: **Plus Jakarta Sans** provides a clean, modern counterpoint to the chaos, ensuring that longer descriptions remain legible.
- **Accents & Labels**: **Be Vietnam Pro** is used to mimic a handwritten or marker-style note. When applied, these should often be rotated by 2-5 degrees to enhance the "hastily stuck on" aesthetic.

## Layout & Spacing

This design system ignores traditional whitespace rules in favor of **intentional overlap**. The layout is contextual and "scrapbook-style," meaning elements should frequently break the container edges. 
- **Layering**: Use negative margins (`stack-overlap`) to tuck images behind text or place stickers over the corners of cards.
- **Rhythm**: Avoid perfect alignment. Align elements to a loose central axis but apply subtle rotations (randomized between -3deg and 3deg) to containers to simulate physical placement.
- **Composition**: Content should be grouped in "clusters" rather than rows, mimicking a pinboard or a mood board.

## Elevation & Depth

Hierarchy is achieved through physical layering rather than lighting.
- **Hard Shadows**: Use 100% opacity shadows with 0 blur. For example: `8px 8px 0px #000000`. This gives the "cutout" look.
- **White Outlines**: Every photographic element or icon should have a thick (4px-8px) white border to make it look like a physical sticker.
- **Z-Index Logic**: Corporate objects (files/tags) sit at the lowest level, chai cups and food icons sit in the middle, and "doodle arrows" and "tape effects" sit at the very top.
- **Tape Effects**: Use semi-transparent rectangular overlays with jagged edges at the corners of images to simulate washi tape.

## Shapes

The shape language is primarily **sharp and irregular**. 
- **Containers**: Use 0px border-radius for a brutalist feel, but apply "torn paper" SVG masks to the bottom or top edges of sections.
- **Stickers**: Icons and decorative elements should have organic, hand-cut shapes with a thick white stroke.
- **Buttons**: Rectangular with no rounding, relying on a secondary "shadow box" offset for a 3D effect.

## Components

- **Buttons**: Rectangular blocks with a hard 4px black border and an 8px offset hard shadow. On hover, the button should "sink" by moving 4px down and right, reducing the shadow size.
- **Sticker Chips**: Small, pill-like shapes with a white border and a slight rotation. Use these for tags or categories.
- **Scrapbook Cards**: Cards should look like Polaroid photos or torn sheets of legal paper. Use a slightly different background color (e.g., a pale yellow) than the main canvas.
- **Interactive Doodles**: Doodle arrows should be animated with a slight "wiggle" (SVG path animation) to feel hand-drawn.
- **Tape Accents**: Use CSS `::before` and `::after` pseudo-elements to add "tape" to the top-left and bottom-right of primary cards.
- **Corporate Tags**: Use "File" icons or "Price Tag" shapes for labels, blending the 'boss' and 'desi' themes.