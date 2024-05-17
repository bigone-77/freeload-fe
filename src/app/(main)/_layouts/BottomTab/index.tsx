'use client';

import { useState } from 'react';
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from '@/constants/Icons';
import Loader from '@/Common/Loader';
import HomeContent from './contents/HomeContent';
import LikeContent from './contents/LikeContent';
import SelectContent from './contents/SelectContent';
import ProfileContent from './contents/ProfileContent';

export default function BottomTab() {
  const segment = useSelectedLayoutSegment();
  const params = useSearchParams();

  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  );

  let content;
  if (segment) {
    switch (segment) {
      case 'home':
        if (params.get('like') !== 'true') {
          content = currentLatLng.latitude ? (
            <HomeContent
              lat={currentLatLng.latitude!}
              lng={currentLatLng.longitude!}
            />
          ) : (
            <Loader />
          );
        } else {
          content = <LikeContent />;
        }
        break;
      case 'select':
        content = <SelectContent />;
        break;
      case 'profile':
        content = <ProfileContent />;
        break;
      default:
        break;
    }
  }
  const [goUp, setGoUp] = useState(false);

  const upDownHandler = () => {
    setGoUp(!goUp);
  };

  return (
    <section
      className={`
    ${goUp ? 'h-[85%]' : 'h-32'}  
      absolute flex flex-col items-center bottom-0 left-0 right-0 z-10 w-full shadow-2xl py-3 bg-text50 rounded-tl-[20px] rounded-tr-[20px] opacity-95 transition-all transform duration-1000
    `}
    >
      {goUp ? (
        <MdKeyboardArrowDown
          size={30}
          onClick={upDownHandler}
          className="animate-bounce"
        />
      ) : (
        <MdKeyboardArrowUp
          size={30}
          onClick={upDownHandler}
          className="animate-bounce"
        />
      )}
      {content}
    </section>
  );
}