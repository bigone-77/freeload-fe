'use client';

import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Coordinates } from '@/models/location';
import { setWeather } from '@/store/slices/getWeatherSlice';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const useFetchWeather = () => {
  const dispatch = useDispatch();

  const getWeather = async ({ latitude, longitude }: Coordinates) => {
    try {
      const response = await axios.get(WEATHER_URL, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
          lang: 'kr',
          units: 'metric',
        },
      });
      dispatch(
        setWeather({
          iconCode: response.data.weather[0].icon,
          weatherDescId: response.data.weather[0].id,
          temp: response.data.main.temp,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
  return getWeather;
};

export const getWeatherType = (weatherId: number) => {
  if (weatherId >= 200 && weatherId <= 599) {
    return '비';
  }
  if (weatherId >= 600 && weatherId <= 699) {
    return '눈';
  }
  if (
    (weatherId >= 700 && weatherId <= 799) ||
    (weatherId >= 801 && weatherId <= 804)
  ) {
    return '흐림';
  }
  if (weatherId === 800) {
    return '맑음';
  }
  return 'Unknown'; // 다른 모든 경우에 대해서는 알 수 없는 날씨로 처리
};
