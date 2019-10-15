export declare class LeafletMapComponent extends HTMLElement {
    private mapDivElement;
    private htmlDivElement;
    private styleElement;
    private static readonly style;
    private map;
    connectedCallback(): void;
    setView(lat: number, lon: number): void;
}
