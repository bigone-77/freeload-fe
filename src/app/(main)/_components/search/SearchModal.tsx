/* eslint-disable react/jsx-no-useless-fragment */
import { useDispatch, useSelector } from 'react-redux';
import { IoChevronBack } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosClose } from 'react-icons/io';

import SearchInput from '@/components/SearchInput';
import useKeywordSearchList from '@/hooks/useKeywordSearchList';
import { RootState } from '@/store/store';
import { getDifferDistance } from '@/utils/getDifferDistance';
import { TargetPlace } from '@/models/targetPlace';
import {
  removeTarget,
  setRecentTarget,
} from '@/store/slices/recentTargetSlice';
import { formatTime } from '@/utils/getTime';

interface ISearchModalProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<TargetPlace>>;
  exitModal: () => void;
}

export default function SearchModal({
  value,
  setValue,
  exitModal,
}: ISearchModalProps) {
  const dispatch = useDispatch();
  const recentKeywords = useSelector((state: RootState) => state.recentTarget);
  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  );
  const addressList = useKeywordSearchList(value); // 키워드를 통해 얻은 주소목록

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
    exitModal();
  };

  const deleteRecentTargetHandler = (
    name: string,
    e: React.MouseEvent<SVGElement>,
  ) => {
    e.stopPropagation(); // 부모 element까지의 이벤트 전파 차단(이벤트 버블링 차단)
    dispatch(removeTarget({ name }));
  };

  let content;
  if (addressList.length > 0) {
    content = (
      <>
        {addressList.map((address, index) => (
          <li
            onClick={() =>
              selectAddressHandler(address.place_name, address.x, address.y)
            }
            key={index}
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
        ))}
      </>
    );
  } else if (recentKeywords.length > 0) {
    content = (
      <>
        {recentKeywords?.map((keyword, index) => (
          <li
            onClick={() =>
              selectAddressHandler(
                keyword.name,
                keyword.longitude,
                keyword.latitude,
              )
            }
            key={index}
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
        ))}
      </>
    );
  } else {
    content = <p>최근 검색 기록이 없습니다.</p>;
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue((prevState: TargetPlace) => ({ ...prevState, name: newValue }));
  };

  const clearInputValue = () => {
    setValue((prevState: TargetPlace) => ({
      ...prevState,
      name: '',
      latitude: 0,
      longitude: 0,
    }));
  };

  return (
    <div className="absolute inset-0 pt-5 bg-white pr-2">
      <SearchInput
        iconName={IoChevronBack}
        iconSize={35}
        iconClick={exitModal}
        placeholder="장소 및 주소 검색"
        value={value}
        onChange={handleInputChange}
        deleteHandler={clearInputValue}
      />
      <ul className="overflow-y-scroll h-full w-full p-2">{content}</ul>
    </div>
  );
}
