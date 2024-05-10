import { useDispatch, useSelector } from 'react-redux';

import { setRecentTarget } from '@/store/slices/recentTargetSlice';
import { formatTime } from '@/utils/getTime';
import { FaLocationDot } from 'react-icons/fa6';
import { getDifferDistance } from '@/utils/getDifferDistance';
import { RootState } from '@/store';
import { TargetPlace } from '@/models/targetPlace';

interface ISearchListProps {
  address: any;
  setValue: React.Dispatch<React.SetStateAction<TargetPlace>>;
}

export default function SearchList({ address, setValue }: ISearchListProps) {
  const dispatch = useDispatch();
  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  );

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
  return (
    <li
      onClick={() =>
        selectAddressHandler(address.place_name, address.x, address.y)
      }
      className="w-full my-4 border-b-2 pb-3"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[2px]">
          <FaLocationDot size={20} color="lightgray" />
          <p className="font-bold">{address.place_name}</p>
        </span>
        <p className="text-text400 text-xs">
          {address.category_name.split('>')[1]}
        </p>
      </div>
      <div className="flex items-center justify-between pl-6 text-sm">
        <p className="text-text400 text-sm">{address.address_name}</p>
        <p className="text-text400 text-xs">
          {getDifferDistance(
            currentLatLng.latitude!,
            currentLatLng.longitude!,
            Number(address.y),
            Number(address.x),
          )}
        </p>
      </div>
    </li>
  );
}
