'use client';

import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';

import { RootState } from '@/shared/store';
import MapContainer from './_components/MapContainer';
import WeatherCard from './_components/WeatherCard';
import ProfileFloating from './_components/ProfileFloating';

export default function Home() {
  const { data: session } = useSession();
  const currentUser = session?.user; // 현재 접속한 유저가 있는지 ?

  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  );
  return (
    <main className="absolute top-0 left-0 right-0 w-full h-full">
      <MapContainer
        latitude={currentLatLng.latitude!}
        longitude={currentLatLng.longitude!}
      />
      <ProfileFloating currentUser={currentUser} />
      <WeatherCard />
    </main>
  );
}
