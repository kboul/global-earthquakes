import { circleMarkerColor } from './circleMarkerColor';

export const geojsonMarkerOptions = (magnitude: number): Object => {
    return {
        radius: 2.5 * magnitude,
        fillColor: circleMarkerColor(magnitude),
        color: 'grey',
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.8
    };
};
