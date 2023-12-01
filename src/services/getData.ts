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
  temp?: number;
  tempFeelsLike?: number;
  city?: string;
  weatherType?: string;
  pressure?: number;
  humidity?: number;
  windSpeed?: number;
  tempDay?: number;
  tempNight?: number;
  description?: string;
}

export const getThisDay = async (): Promise<FormattedWeatherInfo> => {
  const response: AxiosResponse<WeatherData> = await axios.get(
    `${_apiBase}${_apiKey}&q=London&cnt=1`
  );

  if (!response.data) throw new Error("Unable to fetch data.");

  return {
    temp: Math.round(response.data.list[0].main.temp - 273.15),
    tempFeelsLike: Math.round(response.data.list[0].main.feels_like - 273.15),
    city: response.data.city.name,
    weatherType: response.data.list[0].weather[0].main,
    pressure: response.data.list[0].main.pressure,
    humidity: response.data.list[0].main.humidity,
    windSpeed: Math.round(response.data.list[0].wind.speed),
  };
};

export const getAllDay = async (i: number): Promise<FormattedWeatherInfo[]> => {
  const response: AxiosResponse<WeatherData> = await axios.get(
    `${_apiBase}${_apiKey}&q=London&cnt=${i}`
  );

  if (!response.data) throw new Error("Unable to fetch data.");

  return response.data.list.map((item) => ({
    weatherType: item.weather[0].main,
    tempDay: Math.round(item.main.temp_max - 273.15),
    tempNight: Math.round(item.main.temp_min - 273.15),
    description: item.weather[0].description,
  }));
};
