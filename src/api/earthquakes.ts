import httpService from "./httpService";

const getEarthquakes = async (startTime: string, endTime: string) => {
  try {
    const response = await httpService.get(
      `/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=${endTime}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log("There was an error while getting the earthquakes", error);
    return false;
  }
};

export { getEarthquakes };
