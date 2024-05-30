'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import getYear from '@/utils/getYear';
import PrimaryButton from '@/Common/PrimaryButton';
import { joinUser } from '@/hooks/auth/joinUser';
import EnteredInput from '../_components/EnteredInput';

export default function ThirdJoin() {
  const phoneNum = useSelector((state: RootState) => state.joinUser.phoneNum);

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

  const nextHandler = () => {
    const formData = {
      name: enteredUserName,
      phoneNum,
      birthYear: selectedYear,
      gender: selectedSex,
    };
    postJoin(formData);
    // 별도로 라우터나 전역적으로 저장하는 로직 있을 수 있음
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
