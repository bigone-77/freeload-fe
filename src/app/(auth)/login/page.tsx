import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import LoginButton from './_components/LoginButton';

export default async function LoginPage() {
  const session = await auth(); // next 서버에서 session 정보를 가져와서 리다이렉팅 검증

  if (session?.user) {
    redirect('/home');
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex flex-col px-12">
      <section className="mt-32 text-text50">
        <span className="inline-block text-3xl ">
          <h2 className="font-bold mb-2">전국 고속도로</h2>
          <h2>휴게소 정보를 한 번에!</h2>
        </span>
        <h2 className="text-lg mt-20">휴게소 정보들에 대해 궁금하다면?</h2>
      </section>

      <section className="">
        <LoginButton origin="kakao" />
        <LoginButton origin="google" />
      </section>
    </div>
  );
}
