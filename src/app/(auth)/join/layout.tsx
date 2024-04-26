import { ReactNode } from 'react';

interface IJoinLayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: IJoinLayoutProps) {
  return (
    <nav className="pt-[20%]">
      <h1>회원가입 헤더입니다</h1>
      {children}
    </nav>
  );
}
