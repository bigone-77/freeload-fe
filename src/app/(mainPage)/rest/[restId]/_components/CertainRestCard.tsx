'use client';

interface ICertainRestCardProps {
  id: string;
}

export default function CertainRestCard({ id }: ICertainRestCardProps) {
  console.log(id);

  // 휴게소 정보 불러오는 쿼리문
  // 주유소 정보 불러오는 쿼리문
  return (
    <main className="pb-10 px-10 bg-primary text-white">
      <h1 className="text-2xl font-bold">경주(부산방향)휴게소</h1>
      <span className="flex items-center gap-1 my-4">
        <h2>본부명 :</h2>
        <h2>대구경북본부</h2>
      </span>
      <div className="grid grid-cols-2 gap-3">
        <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
          <p>휘발유: 1,633원</p>
        </span>
        <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
          <p>경유: 1,467원</p>
        </span>
        <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
          <p>LPG: 1,251원</p>
        </span>
      </div>
    </main>
  );
}
