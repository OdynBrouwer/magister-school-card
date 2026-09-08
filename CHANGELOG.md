# Changelog

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
