# Magister School Card

![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2023.8+-blue?logo=home-assistant)
![License](https://img.shields.io/github/license/OdynBrouwer/magister-school-card)

Een mooie en responsive Lovelace-card voor de **[Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration)**. Toon rooster, cijfers, huiswerk, wijzigingen en meer in één overzichtelijke kaart.

![Voorbeeld](https://github.com/OdynBrouwer/magister-school-card/raw/main/screenshot.png) *(optioneel: voeg screenshot toe)*

## 📦 Installatie via HACS (aanbevolen)

<<<<<<< HEAD
1. Open Home Assistant en ga naar **HACS → Frontend → ⋯ (Custom repositories)**
2. Voeg het repository toe met:
   - **URL**: `https://github.com/OdynBrouwer/magister-school-card`
   - **Categorie**: `Dashboard`
3. Klik op de repo en na open druk op "download"
4. Herstart Home Assistant of "CTRL + F5"
5. Voeg de card toe aan je dashboard (voorbeeld hieronder)
=======
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
>>>>>>> eca3dbd (Verbeter README met duidelijkere HACS installatie instructies en betere documentatie structuur)

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

```yaml
type: custom:magister-school-card
<<<<<<< HEAD
entity: sensor.magister_voornaam_achternaam  # of de sensor die jouw magister-integration aanmaakt
layout: grid-3 # opties: grid-1, grid-2, grid-3, grid-auto
=======
entity: sensor.magister_voornaam_achternaam  # Vervang met jouw Magister sensor
layout: grid-3
>>>>>>> eca3dbd (Verbeter README met duidelijkere HACS installatie instructies en betere documentatie structuur)
show_widgets:
  - rooster_vandaag
  - wijzigingen
  - volgende_les
  - cijfers
  - opdrachten
```

### Configuratie opties

| Optie | Type | Beschrijving | Standaard |
|-------|------|--------------|-----------|
| `entity` | string | **Vereist**. De Magister sensor entity (bijv. `sensor.magister_voornaam_achternaam`) | - |
| `layout` | string | Grid layout: `grid-1`, `grid-2`, `grid-3`, `grid-auto` | `grid-3` |
| `show_widgets` | lijst | Welke widgets tonen (zie beschikbare widgets hieronder) | alle widgets |

### 📋 Beschikbare widgets

- `stats` — Statistieken overzicht
- `volgende_les` — Eerstvolgende les
- `rooster_vandaag` — Rooster van vandaag
- `cijfers` — Recente cijfers
- `opdrachten` — Huiswerk en opdrachten
- `absenties` — Afwezigheid
- `wijzigingen` — Roosterwijzigingen
- `aanmeldingen` — Aanmeldingen
- `activiteiten` — Schoolactiviteiten

### ⚙️ Geavanceerde configuratie

```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
layout: grid-auto
show_widgets:
  - stats
  - volgende_les
  - rooster_vandaag
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
2. Bewerk `dist/magister-school-card.js`
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

## 🐛 Support & Bugs

Hulp nodig of een bug gevonden? Open een [issue](https://github.com/OdynBrouwer/magister-school-card/issues) met:

- ✅ Je **Home Assistant versie**
- ✅ De gebruikte **entity** naam
- ✅ **Screenshot** van het probleem
- ✅ **Browser console errors** (F12 → Console tab)
- ✅ Korte beschrijving van wat er mis gaat

## 🤝 Bijdragen

Bijdragen zijn van harte welkom! 

### Hoe bij te dragen?

1. **Fork** dit repository
2. Maak een **feature branch** (`git checkout -b feature/mijn-verbetering`)
3. **Commit** je wijzigingen (`git commit -m 'Voeg feature toe'`)
4. **Push** naar de branch (`git push origin feature/mijn-verbetering`)
5. Open een **Pull Request**

### Richtlijnen

- Kleine, gerichte wijzigingen gaan sneller door
- Voor grote features: open eerst een issue om te overleggen
- Test je wijzigingen lokaal in Home Assistant
- Volg de bestaande code stijl

Lees `CONTRIBUTING.md` voor meer details.

## 📄 Licentie

Dit project valt onder de voorwaarden van de licentie zoals beschreven in `LICENSE`.

## 📚 Voorbeeld sensordata

In de map `examples/` vind je `sensors_example.yaml` — een mock template die toont welke attributen de kaart verwacht. 

Gebruik dit voor:
- **Lokaal testen** zonder volledige Magister integration
- **Ontwikkeling** van nieuwe features
- **Debugging** van data structuur problemen

---

**Gemaakt met ❤️ voor de Nederlandse Home Assistant community**