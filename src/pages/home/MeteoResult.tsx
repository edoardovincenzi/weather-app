import { useGetWeatherByCity } from '@/service/weatherAPI/hookUseQuery';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import WeatherSkeleton from '@/components/WeatherSkeleton';
import ServerErrorAlert from '@/components/ServerErrorAlert';
import ErrorDataReceive from '@/components/ErrorDataReceive';
import TemperatureConverter from './TemperatureConverter';
import HomeWithoutContent from './HomeWithoutContent';

const MeteoResult = () => {
  const { search } = useSelector((state: RootState) => state.search);
  const { isError, isLoading, data, error } = useGetWeatherByCity(search);

  if (isLoading) {
    return <WeatherSkeleton />;
  }
  if (isError) {
    if (error.name === 'ZodValidationError') return <ErrorDataReceive />;
    return <ServerErrorAlert />;
  }

  return (
    <>
      {data ? (
        <div className="w-full p-4 border rounded-xl bg-white mt-4 ">
          <div className="flex justify-center items-start gap-2">
            <img
              className="h-9 rounded-full"
              alt={data?.weather_descriptions[0]}
              src={data?.weather_icons[0]}
            />
            <h1 className="text-4xl w-full">{`${data?.name}, ${data?.country}`}</h1>
          </div>
          <h3 className="mt-3">
            Il tempo a {data.name} è{' '}
            <span className="font-semibold">
              {data?.weather_descriptions[0]}
            </span>
          </h3>
          <TemperatureConverter temp={data?.temperature} />
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
            <div className="weather-card">
              <span>Visibilità</span>
              <span className="font-semibold">{data?.visibility}</span>
            </div>
            <div className="weather-card">
              <span>Umidità</span>
              <span className="font-semibold">{data?.humidity}</span>
            </div>
            <div className="weather-card">
              <span>Velocità del vento</span>
              <span className="font-semibold">{data?.wind_speed}</span>
            </div>
            <div className="weather-card">
              <span>Temperatura del vento</span>
              <span className="font-semibold">{data?.wind_degree}</span>
            </div>
            <div className="weather-card">
              <span>Direzione del vento</span>
              <span className="font-semibold">{data?.wind_dir}</span>
            </div>
            <div className="weather-card">
              <span>Pressione</span>
              <span className="font-semibold">{data?.pressure}</span>
            </div>
            <div className="weather-card">
              <span>Precipitazione</span>
              <span className="font-semibold">{data?.precip}</span>
            </div>
            <div className="weather-card">
              <span>Copertura nuvole</span>
              <span className="font-semibold">{data?.cloudcover}</span>
            </div>
            <div className="weather-card">
              <span>Indice UV</span>
              <span className="font-semibold">{data?.uv_index}</span>
            </div>
          </div>
        </div>
      ) : (
        <HomeWithoutContent />
      )}
    </>
  );
};

export default MeteoResult;
