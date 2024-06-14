'use client';

import Loader from '@/Common/Loader';
import { getLikeRouteData } from '@/lib/user/getLikeRouteData';
import { RouteResponse } from '@/models/Route';
import { useQuery } from '@tanstack/react-query';

import RouteCard from './RouteCard';

interface IShowRouteProps {
  email: string;
}

export default function ShowRoute({ email }: IShowRouteProps) {
  const { data: LikeRouteData, isLoading } = useQuery<RouteResponse>({
    queryKey: ['route', 'like', email],
    queryFn: () => getLikeRouteData(email),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (
    !LikeRouteData ||
    !LikeRouteData.data ||
    LikeRouteData.data.length === 0
  ) {
    return <div>즐겨찾기한 경로가 없어요</div>;
  }

  console.log(LikeRouteData);

  return (
    <div className="mt-8">
      {LikeRouteData.data.map((d) => (
        <RouteCard
          key={d.route_id}
          startAddr={d.startAddr}
          startLatLng={d.startLatLng}
          endAddr={d.endAddr}
          endLatLng={d.endLatLng}
        />
      ))}
    </div>
  );
}
