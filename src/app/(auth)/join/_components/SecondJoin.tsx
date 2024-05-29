'use client';

import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store';
import { useRouter } from 'next/navigation';

import PrimaryButton from '@/Common/PrimaryButton';
import { Timer } from './Timer';

export default function SecondJoin() {
  const phoneNum = useSelector((state: RootState) => state.joinUser.phoneNum);
  const router = useRouter();

  const [authNums, setAuthNums] = useState<string[]>(['', '', '', '']);
  const [passed, setPassed] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newAuthNums = [...authNums];
      newAuthNums[index] = value;
      setAuthNums(newAuthNums);

      if (value.length === 1 && index < 3) {
        inputRefs[index + 1].current?.focus();
      }

      // 입력값이 모두 채워져 있는지 확인
      if (newAuthNums.every((num) => num !== '')) {
        setPassed(true);
      } else {
        setPassed(false);
      }
    }
  };

  const nextHandler = () => {
    if (passed === true) {
      router.push('/join?step=3');
    }
  };

  return (
    <main className="mt-10 flex flex-col w-full px-10">
      <div className="grid grid-cols-4 items-center gap-4">
        {authNums.map((authNum, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            className="w-[60px] h-[73px] border text-center text-3xl bg-text100 bg-opacity-50 border-primary focus:bg-blue-100 outline-none"
            value={authNum}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
      <p className="font-regular text-text400 mt-10 mb-20">
        +81 {phoneNum} 로 확인코드를 보냈습니다
      </p>
      <PrimaryButton passed={passed} onClick={nextHandler}>
        다음
      </PrimaryButton>
      <Timer />
    </main>
  );
}
