import { Coordinates } from '@/models/location';
import { useState, useEffect } from 'react';

export const useGetCurrentLocation = () => {
  // 현재 유저의 위치 반환 string
  const [currentPosition, setCurrentPosition] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });
  useEffect(() => {
    const getPosition = async () => {
      try {
        const pos = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          },
        );

        const currentPos = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        setCurrentPosition(currentPos);
      } catch (err) {
        console.log(err);
      }
    };

    getPosition();
  }, []); // 빈 배열은 한 번만 실행됨을 의미합니다.

  return { currentPosition };
};
