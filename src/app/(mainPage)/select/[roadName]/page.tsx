'use client';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { RootState } from '@/shared/store';
import { RestResponse } from '@/models/Rest';
import { RestPathType } from '@/models/RestPath';
import Loader from '@/Common/Loader';
import { getRoadRestData } from '@/lib/road/getRoadRestData';
import RoadPathDraw from './_components/RoadPathDraw';

export default function RoadPathPage() {
  const selectedRoadDirection = useSelector((state: RootState) => state.select);
  // 특정 고속도로, 방향 입력시 -> 휴게소 데이터들 불러오기
  const { data: RestData } = useQuery<RestResponse>({
    queryKey: [
      'rest',
      selectedRoadDirection.roadName,
      selectedRoadDirection.direction,
    ],
    queryFn: getRoadRestData,
  });

  const [restPath, setRestPath] = useState<RestPathType[]>([]);

  useEffect(() => {
    if (RestData) {
      const newRestPath = RestData.data.map((d) => ({
        lat: Number(d.latitude),
        lng: Number(d.longitude),
        restName: d.restName,
        restId: d.restId,
      }));
      setRestPath(newRestPath);
    }
  }, [RestData]);

  if (restPath.length > 0) {
    return (
      <RoadPathDraw
        roadName={selectedRoadDirection.roadName}
        direction={selectedRoadDirection.direction}
        path={restPath}
      />
    );
  }
  return <Loader />;
}
