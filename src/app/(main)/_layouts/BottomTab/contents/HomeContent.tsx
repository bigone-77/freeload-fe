import AddressCard from '@/app/(main)/home/_components/AddressCard';
import { useAddressFromLatLng } from '@/hooks/useAddressFromLatLng';

export default function HomeContent({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  let address = useAddressFromLatLng(lat, lng); // 현재 사용자가 위치한 위도, 경도

  if (address.includes('undefined')) {
    address = '위치 정보 없음';
  }
  return (
    <div>
      <AddressCard location={address} />
    </div>
  );
}
