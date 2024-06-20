'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

import SelectType from './SelectType';
import ShowRest from './ShowRest';
import ShowRoute from './ShowRoute';

export default function LikeContent() {
  const userEmail = useSession().data?.user?.email;
  const [clickedRest, setClickedRest] = useState<'rest' | 'route'>('rest');

  let content;
  if (clickedRest === 'rest' && userEmail) {
    content = <ShowRest email={userEmail} />;
  }

  if (clickedRest === 'route' && userEmail) {
    content = <ShowRoute email={userEmail} />;
  }

  return (
    <div className="w-full px-4">
      <SelectType clickedRest={clickedRest} setClickedRest={setClickedRest} />
      {content}
    </div>
  );
}
