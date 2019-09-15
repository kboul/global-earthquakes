import React, { useState, useEffect } from 'react';
import { withLeaflet } from 'react-leaflet';
import L, { CircleMarker, LatLng } from 'leaflet';
import { getEarthquakes } from '../services/getEarthquakes';
import { IFeature } from '../models/IFEature';
import { geojsonMarkerOptions } from '../utils/geojsonMarkerOptions';

export interface EarthquakesProps {
    leaflet: {
        map: any;
    };
}

const Earthquakes: React.SFC<EarthquakesProps> = ({ leaflet }) => {
    const [earthquakes, setEarthquakes]: any = useState([]);
    console.log(earthquakes);

    const onEachFeature = (feature: IFeature, layer: CircleMarker) => {
        let popupContent = `
            <h3>${feature.properties.title}</h3>
            <b>Place</b>: ${feature.properties.place} <br>
            <b>Magnitude</b>: ${feature.properties.mag} Richter<br>
            <b>Details</b>: <a href=${feature.properties.url}>click here to find more details</a>
        `;

        if (feature.properties) layer.bindPopup(popupContent);
    };

    L.geoJSON(earthquakes.features, {
        onEachFeature,
        pointToLayer: function(feature: IFeature, latlng: LatLng) {
            const magnitude = feature.properties.mag;
            return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
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
