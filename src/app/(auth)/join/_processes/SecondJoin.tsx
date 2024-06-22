'use client';

import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { RootState } from '@/shared/store';
import PrimaryButton from '@/Common/PrimaryButton';
import { Timer } from '../_components/Timer';

export default function SecondJoin() {
  const realAuthNum = useSelector((state: RootState) => state.joinUser.authNum);
  const router = useRouter();

  const phoneNum = useSelector((state: RootState) => state.joinUser.phoneNum);

  const [enteredAuthNums, setEnteredAuthNums] = useState<string[]>([
    '',
    '',
    '',
    '',
  ]);
  const [passed, setPassed] = useState(false);
  const [error, setError] = useState('');
  const [resetTimer, setResetTimer] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newAuthNums = [...enteredAuthNums];
      newAuthNums[index] = value;
      setEnteredAuthNums(newAuthNums);

      if (value.length === 1 && index < 3) {
        inputRefs[index + 1].current?.focus();
      }

      if (newAuthNums.every((num) => num !== '')) {
        setPassed(true);
      } else {
        setPassed(false);
      }
    }
  };

  const setPushAuthNumHandler = () => {
    // TODO: 인증번호 다시 보내기
    setResetTimer(true);
  };

  const handleResetComplete = () => {
    setResetTimer(false);
  };

  const nextHandler = () => {
    if (passed === true) {
      if (Number(enteredAuthNums.join('')) !== realAuthNum) {
        setError('인증번호가 일치하지 않아요. 다시 확인해주세요.');
      } else {
        router.push('/join?step=3');
      }
    }
  };

  return (
    <main className="mt-10 flex flex-col w-full px-10 relative">
      <div className="grid grid-cols-4 items-center gap-4">
        {enteredAuthNums.map((authNum, index) => (
          <input
            type="number"
            key={index}
            ref={inputRefs[index]}
            className="w-[60px] h-[73px] border text-center text-3xl bg-text100 bg-opacity-50 border-primary focus:bg-blue-100 outline-none"
            value={authNum}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
      <p className="font-regular text-text400 my-20">
        +81 {phoneNum} 로 확인코드를 보냈습니다
      </p>
      <button
        type="button"
        className="border w-24 p-2 rounded-full my-4 justify-items-center absolute top-44 right-12 shadow-lg"
        onClick={setPushAuthNumHandler}
      >
        다시 받기
      </button>
      <p className="absolute text-sm top-2 text-error">{error}</p>
      <PrimaryButton passed={passed} onClick={nextHandler}>
        다음
      </PrimaryButton>
      <Timer reset={resetTimer} onResetComplete={handleResetComplete} />
    </main>
  );
}
