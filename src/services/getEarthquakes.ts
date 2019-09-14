import httpService from './httpService';

export const getEarthquakes = async () => {
    try {
        const response = await httpService.get(
            '/fdsnws/event/1/query?format=geojson&starttime=NOW - 5days'
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.log('There was an error while getting the earthquakes', error);
    }
};
