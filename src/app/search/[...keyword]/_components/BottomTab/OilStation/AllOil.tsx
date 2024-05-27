'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { OilStation } from '@/models/OilStation';
import { IoChevronBack, MdOutlineFilterAlt } from '@/constants/Icons';
import { getFilteredOil } from '@/utils/getFilterData';
import OilTable from './OilTable';
import FilterModal from './FilterModal';

interface IAllOilProps {
  roadName: string;
  closeHandler: () => void;
}

export default function AllOil({ roadName, closeHandler }: IAllOilProps) {
  const OilData = useSelector((state: RootState) => state.oil);

  const [filteredOilData, setFilteredOilData] = useState<OilStation[]>(OilData);
  const [fuel, setFuel] = useState('');
  const [order, setOrder] = useState('');
  const [selectedElec, setSelectedElec] = useState(false);
  const [selectedHydr, setSelectedHydr] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    setFilteredOilData(
      getFilteredOil(OilData, selectedElec, selectedHydr, fuel, order),
    );
  }, [OilData, selectedElec, selectedHydr, fuel, order]);

  return (
    <article className="h-full overflow-y-auto pb-6">
      <div className="flex items-center gap-4 mb-6">
        <IoChevronBack size={35} onClick={closeHandler} />
        <h1 className="font-semibold text-2xl">{roadName} 주유소</h1>
      </div>
      <div className="px-4 mt-6 h-full">
        <div className="flex flex-col gap-8">
          {filteredOilData ? (
            filteredOilData.map((oil, index) => (
              <OilTable
                key={index}
                name={oil.oilName}
                company={oil.oilCompany}
                gasoline={oil.gasolinePrice}
                disel={oil.diselPrice}
                lpg={oil.lpgPrice}
                electric={oil.electric}
                hydrogen={oil.hydrogen}
              />
            ))
          ) : (
            <p>찾으시는 주유소 정보가 없습니다.</p>
          )}
        </div>
      </div>
      <span className="absolute bottom-16 right-6 bg-primary rounded-full p-4">
        <MdOutlineFilterAlt
          size={40}
          color="white"
          onClick={() => setShowFilter(true)}
        />
      </span>
      {showFilter && (
        <FilterModal
          modalOpen={showFilter}
          setModalOpen={setShowFilter}
          fuel={fuel}
          setFuel={setFuel}
          order={order}
          setOrder={setOrder}
          selectedElec={selectedElec}
          setSelectedElec={setSelectedElec}
          selectedHydr={selectedHydr}
          setSelectedHydr={setSelectedHydr}
        />
      )}
    </article>
  );
}
