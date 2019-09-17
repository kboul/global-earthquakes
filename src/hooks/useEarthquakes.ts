import { useState, useEffect } from 'react';
import { getEarthquakes } from '../services/getEarthquakes';

const useEarthquakes: any = () => {
    const [earthquakes, setEarthquakes]: any = useState([]);
    const [query, setQuery] = useState('NOW - 5days');

    useEffect(() => {
        (async () => {
            let earthquakes = await getEarthquakes(query);
            setEarthquakes(earthquakes);
        })();
    }, [query]);

    return [earthquakes, setQuery];
};

export default useEarthquakes;
