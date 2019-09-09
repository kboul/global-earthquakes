import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

export interface LeafletProps {}

const position: [number, number] = [51.505, -0.09];

const Leaflet: React.SFC<LeafletProps> = () => {
    return (
        <Map center={position} zoom={13} style={{ height: '100vh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>
    );
};

export default Leaflet;
