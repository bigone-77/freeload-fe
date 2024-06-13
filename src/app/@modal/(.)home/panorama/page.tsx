'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Roadview } from 'react-kakao-maps-sdk';

import { AiFillCloseCircle } from '@/constants/Icons';

export default function PanoramamModal() {
  const router = useRouter();
  const params = useSearchParams();
  const latitude = params.get('latitude');
  const longitude = params.get('longitude');

  return (
    <div className="absolute inset-0 w-full h-[80vh] z-20 flex items-center justify-center">
      <Roadview
        position={{
          lat: Number(latitude),
          lng: Number(longitude),
          radius: 50,
        }}
        style={{
          width: '80%',
          height: '500px',
          position: 'relative',
          borderRadius: '20px',
        }}
      >
        <AiFillCloseCircle
          style={{ position: 'absolute', top: '180px', right: '70px' }}
          size={40}
          onClick={() => router.back()}
        />
      </Roadview>
    </div>
  );
}
