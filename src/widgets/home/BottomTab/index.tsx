'use client';

import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import { useAddressFromLatLng } from '@/hooks/useLocation';
import { Coordinates } from '@/models/location';
import AddressCard from '@/app/(home)/_components/map/AddressCard';
import FunctionCard from '@/app/(home)/_components/map/FunctionCard';
import FirstFunctionTab from './FirstFunctionTab';
import SecondFunctionTab from './SecondFunctionTab';
import ThirdFunctionTab from './ThirdFunctionTab';

export default function BottomTab({ latitude, longitude }: Coordinates) {
  const [goUp, setGoUp] = useState(false);
  const [showTabNum, setShowTabNum] = useState(0);

  let address = useAddressFromLatLng(latitude!, longitude!); // 현재 지도 중심이 가리키는 주소

  if (address.includes('undefined')) {
    address = '위치 정보 없음';
  }

  const upDownHandler = () => {
    setGoUp(!goUp);
  };

  let content;

  if (showTabNum === 0) {
    content = (
      <>
        <AddressCard location={address} />
        <hr className={`${goUp && 'mb-5'}`} />
        {goUp && (
          <div className="flex flex-col gap-8 w-full items-center justify-center">
            <FunctionCard
              title="주변 휴게소 검색"
              description="현재 위치에서 가까운 휴게소 검색하기"
              onClick={() => setShowTabNum(1)}
            />
            <FunctionCard
              title="목적지로 찾기"
              description="원하는 목적지 입력을 통해 고속도로 선택하기"
              onClick={() => setShowTabNum(2)}
            />
            <FunctionCard
              title="고속도로 직접 선택"
              description="사용할 고속도로를 직접 선택하기"
              onClick={() => setShowTabNum(3)}
            />
          </div>
        )}
      </>
    );
  } else if (showTabNum === 1) {
    content = <FirstFunctionTab />;
  } else if (showTabNum === 2) {
    content = <SecondFunctionTab />;
  } else {
    content = <ThirdFunctionTab />;
  }

  return (
    <div
      className={`
        ${goUp ? 'h-[80%]' : 'h-24'}  
        fixed bottom-0 left-0 right-0 bg-white z-10 transition-all transform flex flex-col items-center duration-1000
      `}
    >
      {goUp ? (
        <MdKeyboardArrowDown size={30} onClick={upDownHandler} />
      ) : (
        <MdKeyboardArrowUp size={30} onClick={upDownHandler} />
      )}
      {content}
    </div>
  );
}
