import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentUserLocation } from '@/store/slices/getCurrentLocationSlice';

export const useGetCurrentLocation = () => {
  const dispatch = useDispatch();
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
        dispatch(
          setCurrentUserLocation({
            latitude: currentPos.latitude,
            longitude: currentPos.longitude,
          }),
        );
      } catch (err) {
        console.log(err);
      }
    };

    getPosition();
  }, []); // 빈 배열은 한 번만 실행됨을 의미합니다.
};
