import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl text-rose-400 font-bold">
        프로젝트 너무 재미있어요 !
      </h1>
      <Link href="/login">로그인 화면 확인하기</Link>
      <Link href="/join/1">join 화면 확인하기</Link>
    </main>
  );
}
