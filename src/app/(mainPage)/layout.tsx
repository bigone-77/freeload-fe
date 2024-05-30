'use client';

import { useSelector } from 'react-redux';

import Footer from '@/app/(mainPage)/_layouts/Footer';
import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';
import { requestPermission } from '@/hooks/push/requestPermission';
import Loader from '@/Common/Loader';
import { RootState } from '@/shared/store';
import { useSelectedLayoutSegment } from 'next/navigation';
import BottomTab from './_layouts/BottomTab';
import HomeHeader from './_layouts/header';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  const segment = useSelectedLayoutSegment();
  useGetCurrentLocation();
  requestPermission();

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
      <Footer />
    </>
  );
}
