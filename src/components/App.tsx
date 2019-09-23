import React, { FC } from 'react';
import Leaflet from './Leaflet';
import NavBar from './NavBar';

const App: FC = () => {
    return (
        <>
            <NavBar />
            <Leaflet />
        </>
    );
};

export default App;
