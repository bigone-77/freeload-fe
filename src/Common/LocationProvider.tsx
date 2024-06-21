/* eslint-disable react/jsx-no-useless-fragment */

'use client';

// import { requestPermission } from '@/hooks/push/requestPermission';
import { useGetCurrentLocation } from '@/hooks/useGetCurrentLocation';

interface ILocationProviderProps {
  children: React.ReactNode;
  restData: any[];
}

export default function LocationProvider({
  children,
  restData,
}: ILocationProviderProps) {
  useGetCurrentLocation(restData);
  // requestPermission();

  return <>{children}</>;
}
