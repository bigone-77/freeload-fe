import { IoChevronBack } from 'react-icons/io5';
import { useSelector } from 'react-redux';

import { FaLocationDot } from 'react-icons/fa6';
import SearchInput from '@/components/SearchInput';
import useKeywordSearchList from '@/hooks/useKeywordSearchList';
import { RootState } from '@/store/store';
import { getDifferDistance } from '@/hooks/getDifferDistance';
import { TargetPlace } from '@/models/targetPlace';

interface ISearchModalProps {
  value: string;
  setValue: (value: TargetPlace) => void;
  exitModal: () => void;
}

export default function SearchModal({
  value,
  setValue,
  exitModal,
}: ISearchModalProps) {
  const currentLatLng = useSelector(
    (state: RootState) => state.currentLocation,
  );
  const addressList = useKeywordSearchList(value); // 키워드를 통해 얻은 주소목록

  const selectAddressHandler = (addr: string, x: number, y: number) => {
    setValue((prev: TargetPlace) => ({
      ...prev,
      name: addr,
      latitude: Number(y),
      longitude: Number(x),
    }));
    exitModal();
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
  } else {
    content = <p>최근 검색한 장소 나타낼겁니다</p>;
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
