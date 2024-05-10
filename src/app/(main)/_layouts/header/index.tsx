import { useRouter } from 'next/navigation';

import { RxHamburgerMenu } from 'react-icons/rx';

export default function HomeHeader() {
  const router = useRouter();
  return (
    <header className="absolute top-10 w-full grid grid-cols-1 place-items-center z-10">
      <section className="flex bg-white w-4/5 h-12 rounded-lg shadow-lg items-center justify-start gap-2 pl-4">
        {/* 추후 사이드탭 로직 들어갈 곳입니다 */}
        <RxHamburgerMenu size={25} />
        <h3
          className="text-text200 hover:opacity-50 transform-all text-lg font-semibold"
          onClick={() => router.push('/search')}
        >
          어디로 갈까요?
        </h3>
      </section>
    </header>
  );
}
