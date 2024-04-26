import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import EnteredInput from '@/components/EnteredInput';
import PrimaryButton from '@/components/NextButton';
import getYears from '@/hooks/getYears';
import { useRouter } from 'next/navigation';

export default function ThirdJoin() {
  const router = useRouter();
  const userPhoneNum = useSelector(
    (state: RootState) => state.joinUser.phoneNum,
  );
  const [enteredUserName, setEnteredUserName] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [passed, setPassed] = useState(false);

  const Years = getYears();

  useEffect(() => {
    if (enteredUserName && selectedYear && selectedGender) {
      setPassed(true);
    } else {
      setPassed(false);
    }
  }, [enteredUserName, selectedYear, selectedGender]);

  const nextHandler = () => {
    const formData = {
      userName: enteredUserName,
      phoneNum: userPhoneNum,
      birthYear: selectedYear,
      gender: selectedGender,
    };

    console.log(formData);

    router.replace('/');
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
          <option value="">선택</option>
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
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
          className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-4 outline-none"
        >
          <option value="">선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </div>
      <PrimaryButton label="홈으로" passed={passed} onClick={nextHandler} />
    </main>
  );
}
