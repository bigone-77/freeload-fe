import { useState, useEffect } from 'react';

export const useGetCurrentLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
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
