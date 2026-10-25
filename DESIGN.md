---
version: "alpha"
name: "Heritage Nutrition Studio"
description: "Architectural Minimalism meets Journalistic Gravitas for Diego's adaptive meal-prep, budget engine, and recipe macro system."
colors:
  primary: "#1A1C1E"
  secondary: "#5A6065"
  tertiary: "#B8422E"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#FADCD6"
  on-tertiary-container: "#3B0D06"
  neutral: "#F7F5F2"
  surface: "#FFFFFF"
  surface-variant: "#EDE9E2"
  outline: "#D5D0C8"
  success: "#1B633B"
  on-success: "#FFFFFF"
  warning: "#8C500B"
  ice: "#1A5270"
typography:
  h1:
    fontFamily: "Public Sans"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "Public Sans"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Public Sans"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.35
  body-md:
    fontFamily: "Public Sans"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Public Sans"
    fontSize: "0.825rem"
    fontWeight: 400
    lineHeight: 1.45
  label-caps:
    fontFamily: "Space Grotesk"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  mono-num:
    fontFamily: "Space Grotesk"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "12px"
  button-primary-hover:
    backgroundColor: "{colors.on-tertiary-container}"
    textColor: "{colors.on-tertiary}"
  button-secondary:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "10px"
  card-editorial:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  badge-accent:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.xs}"
    padding: "4px"
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.xs}"
    padding: "4px"
  input-field:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "8px"
  nav-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    padding: "16px"
---

## Overview

Architectural Minimalism meets Journalistic Gravitas. Designed for Diego's weekly meal-prep and macro-budget engine (`Plan Diego v5`), the interface evokes a tactile, high-contrast broadsheet and a precision culinary ledger. It eliminates visual noise in favor of crisp tabular numerals, structured ingredient cards, and unambiguous action triggers.

## Colors

The palette is rooted in warm, glare-free limestone neutrals paired with deep ink typography and a single, authoritative terracotta accent ("Boston Clay") for primary actions and budget/adaptation triggers.

- **Primary (`#1A1C1E`):** Deep ink for headlines, core text, and primary structural headers. Contrast on `#F7F5F2` is `15.8:1` (WCAG AAA).
- **Secondary (`#5A6065`):** Architectural slate for captions, unit labels (`g`, `ml`, `pz`, `latas`), and secondary metadata. Contrast on `#FFFFFF` is `6.3:1` (WCAG AA).
- **Tertiary (`#B8422E`):** "Boston Clay" — the primary interactive driver used for the **Adaptar Menú a mi Compra** engine button, active states, and protein indicators.
- **On-Tertiary (`#FFFFFF`):** Crisp white text over Boston Clay buttons (`5.14:1` contrast ratio — passes WCAG AA).
- **Tertiary Container (`#FADCD6`) & On-Tertiary Container (`#3B0D06`):** High-contrast warm clay tint for recipe tags, macro callouts, and hover states (`11.2:1` contrast).
- **Neutral (`#F7F5F2`) & Surface (`#FFFFFF`):** Warm limestone canvas with pure white editorial cards and `#EDE9E2` (`surface-variant`) table headers.
- **Semantic Accents:** **Success (`#1B633B`)** for within-budget (`≤ $400 MXN`) and completed meal-prep states; **Warning (`#8C500B`)** for stock alerts or budget overruns; **Ice (`#1A5270`)** for frozen batch-cooking indicators (`Metepec → Cádiz`).

## Typography

A dual-font system pairing **Public Sans** for editorial clarity and **Space Grotesk** for technical metadata, uppercase labels, prices, and macro counters.

- **Headlines (`h1`, `h2`, `h3`):** Set in `Public Sans` (`700–800` weight) with tight tracking (`-0.02em` to `-0.03em`) to anchor sections like *Catálogo & Compra*, *Recetario Dinámico*, and *Menú Semanal*.
- **Body (`body-md`, `body-sm`):** Set in `Public Sans` (`400` weight) with generous `1.5` line height for recipe preparation steps and nutritional guidelines.
- **Technical Labels & Numerals (`label-caps`, `mono-num`):** Set in `Space Grotesk` (`700` weight) so gram weights (`g`), presentation prices (`$ MXN`), and macro pillars (`kcal`, `P`, `C`, `G`) align with ledger precision.

## Layout

The layout uses a responsive editorial grid (`max-width: 960px` centered canvas) with a sticky top ledger bar displaying live daily macros (`2,550 kcal`, `165g P`, `275g C`, `85g G`) alongside the live weekly budget meter (`Tope $400 MXN`).

- **Spacing Scale:** Built on an `8px` baseline (`xs: 4px`, `sm: 8px`, `md: 16px`, `lg: 24px`, `xl: 32px`).
- **Adaptive Grid:** 2-column and 3-column responsive cards on desktop that collapse cleanly into a single-column thumb-friendly stack on mobile viewports (`< 640px`).

## Elevation & Depth

Rather than heavy drop shadows, depth is communicated through crisp `1px solid #D5D0C8` (`outline`) architectural borders, subtle surface contrast (`#FFFFFF` cards over `#F7F5F2` limestone), and `2px` solid structural rules under section headers.

## Shapes

Restrained, sharp geometry reinforces the technical ledger aesthetic:
- **`xs` (`2px`) & `sm` (`4px`):** Badges, inputs, and primary action buttons.
- **`md` (`8px`):** Editorial cards, recipe modules, and ingredient tables.
- **`full` (`9999px`):** Progress bars for daily macros and the `$400 MXN` budget gauge.

## Components

- **`button-primary`:** Uses `{colors.tertiary}` (`#B8422E`) with `{colors.on-tertiary}` (`#FFFFFF`) text and `{typography.label-caps}` for primary engine triggers (*"⚡ Adaptar Menú a mi Compra"*, *"+ Añadir Insumo"*).
- **`card-editorial`:** `{colors.surface}` background, `1px` `{colors.outline}` border, `{rounded.md}` corners, and `16px` internal padding.
- **`input-field`:** `{colors.neutral}` background with `1px` `{colors.outline}` border and focus ring in `{colors.tertiary}`, used for editing presentation prices, gram quantities, and recipe servings.
- **`badge-accent` & `badge-success`:** Compact uppercase pills in `Space Grotesk` indicating whether an ingredient comes from *Compra Súper* or *Casa Metepec ($0)*, and how many recipe batches can be cooked with current stock.

## Do's and Don'ts

- **Do** use `Space Grotesk` (`label-caps` and `mono-num`) for all prices (`$ MXN`), unit quantities (`g`, `ml`, `pz`, `latas`), and macro readouts.
- **Do** keep `#B8422E` (*Boston Clay*) reserved for primary interactive actions, active tab indicators, and key protein/budget highlights.
- **Don't** use pure `#000000` on pure `#FFFFFF` across large background areas; always anchor the canvas in `#F7F5F2` (*Warm Limestone*).
- **Don't** hide unit conversions—always display both the commercial presentation (e.g., *Paquete 680 g — $70*) and the exact weekly grams/units available for the recipe engine.

