'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { setEmail, setPhoneNum } from '@/shared/store/slices/joinUserSlice';
import PrimaryButton from '@/Common/PrimaryButton';
import { usePushAuthNum } from '@/hooks/auth/usePushAuthNum';
import EnteredInput from '../_components/EnteredInput';

export default function FirstJoin() {
  const [enteredPhoneNum, setEnteredPhoneNum] = useState('');
  const [passed, setPassed] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useDispatch();

  const { sendSMSNum } = usePushAuthNum(enteredPhoneNum);

  const userEmail = params.get('email');

  useEffect(() => {
    if (userEmail) {
      dispatch(setEmail({ email: userEmail }));
    }
  }, []);

  const nextHandler = () => {
    dispatch(setPhoneNum({ phoneNum: enteredPhoneNum }));
    sendSMSNum();
    router.push('/join?step=2');
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
      <EnteredInput
        value={enteredPhoneNum}
        onChange={handlePhoneNumChange}
        placeholder="공백없이 숫자만 입력해주세요"
      />
      <p className="font-regular text-text400 mt-10 mb-20">
        번호 확인을 위해 SMS 코드를 전송합니다
      </p>
      <PrimaryButton passed={passed} onClick={nextHandler}>
        다음
      </PrimaryButton>
    </main>
  );
}
