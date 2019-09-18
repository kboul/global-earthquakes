import { timeConverter } from '../utils/timeConverter';
import { IFeature } from '../models/IFEature';
import { Layer } from 'leaflet';

export const onEachFeature = (feature: IFeature, layer: Layer) => {
    const {
        properties: { title, place, time, mag, url },
        geometry: { coordinates }
    } = feature;

    let popupContent = `
        <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
        <b>Place</b>: ${place} <br>
        <b>Time (GMC+3)</b>: ${timeConverter(time, 3)} <br>
        <b>Lat</b>: ${coordinates[1]}
        <b>Lon</b>: ${coordinates[0]} <br>
        <b>Depth</b>: ${coordinates[2]} km <br>
        <b>Magnitude</b>: ${mag} Richter <br>
        <b>Details</b>: <a href=${url}>click here to see more details</a>
    `;

    layer.bindPopup(popupContent);
};
