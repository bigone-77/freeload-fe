import { Dispatch, SetStateAction, useState } from 'react';
import { UpdateSession } from 'next-auth/react';

import getYear from '@/utils/getYear';
import PrimaryButton from '@/Common/PrimaryButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EditProfile } from '@/lib/user/EditProfile';
import { toast } from 'react-toastify';
import ImageUpload from './ImageUpload';

interface IEditFormProps {
  updateHandler: UpdateSession;
  setShowEdit: Dispatch<SetStateAction<boolean>>;
  image: string;
  name: string;
  gender: string;
  birthYear: number;
  email: string;
  phone: string;
}

export default function EditForm({
  updateHandler,
  setShowEdit,
  image,
  name,
  gender,
  birthYear,
  email,
  phone,
}: IEditFormProps) {
  const [enteredName, setEnteredName] = useState(name);
  const [selectedGender, setSelectedGender] = useState(gender);
  const [selectedBirthYear, setSelectedBirthYear] = useState(birthYear);
  const [enteredFirstPhone, setEnteredFirstPhone] = useState(phone.slice(3, 7));
  const [enteredSecondPhone, setEnteredSecondPhone] = useState(
    phone.slice(7, 11),
  );
  const [profileImg, setProfileImg] = useState(image);

  const formData = {
    email,
    username: enteredName,
    profile_image: profileImg,
    birthYear: selectedBirthYear,
    phoneNum: `010${enteredFirstPhone}${enteredSecondPhone}`,
    gender: selectedGender,
  };
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: EditProfile,
    onSuccess: () => {
      updateHandler({
        name: enteredName,
        image: profileImg,
      });
      queryClient.invalidateQueries({
        queryKey: [email],
      });
      toast.success('프로필이 변경되었습니다.');
      setShowEdit(false);
    },
    onError: (error) => {
      console.error('Mutation failed', error);
    },
  });

  const Years = getYear();
  return (
    <>
      <p className="text-2xl font-semibold">기본정보</p>

      <ImageUpload value={profileImg} onChange={(img) => setProfileImg(img)} />

      <section className="flex flex-col">
        <p className="w-20 font-semibold">메일주소</p>
        <div className="flex items-center gap-2 my-4">
          <p className="p-3 w-full bg-gray-50 border-gray-300 border rounded-lg">
            {email.split('@')[0]}
          </p>
          @
          <p className="p-3 w-full bg-gray-50 border-gray-300 border rounded-lg">
            {email.split('@')[1]}
          </p>
        </div>
      </section>
      <label htmlFor="name" className="flex items-center gap-6 my-4">
        <p className="w-20 font-semibold">이름</p>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          className="p-3 w-24 bg-gray-50 border-gray-300 border rounded-lg hover:opacity-80 transition-all outline-none"
        />
      </label>
      <div className="flex items-center gap-6 my-4">
        <p className="w-20 font-semibold">성별</p>
        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value as string)}
          className="w-24 pl-1 pr-0 py-[10px] bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
        >
          <option value={gender} disabled>
            {gender === 'MALE' ? '남성' : '여성'}
          </option>
          {gender === 'MALE' ? (
            <option value="FEMALE">여성</option>
          ) : (
            <option value="MALE">남성</option>
          )}
        </select>
      </div>
      <div className="flex items-center gap-6 my-4">
        <p className="w-20 font-semibold">출생연도</p>
        <select
          value={selectedBirthYear}
          onChange={(e) => setSelectedBirthYear(Number(e.target.value))}
          className="w-32 p-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
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
      <section className="flex flex-col mb-10">
        <p className="w-20 font-semibold">전화번호</p>
        <div className="flex items-center gap-2 my-4">
          <p className="p-3 w-24 bg-gray-50 border-gray-300 border rounded-lg">
            {phone.slice(0, 3)}
          </p>
          <input
            type="number"
            className="p-3 w-24 bg-gray-50 border-gray-300 border rounded-lg"
            value={enteredFirstPhone}
            onChange={(e) => setEnteredFirstPhone(e.target.value)}
          />
          <input
            type="number"
            className="p-3 w-24 bg-gray-50 border-gray-300 border rounded-lg"
            value={enteredSecondPhone}
            onChange={(e) => setEnteredSecondPhone(e.target.value)}
          />
        </div>
      </section>
      <PrimaryButton onClick={() => editMutation.mutate(formData)}>
        정보 수정 완료
      </PrimaryButton>
    </>
  );
}
