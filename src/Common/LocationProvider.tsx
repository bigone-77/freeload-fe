/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useSelector } from 'react-redux';

import { requestPermission } from '@/hooks/push/requestPermission';
import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';
import { RootState } from '@/shared/store';
import { getDifferDistance } from '@/utils/getDifferDistance';
import { useSendPush } from '@/hooks/push/useSendPush';
import { useEffect } from 'react';

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
    // TODO: 일단 로컬스토리지에 fcmToken이 있는지 확인하고,
    const isToken = localStorage.getItem('fcmToken');
    // TODO: 만약에 토큰이 없다면 권한 재요청하기
    if (!isToken) {
      window.alert('토큰이 없어요');
      requestPermission();
    } else {
      // TODO: 토큰이 있다면 sendPush
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
    restData.forEach((rest) => {
      if (
        rest.latitude &&
        rest.longitude &&
        rest.diffDist.endsWith('m') &&
        !rest.diffDist.endsWith('km')
      ) {
        pushHandler(rest);
      }
    });
  }, []);

  console.log(restData);

  return <>{children}</>;
}
