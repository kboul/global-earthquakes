import httpService from './httpService';

export const getEarthquakes = async (query: string) => {
    try {
        const response = await httpService.get(
            `/fdsnws/event/1/query?format=geojson&starttime=${query}`
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.log('There was an error while getting the earthquakes', error);
    }
};
