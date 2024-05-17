import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';

import { selectDistModalStyles } from '@/constants/Modal/SelectDist';
import { CgClose } from '@/constants/Icons';
import DistCard from './DistCard';

interface ISelectedDistFilterProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  dist: number;
  setDist: Dispatch<SetStateAction<number>>;
  tag: '휴게소' | '주유소';
  setTag: Dispatch<SetStateAction<'휴게소' | '주유소'>>;
}

export default function SelectedFilter({
  modalOpen,
  setModalOpen,
  dist,
  setDist,
  tag,
  setTag,
}: ISelectedDistFilterProps) {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={selectDistModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <main className="flex flex-col gap-4 relative">
        <CgClose className="absolute right-1" size={25} />
        <h3 className="font-semibold">반경 설정</h3>
        <h4 className="text-sm text-text200">
          해당 반경 내 장소를 추천해드립니다.
        </h4>
        <section className="flex items-center justify-between">
          <DistCard distUnit={1} setDist={setDist} selected={dist === 1000} />
          <DistCard distUnit={5} setDist={setDist} selected={dist === 5000} />
          <DistCard distUnit={10} setDist={setDist} selected={dist === 10000} />
          <DistCard distUnit={20} setDist={setDist} selected={dist === 20000} />
        </section>
        <h3 className="font-semibold">장소 태그</h3>
        <section className="flex items-center gap-3">
          <p
            className={`py-2 px-4 rounded-xl border ${tag === '휴게소' ? 'text-text50 bg-primary' : 'text-text600 bg-text50'}`}
            onClick={() => setTag('휴게소')}
          >
            휴게소
          </p>
          <p
            className={`py-2 px-4 rounded-xl border ${tag === '주유소' ? 'text-text50 bg-primary' : 'text-text600 bg-text50'}`}
            onClick={() => setTag('주유소')}
          >
            주유소
          </p>
        </section>
      </main>
    </Modal>
  );
}
