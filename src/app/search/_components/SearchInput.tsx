'use client';

import { useRouter } from 'next/navigation';
import { AiFillCloseCircle, IoChevronBack } from '@/constants/Icons';

interface ISearchInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  deleteHandler: () => void;
}

export default function SearchInput({
  value,
  onChange,
  deleteHandler,
}: ISearchInputProps) {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center relative">
      <IoChevronBack size={35} onClick={() => router.back()} />
      <input
        className="border-2 rounded-xl w-full py-3 px-4 outline-none text-xl shadow-lg"
        value={value}
        onChange={onChange}
        placeholder="장소 및 주소 검색"
      />
      <AiFillCloseCircle
        color="gray"
        size={30}
        className="right-4 absolute"
        onClick={deleteHandler}
      />
    </div>
  );
}
