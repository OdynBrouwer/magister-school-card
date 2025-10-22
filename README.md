# Magister School Card

 A compact, configurable Lovelace custom card that shows Magister school data (lessons, grades, homework, absences and more) for Home Assistant.

 This project provides a small Web Component (Lit-based) that displays a school dashboard using the data from a Magister sensor entity. It's designed to be used as a custom Lovelace card in Home Assistant or included via HACS.

 ## Why use this

 - Presents an at-a-glance school overview (today's schedule, next lesson, recent grades, open assignments, absences and changes).
 - Mobile-first, responsive grid layouts with a few layout presets (1–3 columns or auto-fit).
 - Lightweight — single JS file built with Lit and no extra runtime dependencies.
 - Easy to customize which widgets are shown and tweak visual theming through Home Assistant CSS variables.

 ## Features

 - Widgets: stats, volgende_les (next lesson), rooster_vandaag (today's schedule), cijfers (grades), opdrachten (assignments), absenties, wijzigingen (schedule changes), aanmeldingen, activiteiten
 - Built-in responsive layouts and an interactive layout selector
 - Uses common Home Assistant theme variables for seamless integration

 ## Files

 - `magister-school-card.js` — main Web Component source file
 - `hacs.json` — HACS metadata
 - `LICENSE` — project license

 ## Install

 Two common ways to install the card in Home Assistant:

 ### 1) Install with HACS (recommended)

 If the repository is added to HACS, install the integration from the Frontend > Custom repositories or from the HACS UI. After installation, add the resource (if HACS didn't add it automatically) and use the card in Lovelace.

 ### 2) Manual installation

 1. Copy `magister-school-card.js` to your Home Assistant `www` directory, e.g. `www/community/magister-school-card/magister-school-card.js`.
 2. In your Lovelace resources (Configuration → Dashboards → Resources) add a resource with:

 ```yaml
 url: /community_plugin/magister-school-card/magister-school-card.js
 type: module
 ```

 3. Add the card to a dashboard (example below).

 ## Usage / Configuration

 Basic Lovelace YAML example:

 ```yaml
 type: 'custom:magister-school-card'
 entity: sensor.magister_overview
 # optional
 layout: grid-auto # grid-1, grid-2, grid-3, grid-auto
 show_widgets:
   - stats
   - volgende_les
   - rooster_vandaag
   - cijfers
   - opdrachten
   - absenties
   - wijzigingen
   - aanmeldingen
   - activiteiten
 ```

 Notes:
 - `entity` should point to your Magister-related sensor (for example `sensor.magister_overview` or similar entity that contains the attributes used by the card).
 - `layout` controls the initial grid layout. Users can toggle layouts inside the card UI as well.
 - `show_widgets` accepts an array of widget keys — only the listed widgets will be rendered.

 Widget keys (available):

 - `stats`
 - `volgende_les`
 - `rooster_vandaag`
 - `cijfers`
 - `opdrachten`
 - `absenties`
 - `wijzigingen`
 - `aanmeldingen`
 - `activiteiten`

 ## Theming / CSS variables

 The card respects Home Assistant theme variables. You can override these from your theme or use card-mod. The card references these variables (not exhaustive):

 - `--card-background-color`
 - `--ha-card-border-radius`
 - `--ha-card-box-shadow`
 - `--primary-text-color`
 - `--primary-color`
 - `--accent-color`
 - `--secondary-background-color`
 - `--divider-color`
 - `--primary-background-color`
 - `--secondary-text-color`
 - `--error-color`, `--warning-color`, `--success-color`

 Example: tweak colors in your theme or use card-mod to alter padding and borders.

 ## Troubleshooting

 - If the card shows "School data laden..." it means the configured `entity` is not available or the sensor hasn't populated attributes yet — double check the `entity` id.
 - The component expects specific attributes on the configured `entity` (arrays like `afspraken`, `cijfers`, `opdrachten`, etc.). If your sensor provides a different structure, adapt the entity or a template sensor to match.

 ## Development

 The component is a single ES module using Lit. For local development you can load the file directly into a browser or through Home Assistant as a local resource. The element is registered as `magister-school-card`.

 Quick dev test (add as a resource in Lovelace pointing to your local copy):

 ```yaml
 type: module
 url: /local/magister-school-card/magister-school-card.js
 ```

 Then add the card as shown in the Usage section and point `entity` to a test sensor.

 ## Support

 File issues on the repository (Issues tab). Include:
 - Home Assistant version
 - The entity id used
 - A minimal reproduction (example sensor attributes or a screenshot)

 ## Maintainers & Contributions

 Maintainer: Repository owner

 Contributions are welcome via issues and pull requests. Keep changes small and focused. If you intend to contribute larger features, open an issue first to discuss the design.

 See the `LICENSE` file for licensing details.

 ## Changelog

 See releases or the Git history for changes.

 ---

 If you'd like the README to include additional usage examples, CI badges, or a CONTRIBUTING.md reference, tell me how you'd like those added and I can update the file.# Magister School Card

![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2023.8+-blue?logo=home-assistant)
![License](https://img.shields.io/github/license/OdynBrouwer/magister-school-card)

Een mooie en responsive Lovelace-card voor de **[Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration)**. Toon rooster, cijfers, huiswerk, wijzigingen en meer in één overzichtelijke kaart.

## 📦 Installatie via HACS (aanbevolen)

1. Open Home Assistant en ga naar **HACS → Frontend → ⋯ (Custom repositories)**
2. Voeg het repository toe met:
   - **URL**: `https://github.com/OdynBrouwer/magister-school-card`
   - **Categorie**: `Lovelace`
3. Installeer de kaart vanuit HACS
4. Herstart Home Assistant
5. Voeg de card toe aan je dashboard (voorbeeld hieronder)

## 📥 Handmatige installatie

1. Kopieer `magister-school-card.js` naar je Home Assistant `www` map, bijvoorbeeld:

   `www/community/magister-school-card/magister-school-card.js`

2. Voeg een resource toe in Lovelace (Instellingen → Dashboards → Resources):

```yaml
url: /community_plugin/magister-school-card/magister-school-card.js
type: module
```

3. Voeg de kaart toe aan je dashboard (voorbeeld hieronder).

## Gebruik — voorbeeld configuratie

Een basisvoorbeeld voor Lovelace (aanbevolen: gebruik de sensor die de custom integration levert):

```yaml
type: custom:magister-school-card
entity: sensor.magister_overview  # of de sensor die jouw magister-integration aanmaakt
layout: grid-3 # opties: grid-1, grid-2, grid-3, grid-auto
show_widgets:
   - rooster_vandaag
   - wijzigingen
   - volgende_les
   - cijfers
   - opdrachten
```

Belangrijk:
- De kaart verwacht data afkomstig van de custom integration: https://github.com/OdynBrouwer/magister-school-integration
- `entity` moet verwijzen naar de Magister sensor die de integration in Home Assistant aanmaakt (bijv. `sensor.magister_overview`).
- `layout` bepaalt de beginindeling; gebruikers kunnen dit ook in de kaart zelf wisselen.
- `show_widgets` is een lijst met widgets die je wil laten zien.

### Beschikbare widget keys

- `stats`
- `volgende_les`
- `rooster_vandaag`
- `cijfers`
- `opdrachten`
- `absenties`
- `wijzigingen`
- `aanmeldingen`
- `activiteiten`

## Theming / CSS-variabelen

De card respecteert Home Assistant thema-variabelen. Je kunt deze overschrijven in je thema of met `card-mod`. Veelgebruikte variabelen die de kaart gebruikt:

- `--card-background-color`
- `--ha-card-border-radius`
- `--ha-card-box-shadow`
- `--primary-text-color`
- `--primary-color`
- `--accent-color`
- `--secondary-background-color`
- `--divider-color`
- `--primary-background-color`
- `--secondary-text-color`
- `--error-color`, `--warning-color`, `--success-color`

Pas je thema aan of gebruik `card-mod` om padding, kleuren of randen te tunen.

## Veelvoorkomende problemen

- Als de kaart "School data laden..." toont: controleer of het opgegeven `entity` bestaat en of deze attributen bevat.
- De card verwacht attributen zoals `afspraken`, `cijfers`, `opdrachten`, `absenties`, `wijzigingen`. Als jouw sensor een andere structuur heeft, maak dan een template sensor die de juiste attributen levert.

## Ontwikkeling

De component is een enkele ES-module geschreven met Lit. Voor ontwikkelwerk kun je het bestand lokaal laden in Home Assistant of rechtstreeks in een browser tijdens ontwikkeling. Het element is geregistreerd als `magister-school-card`.

Snelle test (als lokale resource):

```yaml
type: module
url: /local/magister-school-card/magister-school-card.js
```

## Support

Open een issue in dit repository met:
- Je Home Assistant versie
- De gebruikte `entity`
- Een korte omschrijving of screenshot van het probleem

## Onderhoud & bijdragen

Maintainer: Repository eigenaar

Bijdragen zijn welkom via issues en pull requests. Kleine, gerichte wijzigingen gaan het snelst door. Voor grotere features open eerst een issue om de aanpak te bespreken.

Zie `LICENSE` voor licentieinformatie.

Wil je bijdragen? Lees eerst de richtlijnen in `CONTRIBUTING.md`.

## Voorbeeld sensordata

In de map `examples/` vind je `sensors_example.yaml` — dit is een mock/template die laat zien welke attributen de kaart verwacht. Gebruik dit alleen om lokaal te testen of wanneer je (tijdelijk) niet met de custom integration werkt.

---
