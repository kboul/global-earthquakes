import React from 'react';
import Leaflet from './Leaflet';
import Navbar from './Navbar';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Leaflet />
        </>
    );
};

export default App;
