import React, { FC, useEffect } from 'react';
import L, { LatLng, GeoJSON } from 'leaflet';
import { useLeaflet } from 'react-leaflet';
import { connect } from 'react-redux';
import Spinner from '../../Spinner';
import useEarthquakesFetcher from './hooks';
import { IFeature, IEarthquakes } from './models';
import { onEachFeature } from './utils';
import { geojsonMarkerOptions } from '../utils';
import { IState } from '../../store';

let geojson: GeoJSON;

const Earthquakes: FC<IEarthquakes> = ({
    starttime,
    endtime
}: IEarthquakes) => {
    const [earthquakes, loading] = useEarthquakesFetcher(starttime, endtime);
    console.log(earthquakes);
    const { map } = useLeaflet();

    useEffect(() => {
        if (map && map.hasLayer(geojson)) map.removeLayer(geojson);

        geojson = L.geoJSON(earthquakes.features, {
            onEachFeature,
            pointToLayer: (feature: IFeature, latlng: LatLng) => {
                const magnitude = feature.properties.mag;
                return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
            }
        });

        if (map) geojson.addTo(map);
        // eslint-disable-next-line
    }, [earthquakes]);

    if (loading) return <Spinner />;

    return null;
};

const mapStateToProps = ({ state }: IState) => ({
    starttime: state.starttime,
    endtime: state.endtime
});

export default connect(mapStateToProps)(Earthquakes);
