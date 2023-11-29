import axios from "axios";

const _apiBase = "http://api.openweathermap.org/data/2.5/forecast?";
const _apiKey = "appid=14781ef057bc275f053d6c09fcb0e8fd";

export const getThisDay = async () => {
  const response = await axios.get(`${_apiBase}${_apiKey}&q=London&cnt=1`);

  if (!response.data) throw new Error("Unable to fetch data.");

  return _weatherInfo(response.data);
};

const _weatherInfo = (weather) => {
  return {
    temp: Math.round(Number(weather.list[0].main.temp) - 273.15),
    city: weather.city.name,
  };
};
