'use client';

import { useFetchOcr } from '@/hooks/useFetchOcr';
import { useRouter } from 'next/navigation';
import { IoIosCamera, IoIosAlbums } from 'react-icons/io';

interface IButtonGroupProps {
  id: string;
}

export default function ButtonGroup({ id }: IButtonGroupProps) {
  const router = useRouter();
  const handleOcrRequest = useFetchOcr(id);

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
          onChange={handleOcrRequest}
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
          onChange={() => router.push(`/rest/${id}/customer/review`)}
          style={{ display: 'none' }}
        />
        <p>앨범 선택</p>
      </label>
    </div>
  );
}
