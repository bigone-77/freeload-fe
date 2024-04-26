import { useState } from 'react';
import { useRouter } from 'next/navigation';

import EnteredInput from '@/components/EnteredInput';
import PrimaryButton from '@/components/NextButton';
import { useDispatch } from 'react-redux';
import { setPhoneNum } from '@/store/slices/joinUserSlice';

export default function FirstJoin() {
  const [enteredPhoneNum, setEnteredPhoneNum] = useState('');
  const [passed, setPassed] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const nextHandler = () => {
    dispatch(setPhoneNum({ phoneNum: enteredPhoneNum }));
    router.push('/join/2');
  };

  const handlePhoneNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (enteredPhoneNum.length === 10) {
      setPassed(true);
    } else {
      setPassed(false);
    }
    setEnteredPhoneNum(e.target.value);
  };

  return (
    <main className="mt-10 flex flex-col w-full px-10">
      <EnteredInput value={enteredPhoneNum} onChange={handlePhoneNumChange} />
      <p className="font-regular text-text400 mt-10 mb-20">
        번호 확인을 위해 SMS 코드를 전송합니다
      </p>
      <PrimaryButton label="다음" passed={passed} onClick={nextHandler} />
    </main>
  );
}
