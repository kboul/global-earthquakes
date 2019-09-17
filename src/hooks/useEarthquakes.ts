import { useState, useEffect } from 'react';
import { getEarthquakes } from '../services/getEarthquakes';

const useEarthquakes: any = (starttime: string) => {
    const [earthquakes, setEarthquakes]: any = useState([]);

    useEffect(() => {
        (async () => {
            let earthquakes = await getEarthquakes(starttime);
            setEarthquakes(earthquakes);
        })();
    }, [starttime]);

    return earthquakes;
};

export default useEarthquakes;
