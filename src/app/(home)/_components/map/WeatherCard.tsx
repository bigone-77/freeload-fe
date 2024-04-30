import { Coordinates } from '@/models/location';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Image from 'next/image';
import { getWeatherType, useFetchWeather } from '../../_api/useFetchWeather';

export default function WeatherCard({ latitude, longitude }: Coordinates) {
  const weatherData = useSelector((state: RootState) => state.getWeather);
  const fetchWeather = useFetchWeather();

  useEffect(() => {
    fetchWeather({ latitude, longitude });
  }, [fetchWeather, latitude, longitude]);
  return (
    <div className="flex flex-col items-center justify-center border-4 rounded-3xl shadow-lg p-2 transition-all">
      <Image
        src={`https://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`}
        alt="weather-icon"
        width={40}
        height={40}
        priority
      />
      <div className="text-center font-semibold">
        <p>{Math.floor(weatherData.temp)}°C</p>
        <p>{getWeatherType(weatherData.weatherDescId)}</p>
      </div>
    </div>
  );
}
