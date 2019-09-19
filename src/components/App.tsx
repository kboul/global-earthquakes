import React, { FC } from 'react';
import Leaflet from './Leaflet';
import NavbarForm from './NavbarForm';
import Navbar from './Navbar';

const App: FC = () => {
    return (
        <>
            <Navbar>
                <NavbarForm />
            </Navbar>
            <Leaflet />
        </>
    );
};

export default App;
