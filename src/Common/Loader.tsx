import { BounceLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <BounceLoader color="#158EFF" size={60} />
    </div>
  );
}
