import {OutputElementFunctions} from "./OutputElementFunctions";


export class OutputElement extends HTMLElement implements OutputElementFunctions{

    private _value: number = 0;
    private output: HTMLOutputElement | null = null;

    public get value() {
        return this._value;
    }

    public set value(value: number) {
        // this._computedValue = this._display_value;
        if (this.output) {
            this.output.innerHTML = value.toFixed(1) + '';
        }
    }

    public connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        this.output = document.createElement('output');
        this.output.innerHTML = (0.001).toFixed(0);
        shadow.appendChild(this.output);
    }

}

window.customElements.define('tcb-output', OutputElement);