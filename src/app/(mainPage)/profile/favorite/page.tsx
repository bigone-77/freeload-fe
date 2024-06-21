'use client';

import { useSession } from 'next-auth/react';
import LikeContent from '../../_layouts/BottomTab/contents/LikeContent';

export default function FavoritePage() {
  const userEmail = useSession().data?.user?.email;

  if (userEmail) {
    return (
      <div className="mt-10">
        <LikeContent />
      </div>
    );
  }
}
