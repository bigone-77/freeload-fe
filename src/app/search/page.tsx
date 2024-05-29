'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { TargetPlace } from '@/models/targetPlace';
import useKeywordSearchList from '@/hooks/useKeywordSearchList';
import { RootState } from '@/shared/store';
import { useAddressFromLatLng } from '@/hooks/useGeocode';
import SearchList from './_components/SearchList';
import RecentSearchList from './_components/RecentSearchList';
import SearchInput from './_components/SearchInput';

export default function SearchPage() {
  const router = useRouter();

  const [targetArea, setTargetArea] = useState<TargetPlace>({
    name: '',
    latitude: 0,
    longitude: 0,
  });

  const addressList = useKeywordSearchList(targetArea.name); // 키워드를 통해 얻은 주소목록
  const recentKeywords = useSelector((state: RootState) => state.recentTarget); // 최근 검색 기록
  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  ); // 현재 유저의 위도, 경도
  const currentAddressName = useAddressFromLatLng(
    currentLatLng.latitude ?? 37.55998,
    currentLatLng.longitude ?? 126.9858296,
  );

  let content;
  if (addressList.length > 0) {
    content = (
      <>
        {addressList.map((address, index) => (
          <SearchList key={index} address={address} setValue={setTargetArea} />
        ))}
      </>
    );
  } else if (recentKeywords.length > 0) {
    content = (
      <>
        {recentKeywords.map((keyword, index) => (
          <RecentSearchList
            key={index}
            keyword={keyword}
            setValue={setTargetArea}
          />
        ))}
      </>
    );
  } else {
    content = <p>최근 검색 기록이 없습니다.</p>;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTargetArea((prevState: TargetPlace) => ({
      ...prevState,
      name: newValue,
    }));
  };

  const deleteHandler = () => {
    setTargetArea((prevState: TargetPlace) => ({
      ...prevState,
      name: '',
      latitude: 0,
      longitude: 0,
    }));
  };

  useEffect(() => {
    if (targetArea.latitude) {
      const originLatLng = `${String(currentLatLng.longitude)},${String(currentLatLng.latitude)}`;
      const destLatLng = `${String(targetArea.longitude)},${String(targetArea.latitude)}`;
      router.push(
        `/search/${currentAddressName}/${targetArea.name}?originLatLng=${originLatLng}&destLatLng=${destLatLng}`,
      );
    }
  });

  return (
    <div className="pt-5 pr-2">
      <SearchInput
        value={targetArea.name}
        onChange={handleInputChange}
        deleteHandler={deleteHandler}
      />
      <ul className="overflow-y-scroll h-full w-full px-4 py-2">{content}</ul>
    </div>
  );
}
