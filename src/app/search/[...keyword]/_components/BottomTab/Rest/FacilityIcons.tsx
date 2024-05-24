'use client';

import { Dispatch, SetStateAction } from 'react';

import {
  MdOutlineWifi,
  MdCarRepair,
  MdOutlineElectricBolt,
  MdNightShelter,
  MdLocalPharmacy,
  MdPets,
  RiNurseFill,
  TbDisabled,
} from '@/constants/Icons/Rest';

interface IFacilityIconsProps {
  sorted: string;
  setSorted: Dispatch<SetStateAction<string>>;
}

export default function FacilityIcons({
  sorted,
  setSorted,
}: IFacilityIconsProps) {
  return (
    <div className="flex overflow-x-auto gap-4 my-4 text-sm pt-8">
      <p className="fixed top-24 font-semibold text-lg">편의시설 찾기</p>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('WIFI')}
      >
        <span
          className={`${sorted === 'WIFI' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <MdOutlineWifi size={40} className="flex-shrink-0" />
        </span>
        <p>WIFI</p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('REPAIR')}
      >
        <span
          className={`${sorted === 'REPAIR' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <MdCarRepair size={40} className="flex-shrink-0" />
        </span>
        <p>정비소</p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('ELECTRONIC')}
      >
        <span
          className={`${sorted === 'ELECTRONIC' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <MdOutlineElectricBolt size={40} className="flex-shrink-0" />
        </span>
        <p>전기차</p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('SHELTER')}
      >
        <span
          className={`${sorted === 'SHELTER' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <MdNightShelter size={40} className="flex-shrink-0" />
        </span>
        <p>쉼터</p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('PHARMACY')}
      >
        <span
          className={`${sorted === 'PHARMACY' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <MdLocalPharmacy size={40} className="flex-shrink-0" />
        </span>
        <p>약국</p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('PET')}
      >
        <span
          className={`${sorted === 'PET' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <MdPets size={40} className="flex-shrink-0" />
        </span>
        <p>PET</p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('NURSE')}
      >
        <span
          className={`${sorted === 'NURSE' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <RiNurseFill size={40} className="flex-shrink-0" />
        </span>
        <p>수유실</p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 p-2"
        onClick={() => setSorted('DISABLED')}
      >
        <span
          className={`${sorted === 'DISABLED' ? 'bg-primary text-white' : 'bg-text100 text-text600'} border rounded-full p-2 `}
        >
          <TbDisabled size={40} className="flex-shrink-0" />
        </span>
        <p>장애인</p>
      </div>
    </div>
  );
}
