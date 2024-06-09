'use client';

import { MdOutlinePlace, FaRoute } from '@/constants/Icons';
import { Dispatch, SetStateAction } from 'react';

interface ISelectTypeProps {
  clickedRest: 'rest' | 'route';
  setClickedRest: Dispatch<SetStateAction<'rest' | 'route'>>;
}

export default function SelectType({
  clickedRest,
  setClickedRest,
}: ISelectTypeProps) {
  return (
    <div className="flex items-center border rounded-3xl bg-slate-100 font-semibold">
      <section
        className={`w-1/2 ${clickedRest === 'rest' && 'border-2 border-primary text-primary bg-white'} rounded-3xl flex items-center justify-center gap-1 py-3`}
        onClick={() => setClickedRest('rest')}
      >
        <MdOutlinePlace size={25} />
        <p className="">휴게소</p>
      </section>
      <section
        className={`w-1/2 ${clickedRest === 'route' && 'border-2 border-primary text-primary bg-white'} rounded-3xl flex items-center justify-center gap-1 py-3`}
        onClick={() => setClickedRest('route')}
      >
        <FaRoute size={20} />
        <p className="">경로</p>
      </section>
    </div>
  );
}
