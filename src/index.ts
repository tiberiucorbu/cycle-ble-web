import "./LeafletMapComponent"
import "./CscBleComponent"
import "./OutputElement"
import {LeafletMapComponent} from "./LeafletMapComponent";

export function getPosition(): Promise<Position> {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej, {enableHighAccuracy: false});
    });
}

const map = document.getElementById('map') as LeafletMapComponent;
async function update(){
    const  position = await getPosition();

    map.setView(position.coords.latitude, position.coords.longitude);
    requestAnimationFrame(()=>{
        return update();
    })
}

(async ()=>{
    await update();
})();