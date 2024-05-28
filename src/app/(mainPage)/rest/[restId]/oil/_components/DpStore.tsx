import {
  MdOutlineElectricalServices,
  MdOutlineTireRepair,
  MdElectricCar,
} from '@/constants/Icons';

interface IDpStoreProps {
  oilName: string;
  elec: boolean;
  hydr: boolean;
}

export default function DpStore({ oilName, elec, hydr }: IDpStoreProps) {
  return (
    <section className="">
      <div className="flex items-center gap-2 py-4 border-b-4">
        <MdElectricCar size={40} color="#2A629A" />
        <p className="font-semibold">{oilName}</p>
      </div>
      <div className="w-full flex items-center justify-center gap-10 pt-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <MdOutlineElectricalServices size={35} />
          <p>{elec ? '전기차 충전소 있음' : '전기차 충전소 없음'}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <MdOutlineTireRepair size={35} />
          <p>{hydr ? '수소차 충전소 있음' : '수소차 충전소 없음'}</p>
        </div>
      </div>
    </section>
  );
}
