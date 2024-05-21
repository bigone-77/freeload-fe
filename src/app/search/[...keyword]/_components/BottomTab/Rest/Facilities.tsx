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
  size?: number;
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
  size,
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
    <div className="flex gap-1 w-full">
      {wifi && (
        <MdOutlineWifi
          data-tooltip-id="facility"
          data-tooltip-content="와이파이"
          size={size}
        />
      )}
      {repair && (
        <MdCarRepair
          data-tooltip-id="facility"
          data-tooltip-content="수리 및 정비"
          size={size}
        />
      )}
      {electronic && (
        <MdOutlineElectricBolt
          data-tooltip-id="facility"
          data-tooltip-content="전기차"
          size={size}
        />
      )}
      {shelter && (
        <MdNightShelter
          data-tooltip-id="facility"
          data-tooltip-content="쉼터"
          size={size}
        />
      )}
      {nurse && (
        <RiNurseFill
          data-tooltip-id="facility"
          data-tooltip-content="수유실"
          size={size}
        />
      )}
      {pharmacy && (
        <MdLocalPharmacy
          data-tooltip-id="facility"
          data-tooltip-content="약국"
          size={size}
        />
      )}
      {pet && (
        <MdPets
          data-tooltip-id="facility"
          data-tooltip-content="반려동물"
          size={size}
        />
      )}
      {disabled && (
        <TbDisabled
          data-tooltip-id="facility"
          data-tooltip-content="장애인 안내시설"
          size={size}
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
