import React from 'react';
import Leaflet from './Leaflet';
import Navbar from './Navbar';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '56px' }}>
                <Leaflet />
            </div>
        </div>
    );
};

export default App;
