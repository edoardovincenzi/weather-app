import { useQuery } from '@tanstack/react-query';
import { weatherstackAPI } from './api';

export const useGetWeatherByCity = (city: string, key: string = '') => {
  const wheather = weatherstackAPI();
  const query = useQuery({
    queryKey: [city, key],
    queryFn: () => wheather.getWeatherByCity(city),
    enabled: !!city,
    retry: false,
  });

  return query;
};
