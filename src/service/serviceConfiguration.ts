import { API_WEATHER_BASE } from '@/costants';
import axios from 'axios';

const WEATHER_KEY = import.meta.env.VITE_KEY_WEATHER;

export const axiosWeather = axios.create({
  baseURL: `${API_WEATHER_BASE}`,
  params: {
    access_key: WEATHER_KEY,
  },
});
