'use client';

import { useDispatch } from 'react-redux';

import { TargetPlace } from '@/models/targetPlace';
import {
  removeTarget,
  setRecentTarget,
} from '@/shared/store/slices/recentTargetSlice';
import { formatTime } from '@/utils/getTime';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosClose } from 'react-icons/io';

interface IRecentSearchListProps {
  keyword: any;
  setValue: React.Dispatch<React.SetStateAction<TargetPlace>>;
}

export default function RecentSearchList({
  keyword,
  setValue,
}: IRecentSearchListProps) {
  const dispatch = useDispatch();

  const selectAddressHandler = (addr: string, x: number, y: number) => {
    setValue((prevState: TargetPlace) => ({
      ...prevState,
      name: addr,
      latitude: Number(y),
      longitude: Number(x),
    }));
    dispatch(
      setRecentTarget({
        name: addr,
        latitude: Number(y),
        longitude: Number(x),
        date: formatTime(new Date()),
      }),
    );
  };

  const deleteRecentTargetHandler = (
    name: string,
    e: React.MouseEvent<SVGElement>,
  ) => {
    e.stopPropagation(); // 부모 element까지의 이벤트 전파 차단(이벤트 버블링 차단)
    dispatch(removeTarget({ name }));
  };
  return (
    <li
      onClick={() =>
        selectAddressHandler(keyword.name, keyword.longitude, keyword.latitude)
      }
      className="w-full my-4 border-b-2 pb-3"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <FaLocationDot size={20} color="lightgray" />
          <p className="font-bold">{keyword.name}</p>
        </span>
        <span className="flex items-center gap-2">
          <p className="text-text400 text-xs">{keyword.date}</p>
          <IoIosClose
            size={25}
            color="lightgray"
            onClick={(e) => deleteRecentTargetHandler(keyword.name, e)}
          />
        </span>
      </div>
    </li>
  );
}
