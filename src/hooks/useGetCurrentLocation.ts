/* eslint-disable consistent-return */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentUserLocation } from '@/shared/store/slices/getCurrentLocationSlice';
import { setMapCenterLocation } from '@/shared/store/slices/getMapCenterSlice';
import { getDifferDistance } from '@/utils/getDifferDistance';
import { requestPermission } from './push/requestPermission';
import { useSendPush } from './push/useSendPush';

export const useGetCurrentLocation = (restData: any[]) => {
  const dispatch = useDispatch();
  const sendPush = useSendPush();

  const pushHandler = async (rest: any) => {
    console.log(`pushHandler called for ${rest.restName}`);
    const isToken = localStorage.getItem('fcmToken');
    if (!isToken) {
      window.alert('토큰이 없어요');
      requestPermission();
    } else {
      sendPush({
        token: isToken,
        data: {
          title: `🚙${rest.restName}이 근처에 있어요!`,
          body: `잠깐 ${rest.restName}에서 쉬다 가시는건 어때요?`,
          click_action: `/rest/${rest.restId}`,
        },
      });
    }
  };

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

            restData.forEach((rest) => {
              rest.diffDist = getDifferDistance(
                currentPos.latitude,
                currentPos.longitude,
                Number(rest.latitude),
                Number(rest.longitude),
              );
            });
            restData.map(async (rest) => {
              if (
                rest.latitude &&
                rest.longitude &&
                rest.diffDist.endsWith('m') &&
                !rest.diffDist.endsWith('km')
              ) {
                await pushHandler(rest);
              }
            });

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
