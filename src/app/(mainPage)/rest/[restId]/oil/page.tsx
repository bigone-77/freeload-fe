'use client';

import { useQuery } from '@tanstack/react-query';

import { CertainOilStation } from '@/models/OilStation';
import Loader from '@/Common/Loader';
import { getOilData } from '../_lib/getOilData';
import DpFuel from './_components/DpFuel';
import DpStore from './_components/DpStore';
import DpAvr from './_components/DpAvr';

export default function Page({ params }: { params: { restId: string } }) {
  const { data: CertainOilData, isLoading } = useQuery<CertainOilStation>({
    queryKey: ['rest', 'oil', params.restId],
    queryFn: getOilData,
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (CertainOilData) {
    content = (
      <>
        <header className="mx-4 bg-primary flex flex-col items-center text-white py-6 border rounded-b-xl">
          <h1 className="text-2xl">{CertainOilData.oilName}</h1>
          <h2 className="text-sm mt-4">
            {CertainOilData.oilCompany === 'SK' ? 'SK 이노베이션' : 'GS 칼텍스'}
          </h2>
          <h3 className="text-sm mt-2">tel. {CertainOilData.telNum}</h3>
        </header>

        <main className="bg-white h-full mt-6 px-4">
          <DpAvr
            gas={CertainOilData.gasolineAvr.toLocaleString()}
            di={CertainOilData.diselAvr.toLocaleString()}
            lpg={CertainOilData.lpgAvr.toLocaleString()}
          />
          <DpFuel
            company={CertainOilData.oilCompany}
            gasoline={CertainOilData.gasolinePrice}
            disel={CertainOilData.diselPrice}
            lpg={CertainOilData.lpgPrice}
          />
          <DpStore
            oilName={CertainOilData.oilName.replace('주유소', '충전소')}
            elec={CertainOilData.electric}
            hydr={CertainOilData.hydrogen}
          />
        </main>
      </>
    );
  }

  return <div className="bg-text100 h-full overscroll-y-auto">{content}</div>;
}
