/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useSelector } from 'react-redux';

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

  const pushHandler = async () => {
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
          title: '테스트',
          body: '테스트용 바디입니다',
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
    if (
      rest.latitude &&
      rest.longitude &&
      rest.diffDist.endsWith('m') &&
      !rest.diffDist.endsWith('km')
    ) {
      pushHandler();
    }
  });

  console.log(restData);

  return <>{children}</>;
}
