import { OutputElementFunctions } from "./OutputElementFunctions";
interface CscComponentMeasurement {
    revolutions: number;
    lastTime: number;
}
export interface CscMeasurement {
    flags: {
        wheelRevolutionsPresent: boolean;
        crankRevolutionsPresent: boolean;
    };
    wheel?: CscComponentMeasurement;
    crank?: CscComponentMeasurement;
    time?: number;
}
export declare class CscBleComponent extends HTMLElement {
    private snapshotResult;
    protected speedOutput: OutputElementFunctions | null;
    private status;
    private cadenceOutput;
    private distanceOutput;
    connectedCallback(): void;
    private connect;
    private queryCscDevice;
    private updateFromCscMeasurementEvent;
    private extractValues;
    onWheelMeasurementReceived(currentMeasurement: CscComponentMeasurement, previousMeasurement: CscComponentMeasurement): void;
    private updateWheelData;
    private updateCadence;
    private updateSpeed;
    private notifyBreak;
    private updateStatusFromEvent;
    private updateStatus;
}
export {};
