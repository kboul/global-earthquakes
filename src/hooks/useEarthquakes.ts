import { useState, useEffect } from 'react';
import { getEarthquakes } from '../services/getEarthquakes';

const useEarthquakes: any = (starttime: string, endtime: string) => {
    const [earthquakes, setEarthquakes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            let earthquakes = await getEarthquakes(starttime, endtime);
            setEarthquakes(earthquakes);
            setLoading(false);
        })();
    }, [starttime, endtime]);

    return [earthquakes, loading];
};

export default useEarthquakes;
