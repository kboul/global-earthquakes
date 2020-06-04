import { FC } from 'react';
import L from 'leaflet';
import { useLeaflet } from 'react-leaflet';
import { circleMarkerColor } from '../utils';
import './index.sass';

const Legend: FC = () => {
    const { map } = useLeaflet();
    const legend = new L.Control({ position: 'bottomright' });

    legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [0, 1, 2, 3, 5, 7];
        const labels = [];

        labels.push('<h4>Magnitude</h4>');

        grades.forEach((from, index) => {
            const to = grades[index + 1];
            labels.push(
                `<i style="background:${circleMarkerColor(
                    from + 1
                )}"></i>${from}${to ? `&ndash;${to}` : '+'}`
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    if (map) legend.addTo(map);

    return null;
};

export default Legend;
