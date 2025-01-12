import httpService from "./httpService";
import { searchBy } from "../constants";

const getEarthquakes = async (params: {
  searchByTab: string;
  numOfDays: string;
  startTime: string;
  endTime: string;
}) => {
  const { searchByTab, numOfDays, startTime, endTime } = params;
  try {
    let queryParams = "format=geojson";

    if (searchByTab === searchBy.days && numOfDays) {
      queryParams += `&starttime=NOW - ${numOfDays}`;
    }
    if (searchByTab === searchBy.timePeriod) {
      if (!startTime && !endTime) return;

      if (startTime && endTime)
        queryParams += `&starttime=${startTime}&endtime=${endTime}`;
      else if (startTime) queryParams += `&starttime=${startTime}`;
      else if (endTime) queryParams += `&endtime=${endTime}`;
    }

    const response = await httpService.get(
      `/fdsnws/event/1/query?${queryParams}`
    );
    return response.data;
  } catch (error) {
    console.log("There was an error while getting the earthquakes", error);
    return false;
  }
};

export { getEarthquakes };
