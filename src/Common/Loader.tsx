import { BounceLoader } from 'react-spinners';

interface ILoaderProps {
  message?: string;
}

export default function Loader({ message }: ILoaderProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-3">
      <BounceLoader color="#158EFF" size={60} />
      <p className="font-semibold">{message}</p>
    </div>
  );
}
