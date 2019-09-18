import React from 'react';
import L, { LatLng, Layer } from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import { IFeature } from '../models/IFEature';
import { timeConverter } from '../utils/timeConverter';
import { geojsonMarkerOptions } from '../utils/geojsonMarkerOptions';
import useEarthquakes from '../hooks/useEarthquakes';

export interface EarthquakesProps {
    leaflet: {
        map: any;
    };
    starttime: string;
    endtime: string;
}

let geojson: any;

const Earthquakes: React.SFC<EarthquakesProps> = ({
    leaflet,
    starttime,
    endtime
}) => {
    const [earthquakes, loading] = useEarthquakes(starttime, endtime);

    const onEachFeature = (feature: IFeature, layer: Layer) => {
        let popupContent = `
            <h3 style="font-size: 1.17em; font-weight: bold">${
                feature.properties.title
            }</h3>
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

    if (leaflet.map.hasLayer(geojson)) leaflet.map.removeLayer(geojson);

    geojson = L.geoJSON(earthquakes.features, {
        onEachFeature,
        pointToLayer: (feature: IFeature, latlng: LatLng) => {
            const magnitude = feature.properties.mag;
            return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
        }
    }).addTo(leaflet.map);

    if (loading) return <Spinner />;

    return null;
};

const mapStateToProps = (state: any) => ({
    starttime: state.earthquakes.starttime,
    endtime: state.earthquakes.endtime
});

export default withLeaflet(connect(mapStateToProps)(Earthquakes));
