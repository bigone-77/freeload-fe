'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';
import { setCurrentLocation } from '@/store/slices/getCurrentLocationSlice';
import MapContainer from './_components/MapContainer';

export default function Home() {
  const dispatch = useDispatch();
  const { currentPosition } = useGetCurrentLocation();

  useEffect(() => {
    if (currentPosition.latitude !== null) {
      dispatch(
        setCurrentLocation({
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
        }),
      );
    }
  }, [currentPosition, dispatch]);

  let content;

  if (!currentPosition.latitude && !currentPosition.longitude) {
    content = <p>위치를 불러오는중입니다.</p>;
  } else {
    content = (
      <MapContainer
        latitude={currentPosition.latitude}
        longitude={currentPosition.longitude}
      />
    );
  }

  return (
    <main className="flex w-full h-full flex-col items-center justify-between">
      {content}
    </main>
  );
}
