import { LitElement, html, css } from 'https://unpkg.com/lit@2.6.1/index.js?module';

class MagisterSchoolCard extends LitElement {
  static properties = {
    hass: {},
    config: {},
    _data: { state: true },
    _kindNaam: { state: true }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    
    .card {
      padding: 20px;
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, 0px 2px 4px rgba(0,0,0,0.1));
      width: 100%;
      box-sizing: border-box;
    }
    
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .header h1 {
      margin: 0;
      font-size: 1.8em;
      color: var(--primary-text-color);
      flex-grow: 1;
    }
    
    .kind-info {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      color: white;
      padding: 12px 20px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    
    .kind-info h2 {
      margin: 0;
      font-size: 1.4em;
    }
    
    .kind-meta {
      display: flex;
      gap: 16px;
      margin-top: 8px;
      font-size: 0.9em;
      opacity: 0.9;
    }
    
    .layout-selector {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    .layout-btn {
      padding: 10px 16px;
      border: 1px solid var(--primary-color);
      background: transparent;
      color: var(--primary-color);
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9em;
      transition: all 0.3s ease;
    }
    
    .layout-btn:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }
    
    .layout-btn.active {
      background: var(--primary-color);
      color: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    
    /* Responsive Grid Layouts */
    .grid-1 { 
      display: grid; 
      grid-template-columns: 1fr; 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-2 { 
      display: grid; 
      grid-template-columns: repeat(2, 1fr); 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-3 { 
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-auto { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
      gap: 20px; 
      width: 100%;
    }
    
    /* Responsive breakpoints */
    @media (max-width: 1200px) {
      .grid-3 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .card {
        padding: 16px;
      }
      
      .header {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .header h1 {
        font-size: 1.5em;
      }
      
      .layout-selector {
        width: 100%;
        justify-content: center;
      }
      
      .grid-2,
      .grid-3 {
        grid-template-columns: 1fr;
      }
      
      .grid-auto {
        grid-template-columns: 1fr;
      }
      
      .kind-meta {
        flex-direction: column;
        gap: 4px;
      }
    }
    
    @media (max-width: 480px) {
      .card {
        padding: 12px;
      }
      
      .layout-btn {
        padding: 8px 12px;
        font-size: 0.8em;
      }
    }
    
    /* Widget Styling */
    .widget {
      background: var(--secondary-background-color);
      border-radius: 12px;
      padding: 20px;
      border-left: 6px solid var(--primary-color);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      height: fit-content;
      min-height: 200px;
      display: flex;
      flex-direction: column;
    }
    
    .widget:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }
    
    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--divider-color);
    }
    
    .widget-title {
      font-size: 1.3em;
      font-weight: bold;
      color: var(--primary-text-color);
      margin: 0;
    }
    
    .widget-icon {
      font-size: 1.4em;
      background: var(--primary-color);
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    .widget-content {
      flex-grow: 1;
      overflow-y: auto;
      max-height: 400px;
    }
    
    /* Specifieke Widget Styles */
    .cijfer-item, .afspraak-item, .opdracht-item, .mededeling-item {
      padding: 12px;
      border-left: 4px solid var(--accent-color);
      margin-bottom: 12px;
      background: var(--primary-background-color);
      border-radius: 8px;
      transition: background-color 0.2s ease;
    }
    
    .cijfer-item:hover, .afspraak-item:hover, .opdracht-item:hover {
      background: var(--secondary-background-color);
    }
    
    .vak { 
      font-weight: bold; 
      font-size: 1.1em;
    }
    
    .waarde { 
      font-size: 1.3em; 
      color: var(--accent-color);
      font-weight: bold;
    }
    
    .tijd { 
      font-size: 0.9em; 
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
    
    .empty-state {
      text-align: center;
      color: var(--secondary-text-color);
      font-style: italic;
      padding: 40px 20px;
      font-size: 1.1em;
    }
    
    /* Scrollbar styling */
    .widget-content::-webkit-scrollbar {
      width: 6px;
    }
    
    .widget-content::-webkit-scrollbar-track {
      background: var(--secondary-background-color);
      border-radius: 3px;
    }
    
    .widget-content::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 3px;
    }
    
    .widget-content::-webkit-scrollbar-thumb:hover {
      background: var(--accent-color);
    }
    
    /* Badge voor belangrijke items */
    .badge {
      background: var(--error-color);
      color: white;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.8em;
      margin-left: 8px;
    }
    
    .badge-warning {
      background: var(--warning-color);
    }
    
    .badge-success {
      background: var(--success-color);
    }
  `;

  constructor() {
    super();
    this._data = null;
    this._kindNaam = '';
    this._layout = 'grid-auto';
  }

  setConfig(config) {
    this.config = {
      layout: 'auto',
      show_widgets: ['stats', 'volgende_les', 'rooster_vandaag', 'cijfers', 'opdrachten', 'absenties', 'wijzigingen'],
      ...config
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetchData();
  }

  _fetchData() {
    if (!this.hass) return;
    
    const entity = this.hass.states[this.config.entity];
    if (entity) {
      this._data = entity.attributes;
      this._extractKindInfo();
    }
  }

  _extractKindInfo() {
    if (!this._data) return;
    
    // Bepaal kindnaam op basis van entity naam
    const entityId = this.config.entity;
    if (entityId.includes('tyas')) {
      this._kindNaam = 'Tyas Brouwer';
    } else if (entityId.includes('overview')) {
      this._kindNaam = this._data.naam || 'Onbekend';
    } else {
      // Fallback: gebruik entity naam
      this._kindNaam = entityId.replace('sensor.magister_', '').replace(/_/g, ' ');
    }
  }

  _setLayout(layout) {
    this._layout = layout;
  }

  render() {
    if (!this._data) {
      return html`
        <div class="card">
          <div class="empty-state">📚 School data laden...</div>
        </div>
      `;
    }

    return html`
      <div class="card">
        <div class="header">
          <h1>🏫 School Dashboard</h1>
          <div class="layout-selector">
            <button class="layout-btn ${this._layout === 'grid-1' ? 'active' : ''}" 
                    @click=${() => this._setLayout('grid-1')}>1 Kolom</button>
            <button class="layout-btn ${this._layout === 'grid-2' ? 'active' : ''}" 
                    @click=${() => this._setLayout('grid-2')}>2 Kolommen</button>
            <button class="layout-btn ${this._layout === 'grid-3' ? 'active' : ''}" 
                    @click=${() => this._setLayout('grid-3')}>3 Kolommen</button>
            <button class="layout-btn ${this._layout === 'grid-auto' ? 'active' : ''}" 
                    @click=${() => this._setLayout('grid-auto')}>Auto Fit</button>
          </div>
        </div>
        
        ${this._renderKindInfo()}
        
        <div class="${this._layout}">
          ${this._renderWidgets()}
        </div>
      </div>
    `;
  }

  _renderKindInfo() {
    if (!this._kindNaam) return html``;

    return html`
      <div class="kind-info">
        <h2>${this._kindNaam}</h2>
        <div class="kind-meta">
          ${this._data.stamnummer ? html`<span>🎫 Stamnummer: ${this._data.stamnummer}</span>` : ''}
          ${this._data.geboortedatum ? html`<span>🎂 Geboortedatum: ${this._data.geboortedatum}</span>` : ''}
          <span>🕒 Laatste update: ${this.hass.states[this.config.entity].state}</span>
        </div>
      </div>
    `;
  }

  _renderWidgets() {
    const showWidgets = this.config.show_widgets || ['stats', 'volgende_les', 'rooster_vandaag', 'cijfers', 'opdrachten'];
    const widgets = [];
    
    // Always show these core widgets first
    if (showWidgets.includes('stats')) {
      widgets.push(this._renderStatsWidget());
    }
    
    if (showWidgets.includes('volgende_les')) {
      widgets.push(this._renderVolgendeLesWidget());
    }
    
    if (showWidgets.includes('rooster_vandaag')) {
      widgets.push(this._renderRoosterWidget());
    }
    
    if (showWidgets.includes('cijfers')) {
      widgets.push(this._renderCijfersWidget());
    }
    
    if (showWidgets.includes('opdrachten')) {
      widgets.push(this._renderOpdrachtenWidget());
    }
    
    if (showWidgets.includes('absenties')) {
      widgets.push(this._renderAbsentiesWidget());
    }
    
    if (showWidgets.includes('wijzigingen')) {
      widgets.push(this._renderWijzigingenWidget());
    }

    if (showWidgets.includes('aanmeldingen')) {
      widgets.push(this._renderAanmeldingenWidget());
    }

    if (showWidgets.includes('activiteiten')) {
      widgets.push(this._renderActiviteitenWidget());
    }

    return widgets;
  }

  _renderRoosterWidget() {
    const afspraken = this._data.afspraken || [];
    const vandaag = new Date().toISOString().split('T')[0];
    const afsprakenVandaag = afspraken.filter(afspraak => 
      afspraak.start?.startsWith(vandaag)
    );

    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📅 Rooster Vandaag</h3>
          <span class="widget-icon">${afsprakenVandaag.length}</span>
        </div>
        <div class="widget-content">
          ${afsprakenVandaag.length > 0 ? 
            afsprakenVandaag.map(afspraak => html`
              <div class="afspraak-item">
                <div><strong>${afspraak.start?.substr(11, 5)}-${afspraak.einde?.substr(11, 5)}</strong></div>
                <div>${afspraak.omschrijving}</div>
                ${afspraak.lokaal ? html`<div class="tijd">📍 ${afspraak.lokaal}</div>` : ''}
                ${afspraak.is_huiswerk ? html`<span class="badge">HW</span>` : ''}
              </div>
            `) : 
            html`<div class="empty-state">Geen lessen vandaag 🎉</div>`
          }
        </div>
      </div>
    `;
  }

  _renderCijfersWidget() {
    const cijfers = this._data.cijfers || [];

    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🎓 Recente Cijfers</h3>
          <span class="widget-icon">${cijfers.length}</span>
        </div>
        <div class="widget-content">
          ${cijfers.length > 0 ? 
            cijfers.slice(-5).map(cijfer => html`
              <div class="cijfer-item">
                <div>
                  <span class="vak">${cijfer.vak?.toUpperCase()}</span>: 
                  <span class="waarde">${cijfer.waarde}</span>
                </div>
                <div class="tijd">${cijfer.omschrijving} - ${cijfer.ingevoerd_op?.substr(0, 10)}</div>
              </div>
            `) : 
            html`<div class="empty-state">Geen cijfers beschikbaar</div>`
          }
        </div>
      </div>
    `;
  }

  _renderOpdrachtenWidget() {
    const opdrachten = this._data.opdrachten || [];
    const openOpdrachten = opdrachten.filter(opdracht => !opdracht.ingeleverd_op);
    const bijnaTeLaat = openOpdrachten.filter(opdracht => {
      const inleverDatum = new Date(opdracht.inleveren_voor);
      const nu = new Date();
      const dagenOver = (inleverDatum - nu) / (1000 * 60 * 60 * 24);
      return dagenOver < 2;
    });

    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📝 Open Opdrachten</h3>
          <span class="widget-icon">${openOpdrachten.length}</span>
        </div>
        <div class="widget-content">
          ${openOpdrachten.length > 0 ? 
            openOpdrachten.slice(0, 5).map(opdracht => {
              const inleverDatum = new Date(opdracht.inleveren_voor);
              const nu = new Date();
              const dagenOver = (inleverDatum - nu) / (1000 * 60 * 60 * 24);
              const isSpoed = dagenOver < 1;
              const isWaarschuwing = dagenOver < 2;
              
              return html`
                <div class="opdracht-item" style="${isSpoed ? 'border-left-color: var(--error-color); background: rgba(244, 67, 54, 0.1);' : isWaarschuwing ? 'border-left-color: var(--warning-color); background: rgba(255, 152, 0, 0.1);' : ''}">
                  <div>
                    <strong>${opdracht.titel}</strong> 
                    ${isSpoed ? html`<span class="badge">SPOED!</span>` : isWaarschuwing ? html`<span class="badge badge-warning">BIJNA!</span>` : ''}
                  </div>
                  <div class="tijd">Vak: ${opdracht.vak?.toUpperCase()}</div>
                  <div class="tijd">📅 ${opdracht.inleveren_voor?.substr(0, 16)}</div>
                </div>
              `;
            }) : 
            html`<div class="empty-state">Geen open opdrachten ✅</div>`
          }
        </div>
      </div>
    `;
  }

  _renderAbsentiesWidget() {
    const absenties = this._data.absenties || [];

    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">⚠️ Recente Absenties</h3>
          <span class="widget-icon">${absenties.length}</span>
        </div>
        <div class="widget-content">
          ${absenties.length > 0 ? 
            absenties.slice(-3).map(absentie => html`
              <div class="afspraak-item">
                <div><strong>${absentie.start?.substr(0, 10)}</strong></div>
                <div>${absentie.omschrijving}</div>
                ${absentie.afspraak ? html`<div class="tijd">${absentie.afspraak}</div>` : ''}
              </div>
            `) : 
            html`<div class="empty-state">Geen recente absenties 👍</div>`
          }
        </div>
      </div>
    `;
  }

  _renderWijzigingenWidget() {
    const wijzigingen = this._data.wijzigingen || [];

    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🔄 Roosterwijzigingen</h3>
          <span class="widget-icon">${wijzigingen.length}</span>
        </div>
        <div class="widget-content">
          ${wijzigingen.length > 0 ? 
            wijzigingen.slice(-3).map(wijziging => html`
              <div class="afspraak-item">
                <div><strong>${wijziging.start?.substr(0, 16)}</strong></div>
                <div>${wijziging.omschrijving}</div>
                ${wijziging.lokaal ? html`<div class="tijd">📍 ${wijziging.lokaal}</div>` : ''}
              </div>
            `) : 
            html`<div class="empty-state">Geen wijzigingen</div>`
          }
        </div>
      </div>
    `;
  }

  _renderStatsWidget() {
    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📊 Overzicht</h3>
          <span class="widget-icon">📈</span>
        </div>
        <div class="widget-content">
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>📅 Lessen vandaag:</span>
              <strong style="color: var(--accent-color);">${this._data.aantal_afspraken_vandaag || 0}</strong>
            </div>
          </div>
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>📚 Huiswerk:</span>
              <strong style="color: var(--accent-color);">${this._data.aantal_huiswerk || 0}</strong>
            </div>
          </div>
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>🎓 Cijfers:</span>
              <strong style="color: var(--accent-color);">${this._data.cijfers?.length || 0}</strong>
            </div>
          </div>
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>📝 Opdrachten:</span>
              <strong style="color: var(--accent-color);">${this._data.opdrachten?.length || 0}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _renderVolgendeLesWidget() {
    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">⏰ Volgende Les</h3>
          <span class="widget-icon">🕒</span>
        </div>
        <div class="widget-content">
          ${this._data.volgende_afspraak && this._data.volgende_afspraak !== 'Geen' ? 
            html`
              <div style="text-align: center; padding: 20px;">
                <div style="font-size: 1.4em; font-weight: bold; color: var(--accent-color); margin-bottom: 8px;">
                  ${this._data.volgende_afspraak}
                </div>
                ${this._data.volgende_vak ? html`
                  <div style="font-size: 1.1em; color: var(--primary-text-color); margin-bottom: 16px;">
                    ${this._data.volgende_vak}
                  </div>
                ` : ''}
                <div style="background: var(--primary-color); color: white; padding: 8px 16px; border-radius: 20px; display: inline-block;">
                  🎯 Komende les
                </div>
              </div>
            ` : 
            html`<div class="empty-state">Geen komende lessen 🎉</div>`
          }
        </div>
      </div>
    `;
  }

  _renderAanmeldingenWidget() {
    const aanmeldingen = this._data.aanmeldingen || [];

    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🏫 Aanmeldingen</h3>
          <span class="widget-icon">${aanmeldingen.length}</span>
        </div>
        <div class="widget-content">
          ${aanmeldingen.length > 0 ? 
            aanmeldingen.slice(0, 3).map(aanmelding => html`
              <div class="afspraak-item">
                <div><strong>${aanmelding.start} - ${aanmelding.einde}</strong></div>
                <div>${aanmelding.studie || ''}</div>
                <div class="tijd">${aanmelding.lesperiode || ''}</div>
              </div>
            `) : 
            html`<div class="empty-state">Geen aanmeldingen</div>`
          }
        </div>
      </div>
    `;
  }

  _renderActiviteitenWidget() {
    const activiteiten = this._data.activiteiten || [];

    return html`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📢 Activiteiten</h3>
          <span class="widget-icon">${activiteiten.length}</span>
        </div>
        <div class="widget-content">
          ${activiteiten.length > 0 ? 
            activiteiten.slice(0, 3).map(activiteit => html`
              <div class="afspraak-item">
                <div><strong>${activiteit.titel}</strong></div>
                <div class="tijd">Zichtbaar: ${activiteit.zichtbaar_vanaf} t/m ${activiteit.zichtbaar_tot}</div>
              </div>
            `) : 
            html`<div class="empty-state">Geen activiteiten</div>`
          }
        </div>
      </div>
    `;
  }
}

customElements.define('magister-school-card', MagisterSchoolCard);
