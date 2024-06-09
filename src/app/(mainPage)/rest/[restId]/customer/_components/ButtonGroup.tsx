'use client';

import { useFetchGeneral } from '@/hooks/useFetchGeneral';
import { useFetchOcr } from '@/hooks/useFetchOcr';
import { useRouter } from 'next/navigation';
import { IoIosCamera, IoIosAlbums } from 'react-icons/io';

interface IButtonGroupProps {
  id: string;
  restNm: string | null;
  way: 'receipt' | 'credit';
}

export default function ButtonGroup({ id, restNm, way }: IButtonGroupProps) {
  const router = useRouter();
  const handleOcrRequest = useFetchOcr(id, way);
  const handleGeneralRequest = useFetchGeneral(id, way);

  return (
    <div className="flex items-center justify-center px-4 gap-6">
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
          onChange={way === 'receipt' ? handleOcrRequest : handleGeneralRequest}
          style={{ display: 'none' }}
        />
        <p>직접 찍기</p>
      </label>

      <label
        htmlFor="album"
        className="flex items-center gap-1 cursor-pointer border p-2 rounded-md"
      >
        <IoIosAlbums size={20} />
        <input
          type="file"
          id="album"
          accept="image/*"
          onChange={() =>
            router.push(
              `/rest/${id}/customer/review?restNm=${restNm}&way=${way}`,
            )
          }
          style={{ display: 'none' }}
        />
        <p>앨범 선택</p>
      </label>
    </div>
  );
}
