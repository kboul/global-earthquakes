import React from 'react';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import Earthquakes from './Earthquakes';
import Legend from './Legend';
import tilelayers from '../constants/tilelayers';
import { ITilelayer } from '../models/ITilelayer';

export interface LeafletProps {}

const position: [number, number] = [0, 0];

const Leaflet: React.SFC<LeafletProps> = () => {
    return (
        <Map center={position} zoom={3} style={{ height: '100vh' }}>
            <LayersControl position="topright">
                {tilelayers.map(({ name, attribution, url }: ITilelayer) => {
                    return (
                        <LayersControl.BaseLayer
                            name={name}
                            checked={
                                name === 'OpenStreetMap.Mapnik' ? true : false
                            }>
                            <TileLayer attribution={attribution} url={url} />
                        </LayersControl.BaseLayer>
                    );
                })}
            </LayersControl>

            <Earthquakes />
            <Legend />
        </Map>
    );
};

export default Leaflet;
