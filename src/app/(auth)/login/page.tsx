import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import LoginButton from './_components/LoginButton';

export default async function LoginPage() {
  const session = await auth(); // next 서버에서 session 정보를 가져와서 리다이렉팅 검증

  if (session?.user) {
    redirect('/home');
  }

  return (
    <>
      <LoginButton origin="kakao" />
      <LoginButton origin="google" />
    </>
  );
}
