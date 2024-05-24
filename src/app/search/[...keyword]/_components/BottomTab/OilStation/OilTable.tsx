import Image from 'next/image';

import { MdOutlineElectricBolt, GiH2O } from '@/constants/Icons/Rest';

interface IOilTableProps {
  name: string;
  company: string;
  gasoline: number;
  disel: number;
  lpg?: number;
  electric: boolean;
  hydrogen: boolean;
}

export default function OilTable({
  name,
  company,
  gasoline,
  disel,
  lpg,
  electric,
  hydrogen,
}: IOilTableProps) {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center gap-2">
          {electric && <MdOutlineElectricBolt color="#ffbf00" />}
          {hydrogen && <GiH2O color="skyblue" />}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <Image
          src={`https://res.cloudinary.com/dbcvqhjmf/image/upload/c_pad,w_50,h_40/v1715651704/oil-logo-${company}.png`}
          alt="logo-image"
          width={50}
          height={40}
        />
        <div className="flex place-items-center justify-end gap-0 w-full text-center">
          <div className="bg-zinc-100 p-3 border-r ">
            <h4>휘발유</h4>
            <p>{`${gasoline.toLocaleString()}원`}</p>
          </div>
          <div className="bg-zinc-100 p-3 border-r">
            <h4>경유</h4>
            <p>{`${disel.toLocaleString()}원`}</p>
          </div>
          <div className="bg-zinc-100 p-3">
            <h4>LPG</h4>
            <p>{lpg ? `${lpg.toLocaleString()}원` : 'X'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
