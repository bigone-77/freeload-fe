import { PiDotsThreeCircleDuotone } from '@/constants/Icons';
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

export default function FacilityIcons() {
  return (
    <div className="flex overflow-x-auto gap-8 my-4 text-sm">
      <div className="flex flex-col items-center justify-center gap-2">
        <PiDotsThreeCircleDuotone size={50} className="flex-shrink-0" />
        <p>All</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MdOutlineWifi size={50} className="flex-shrink-0" />
        <p>WIFI</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MdCarRepair size={50} className="flex-shrink-0" />
        <p>정비소</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MdOutlineElectricBolt size={50} className="flex-shrink-0" />
        <p>전기차</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MdNightShelter size={50} className="flex-shrink-0" />
        <p>쉼터</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MdLocalPharmacy size={50} className="flex-shrink-0" />
        <p>약국</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MdPets size={50} className="flex-shrink-0" />
        <p>PET</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <RiNurseFill size={50} className="flex-shrink-0" />
        <p>수유실</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <TbDisabled size={50} className="flex-shrink-0" />
        <p>장애인</p>
      </div>
    </div>
  );
}
