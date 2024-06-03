import { WeatherResponse } from '@/validation/api/weather';
import { WeatherDTO } from './type';

export const createWeatherDTO = (data: WeatherResponse): WeatherDTO => {
  const { location, current } = data;
  return {
    name: location.name,
    country: location.country,
    weather_icons: current.weather_icons,
    weather_descriptions: current.weather_descriptions,
    wind_speed: current.wind_speed,
    wind_degree: current.wind_degree,
    wind_dir: current.wind_dir,
    pressure: current.pressure,
    precip: current.precip,
    humidity: current.humidity,
    cloudcover: current.cloudcover,
    temperature: current.temperature,
    feelslike: current.feelslike,
    uv_index: current.uv_index,
    visibility: current.visibility,
  };
};
