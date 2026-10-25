> ## ⚠️ This repository is deprecated
>
> As of **Magister School Integration v2.3.0** the card ships **inside the
> integration**. It is served from `/magister_school/magister-school-card.js`
> and registered as a dashboard resource automatically, so integration and card
> versions can never drift apart.
>
> **Existing HACS users:** remove this plugin
> (HACS → Frontend → Magister School Card → Remove), update the integration to
> v2.3.0 or newer, restart Home Assistant and do a hard refresh (Ctrl+F5).
> Your dashboards keep working — the card name `custom:magister-school-card`
> is unchanged.
>
> **New users:** install
> [Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration)
> only. Do not install this repository.
>
> This repository is archived and kept for history only. Issues and pull
> requests are closed; please report problems in the
> [integration issue tracker](https://github.com/OdynBrouwer/magister-school-integration/issues).

---

## Magister School Card

### v1.3.0

- Added the optional `week_schooltijden` widget.
- Shows the first start time and last end time for Monday through Friday.

### v1.3.2

- Restored the card to the repository root so updates do not change the HACS
  resource path.
- Fixes "Custom element doesn't exist" after updating from an older version.

### v1.3.1

- Added a reproducible npm/Rollup build for HACS distribution.
- HACS now installs the bundled file from `dist/magister-school-card.js`.

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
