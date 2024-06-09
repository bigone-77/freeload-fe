'use client';

import { useSearchParams } from 'next/navigation';

import RcCheckCard from './_components/RcCheckCard';
import CrCheckCard from './_components/CrCheckCard';

export default function ReviewPage({ params }: { params: { restId: string } }) {
  const wayParams = useSearchParams();
  return (
    <main className="px-6">
      {wayParams.get('way') === 'receipt' ? (
        <RcCheckCard restId={params.restId} way="receipt" />
      ) : (
        <CrCheckCard restId={params.restId} way="credit" />
      )}
    </main>
  );
}
