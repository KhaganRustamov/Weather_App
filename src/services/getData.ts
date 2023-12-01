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
    };
    weather: {
      main: string;
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
}

export const getThisDay = async (i: number) => {
  const response: AxiosResponse<WeatherData> = await axios.get(
    `${_apiBase}${_apiKey}&q=London&cnt=${i}`
  );

  if (!response.data) throw new Error("Unable to fetch data.");

  return _weatherInfo(response.data);
};

const _weatherInfo = (weather: WeatherData): FormattedWeatherInfo => {
  return {
    temp: Math.round(weather.list[0].main.temp - 273.15),
    tempFeelsLike: Math.round(weather.list[0].main.feels_like - 273.15),
    city: weather.city.name,
    weatherType: weather.list[0].weather[0].main,
    pressure: weather.list[0].main.pressure,
    humidity: weather.list[0].main.humidity,
    windSpeed: Math.round(weather.list[0].wind.speed),
  };
};
