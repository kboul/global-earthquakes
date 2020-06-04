import { useState, useEffect } from 'react';
import getEarthquakes from './services';

const useEarthquakesFetcher: any = (startTime: string, endTime: string) => {
    const [earthquakes, setEarthquakes] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchEarthquakes = async () => {
            try {
                const data = await getEarthquakes(startTime, endTime);
                setEarthquakes(data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };

        fetchEarthquakes();
    }, [startTime, endTime]);

    return [earthquakes, loading, error];
};

export default useEarthquakesFetcher;
