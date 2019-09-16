import React from 'react';
import { Map, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import Earthquakes from './Earthquakes';
import Legend from './Legend';
import tilelayers from '../constants/tilelayers';
import { ITilelayer } from '../models/ITilelayer';
import tectonicPlates from '../assets/PB2002_boundaries.json';
import { tectonicPlatesStyle } from '../constants/tectonicPlatesStyle';

export interface LeafletProps {}

const Leaflet: React.SFC<LeafletProps> = () => {
    return (
        <Map center={[0, 0]} zoom={3} style={{ height: '100vh' }}>
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
            <Legend />
        </Map>
    );
};

export default Leaflet;
