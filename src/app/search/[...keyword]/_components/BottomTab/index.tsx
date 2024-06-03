'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/navigation';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from '@/constants/Icons';
import { Highway } from '@/models/Highway';
import { OilStation } from '@/models/OilStation';
import { Rest } from '@/models/Rest';
import { setOil } from '@/shared/store/slices/getOilSlice';
import { setRest } from '@/shared/store/slices/getRestSlice';
import ShowHighwayNames from './ShowHighwayNames';
import ShowRest from './Rest';
import AllRest from './Rest/AllRest';
import ShowOilStation from './OilStation';
import AllOil from './OilStation/AllOil';

interface IBottomTabProps {
  highwayInfo: Highway[];
  direction: 'up' | 'down';
}

export default function BottomTab({ highwayInfo, direction }: IBottomTabProps) {
  const dispatch = useDispatch();
  // const router = useRouter();
  const [goUp, setGoUp] = useState(false);
  const [selectedRoad, setSelectedRoad] = useState(1); // 휴게소 이름 인덱스로 정할것임
  const [showMoreRest, setShowMoreRest] = useState(false); // 휴게소 더보기 눌렀을 때
  const [showMoreOil, setShowMoreOil] = useState(false); // 주유소 더보기 눌렀을 때
  const roadNames = highwayInfo.map((road) => road.name);

  console.log('roadName', roadNames[selectedRoad - 1], 'direction', direction);

  const upDownHandler = () => {
    if (showMoreRest || showMoreOil) {
      setShowMoreRest(false);
      setShowMoreOil(false);
    }
    setGoUp(!goUp);
  };

  const showAllRestHandler = (data: Rest[]) => {
    dispatch(setRest(data));
    setShowMoreRest(true);
  };

  const showAllOilHandler = (data: OilStation[]) => {
    dispatch(setOil(data));
    setShowMoreOil(true);
  };

  // // TODO: 해당 RestID에 맞는 정보를 보여주자
  // const gotoDetailHandler = (restId: string) => {
  //   router.push(`/rest/${restId}`);
  // };

  let content = (
    <article className="flex flex-col gap-10 w-full">
      <ShowHighwayNames
        names={roadNames}
        value={selectedRoad}
        setValue={setSelectedRoad}
      />
      <ShowRest
        roadName={roadNames[selectedRoad - 1]}
        direction={direction}
        // gotoDetailHandler={gotoDetailHandler}
        showAllRestHandler={showAllRestHandler}
      />
      <ShowOilStation
        roadName={roadNames[selectedRoad - 1]}
        direction={direction}
        showAllOilHandler={showAllOilHandler}
      />
    </article>
  );

  if (showMoreRest) {
    content = (
      <AllRest
        roadName={roadNames[selectedRoad - 1]}
        closeHandler={() => setShowMoreRest(false)}
      />
    );
  }

  if (showMoreOil) {
    content = (
      <AllOil
        roadName={roadNames[selectedRoad - 1]}
        closeHandler={() => setShowMoreOil(false)}
      />
    );
  }

  return (
    <footer
      className={`
    ${goUp ? 'h-[80%]' : 'h-32'}
      absolute bottom-0 left-0 right-0 z-10 py-3 px-6 bg-text50 rounded-tl-[20px] rounded-tr-[20px] opacity-95 transition-all transform duration-1000 shadow-2xl overflow-y-auto`}
    >
      <div className="flex items-center justify-center">
        {goUp ? (
          <MdKeyboardArrowDown
            size={30}
            onClick={upDownHandler}
            className="animate-bounce"
          />
        ) : (
          <MdKeyboardArrowUp
            size={30}
            onClick={upDownHandler}
            className="animate-bounce"
          />
        )}
      </div>
      {content}
    </footer>
  );
}
