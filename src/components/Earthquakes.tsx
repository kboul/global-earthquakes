import React, { FC, useEffect } from 'react';
import L, { LatLng, GeoJSON } from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import useEarthquakesFetcher from '../hooks/useEarthquakesFetcher';
import { IFeature } from '../models/IFeature';
import { ILeaflet } from '../models/ILeaflet';
import { AppState } from '../store';
import { geojsonMarkerOptions } from '../utils/geojsonMarkerOptions';
import { onEachFeature } from '../utils/onEachFeature';

export interface EarthquakesProps extends ILeaflet {
    starttime: string;
    endtime: string;
}

let geojson: GeoJSON;

const Earthquakes: FC<EarthquakesProps> = ({
    leaflet: { map },
    starttime,
    endtime
}) => {
    const [earthquakes, loading] = useEarthquakesFetcher(starttime, endtime);

    useEffect(() => {
        console.log(earthquakes);

        if (map.hasLayer(geojson)) map.removeLayer(geojson);

        geojson = L.geoJSON(earthquakes.features, {
            onEachFeature,
            pointToLayer: (feature: IFeature, latlng: LatLng) => {
                const magnitude = feature.properties.mag;
                return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
            }
        }).addTo(map);
    }, [earthquakes, map]);

    if (loading) return <Spinner />;

    return null;
};

const mapStateToProps = (state: AppState) => ({
    starttime: state.earthquakes.starttime,
    endtime: state.earthquakes.endtime
});

export default withLeaflet(connect(mapStateToProps)(Earthquakes));
