# Magister School Card

![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2023.8+-blue?logo=home-assistant)
![License](https://img.shields.io/github/license/OdynBrouwer/magister-school-card)

Een mooie en responsive Lovelace-card voor de **[Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration)**. Toon rooster, cijfers, huiswerk, wijzigingen en meer in één overzichtelijke kaart.

## 📦 Installatie via HACS (aanbevolen)

### Stap 1: Voeg custom repository toe

1. Open Home Assistant en ga naar **HACS → Frontend**
2. Klik rechtsboven op de **⋮ (drie puntjes)**
3. Selecteer **Custom repositories**
4. Voeg toe:
   - **Repository**: `https://github.com/OdynBrouwer/magister-school-card`
   - **Categorie**: `Dashboard` (of `Lovelace`)
5. Klik op **ADD**

### Stap 2: Installeer de card

1. De repository verschijnt nu in de lijst
2. **Klik op de repository** om deze te openen
3. Klik rechtsboven op de blauwe **"DOWNLOAD"** knop
4. Klik nogmaals op **"Download"** in het popup venster
5. **Herstart Home Assistant** (of druk **CTRL + F5** om de cache te verversen)

### Stap 3: Voeg de card toe aan je dashboard

Zie de configuratie-voorbeelden hieronder.

## 📥 Handmatige installatie

1. Download `magister-school-card.js` uit de [releases](https://github.com/OdynBrouwer/magister-school-card/releases)
2. Kopieer het bestand naar je Home Assistant `www` map, bijvoorbeeld:
   
   `www/community/magister-school-card/magister-school-card.js`

3. Voeg een resource toe in Lovelace (**Instellingen → Dashboards → Resources → Add Resource**):

   ```yaml
   url: /local/community/magister-school-card/magister-school-card.js
   type: module
   ```

4. Herstart Home Assistant
5. Voeg de card toe aan je dashboard (zie configuratie hieronder)

## 🎨 Gebruik — voorbeeld configuratie

### Basis configuratie

Voeg de card toe aan je Lovelace dashboard:

**Optie 1: Slimme rooster widget (aanbevolen)**
```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam  # Vervang met jouw Magister sensor
layout: grid-3
show_widgets:
  - rooster_meta      # Automatisch vandaag/morgen
  - wijzigingen
  - volgende_les
  - cijfers
  - opdrachten
```

**Optie 2: Beide roosters tonen**
```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
layout: grid-3
show_widgets:
  - rooster_vandaag   # Altijd vandaag
  - rooster_morgen    # Altijd morgen
  - wijzigingen
  - cijfers
  - opdrachten
```

### Configuratie opties

| Optie | Type | Beschrijving | Standaard |
|-------|------|--------------|-----------|
| `entity` | string | **Vereist**. De Magister sensor entity (bijv. `sensor.magister_voornaam_achternaam`) | - |
| `layout` | string | Grid layout: `grid-1`, `grid-2`, `grid-3`, `grid-auto` (alleen als `widget_columns` niet gebruikt wordt) | `grid-auto` |
| `show_widgets` | lijst | Welke widgets tonen (alleen als `widget_columns` niet gebruikt wordt) | alle widgets |
| `widget_columns` | object | **Nieuw!** Verdeel widgets over kolommen. Bijvoorbeeld: `{ column1: ['stats', 'rooster_meta'], column2: ['cijfers'] }` | `null` |

### 📋 Beschikbare widgets

#### 📅 Rooster widgets
- `rooster_vandaag` — **Altijd** rooster van vandaag
- `rooster_morgen` — **Altijd** rooster van morgen  
- `rooster_meta` — **Slimme** widget die automatisch schakelt:
  - Vóór 18:00 → toont vandaag
  - Na 18:00 → toont morgen
  
  💡 **Tip:** Gebruik `rooster_vandaag` + `rooster_morgen` voor beide, of alleen `rooster_meta` voor automatisch schakelen.

#### 🎓 Overige widgets
- `stats` — Statistieken overzicht
- `volgende_les` — Eerstvolgende les
- `cijfers` — Recente cijfers
- `opdrachten` — Huiswerk en opdrachten
- `absenties` — Afwezigheid
- `wijzigingen` — Roosterwijzigingen
- `aanmeldingen` — Aanmeldingen
- `activiteiten` — Schoolactiviteiten

### ⚙️ Geavanceerde configuratie

#### Kolom-indeling: Zelf kiezen welke widgets in welke kolom

Met de `widget_columns` optie kun je **precies bepalen** welke widgets in welke kolom verschijnen. Dit geeft je volledige controle over de layout!

**Voorbeeld: 2 kolommen**
```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
widget_columns:
  column1:
    - rooster_meta
    - volgende_les
    - stats
  column2:
    - cijfers
    - opdrachten
    - wijzigingen
```

**Voorbeeld: 3 kolommen met specifieke indeling**
```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
widget_columns:
  column1:
    - rooster_vandaag
    - volgende_les
  column2:
    - rooster_morgen
    - cijfers
  column3:
    - opdrachten
    - wijzigingen
    - absenties
```

**Voorbeeld: 1 kolom (alles onder elkaar)**
```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
widget_columns:
  column1:
    - stats
    - rooster_meta
    - cijfers
    - opdrachten
    - wijzigingen
```

💡 **Tips voor kolom-indeling:**
- Gebruik zoveel kolommen als je wilt (`column1`, `column2`, `column3`, etc.)
- Widgets worden in de volgorde getoond die je opgeeft
- Op mobiel worden kolommen automatisch onder elkaar geplaatst
- Op tablets (< 1200px) worden kolommen in 2 kolommen getoond
- Vergeet niet elke widget naam exact te schrijven (zie lijst hierboven)

#### Automatische grid layout (standaard gedrag)

Als je **geen** `widget_columns` opgeeft, gebruikt de card automatisch een grid layout met knoppen om te wisselen:

```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
layout: grid-auto
show_widgets:
  - stats
  - volgende_les
  - rooster_meta
  - rooster_vandaag
  - rooster_morgen
  - cijfers
  - opdrachten
  - wijzigingen
```

### ⚠️ Belangrijke opmerkingen

- De kaart vereist de **[Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration)**
- De `entity` moet een Magister sensor zijn met attributen zoals `afspraken`, `cijfers`, `opdrachten`, etc.
- Als je geen Magister integration hebt, zie `examples/sensors_example.yaml` voor een test template

## 🎨 Theming & Styling

De card respecteert automatisch je Home Assistant thema. Je kunt het uiterlijk aanpassen met CSS-variabelen:

### Ondersteunde CSS-variabelen

```css
--card-background-color
--ha-card-border-radius
--ha-card-box-shadow
--primary-text-color
--secondary-text-color
--primary-color
--accent-color
--secondary-background-color
--primary-background-color
--divider-color
--error-color
--warning-color
--success-color
```

### Custom styling met card-mod

Voorbeeld om de card aan te passen met [card-mod](https://github.com/thomasloven/lovelace-card-mod):

```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
card_mod:
  style: |
    ha-card {
      --ha-card-border-radius: 15px;
      --primary-color: #1976D2;
    }
```

## ❓ Veelvoorkomende problemen

### De kaart toont "School data laden..."

**Oplossing:**
1. Controleer of de `entity` bestaat in **Developer Tools → States**
2. Controleer of de entity attributen bevat (klik op de entity om deze te bekijken)
3. Zorg dat je de [Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration) hebt geïnstalleerd

### De kaart wordt niet gevonden na installatie

**Oplossing:**
1. Controleer of de resource is toegevoegd in **Instellingen → Dashboards → Resources**
2. **Hard refresh** de browser: druk **CTRL + F5** (Windows) of **CMD + SHIFT + R** (Mac)
3. Herstart Home Assistant
4. Controleer de browser console op fouten (F12)

### Wijzigingen worden niet getoond

**Oplossing:**
- De sensor moet een `wijzigingen` attribuut bevatten
- Controleer de sensor data in **Developer Tools → States**
- Maak eventueel een template sensor met de juiste attributen

### Foutmelding: "Custom element doesn't exist"

**Oplossing:**
1. Zorg dat de resource URL correct is
2. Type moet `module` zijn (niet `js`)
3. Clear browser cache en herstart Home Assistant

## 🛠️ Ontwikkeling

De component is gebouwd met [Lit](https://lit.dev/) als ES-module. 

### Lokaal ontwikkelen

1. Clone de repository
2. Bewerk `magister-school-card.js`
3. Kopieer naar je Home Assistant `www` folder
4. Voeg als lokale resource toe:

   ```yaml
   url: /local/magister-school-card/magister-school-card.js
   type: module
   ```

5. Hard refresh browser (CTRL + F5) na elke wijziging

### Custom element registratie

Het element is geregistreerd als `custom:magister-school-card`

### Testing zonder Magister integration

Gebruik `examples/sensors_example.yaml` om een mock sensor te maken voor lokaal testen.

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
