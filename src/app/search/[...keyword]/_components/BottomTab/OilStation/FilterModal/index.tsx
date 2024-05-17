import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';

import { VscDebugRestart, CgClose } from '@/constants/Icons';
import { customModalStyles } from '@/constants/Modal/OilFilter';
import PrimaryButton from '@/Common/PrimaryButton';
import PriceTag from './PriceTag';
import TypeTag from './TypeTag';

interface IFilterAreaProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FilterModal({
  modalOpen,
  setModalOpen,
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
          <CgClose className="absolute right-1" size={25} />
        </header>
        <div className="mt-4 mb-8">
          <h2 className="text-lg font-semibold">가격 정렬</h2>
          <div className="grid justify-items-stretch mt-4 gap-4">
            <PriceTag name="휘발유" />
            <PriceTag name="경유" />
            <PriceTag name="LPG" />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">수소/전기차</h2>
          <div className="flex items-center gap-10 mt-4">
            <TypeTag type="수소차" />
            <TypeTag type="전기차" />
          </div>
        </div>
        <PrimaryButton onClick={() => {}}>적용하기</PrimaryButton>
      </div>
    </Modal>
  );
}
