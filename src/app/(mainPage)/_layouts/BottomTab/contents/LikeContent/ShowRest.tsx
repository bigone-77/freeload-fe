'use client';

import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import DetailRestInfo from '@/app/(mainPage)/select/[roadName]/_components/BottomModal/DetailRestInfo';
import { getLikeRestData } from '@/lib/user/getLikeRestData';
import { RestResponse } from '@/models/Rest';
import { RootState } from '@/shared/store';
import { getDifferDistance } from '@/utils/getDifferDistance';
import Loader from '@/Common/Loader';

interface IShowRestProps {
  email: string;
}

export default function ShowRest({ email }: IShowRestProps) {
  const currentCoords = useSelector(
    (state: RootState) => state.currentLocation,
  );
  const differDist = (lat: string, lng: string) =>
    getDifferDistance(
      currentCoords.latitude!,
      currentCoords.longitude!,
      Number(lat),
      Number(lng),
    );

  const { data: LikeRestData, isLoading } = useQuery<RestResponse>({
    queryKey: ['rest', 'like', email],
    queryFn: () => getLikeRestData(email),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!LikeRestData || !LikeRestData.data || LikeRestData.data.length === 0) {
    return <div>즐겨찾기한 휴게소가 없어요</div>;
  }

  return (
    <div className="mt-8">
      <p className="font-semibold text-xl">
        내 휴게소 {LikeRestData.data.length}
      </p>
      {LikeRestData.data.map((d, index) => (
        <DetailRestInfo
          like
          key={index}
          data={d}
          dist={differDist(d.latitude, d.longitude)}
          coords={{ lat: Number(d.latitude), lng: Number(d.longitude) }}
          direction={d.gudClssCd === '1' ? 'up' : 'down'}
        />
      ))}
    </div>
  );
}
