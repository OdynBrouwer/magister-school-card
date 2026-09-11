# Changelog

## 1.4.1

- Fixed the `layout` option: `setConfig` now actually applies the configured
  layout instead of always falling back to `grid-auto` (the in-card buttons
  still work as before).
- Added `grid-4`, `grid-5` and `grid-6` layouts, with responsive fallbacks
  for narrower screens.
- Unknown `layout` values now fall back to `grid-auto` instead of rendering an
  unstyled container.

## 1.4.0

- Stats widget now shows open and completed homework separately, using the new
  `aantal_huiswerk_onafgerond` and `aantal_huiswerk_afgerond` attributes from
  Magister integration v2.0.4.
- Roster and changes widgets now mark lessons that were changed or moved
  (`was_afwijkend`) with a 🔄 Gewijzigd label, in addition to cancelled lessons.

## 1.3.3

- Submitted the card to the official HACS store (dashboard card).
- Added a HACS validation workflow (`.github/workflows/validate.yml`) and a README preview image.
- No runtime changes.

## 1.3.2

- Restored the card to the repository root so the HACS resource path stays
  unchanged for existing users.
- Kept the reproducible Rollup/npm build (source now lives in `src/`).
- Fixes "Custom element doesn't exist" after an in-place HACS update.

## 1.3.1

- Added a reproducible Rollup/npm build for HACS distribution.
- Published the bundled card as `dist/magister-school-card.js`.

## 1.3.0

- Added the optional `week_schooltijden` widget.
- Bundled `lit` into the distributable card file.
