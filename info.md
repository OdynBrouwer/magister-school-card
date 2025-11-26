## Magister School Card

Een responsive Lovelace custom card voor de [Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration).

### ⚠️ Belangrijk voor bestaande gebruikers (v1.0.4+)

**Als je upgrade van een oudere versie:**

De repository structuur is vereenvoudigd. Na het updaten via HACS:
1. **Herstart Home Assistant**
2. **Hard refresh** je browser: `CTRL + F5` (Windows) of `CMD + SHIFT + R` (Mac)
3. Als de card niet laadt, controleer de resource in **Instellingen → Dashboards → Resources**
4. De URL zou moeten zijn: `/hacsfiles/magister-school-card/magister-school-card.js`

### 🆕 Nieuw in v1.0.4

- **`rooster_morgen`** - Toon rooster van morgen
- **`rooster_meta`** - Slimme widget (vandaag voor 18:00, daarna morgen)
- Vereenvoudigde repository structuur
- Bug fixes voor unavailable entities

### Installatie

Na installatie via HACS:

1. Herstart Home Assistant
2. Voeg handmatig de resource toe als deze niet automatisch verschijnt:
   - Ga naar **Instellingen → Dashboards → Resources**
   - Voeg toe: `/hacsfiles/magister-school-card/magister-school-card.js`
   - Type: **JavaScript module**
3. Voeg de card toe aan je dashboard

### Gebruik

```yaml
type: custom:magister-school-card
entity: sensor.magister_voornaam_achternaam
layout: grid-3
show_widgets:
  - rooster_meta
  - wijzigingen
  - cijfers
  - opdrachten
```

Zie de [README](https://github.com/OdynBrouwer/magister-school-card/blob/main/README.md) voor meer informatie.
