import { useState, useEffect } from 'react';
import { getEarthquakes } from './services';

const useEarthquakesFetcher: any = (starttime: string, endtime: string) => {
    const [earthquakes, setEarthquakes] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchEarthquakes = async () => {
            try {
                const data = await getEarthquakes(starttime, endtime);
                setEarthquakes(data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };

        fetchEarthquakes();
    }, [starttime, endtime]);

    return [earthquakes, loading, error];
};

export default useEarthquakesFetcher;
