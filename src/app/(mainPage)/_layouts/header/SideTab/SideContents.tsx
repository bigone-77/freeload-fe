import Link from 'next/link';
import SideRoute from './SideRoute';

export default function SideContents() {
  return (
    <section className="flex flex-col gap-6">
      <SideRoute title="즐겨찾는 휴게소" url="/profile/favorite" />
      <div className="flex flex-col gap-2">
        <SideRoute title="휴게소 검색" />
        <Link
          href="/select/road"
          className="ml-4 hover:opacity-80 transition-all"
        >
          노선별 검색
        </Link>
        <Link href="/" className="ml-4 hover:opacity-80 transition-all">
          근처 휴게소 검색
        </Link>
      </div>
      <SideRoute title="공지사항" />
      <SideRoute title="마이페이지" url="/profile" />
    </section>
  );
}
