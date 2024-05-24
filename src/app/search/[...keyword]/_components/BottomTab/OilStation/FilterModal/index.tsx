'use client';

import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';

import { VscDebugRestart, CgClose } from '@/constants/Icons';
import { customModalStyles } from '@/constants/Modal/OilFilter';
import TypeTag from './TypeTag';
import FuelTag from './FuelTag';

interface IFilterAreaProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  fuel: string;
  setFuel: Dispatch<SetStateAction<string>>;
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
  selectedElec: boolean;
  setSelectedElec: Dispatch<SetStateAction<boolean>>;
  selectedHydr: boolean;
  setSelectedHydr: Dispatch<SetStateAction<boolean>>;
}

export default function FilterModal({
  modalOpen,
  setModalOpen,
  fuel,
  setFuel,
  order,
  setOrder,
  selectedElec,
  setSelectedElec,
  selectedHydr,
  setSelectedHydr,
}: IFilterAreaProps) {
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
          <FuelTag value={fuel} onChange={setFuel} />
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-lg font-semibold mb-4">가격 정렬</h2>
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="border border-gray-300 rounded-lg w-48 h-12 appearance-none text-sm pl-8 pr-4 focus:outline-none"
            >
              <option value="">선택</option>
              <option value="DESC">가격 높은순</option>
              <option value="ASC">가격 낮은순</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">수소/전기차</h2>
          <div className="flex items-center gap-10 mt-4">
            <TypeTag
              type="수소차"
              selected={selectedElec}
              setSelected={setSelectedElec}
            />
            <TypeTag
              type="전기차"
              selected={selectedHydr}
              setSelected={setSelectedHydr}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
