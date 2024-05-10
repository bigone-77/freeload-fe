'use client';

import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import MapContainer from '../home/_components/MapContainer';
import WeatherCard from '../home/_components/WeatherCard';

export default function LikePage() {
  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  );
  return (
    <main className="absolute top-0 left-0 right-0 w-full h-full">
      <MapContainer
        latitude={currentLatLng.latitude!}
        longitude={currentLatLng.longitude!}
      />
      <WeatherCard />
    </main>
  );
}
