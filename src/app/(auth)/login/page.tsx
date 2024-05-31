import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import LoginButton from './_components/LoginButton';

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect('/home');
  }

  return (
    <>
      <LoginButton origin="kakao" />
      <LoginButton origin="naver" />
    </>
  );
}
