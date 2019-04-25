import {OutputElementFunctions} from "./OutputElementFunctions";

interface CscComponentMeasurement {
    revolutions: number;
    lastTime: number;
}

export interface CscMeasurement {
    flags: {
        wheelRevolutionsPresent: boolean;
        crankRevolutionsPresent: boolean;
    }
    wheel?: CscComponentMeasurement;
    crank?: CscComponentMeasurement;
    time?: number;
}

interface CscData {
    speed: number;
    totalDistance: number;
    distance: number;
    cadence: number;
}

export class CscBleComponent extends HTMLElement {
    private snapshotResult: CscMeasurement = {
        flags: {wheelRevolutionsPresent: false, crankRevolutionsPresent: false}, wheel: {
            lastTime: -1,
            revolutions: -1

        },
        crank: {
            lastTime: -1,
            revolutions: -1

        }
    };
    protected speedOutput: OutputElementFunctions | null = null;
    private status: HTMLElement | null = null;
    private cadenceOutput: OutputElementFunctions | null = null;
    private distanceOutput: OutputElementFunctions | null = null;

    public connectedCallback() {
        const shadowRoot = this.attachShadow({mode: "open"});

        self.addEventListener('click', async () => {
            try {
                await this.connect();
            } catch (e) {
                this.updateStatus('an error ocurrend: ' + e.message);
                console.error(e);
            }
        });
        shadowRoot.innerHTML = `
        <style>
            :host {
                font-family: 'Inconsolata', monospace;
                
            }
            .main-value {
                font-size: 4rem;
            }
            
            .value {
                font-size : 2rem;
            }
            
        </style>
        <div>
               <h2>Speed</h2>
               <tcb-output class="main-value" id="speed" value="0"></tcb-output> <span>Km/H</span>
               <h2>Cadence</h2>
               <tcb-output class="value" id="cadence" value="0"></tcb-output> <span>RPM</span>
               <h2>Distance</h2>
               <tcb-output class="value" id="distance" value="0"></tcb-output> <span>Km</span>
               <div id="status" value="0"></div>
              
         </div>`;
        this.speedOutput = shadowRoot.getElementById('speed') as OutputElementFunctions;
        this.cadenceOutput = shadowRoot.getElementById('cadence') as OutputElementFunctions;
        this.distanceOutput = shadowRoot.getElementById('distance') as OutputElementFunctions;
        this.status = shadowRoot.getElementById('status') as HTMLElement;
    }

    private async connect() {
        const device = await this.queryCscDevice();
        if (device) {
            this.updateStatus('got device');
            if (device.gatt) {
                const server = await device.gatt.connect();
                this.updateStatus('connected device');
                const service = await server.getPrimaryService('cycling_speed_and_cadence');
                this.updateStatus('found cycling_speed_and_cadence service');
                const characteristic = await service.getCharacteristic('csc_measurement');
                const services = await server.getPrimaryServices();
                console.log(services);

                await new Promise((res) => {
                    setTimeout(res, 300);
                });
                await characteristic.startNotifications();
                this.updateStatus('subscribing to csc mesurement');
                characteristic.addEventListener('characteristicvaluechanged', (e: Event) => {
                    this.updateStatusFromEvent('csc_measurement', e);
                    this.updateFromCscMeasurementEvent(e);
                    this.updateStatus('got csc_measurement ' + e.timeStamp);

                });
            }
        }
    }

    private async queryCscDevice(): Promise<BluetoothDevice> {
        return await navigator.bluetooth.requestDevice({filters: [{services: ['cycling_speed_and_cadence']}]});
    }

    private updateFromCscMeasurementEvent(e: Event) {
        // console.log(e);
        // @ts-ignore
        const value = e.target.value as DataView;
        console.log(value.buffer);

        const res = this.extractValues(value);
        res.time = e.timeStamp;
        if (res.flags.wheelRevolutionsPresent && res.wheel && this.snapshotResult.wheel) {
            this.onWheelMeasurementReceived(res.wheel, this.snapshotResult.wheel);
        }
        if (res.flags.crankRevolutionsPresent && res.crank && this.snapshotResult.crank) {

        }
        Object.assign(this.snapshotResult, res);

    }

    private extractValues(value: DataView): CscMeasurement {
        const flags = value.getUint8(0);
        let valueOffset = 1;
        const wheelRevolutionsPresent = (flags & 0x01) > 0x00;
        const crankRevolutionsPresent = (flags & 0x02) > 0x00;
        const res: CscMeasurement = {flags: {wheelRevolutionsPresent, crankRevolutionsPresent}};
        if (wheelRevolutionsPresent) {
            const revolutions = value.getUint32(valueOffset, true);
            valueOffset = valueOffset + 4;
            const lastTime = value.getUint16(valueOffset, true);
            valueOffset = valueOffset + 2;
            res.wheel = {revolutions, lastTime};
        }
        if (crankRevolutionsPresent) {
            const revolutions = value.getUint16(valueOffset, true);
            valueOffset = valueOffset + 2;
            const lastTime = value.getUint16(valueOffset, true);
            res.crank = {revolutions, lastTime};
        }
        console.log(res);
        return res;
    }

    public onWheelMeasurementReceived(currentMeasurement: CscComponentMeasurement, previousMeasurement: CscComponentMeasurement): void {
        if (previousMeasurement.revolutions === currentMeasurement.revolutions) {
            this.notifyBreak();
            // this.updateSpeed(0);
            // this.updateCadence(0);
            return;
        }

        if (previousMeasurement.revolutions >= 0) {
            const circumference = 2.340;

            let timeDifference; //= eventTimeDelta / 1000;
            const counterRolledOver = currentMeasurement.lastTime < previousMeasurement.lastTime;
            if (counterRolledOver)
                timeDifference = (65535 + currentMeasurement.lastTime - previousMeasurement.lastTime) / 1024.0; // [s]
            else
                timeDifference = (currentMeasurement.lastTime - previousMeasurement.lastTime) / 1024.0; // [s]
            console.log('time difference '+ timeDifference);
            let distanceDifference = (currentMeasurement.revolutions - previousMeasurement.revolutions) * circumference; // [m]

            let totalDistance = currentMeasurement.revolutions * circumference; // [m]
            let distance = (currentMeasurement.revolutions ) * circumference; // [m]
            let speed = distanceDifference / timeDifference; // [m/s]
            let cadence = (currentMeasurement.revolutions - previousMeasurement.revolutions) * 60.0 / timeDifference; // [revolutions/minute]

            // Notify listener about the new measurement
            this.updateWheelData({totalDistance, distance, speed, cadence});
        }
    }

    private updateWheelData(data: CscData): void {
        this.updateSpeed(data.speed);
        this.updateCadence(data.cadence);
        if (this.distanceOutput) {
            this.distanceOutput.value = data.distance/1000;
        }
        console.log(data);
    }

    private updateCadence(cadence: number) {
        if (this.cadenceOutput) {
            this.cadenceOutput.value = cadence;
        }
    }

    private updateSpeed(speed: number) {
        if (this.speedOutput) {
            this.speedOutput.value = speed * 3.6;
        }
    }

    private notifyBreak() {
        if (this.status) {
            this.status.innerText = 'Break';
        }
    }

    private updateStatusFromEvent(cscMeasurement: string, e: Event) {
        console.log(cscMeasurement, e);
    }

    private updateStatus(message: string) {
        if (this.status) {
            this.status.innerText = message;
        }
    }
}

window.customElements.define('tcb-csc-gauges', CscBleComponent);