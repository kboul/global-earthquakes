import httpService from "./httpService";

const getEarthquakes = async (params: {
  selectedTab: string;
  numOfDays: string;
  startTime: string;
  endTime: string;
}) => {
  const { selectedTab, numOfDays, startTime, endTime } = params;
  try {
    let queryParams = "format=geojson";

    if (selectedTab === "days" && numOfDays) {
      queryParams += `&starttime=NOW - ${numOfDays}`;
    }
    if (selectedTab === "timePeriod") {
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
