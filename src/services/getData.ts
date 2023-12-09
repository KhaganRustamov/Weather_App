import axios, { AxiosResponse } from "axios";

const _apiBase = "http://api.openweathermap.org/data/2.5/forecast?";
const _apiKey = "appid=14781ef057bc275f053d6c09fcb0e8fd";

interface WeatherData {
  list: {
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      temp_max: number;
      temp_min: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
    wind: {
      speed: number;
    };
  }[];
  city: {
    name: string;
  };
}

export interface FormattedWeatherInfo {
  temp: number;
  tempFeelsLike: number;
  city: string;
  weatherType: string;
  pressure: number;
  humidity: number;
  windSpeed: number;
  tempDay: number;
  tempNight: number;
  description: string;
  dayOfWeek?: string;
}

export const getWeatherInfo = async (
  count: number = 1,
  name: string = "Baku"
) => {
  const response: AxiosResponse<WeatherData> = await axios.get(
    `${_apiBase}${_apiKey}&q=${name}&cnt=${count}`
  );

  if (!response.data) throw new Error("Unable to fetch data.");

  return response.data.list.map((item) => {
    return {
      temp: Math.ceil(item.main.temp - 273.15),
      tempFeelsLike: Math.floor(item.main.feels_like - 273.15),
      city: response.data.city.name,
      pressure: item.main.pressure,
      humidity: item.main.humidity,
      windSpeed: Math.ceil(item.wind.speed),
      weatherType: item.weather[0].main,
      tempDay: Math.ceil(item.main.temp_max - 273.15),
      tempNight: Math.floor(item.main.temp_min - 273.15),
      description: item.weather[0].description,
    };
  });
};
