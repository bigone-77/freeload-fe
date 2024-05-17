import { useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { getWeatherType, useFetchWeather } from '@/hooks/useFetchWeather';
import { RootState } from '@/store';

export default function WeatherCard() {
  const weatherData = useSelector((state: RootState) => state.getWeather);
  const mapCenter = useSelector((state: RootState) => state.mapCenter);

  const fetchWeather = useFetchWeather();

  useEffect(() => {
    if (mapCenter.latitude) {
      fetchWeather({
        latitude: mapCenter.latitude,
        longitude: mapCenter.longitude,
      });
    }
  }, [fetchWeather, mapCenter]);

  return (
    <div className="absolute left-4 bottom-48 flex flex-col items-center justify-center rounded-3xl shadow-2xl p-2 transition-all z-10 bg-white bg-opacity-90">
      <Image
        src={`https://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`}
        alt="weather-icon"
        width={40}
        height={40}
        priority
      />
      <div className="text-center font-bold text-text700">
        <p>{Math.floor(weatherData.temp)}°</p>
        <p>{getWeatherType(weatherData.weatherDescId)}</p>
      </div>
    </div>
  );
}
