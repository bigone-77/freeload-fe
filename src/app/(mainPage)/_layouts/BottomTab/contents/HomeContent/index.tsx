'use client';

import { useState } from 'react';

import AddressCard from '@/app/(mainPage)/home/_components/AddressCard';
import { useAddressFromLatLng } from '@/hooks/useAddressFromLatLng';
import useKeywordSearchList from '@/hooks/useKeywordSearchList';
import Header from './Header';
import PlaceCard from './PlaceCard';

export default function HomeContent({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  const [dist, setDist] = useState(1000);
  const [tag, setTag] = useState<'휴게소' | '주유소'>('휴게소');

  const tagDistData = useKeywordSearchList(tag, dist);
  let address = useAddressFromLatLng(lat, lng); // 현재 사용자가 위치한 위도, 경도

  if (address.includes('undefined')) {
    address = '위치 정보 없음';
  }

  console.log(tagDistData);

  return (
    <>
      <AddressCard location={address} />
      <div className="w-full px-4">
        <Header
          address={address}
          dist={dist}
          setDist={setDist}
          tag={tag}
          setTag={setTag}
        />
        {tagDistData.length > 0 ? (
          <div className="grid mini:grid-cols-2 tablet:grid-cols-3 grid-cols-1 gap-4 mt-2">
            {tagDistData.map((data, index) => (
              <PlaceCard
                key={index}
                name={data.place_name}
                category={data.category_name.split('>')[0]}
                dist={data.distance}
                lat={data.y}
                lon={data.x}
                phone={data.phone}
              />
            ))}
          </div>
        ) : (
          <p>찾으시는 {tag}가 없습니다.</p>
        )}
      </div>
    </>
  );
}
