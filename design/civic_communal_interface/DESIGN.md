---
name: Civic Communal Interface
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4948'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7979'
  outline-variant: '#bdc9c8'
  surface-tint: '#006a6a'
  primary: '#005e5e'
  on-primary: '#ffffff'
  primary-container: '#007979'
  on-primary-container: '#a4fefe'
  inverse-primary: '#7bd5d5'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#78f2f2'
  on-secondary-container: '#006e6e'
  tertiary: '#65512a'
  on-tertiary: '#ffffff'
  tertiary-container: '#7f6940'
  on-tertiary-container: '#ffeccf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#97f2f1'
  primary-fixed-dim: '#7bd5d5'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#7bf5f5'
  secondary-fixed-dim: '#5bd9d8'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f50'
  tertiary-fixed: '#fcdfac'
  tertiary-fixed-dim: '#dec392'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#57441e'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-tabular:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an authoritative, accessible, and transparent digital infrastructure for local civic governance (Rukun Tetangga / Rukun Warga). The brand personality balances civic responsibility, neighborhood warmth, and operational efficiency. It rejects decorative clutter in favor of scannable, high-legibility layouts that engender trust among residents and neighborhood administrators alike.

### Aesthetic Movement & Direction
The system employs a **Modern Civic Minimalist** design aesthetic with structured, low-friction information architectures:
- **Clarity over Ornamentation:** Purposeful visual weight, predictable navigation, and functional layouts engineered for quick data entry and rapid administrative oversight.
- **Communal Warmth through Micro-Accents:** The technical precision of deep teal and clean slate surfaces is balanced by warm cream and vibrant tangerine accents, representing community engagement and urgent action items without compromising administrative gravitas.
- **Dense Utility:** Data tables, resident status indicators, ledger previews, and contribution records prioritize spatial economy, high scan-ability, and accessible contrast ratios compliant with WCAG AAA standards for critical municipal communications.

## Colors

The color architecture enforces a transparent, role-based hierarchy across neighborhood records, financial ledgers, and emergency notices.

### Palette Architecture
- **Primary Deep Teal (`#007979`):** Anchors main navigational structures, active tab indicators, primary submit actions, and institutional headers. Communicates trust, structure, and institutional stability.
- **Secondary Mint Teal (`#24B1B1`):** Applied to active states, secondary interactive elements, progress charts, verified resident indicators, and positive fiscal metrics.
- **Tertiary Warm Cream (`#FFE2AF`):** Soft contextual highlight applied as backdrops for communal announcements, pending approvals, and informational banners. Never paired with light text.
- **Accent Tangerine (`#E37434`):** High-priority operational accent for urgent neighborhood alerts (Siskamling/ronda alerts, pending mandatory dues, safety notices, and destructive confirmation steps).
- **Neutral Foundations:**
  - `Canvas / Surface Clean`: `#FFFFFF` for data cards, modal containers, and inputs.
  - `Surface Subdued / Slate-50`: `#F8FAFC` for base application canvas and table alternate rows.
  - `Surface Border / Slate-100`: `#F1F5F9` for section dividers and nested container fills.
  - `Border Outline / Slate-200`: `#E2E8F0` for structural data borders and input fields.
  - `Typography Base / Slate-900`: `#0F172A` for primary body copy, headers, and tabular figures.
  - `Typography Muted / Slate-500`: `#64748B` for meta labels, helper copy, and audit timestamps.

### Usage Standards
- Reserve `#E37434` strictly for time-sensitive civic actions, unresolved complaints, or delinquent dues; avoid ambient decorative usage.
- Use `#FFE2AF` with `#0F172A` text overlays exclusively to guarantee AA/AAA readability.

## Typography

Plus Jakarta Sans is selected across all roles for its contemporary Indonesian-origin heritage, exceptional geometric balance, and tall x-height that remains crisp on low-density mobile displays.

### Typographic Hierarchy & Principles
- **Numerical Regularity:** Financial summaries, family register numbers (Nomor Kartu Keluarga), and national identity numbers (NIK) must use `font-feature-settings: "tnum" on, "zero" on` to align digits neatly down data tables.
- **Editorial Contrast:** Section headers in administrative panels require semibold or bold weights (`600` or `700`) paired with subtle negative tracking (`-0.01em` to `-0.02em`) to avoid horizontal bloat.
- **Information Scannability:** Forms and meta tags deploy `label-sm` in all-caps format with relaxed letter spacing (`0.04em`) to establish visual separation from editable inputs.

## Layout & Spacing

The layout is built upon an 8pt architectural rhythm, optimized for data-dense dashboards, formal verification workflows, and cross-platform accessibility.

### Grid System
- **Desktop (1280px+):** 12-column fluid grid, `2rem` outer margins, `1.5rem` gutters. Main content container has a maximum constraint of `1440px`.
- **Tablet (768px – 1279px):** 8-column fluid grid, `1.5rem` outer margins, `1rem` gutters. Administrative sidebars collapse to icon-only rails or slide-out drawers.
- **Mobile (320px – 767px):** 4-column fluid grid, `1rem` outer margins, `0.75rem` gutters. Complex records reflow from tabular grids into stacked card modules.

