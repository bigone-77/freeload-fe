/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentUserLocation } from '@/shared/store/slices/getCurrentLocationSlice';
import { setMapCenterLocation } from '@/shared/store/slices/getMapCenterSlice';

export const useGetCurrentLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handlePermissionDenied = () => {
      // TODO: 권한 거부시 마운트될 때 다시 한 번 더 물어보기
      navigator.geolocation.getCurrentPosition(
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
    };

    const checkPermissionAndWatchPosition = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({
          name: 'geolocation',
        });
        console.log(permissionStatus.state);

        if (permissionStatus.state === 'denied') {
          handlePermissionDenied();
        }

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
      } catch (err) {
        console.error('위치 권한 조회 실패:', err);
      }
    };

    checkPermissionAndWatchPosition();
  }, [dispatch]);
};
