import React, { useState, useEffect } from 'react';
import { withLeaflet } from 'react-leaflet';
import L, { CircleMarker, LatLng } from 'leaflet';
import { getEarthquakes } from '../services/getEarthquakes';
import { IFeature } from '../models/IFEature';

export interface EarthquakesProps {
    leaflet: {
        map: any;
    };
}

const Earthquakes: React.SFC<EarthquakesProps> = ({ leaflet }) => {
    const [earthquakes, setEarthquakes]: any = useState([]);
    console.log(earthquakes);

    const geojsonMarkerOptions = {
        radius: 8,
        fillColor: '#ff7800',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    const onEachFeature = (feature: IFeature, layer: CircleMarker) => {
        let popupContent = `
            <h3>${feature.properties.title}</h3>
            <b>Place</b>: ${feature.properties.place} <br>
            <b>Magnitude</b>: ${feature.properties.mag} Richter<br>
            <b>Details</b>: <a href=${feature.properties.url}>more details here</a>
        `;

        if (feature.properties) layer.bindPopup(popupContent);
    };

    L.geoJSON(earthquakes.features, {
        onEachFeature,
        pointToLayer: function(feature: IFeature, latlng: LatLng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(leaflet.map);

    useEffect(() => {
        (async () => {
            let earthquakes = await getEarthquakes();
            setEarthquakes(earthquakes);
        })();
    }, []);

    return null;
};

export default withLeaflet(Earthquakes);
