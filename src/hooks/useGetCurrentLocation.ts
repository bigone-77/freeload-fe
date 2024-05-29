import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentUserLocation } from '@/shared/store/slices/getCurrentLocationSlice';
import { setMapCenterLocation } from '@/shared/store/slices/getMapCenterSlice';

export const useGetCurrentLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const watchPosition = async () => {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
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
          dispatch(
            setMapCenterLocation({
              latitude: currentPos.latitude,
              longitude: currentPos.longitude,
            }),
          );
        },
        (err) => {
          console.log(err);
        },
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    };

    watchPosition();
  }, [dispatch]); // dispatch를 의존성 배열에 추가
};
