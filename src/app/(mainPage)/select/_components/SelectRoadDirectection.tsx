'use client';

import { useQuery } from '@tanstack/react-query';

import { Road } from '@/models/Road';
import { getRoadData } from '../_lib/getRoadData';

export default function SelectRoadDirection() {
  const { data } = useQuery<Road[]>({
    queryKey: ['road'],
    queryFn: getRoadData,
  });
  console.log(data);

  return 'ㅗ';
}
