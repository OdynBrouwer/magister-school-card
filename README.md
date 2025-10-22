# Magister School Card

![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2023.8+-blue?logo=home-assistant)
![License](https://img.shields.io/github/license/OdynBrouwer/magister-school-card)

Een mooie en responsive Lovelace-card voor de **[Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration)**. Toon rooster, cijfers, huiswerk, wijzigingen en meer in één overzichtelijke kaart.

![Voorbeeld](https://github.com/OdynBrouwer/magister-school-card/raw/main/screenshot.png) *(optioneel: voeg screenshot toe)*

## 📦 Installatie via HACS

1. Ga naar **HACS** → **Frontend** → **⋯ (Custom repositories)**
2. Voeg toe:
   - **URL**: `https://github.com/OdynBrouwer/magister-school-card`
   - **Categorie**: `Lovelace`
3. Klik op **Install**
4. Herstart Home Assistant
5. Voeg de card toe aan je dashboard:

```yaml
type: custom:magister-school-card
entity: sensor.magister_jouw_kind
layout: grid-3
show_widgets:
  - rooster_vandaag
  - wijzigingen
  - volgende_les
  - cijfers
  - opdrachten
