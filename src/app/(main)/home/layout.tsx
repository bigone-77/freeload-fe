'use client';

import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import BottomTab from '@/widgets/home/BottomTab';

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  ); // 현재 사용자가 있는 위치 (위도, 경도)
  return (
    <div>
      {children}
      {currentLatLng.latitude && (
        <BottomTab
          latitude={currentLatLng.latitude}
          longitude={currentLatLng.longitude}
        />
      )}
    </div>
  );
}
