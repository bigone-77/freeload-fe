'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Modal from 'react-modal';

import { VscDebugRestart, CgClose } from '@/constants/Icons';
import { customModalStyles } from '@/constants/Modal/OilFilter';
import PrimaryButton from '@/Common/PrimaryButton';
import TypeTag from './TypeTag';
import FuelTag from './FuelTag';

interface IFilterAreaProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FilterModal({
  modalOpen,
  setModalOpen,
}: IFilterAreaProps) {
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <div className="flex flex-col justify-center pb-2">
        <header className="flex items-center justify-center relative border-b-2 border-b-text100 pb-4">
          <h1 className="font-semibold text-2xl">필터</h1>
          <div className="flex items-center absolute left-1">
            <VscDebugRestart size={25} color="#bcbcbc" />
            <p className="text-[#bcbcbc]">초기화</p>
          </div>
          <CgClose
            className="absolute right-1"
            size={25}
            onClick={() => setModalOpen(false)}
          />
        </header>
        <div className="mt-4 mb-8">
          <FuelTag value={selectedFuel} onChange={setSelectedFuel} />
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-lg font-semibold mb-4">가격 정렬</h2>
            <select
              // value={profile.gender}
              // onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
              className="border border-gray-300 rounded-lg w-48 h-12 appearance-none text-sm pl-8 pr-4 focus:outline-none"
            >
              <option value="">선택</option>
              <option value="pricy">가격 높은순</option>
              <option value="no-pricy">가격 낮은순</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">수소/전기차</h2>
          <div className="flex items-center gap-10 mt-4">
            <TypeTag
              type="수소차"
              value={selectedType}
              onClick={setSelectedType}
            />
            <TypeTag
              type="전기차"
              value={selectedType}
              onClick={setSelectedType}
            />
          </div>
        </div>
        <PrimaryButton classProps="mt-10" onClick={() => {}}>
          적용하기
        </PrimaryButton>
      </div>
    </Modal>
  );
}
