import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Earthquakes from './Earthquakes';

export interface LeafletProps {}

const position: [number, number] = [0, 0];

const Leaflet: React.SFC<LeafletProps> = () => {
    return (
        <Map center={position} zoom={3} style={{ height: '100vh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Earthquakes />
        </Map>
    );
};

export default Leaflet;
