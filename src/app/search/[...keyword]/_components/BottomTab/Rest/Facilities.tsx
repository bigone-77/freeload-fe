import { Tooltip } from 'react-tooltip';

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

interface IFacilitiesProps {
  wifi: boolean;
  repair: boolean;
  electronic: boolean;
  shelter: boolean;
  nurse: boolean;
  pharmacy: boolean;
  pet: boolean;
  disabled: boolean;
}

export default function Facilities({
  wifi,
  repair,
  electronic,
  shelter,
  nurse,
  pharmacy,
  pet,
  disabled,
}: IFacilitiesProps) {
  return (
    <div className="flex gap-1">
      {wifi && (
        <MdOutlineWifi
          data-tooltip-id="facility"
          data-tooltip-content="와이파이"
        />
      )}
      {repair && (
        <MdCarRepair
          data-tooltip-id="facility"
          data-tooltip-content="수리 및 정비"
        />
      )}
      {electronic && (
        <MdOutlineElectricBolt
          data-tooltip-id="facility"
          data-tooltip-content="전기차"
        />
      )}
      {shelter && (
        <MdNightShelter
          data-tooltip-id="facility"
          data-tooltip-content="쉼터"
        />
      )}
      {nurse && (
        <RiNurseFill data-tooltip-id="facility" data-tooltip-content="수유실" />
      )}
      {pharmacy && (
        <MdLocalPharmacy
          data-tooltip-id="facility"
          data-tooltip-content="약국"
        />
      )}
      {pet && (
        <MdPets data-tooltip-id="facility" data-tooltip-content="반려동물" />
      )}
      {disabled && (
        <TbDisabled
          data-tooltip-id="facility"
          data-tooltip-content="장애인 안내시설"
        />
      )}
      <Tooltip
        id="facility"
        place="top"
        style={{ padding: '2px', backgroundColor: '#EC9D26' }}
      />
    </div>
  );
}
