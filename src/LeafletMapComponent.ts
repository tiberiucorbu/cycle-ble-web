import {Map, map, tileLayer} from "leaflet";
import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
// @ts-ignore
import style from './leaflet-map.css';

@customElement('tcb-leaflet-map')
export class LeafletMapComponent extends LitElement {
    private map: Map | undefined = undefined;

    static styles = css`
        ${style}
    `;

    render() {
        return html`
            <div id="map"></div>
        `;
    }

    firstUpdated() {
        const mapElement = this.shadowRoot?.getElementById('map');
        if (mapElement) {
            this.map = map(mapElement).setView([51.505, -0.09], 13);
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
        }
    }

    setView(lat: number, lon: number) {
        this.map?.setView([lat, lon], 13);
    }
}

window.customElements.define('tcb-leaflet-map', LeafletMapComponent);


