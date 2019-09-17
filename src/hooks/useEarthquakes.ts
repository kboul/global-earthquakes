import { useState, useEffect } from 'react';
import { getEarthquakes } from '../services/getEarthquakes';

const useEarthquakes: any = (starttime: string, endtime: string) => {
    const [earthquakes, setEarthquakes]: any = useState([]);

    useEffect(() => {
        (async () => {
            let earthquakes = await getEarthquakes(starttime, endtime);
            setEarthquakes(earthquakes);
        })();
    }, [starttime, endtime]);

    return earthquakes;
};

export default useEarthquakes;
