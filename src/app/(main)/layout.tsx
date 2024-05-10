'use client';

import { useSelector } from 'react-redux';

import Footer from '@/app/(main)/_layouts/Footer';
import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';
import Loader from '@/Common/Loader';
import { RootState } from '@/store';
import BottomTab from './_layouts/BottomTab';
import HomeHeader from './_layouts/header';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  useGetCurrentLocation();

  const currentLocation = useSelector(
    (state: RootState) => state.currentLocation,
  );

  if (currentLocation.latitude === null) {
    return <Loader />;
  }
  return (
    <>
      <HomeHeader />
      {children}
      <BottomTab />
      <Footer />
    </>
  );
}
