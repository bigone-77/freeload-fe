'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import getYear from '@/utils/getYear';
import PrimaryButton from '@/Common/PrimaryButton';
import { joinUser } from '@/hooks/auth/joinUser';
import EnteredInput from '../_components/EnteredInput';

export default function ThirdJoin() {
  const router = useRouter();
  const userData = useSelector((state: RootState) => state.joinUser);

  const { postJoin } = joinUser();

  const [enteredUserName, setEnteredUserName] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const [passed, setPassed] = useState(false);

  const Years = getYear();

  useEffect(() => {
    if (enteredUserName && selectedYear && selectedSex) {
      setPassed(true);
    } else {
      setPassed(false);
    }
  }, [enteredUserName, selectedYear, selectedSex]);

  const nextHandler = async () => {
    const formData = {
      email: userData.email,
      phoneNum: userData.phoneNum,
      name: enteredUserName,
      birthYear: selectedYear,
      gender: selectedSex,
    };
    const response = await postJoin(formData);
    if (response === '추가입력 성공입니다') {
      router.replace('/home');
    }
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (enteredUserName.length > 0) {
      setPassed(true);
    } else {
      setPassed(false);
    }
    setEnteredUserName(e.target.value);
  };

  return (
    <main className="mt-10 flex flex-col w-full px-10">
      <div className="my-4">
        <p className="text-lg font-semibold mb-4">이름</p>
        <EnteredInput value={enteredUserName} onChange={handleUserNameChange} />
      </div>
      <div className="my-4">
        <p className="mb-4 text-lg font-semibold text-gray-90">출생연도</p>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-4 outline-none"
        >
          <option value="" disabled>
            선택
          </option>
          {Years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 mb-12">
        <p className="text-lg font-semibold mb-4">성별</p>
        <select
          value={selectedSex}
          onChange={(e) => setSelectedSex(e.target.value)}
          className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-4 outline-none"
        >
          <option value="" disabled>
            선택
          </option>
          <option value="MALE">남성</option>
          <option value="FEMALE">여성</option>
        </select>
      </div>
      <PrimaryButton passed={passed} onClick={nextHandler} classProps="py-4">
        다음
      </PrimaryButton>
    </main>
  );
}
