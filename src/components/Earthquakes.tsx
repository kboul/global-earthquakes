import React, { useState, useEffect } from 'react';
import L, { LatLng, Layer } from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import { IFeature } from '../models/IFEature';
import { getEarthquakes } from '../services/getEarthquakes';
import { timeConverter } from '../utils/timeConverter';
import { geojsonMarkerOptions } from '../utils/geojsonMarkerOptions';

export interface EarthquakesProps {
    leaflet: {
        map: any;
    };
}

const Earthquakes: React.SFC<EarthquakesProps> = ({ leaflet }) => {
    const [earthquakes, setEarthquakes]: any = useState([]);
    console.log(earthquakes);

    const onEachFeature = (feature: IFeature, layer: Layer) => {
        let popupContent = `
            <h3>${feature.properties.title}</h3>
            <b>Place</b>: ${feature.properties.place} <br>
            <b>Time (GMC+3)</b>: ${timeConverter(
                feature.properties.time,
                3
            )} <br>
            <b>Lat</b>: ${feature.geometry.coordinates[1]}
            <b>Lon</b>: ${feature.geometry.coordinates[0]} <br>
            <b>Depth</b>: ${feature.geometry.coordinates[2]} km <br>
            <b>Magnitude</b>: ${feature.properties.mag} Richter <br>
            <b>Details</b>: <a href=${
                feature.properties.url
            }>click here to see more details</a>
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
