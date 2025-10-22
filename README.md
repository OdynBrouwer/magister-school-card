# Magister School Card

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
