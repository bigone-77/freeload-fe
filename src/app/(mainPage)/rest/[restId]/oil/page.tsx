'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { OilResponse } from '@/models/OilStation';
import { getOilData } from '@/lib/getOilData';
import Loader from '@/Common/Loader';
import DpFuel from './_components/DpFuel';
import DpStore from './_components/DpStore';
import DpAvr from './_components/DpAvr';

export default function Page({ params }: { params: { restId: string } }) {
  const directionParams = useSearchParams();
  const { data: Oil, isLoading } = useQuery<OilResponse>({
    queryKey: ['rest', 'oil', params.restId, directionParams.get('direction')],
    queryFn: getOilData,
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (Oil) {
    content = (
      <>
        <header className="mx-4 bg-primary flex flex-col items-center text-white py-6 border rounded-b-xl">
          <h1 className="text-2xl">{Oil.data[0].serviceAreaName}</h1>
          <h2 className="text-sm mt-4">
            {Oil.data[0].oilCompany === 'SK' ? 'SK 이노베이션' : 'GS 칼텍스'}
          </h2>
          <h3 className="text-sm mt-2">tel. {Oil.data[0].telNo}</h3>
        </header>

        <main className="bg-white h-full mt-6 px-4">
          <DpAvr
            gas={Oil.data[0].gasolineAver.toLocaleString()}
            di={Oil.data[0].diselAver.toLocaleString()}
            lpg={Oil.data[0].lpgAver.toLocaleString()}
          />
          <DpFuel
            company={Oil.data[0].oilCompany}
            gasoline={Oil.data[0].gasolinePrice}
            disel={Oil.data[0].diselPrice}
            lpg={Oil.data[0].lpgPrice}
          />
          <DpStore
            oilName={Oil.data[0].serviceAreaName.replace('주유소', '충전소')}
            elec={Oil.data[0].electric === '1'}
            hydr={Oil.data[0].hydrogen === '1'}
          />
        </main>
      </>
    );
  }

  return <div className="bg-text100 h-full overscroll-y-auto">{content}</div>;
}
