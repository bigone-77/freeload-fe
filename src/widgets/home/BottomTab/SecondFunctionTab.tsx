'use client';

import LabelInput from '@/components/LabelInput';
import Image from 'next/image';
import { useState } from 'react';

export default function SecondFunctionTab() {
  const [startArea, setStartArea] = useState('');
  const [endArea, setEndArea] = useState('');

  const toggleHandler = () => {
    setStartArea(endArea);
    setEndArea(startArea);
  };
  return (
    <div className="flex items-center jusify-center gap-4 w-full px-10">
      <div className="flex flex-col items-center">
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/start-area.svg"
          alt="start-svg"
          width={12}
          height={12}
        />
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/start-end-link.svg"
          alt="link-svg"
          width={1}
          height={63}
        />
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/end-area.svg"
          alt="link-svg"
          width={14}
          height={18}
        />
      </div>
      <div className="flex flex-col items-center gap-10">
        <LabelInput
          name="start_area"
          label="출발지"
          value={startArea}
          onChange={(e) => setStartArea(e.target.value)}
          placeholder="출발지를 입력해주세요"
        />
        <LabelInput
          name="end_area"
          label="도착지"
          value={endArea}
          onChange={(e) => setEndArea(e.target.value)}
          placeholder="도착지를 입력해주세요"
        />
      </div>
      <Image
        src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714473871/toggle-area.svg"
        alt="toggle-area"
        width={26}
        height={26}
        onClick={toggleHandler}
      />
    </div>
  );
}
