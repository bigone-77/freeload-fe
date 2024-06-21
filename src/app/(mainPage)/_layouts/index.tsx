'use client';

import Loader from '@/Common/Loader';
import { requestPermission } from '@/hooks/push/requestPermission';
import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';
import { RootState } from '@/shared/store';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useSelector } from 'react-redux';
import HomeHeader from './header';
import BottomTab from './BottomTab';

export default function Action(data: any, children: React.ReactNode) {
  useGetCurrentLocation(data);
  requestPermission();

  const segment = useSelectedLayoutSegment();

  const currentLocation = useSelector(
    (state: RootState) => state.currentLocation,
  );

  if (currentLocation.latitude === null) {
    return <Loader />;
  }
  return (
    <>
      {segment === 'home' && <HomeHeader />}
      {children}
      {segment === 'home' && <BottomTab />}
    </>
  );
}
