import { WeatherResponseSchema } from '@/validation/api/weather';
import { axiosWeather } from '../serviceConfiguration';
import { WeatherResponse } from './type';
import { createWeatherDTO } from './dto';
import { ZodValidationError } from '@/validation';

export const weatherstackAPI = () => {
  return {
    getWeatherByCity: async (city: string) => {
      const response = await axiosWeather.get<WeatherResponse>('current', {
        params: {
          query: city,
        },
      });
      const data = response?.data;
      if (data) {
        try {
          const validatedData = WeatherResponseSchema.parse(data);
          const weatherDTO = createWeatherDTO(validatedData);
          return weatherDTO;
        } catch (error) {
          console.error('Validation error:', error);
          throw new ZodValidationError('Data validation failed');
        }
      }
    },
  };
};
