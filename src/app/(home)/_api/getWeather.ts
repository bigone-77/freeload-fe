'use client';

import axios from 'axios';

import { Coordinates } from '@/models/location';

export const fetchWeather = async ({ latitude, longitude }: Coordinates) => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: latitude,
          lon: longitude,
          appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
        },
      },
    );
    console.log(response.data); // 원하는 데이터를 response.data에서 가져옵니다.
  } catch (error) {
    console.error('날씨 정보를 가져오는 중 오류가 발생했습니다:', error);
  }
};

export function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}
