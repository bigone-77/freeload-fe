'use client';

import { useState } from 'react';
import SelectType from './SelectType';
import ShowRest from './ShowRest';
import ShowRoute from './ShowRoute';
// import { requestPermission } from '@/hooks/push/requestPermission';
// import { useSendPush } from '@/hooks/push/useSendPush';

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
  let content;
  if (clickedRest === 'rest') {
    content = <ShowRest />;
  }

  if (clickedRest === 'route') {
    content = <ShowRoute />;
  }

  return (
    <div className="w-full px-4">
      {/* 찜컨텐츠
      <button type="button" onClick={pushHandler}>
        푸시 알림 테스트 버튼
      </button> */}
      <SelectType clickedRest={clickedRest} setClickedRest={setClickedRest} />
      {content}
    </div>
  );
}