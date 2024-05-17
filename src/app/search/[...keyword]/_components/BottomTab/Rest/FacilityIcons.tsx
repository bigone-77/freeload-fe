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
    <div className="flex overflow-x-auto gap-4 my-4 text-sm pt-8">
      <p className="fixed top-24 font-semibold text-lg">편의시설 찾기</p>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <MdOutlineWifi size={40} className="flex-shrink-0" />
        <p>WIFI</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <MdCarRepair size={40} className="flex-shrink-0" />
        <p>정비소</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <MdOutlineElectricBolt size={40} className="flex-shrink-0" />
        <p>전기차</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <MdNightShelter size={40} className="flex-shrink-0" />
        <p>쉼터</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <MdLocalPharmacy size={40} className="flex-shrink-0" />
        <p>약국</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <MdPets size={40} className="flex-shrink-0" />
        <p>PET</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <RiNurseFill size={40} className="flex-shrink-0" />
        <p>수유실</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-4 border-primary rounded-lg p-2">
        <TbDisabled size={40} className="flex-shrink-0" />
        <p>장애인</p>
      </div>
    </div>
  );
}
