import React, { FC, useEffect } from 'react';
import L, { LatLng, GeoJSON } from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import { connect } from 'react-redux';
import Spinner from '../../Spinner';
import useEarthquakesFetcher from './hooks';
import { IFeature } from './models';
import { ILeaflet } from '../models';
import { onEachFeature } from './utils';
import { geojsonMarkerOptions } from '../utils';
import { AppState } from '../../store';

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

const mapStateToProps = ({ state }: AppState) => ({
    starttime: state.starttime,
    endtime: state.endtime
});

export default withLeaflet(connect(mapStateToProps)(Earthquakes));
