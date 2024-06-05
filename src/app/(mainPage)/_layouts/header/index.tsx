'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, useCycle } from 'framer-motion';

import { RxHamburgerMenu } from 'react-icons/rx';
import SideTab from './SideTab';
import ProfileFloating from './ProfileFloating';

export default function HomeHeader() {
  const { data: session } = useSession();
  const currentUser = session?.user; // 현재 접속한 유저가 있는지 ?
  const [open, cycleOpen] = useCycle(false, true);
  const router = useRouter();

  return (
    <>
      <header className="absolute top-10 w-full flex items-center justify-center gap-4 z-10 px-4">
        <section className="flex bg-white w-[80%] h-12 rounded-lg shadow-lg items-center justify-start gap-2 pl-4">
          <RxHamburgerMenu size={25} onClick={() => cycleOpen()} />
          <h3
            className="text-text200 hover:opacity-50 transform-all text-lg font-semibold"
            onClick={() => router.push('/search')}
          >
            어디로 갈까요?
          </h3>
        </section>
        {currentUser && <ProfileFloating currentUser={currentUser} />}
      </header>
      {/* framer slide  */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black opacity-50 z-50"
              onClick={() => cycleOpen()}
            />
            <SideTab user={currentUser} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
