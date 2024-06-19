/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { requestPermission } from '@/hooks/push/requestPermission';
import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';
import { RootState } from '@/shared/store';
import { getDifferDistance } from '@/utils/getDifferDistance';
import { useSendPush } from '@/hooks/push/useSendPush';

interface ILocationProviderProps {
  children: React.ReactNode;
  restData: any[];
}

export default function LocationProvider({
  children,
  restData,
}: ILocationProviderProps) {
  useGetCurrentLocation();
  requestPermission();

  const sendPush = useSendPush();

  const pushHandler = async (rest: any) => {
    console.log(`pushHandler called for ${rest.restName}`);
    const isToken = localStorage.getItem('fcmToken');
    if (!isToken) {
      window.alert('토큰이 없어요');
      await requestPermission();
    } else {
      sendPush({
        token: isToken,
        data: {
          title: `🚙${rest.restName}이 근처에 있어요!`,
          body: `잠깐 ${rest.restName}에서 쉬다 가시는건 어때요?`,
          click_action: '/',
        },
      });
    }
  };

  const currentLocation = useSelector(
    (state: RootState) => state.currentLocation,
  );

  restData.forEach((rest) => {
    rest.diffDist = getDifferDistance(
      currentLocation.latitude!,
      currentLocation.longitude!,
      Number(rest.latitude),
      Number(rest.longitude),
    );
  });

  useEffect(() => {
    const handlePushNotifications = async () => {
      await Promise.all(
        restData.map(async (rest) => {
          if (
            rest.latitude &&
            rest.longitude &&
            rest.diffDist.endsWith('m') &&
            !rest.diffDist.endsWith('km')
          ) {
            await pushHandler(rest);
          }
        }),
      );
    };

    handlePushNotifications();
  }, [currentLocation, restData]);

  console.log(restData);

  return <>{children}</>;
}
