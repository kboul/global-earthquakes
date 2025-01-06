import httpService from "./httpService";

const getEarthquakes = async (startTime: string, endTime: string) => {
  try {
    let queryParams = "format=geojson";
    if (startTime && endTime)
      queryParams += `&starttime=${startTime}&endtime=${endTime}`;
    if (startTime) queryParams += `&starttime=${startTime}`;
    if (endTime) queryParams += `&endtime=${endTime}`;

    const response = await httpService.get(
      `/fdsnws/event/1/query?${queryParams}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.log("There was an error while getting the earthquakes", error);
    return false;
  }
};

export { getEarthquakes };
