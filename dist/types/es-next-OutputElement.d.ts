import { OutputElementFunctions } from "./OutputElementFunctions";
export declare class OutputElement extends HTMLElement implements OutputElementFunctions {
    private _value;
    private output;
    value: number;
    connectedCallback(): void;
}
