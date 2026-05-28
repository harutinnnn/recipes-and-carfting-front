---
name: Verdant Harvest
colors:
  surface: '#f4faff'
  surface-dim: '#d2dbe1'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf5fb'
  surface-container: '#e6eff5'
  surface-container-high: '#e0e9ef'
  surface-container-highest: '#dbe4ea'
  on-surface: '#141d21'
  on-surface-variant: '#3d4a3d'
  inverse-surface: '#293236'
  inverse-on-surface: '#e9f2f8'
  outline: '#6d7b6c'
  outline-variant: '#bccbb9'
  surface-tint: '#006e2f'
  primary: '#006e2f'
  on-primary: '#ffffff'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#4ae176'
  secondary: '#944a23'
  on-secondary: '#ffffff'
  secondary-container: '#fd9e70'
  on-secondary-container: '#76340e'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cfa800'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#76330d'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f4faff'
  on-background: '#141d21'
  surface-variant: '#dbe4ea'
typography:
  display-lg:
    fontFamily: Rubik
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Rubik
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Rubik
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Rubik
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
  currency-md:
    fontFamily: Rubik
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is crafted to evoke a sense of warmth, growth, and playful productivity. It targets players seeking a "cozy game" experience—low stress, high reward, and visually nurturing. The emotional response should be one of "digital escapism," where the UI feels like a physical, tactile extension of a thriving farm.

The aesthetic is a hybrid of **Tactile/Skeuomorphic** and **High-Contrast/Bold**. We utilize "squishy" interaction states, soft inner-glows that mimic sunlight, and heavy, saturated borders. The interface avoids clinical thin lines in favor of chunky, substantial elements that feel like wooden blocks or smooth river stones. Every interaction should feel weighty yet soft, emphasizing a handcrafted, organic world.

## Colors
The palette is rooted in the natural lifecycle of a farm.
- **Primary (Lush Green):** Used for growth indicators, positive actions, and "ready to harvest" states.
- **Secondary (Earthy Brown):** Reserved for structural elements, headers, and text to provide a grounded, organic feel.
- **Tertiary (Sunny Yellow):** Specifically for currency (Gold), highlights, and celebratory moments.
- **Accent (Sky Blue):** Used for energy bars, water-related actions, and secondary navigation.

The background uses a warm "Paper" tint (#FFFBEB) rather than pure white to reduce eye strain during long sessions and maintain the cozy, sun-drenched atmosphere.

## Typography
The typography strategy prioritizes friendliness and legibility. **Rubik** is used for all "active" and "expressive" text—headlines, buttons, and numeric values—because its rounded corners mirror the soft shape language of the UI. **Plus Jakarta Sans** is utilized for body copy and descriptions; its clean, modern terminals provide the necessary "web UI twist" that keeps the game feeling contemporary.

Numeric values for currency and energy use a slightly tighter letter spacing and heavier weight to ensure they stand out as the most critical data points in the economy loop.

## Layout & Spacing
The design system employs a **fixed-center grid** for the main gameplay area to maintain a focused "board game" feel, while the UI overlays use a fluid model. 

- **The Dashboard:** A 12-column grid with generous 24px gutters.
- **Sidebars:** Fixed-width "drawers" (320px) for inventory and social feeds to prevent layout shifts during interaction.
- **Spacing Rhythm:** Based on an 8px scale. Large 40px (lg) padding is preferred for card containers to evoke a sense of spaciousness and calm. 

On mobile, the layout reflows into a single-column stack with bottom-anchored navigation for easy thumb access during "on-the-go" harvesting.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Soft Ambient Shadows**. 
1. **Base Layer:** The warm paper background (#FFFBEB).
2. **Container Layer:** White cards with a 2px solid Earthy Brown border.
3. **Interactive Layer:** Elements use a "pressed" effect. Instead of traditional drop shadows, buttons have a 4px bottom offset (a darker shade of the element's color) to create a physical "push-button" look.
4. **Floating Layer:** Modals and tooltips use extra-diffused shadows with a slight warm tint (#78350F at 10% opacity) to feel like they are hovering just above the game board.

Avoid blur effects; stick to solid offsets and crisp borders to maintain the "high-contrast" game aesthetic.

## Shapes
The shape language is consistently **Rounded**. All standard containers (cards, plots, input fields) use a 0.5rem (8px) corner radius. 

Buttons and "pill" chips use a fully rounded (1rem+) radius to distinguish them as highly interactive. To reinforce the tactile feel, certain UI components like "Crop Plots" should feature an inner-rounded border-box, creating a "well" effect where the crop appears to sit inside the earth.

## Components
- **Buttons:** Chunky, high-contrast. Primary buttons are Green with a dark green 4px bottom border. On hover, the button moves 2px down; on active/click, it moves 4px down, "flattening" the border to simulate a physical press.
- **Energy Progress Bars:** Thick, 24px tall tracks. The background is a soft blue-grey, while the fill is a vibrant Sky Blue. Add a white "glint" or shine effect at the top of the fill to give it a liquid, glossy look.
- **Gold/Currency:** Always preceded by a chunky, circular yellow icon. Use `currency-md` typography.
- **Crop/Animal Cards:** White background with a 2px Earthy Brown border. The header of the card should be a solid block of color (e.g., Green for plants, Blue for water animals) with the title in white.
- **Checkboxes & Radios:** Large (24px) targets. Checkboxes use a "check" icon that looks hand-drawn.
- **Input Fields:** Soft cream background with an inset shadow to look like they are carved into the UI.
- **Action Chips:** Used for "Quick-sell" or "Plant Seed." Small, pill-shaped, using the secondary brown color with white text for high legibility.