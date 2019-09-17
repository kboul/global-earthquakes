import { useState, useEffect } from 'react';
import { getEarthquakes } from '../services/getEarthquakes';

const useEarthquakes: any = (query: string) => {
    const [earthquakes, setEarthquakes]: any = useState([]);

    useEffect(() => {
        (async () => {
            let earthquakes = await getEarthquakes(query);
            setEarthquakes(earthquakes);
        })();
    }, [query]);

    return earthquakes;
};

export default useEarthquakes;
