import { useState, useEffect } from 'react';
import { getEarthquakes } from '../services/getEarthquakes';

const useEarthquakes: any = (starttime: string, endtime: string) => {
    const [earthquakes, setEarthquakes] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchEarthquakes = async () => {
            try {
                let earthquakes = await getEarthquakes(starttime, endtime);
                setEarthquakes(earthquakes);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };

        fetchEarthquakes();
    }, [starttime, endtime]);

    return [earthquakes, loading, error];
};

export default useEarthquakes;
