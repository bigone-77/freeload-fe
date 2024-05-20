'use client';

import { useSelector } from 'react-redux';
import { geocode, RequestType } from 'react-geocode';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { RootState } from '@/store';
import { Rest } from '@/models/Rest';
import { getCertainRestData } from '@/app/search/[...keyword]/_lib/getCertainRestData';
import { RestPathType } from '@/models/RestPath';
import Loader from '@/Common/Loader';
import RoadPathDraw from './_components/RoadPathDraw';

const fetchCoordinates = async (
  restNameAndId: { restName: string; restId: string }[],
): Promise<RestPathType[]> => {
  const coordinates = await Promise.all(
    restNameAndId.map(async (address) => {
      try {
        const { results } = await geocode(
          RequestType.ADDRESS,
          address.restName,
        );
        const { lat, lng } = results[0].geometry.location;
        return { lat, lng, restName: address.restName, restId: address.restId };
      } catch (error) {
        console.error(error);
        return null;
      }
    }),
  );
  return coordinates.filter((coord): coord is RestPathType => coord !== null);
};

export default function RoadPathPage() {
  const selectedRoadDirection = useSelector((state: RootState) => state.select);
  const { data: RestData } = useQuery<Rest[]>({
    queryKey: [
      'rest',
      selectedRoadDirection.roadName,
      selectedRoadDirection.direction,
    ],
    queryFn: getCertainRestData,
  });

  const [restPath, setRestPath] = useState<RestPathType[]>([]);

  useEffect(() => {
    if (RestData) {
      const fetchAllCoordinates = async () => {
        const restNameAndId = RestData.map((rest) => ({
          restName: rest.restName,
          restId: rest.restId,
        }));

        const resolvedCoords = await fetchCoordinates(restNameAndId);
        setRestPath(resolvedCoords);
      };

      fetchAllCoordinates();
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
