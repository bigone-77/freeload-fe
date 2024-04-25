import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <h1>잘못된 경로로 들어간 페이지입니다.</h1>
      <Link href="/">홈으로</Link>
    </>
  );
}
