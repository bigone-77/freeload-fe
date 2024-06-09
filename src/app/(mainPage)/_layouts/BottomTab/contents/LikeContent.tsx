'use client';

import { useState } from 'react';
// import { requestPermission } from '@/hooks/push/requestPermission';
// import { useSendPush } from '@/hooks/push/useSendPush';
import { MdOutlinePlace, FaRoute } from '@/constants/Icons';

export default function LikeContent() {
  const [clickedRest, setClickedRest] = useState<'rest' | 'route'>('rest');
  // const sendPush = useSendPush();

  // const pushHandler = async () => {
  //   // TODO: 일단 로컬스토리지에 fcmToken이 있는지 확인하고,
  //   const isToken = localStorage.getItem('fcmToken');
  //   // TODO: 만약에 토큰이 없다면 권한 재요청하기
  //   if (!isToken) {
  //     window.alert('토큰이 없어요');
  //     requestPermission();
  //   } else {
  //     // TODO: 토큰이 있다면 sendPush
  //     sendPush({
  //       token: isToken,
  //       data: {
  //         title: '테스트',
  //         body: '테스트용 바디입니다',
  //         click_action: '/',
  //       },
  //     });
  //   }
  // };

  return (
    <div className="w-full px-4">
      {/* 찜컨텐츠
      <button type="button" onClick={pushHandler}>
        푸시 알림 테스트 버튼
      </button> */}
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
    </div>
  );
}