### Vertical Spacing & Rhythm
- Inter-card gaps and component spacing strictly reference the base spatial increments:
  - Micro-gaps (`space-xs` - 4px / `space-sm` - 8px) for badge text, icon-label pairs, and related inputs.
  - Component padding (`space-md` - 16px / `space-lg` - 24px) for card interiors, modal bodies, and table cells.
  - Section dividers (`space-xl` - 40px) between major analytical blocks and resident list sections.

## Elevation & Depth

This design system uses a **Tonal Surface and Structural Outline** model instead of high-blur drop shadows, reinforcing clarity and print-like administrative legibility.

### Surface Elevation Layers
- **Ground (Level 0):** `#F8FAFC` base application background.
- **Card/Canvas (Level 1):** `#FFFFFF` surfaces bounded by a crisp 1px solid `#E2E8F0` border. Shadows are omitted or restricted to an ultra-subtle ambient tint: `0 1px 3px 0 rgba(15, 23, 42, 0.04)`.
- **Raised/Popover (Level 2):** Floating filter menus, dropdown selects, and flyout actions utilize `#FFFFFF` with a direct outline `#CBD5E1` and an anchor shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.08)`.
- **Overlay/Modal (Level 3):** Modal containers and verification panels occupy Level 3, accompanied by a tinted backdrop scrim of `#0F172A` at `45%` opacity. Shadow model: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`.

### Depth Principles
- Never use heavy drop shadows on interactive elements. Depth must be communicated through tonal changes between `#F8FAFC`, `#FFFFFF`, and `#F1F5F9`.
- Focused and selected states rely on an outer ring (`2px` solid `#24B1B1` with `2px` white offset) rather than an elevated shadow.

## Shapes

The geometric framework applies moderate corner radii (Level 2: `0.5rem` / 8px standard) to balance institutional rigor with approachable community software.

### Radius Assignments
- **Inputs, Buttons, and Table Rows:** `0.5rem` (8px) for structured consistency.
- **Cards, Filter Sheets, and Stat Panels:** `0.75rem` (12px) to softly frame individual administrative modules.
- **Modals and Alert Banners:** `1rem` (16px) for distinct focal separation from background grids.
- **Status Badges, Category Chips, and Avatars:** Fully rounded pill format (`9999px`) to create clear differentiation between data labels and clickable square buttons.

## Components

### Buttons
- **Primary:** Background `#007979`, text `#FFFFFF`, border none. Hover: `#006363`. Active: `#004F4F`. Focus: 2px offset ring in `#24B1B1`.
- **Secondary:** Background `#F1F5F9`, text `#0F172A`, border 1px solid `#E2E8F0`. Hover: `#E2E8F0`.
- **Accent/Action:** Background `#E37434`, text `#FFFFFF`. Used strictly for incident dispatch, dues collection reminders, or urgent submission tasks. Hover: `#C96127`.
- **Ghost:** Background transparent, text `#007979`, hover background `#F1F5F9`.

### Badges & Status Chips
- Height: `24px` with `8px` horizontal padding, text in `label-sm`.
- **Lunas / Paid / Verified:** Background `#ECFDF5`, text `#065F46`, 1px border `#A7F3D0`.
- **Pending / Tertunda:** Background `#FFFBEB`, text `#92400E`, 1px border `#FFE2AF`.
- **Belum Bayar / Urgent / Alert:** Background `#FFF7ED`, text `#9A3412`, 1px border `#FFEDD5` (with `#E37434` indicator dot).
- **Resident Status Chips:** Background `#F8FAFC`, text `#475569`, border 1px solid `#E2E8F0`.

### Data Tables (Civic Ledger & Resident Registry)
- Header row uses `#F8FAFC` background, `label-sm` uppercase text in `#64748B`, with explicit 1px bottom border `#E2E8F0`.
- Cells are padded with `12px 16px`. Alternating row hover state triggers `#F8FAFC` transition.
- Numerical fields (dues, household counts, dates) use tabular numeric font features.
- Actions column pinned to the right edge with ghost action buttons.

### Statistics Cards (Kpi & Citizen Metrics)
- Container: Background `#FFFFFF`, border 1px solid `#E2E8F0`, padding `20px`.
- Layout: Top row hosts micro-label and contextual icon container (e.g., `#24B1B1` at 15% opacity with primary teal icon); middle row displays large figure in `headline-lg` (`#0F172A`); bottom row contains comparison metadata or trend tags.

### Form Inputs & Selection Controls
- Text Inputs: Background `#FFFFFF`, border 1px solid `#CBD5E1`, internal padding `10px 14px`, text `body-md`. Focus border `#007979` with 2px shadow ring `#24B1B1` at 20% opacity.
- Checkboxes & Radio Controls: 18px square/circle with 1.5px border `#94A3B8`. Selected state fills with `#007979` and white check icon.

### Modal Previews (Kartu Keluarga / Iuran Verification)
- Header: Sticky `#FFFFFF` header with `title-md`, border-bottom 1px solid `#E2E8F0`.
- Body: Two-column responsive summary sheet displaying citizen credentials with alternating background segments (`#F8FAFC`).
- Footer: Right-aligned button group with "Batalkan" (Ghost) and "Konfirmasi / Simpan" (Primary Deep Teal).