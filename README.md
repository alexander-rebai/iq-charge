# Laadexpert Style Guide & Implementation Plan

## Design Overview

Based on the Bright Energy website example, we aim to implement a clean, modern and minimalist design language focusing on:

### Navigation

- Compact, sticky navbar with height of 48px (3rem)
- Clean white background with subtle blur effect
- Simple logo on left
- Primary actions (Contact sales, Login) on right
- Optional dropdown menus for Products/Company sections
- No visible borders in default state
- Subtle bottom border on scroll

### Button Styles

1. Primary Button

- Background: zinc-800/90 (90% opacity)
- Text: white
- Height: 44px (2.75rem)
- Rounded corners
- Hover: solid zinc-800

2. Secondary Button

- Background: gray-100
- Border: gray-200
- Text: gray-800
- Height: 44px (2.75rem)
- Rounded corners
- Shadow: subtle
- Hover: bg-gray-200

### Typography

- Headings: font-semibold
- Body: Regular weight
- Colors:
  - Primary text: gray-800
  - Secondary text: gray-400/500
  - Accent: Brand colors

### Spacing

- Consistent padding: px-6 (1.5rem)
- Navbar height: h-12 (3rem)
- Button height: h-11 (2.75rem)
- Gaps between elements: space-x-3/4

## Implementation Plan

1. Navigation Updates

- Refactor Header component
- Implement sticky behavior
- Add blur effect
- Simplify mobile menu
- Add dropdown functionality

2. Button Component Updates

- Create reusable button components
- Implement primary/secondary variants
- Add hover states
- Standardize sizes

3. Layout & Spacing

- Update container widths
- Implement consistent spacing
- Fix responsive behaviors

4. Typography & Colors

- Update text styles
- Implement color system
- Add hover states

## Key Focus Areas

1. Simplicity & Cleanliness
2. Consistent Spacing
3. Clear Visual Hierarchy
4. Smooth Interactions
5. Mobile Responsiveness

## Components to Update

1. Header.tsx
2. Button.tsx (create new component)
3. Navigation.tsx
4. Layout.tsx
5. Hero.tsx

This style guide serves as the foundation for implementing a clean, modern interface matching the Bright Energy example while maintaining our brand identity.
