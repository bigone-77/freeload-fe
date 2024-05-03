'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';
import { setCurrentUserLocation } from '@/store/slices/getCurrentLocationSlice';
import { setMapCenterLocation } from '@/store/slices/getMapCenterSlice';
import { RootState } from '@/store/store';
import MapContainer from '../_components/map/MapContainer';

export default function Home() {
  const dispatch = useDispatch();
  const currentMap = useSelector((state: RootState) => state.mapCenter);
  const { currentPosition } = useGetCurrentLocation(); // 현재 유저 위치

  useEffect(() => {
    if (currentPosition.latitude !== null) {
      dispatch(
        setCurrentUserLocation({
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
        }),
      );
      dispatch(
        setMapCenterLocation({
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
        }),
      );
    }
  }, [currentPosition, dispatch]);

  let content;

  if (!currentMap.latitude) {
    content = <p>위치를 불러오는중입니다.</p>;
  } else {
    content = (
      <MapContainer
        latitude={currentPosition.latitude}
        longitude={currentPosition.longitude!}
      />
    );
  }

  return (
    <main className="flex w-full h-full flex-col items-center justify-between">
      {content}
    </main>
  );
}
