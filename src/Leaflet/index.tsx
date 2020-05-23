import React, { FC } from 'react';
import {
    Map,
    TileLayer,
    LayersControl,
    GeoJSON,
    ScaleControl
} from 'react-leaflet';
import Earthquakes from './Earthquakes';
import Legend from './Legend';
import { ITilelayer } from './models';
import tectonicPlates from './PB2002_boundaries.json';
import { tectonicPlatesStyle, tilelayers } from './constants';
import { idGenerator } from '../shared/utils';
import styles from './index.module.sass';

const Leaflet: FC = () => {
    return (
        <Map center={[0, 0]} zoom={3} className={styles.map}>
            <LayersControl position="topright">
                {tilelayers.map(
                    ({ name, attribution, url, checked }: ITilelayer) => (
                        <LayersControl.BaseLayer
                            key={idGenerator()}
                            name={name}
                            checked={checked}>
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
