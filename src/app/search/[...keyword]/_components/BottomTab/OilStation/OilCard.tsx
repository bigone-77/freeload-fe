import Image from 'next/image';

import { MdOutlineElectricBolt, GiH2O } from '@/constants/Icons/Rest';

interface IOilCardProps {
  name: string;
  company: string;
  disel: string;
  gasoline: string;
  lpg?: string;
  electric: boolean;
  hydrogen: boolean;
}

export default function OilCard({
  name,
  company,
  disel,
  gasoline,
  lpg,
  electric,
  hydrogen,
}: IOilCardProps) {
  return (
    <div className="border rounded-xl w-52 h-44 flex-shrink-0 p-4">
      <div className="flex justify-between items-center relative">
        <h1 className="text-sm font-semibold">{name}</h1>
        <Image
          src={`https://res.cloudinary.com/dbcvqhjmf/image/upload/c_pad,w_50,h_40/v1715651704/oil-logo-${company}.png`}
          alt="logo-image"
          width={50}
          height={40}
        />
        {electric && (
          <MdOutlineElectricBolt className="absolute -top-2" color="#ffbf00" />
        )}
        {hydrogen && (
          <GiH2O className="absolute -top-2 left-6" color="skyblue" />
        )}
      </div>
      <section
        className={`flex flex-col ${lpg ? 'gap-3' : 'gap-8'} text-sm mt-2`}
      >
        <div className="flex items-center justify-between">
          <h3>휘발유</h3>
          <p className="text-sm rounded-xl border px-4 py-1 bg-error text-text50">
            {gasoline}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h3>경유</h3>
          <p className="text-sm rounded-xl border px-4 py-1 bg-primary text-text50">
            {disel}
          </p>
        </div>
        {lpg && (
          <div className="flex items-center justify-between">
            <h3>LPG</h3>
            <p className="text-sm rounded-xl border px-4 py-1 bg-success text-text50">
              {lpg}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
