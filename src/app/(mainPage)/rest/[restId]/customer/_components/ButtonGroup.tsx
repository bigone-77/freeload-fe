'use client';

import { useState } from 'react';
import { useFetchGeneral } from '@/hooks/useFetchGeneral';
import { useFetchOcr } from '@/hooks/useFetchOcr';
import { IoIosCamera, IoIosAlbums } from 'react-icons/io';
import Loader from '@/Common/Loader';

interface IButtonGroupProps {
  id: string;
  way: 'receipt' | 'credit';
}

export default function ButtonGroup({ id, way }: IButtonGroupProps) {
  const [loading, setLoading] = useState(false);
  const handleOcrRequest = useFetchOcr(id, way, setLoading);
  const handleGeneralRequest = useFetchGeneral(id, way, setLoading);

  return (
    <div className="flex items-center justify-center px-4 gap-6">
      {loading ? (
        <Loader
          message={`${way === 'receipt' ? '영수증' : '결제내역'} 인식 중입니다.`}
        />
      ) : (
        <>
          {way === 'receipt' && (
            <label
              htmlFor="file"
              className="flex items-center gap-[2px] cursor-pointer border p-2 rounded-md"
            >
              <IoIosCamera size={25} />
              <input
                type="file"
                id="file"
                accept="image/*"
                capture="environment"
                onChange={
                  way === 'receipt' ? handleOcrRequest : handleGeneralRequest
                }
                style={{ display: 'none' }}
              />
              <p className="w-full">직접 찍기</p>
            </label>
          )}

          <label
            htmlFor="album"
            className="flex items-center gap-[2px] cursor-pointer border p-2 rounded-md"
          >
            <IoIosAlbums size={18} />
            <input
              type="file"
              id="album"
              accept="image/*"
              onChange={
                way === 'receipt' ? handleOcrRequest : handleGeneralRequest
              }
              style={{ display: 'none' }}
            />
            <p className="w-full">앨범 선택</p>
          </label>
        </>
      )}
    </div>
  );
}
