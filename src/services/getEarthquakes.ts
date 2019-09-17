import httpService from './httpService';

export const getEarthquakes = async (starttime: string) => {
    try {
        const response = await httpService.get(
            `/fdsnws/event/1/query?format=geojson&starttime=${starttime}`
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.log('There was an error while getting the earthquakes', error);
    }
};
