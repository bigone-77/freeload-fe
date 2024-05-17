'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { MdKeyboardArrowDown } from '@/constants/Icons';
import SelectedFilter from './SelectedFilter';

interface IHeaderProps {
  address: string;
  dist: number;
  setDist: Dispatch<SetStateAction<number>>;
  tag: '휴게소' | '주유소';
  setTag: Dispatch<SetStateAction<'휴게소' | '주유소'>>;
}

export default function Header({
  address,
  dist,
  setDist,
  tag,
  setTag,
}: IHeaderProps) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <header className="flex items-center mt-4 text-lg font-semibold">
      <h2>{address} 주변</h2>
      <span className="ml-2 text-primary">{dist / 1000}km 반경</span>
      <span className="ml-2 text-primary">{tag}</span>
      <MdKeyboardArrowDown
        size={25}
        color="gray"
        onClick={() => setShowFilter(true)}
      />
      {showFilter && (
        <SelectedFilter
          modalOpen={showFilter}
          setModalOpen={setShowFilter}
          setDist={setDist}
          dist={dist}
          tag={tag}
          setTag={setTag}
        />
      )}
    </header>
  );
}
