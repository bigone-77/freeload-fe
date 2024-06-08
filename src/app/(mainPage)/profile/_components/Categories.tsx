'use client';

import { ImProfile } from 'react-icons/im';
import { MdFavoriteBorder } from 'react-icons/md';
import { CiCreditCard1 } from 'react-icons/ci';
import { IoLogOutOutline } from 'react-icons/io5';
import Category from './Category';

export default function Categories() {
  return (
    <div className="flex flex-col justify-center gap-6 px-8 mt-6">
      <Category iconName={ImProfile} name="내 정보 확인" url="edit" />
      <Category iconName={MdFavoriteBorder} name="즐겨찾는 휴게소" />
      <Category
        iconName={CiCreditCard1}
        name="나의 지출 확인하기"
        url="account"
      />
      <Category iconName={IoLogOutOutline} name="로그아웃" none />
    </div>
  );
}
