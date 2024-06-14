/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUserLocation } from '@/shared/store/slices/getCurrentLocationSlice';
import { setMapCenterLocation } from '@/shared/store/slices/getMapCenterSlice';

export const useGetCurrentLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkPermissionAndWatchPosition = async () => {
      const storedPermission = localStorage.getItem('geoPermission');

      if (storedPermission === 'denied') {
        alert(
          '위치 권한이 거부되었습니다. 설정에서 위치 권한을 허용해 주세요.',
        );
        return;
      }

      const watchPosition = async () => {
        const permissionStatus = await navigator.permissions.query({
          name: 'geolocation',
        });

        if (
          permissionStatus.state === 'granted' ||
          permissionStatus.state === 'prompt'
        ) {
          const watchId = navigator.geolocation.watchPosition(
            (pos) => {
              const currentPos = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
              };

              dispatch(setCurrentUserLocation(currentPos));
              dispatch(setMapCenterLocation(currentPos));
            },
            (err) => {
              console.log(err);
            },
          );

          return () => {
            navigator.geolocation.clearWatch(watchId);
          };
        }
        if (permissionStatus.state === 'denied') {
          alert(
            '위치 권한이 거부되었습니다. 설정에서 위치 권한을 허용해 주세요.',
          );
          localStorage.setItem('geoPermission', 'denied');
        }
      };

      watchPosition();
    };

    checkPermissionAndWatchPosition();
  }, [dispatch]);
};
