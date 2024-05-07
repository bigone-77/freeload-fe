'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Loader from '@/components/Loader';
import GoToSearchInput from '@/components/GoToSearchInput';
import { TargetPlace } from '@/models/targetPlace';
import NextButton from '@/components/NextButton';
import SearchModal from '@/app/(main)/_components/search/SearchModal';
import { toast } from 'react-toastify';
import StartEndBar from '@/app/(main)/search/_component/StartEndBar';

interface ISecondTabProps {
  currentLocation: string;
  currentLat: number;
  currentLng: number;
}

export default function SecondFunctionTab({
  currentLocation,
  currentLat,
  currentLng,
}: ISecondTabProps) {
  const router = useRouter();
  const [startArea, setStartArea] = useState<TargetPlace>({
    name: `내위치: ${currentLocation}`,
    latitude: currentLat,
    longitude: currentLng,
  });
  const [endArea, setEndArea] = useState<TargetPlace>({
    name: '',
    latitude: 0,
    longitude: 0,
  });
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (startArea.name && endArea.name) {
      setPassed(true);
    } else {
      setPassed(false);
    }
    if (startArea.name !== '' && startArea.name === endArea.name) {
      setPassed(false);
      toast.warn('출발지, 도착지 지역이 같습니다. 다시 확인해주세요!');
      setStartArea({
        name: '',
        latitude: 0,
        longitude: 0,
      });
      setEndArea({
        name: '',
        latitude: 0,
        longitude: 0,
      });
    }
  }, [startArea, endArea, setPassed]);

  const [showStartModal, setShowStartModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);

  const toggleHandler = () => {
    setStartArea(endArea);
    setEndArea(startArea);
  };

  const searchPathHandler = () => {
    const originLatLng = `${String(startArea.longitude)},${String(startArea.latitude)}`;
    const destLatLng = `${String(endArea.longitude)},${String(endArea.latitude)}`;
    router.push(
      `/search?originLatLng=${originLatLng}&originAddr=${startArea.name}&destLatLng=${destLatLng}&destAddr=${endArea.name}`,
    );
  };

  let content;

  if (currentLocation === '') {
    content = <Loader />;
  } else {
    content = (
      <div className="flex flex-col gap-3">
        <GoToSearchInput
          name="start_area"
          label="출발지"
          value={startArea.name}
          placeholder="출발지를 입력해주세요"
          onFocus={() => setShowStartModal(true)}
        />
        <div className="flex justify-end pr-6">
          <Image
            src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714473871/toggle-area.svg"
            alt="toggle-area"
            width={26}
            height={26}
            onClick={toggleHandler}
          />
        </div>
        <GoToSearchInput
          name="end_area"
          label="도착지"
          value={endArea.name}
          placeholder="도착지를 입력해주세요"
          onFocus={() => setShowEndModal(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-full mini:px-[10%] px-0 mt-12">
      <div className="flex items-center justify-center gap-2">
        <StartEndBar />
        {content}
      </div>
      <section className="mt-12 px-10">
        <NextButton
          label="경로 찾기"
          passed={passed}
          onClick={searchPathHandler}
        />
      </section>
      {showStartModal && (
        <SearchModal
          value={startArea.name}
          setValue={setStartArea}
          exitModal={() => setShowStartModal(false)}
        />
      )}
      {showEndModal && (
        <SearchModal
          value={endArea.name}
          setValue={setEndArea}
          exitModal={() => setShowEndModal(false)}
        />
      )}
    </div>
  );
}
