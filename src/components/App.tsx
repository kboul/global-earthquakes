import React, { FC } from 'react';
import Leaflet from './Leaflet';
import Navbar from './Navbar';

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Leaflet />
        </>
    );
};

export default App;
