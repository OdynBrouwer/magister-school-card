## Magister School Card

Een responsive Lovelace custom card voor de [Magister School Integration](https://github.com/OdynBrouwer/magister-school-integration).

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
entity: sensor.magister_overview
layout: grid-3
show_widgets:
  - rooster_vandaag
  - cijfers
  - opdrachten
```

Zie de [README](https://github.com/OdynBrouwer/magister-school-card/blob/main/README.md) voor meer informatie.
