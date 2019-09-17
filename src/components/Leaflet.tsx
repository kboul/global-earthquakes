import React from 'react';
import {
    Map,
    TileLayer,
    LayersControl,
    GeoJSON,
    ScaleControl
} from 'react-leaflet';
import Earthquakes from './Earthquakes';
import Legend from './Legend';
import tilelayers from '../constants/tilelayers';
import { ITilelayer } from '../models/ITilelayer';
import tectonicPlates from '../assets/PB2002_boundaries.json';
import { tectonicPlatesStyle } from '../constants/tectonicPlatesStyle';
import styles from '../styles/Leaflet.module.css';

const Leaflet: React.SFC = () => {
    return (
        <Map center={[0, 0]} zoom={3} className={styles.map}>
            <LayersControl position="topright">
                {tilelayers.map(
                    ({ name, attribution, url }: ITilelayer, id) => (
                        <LayersControl.BaseLayer
                            key={id}
                            name={name}
                            checked={
                                name === 'OpenStreetMap.Mapnik' ? true : false
                            }>
                            <TileLayer attribution={attribution} url={url} />
                        </LayersControl.BaseLayer>
                    )
                )}
                <LayersControl.Overlay name="Tectonic Plates">
                    <GeoJSON
                        data={tectonicPlates as GeoJSON.GeoJsonObject}
                        style={tectonicPlatesStyle}
                    />
                </LayersControl.Overlay>
            </LayersControl>

            <Earthquakes />
            <ScaleControl />
            <Legend />
        </Map>
    );
};

export default Leaflet;
