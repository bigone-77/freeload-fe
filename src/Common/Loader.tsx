import { BounceLoader } from 'react-spinners';

interface ILoaderProps {
  message?: string;
}

export default function Loader({ message }: ILoaderProps) {
  return (
    <div
      className={`w-full ${message ? 'h-full' : 'h-screen pb-10'} flex flex-col items-center justify-start text-center gap-[2px]`}
    >
      <BounceLoader color="#158EFF" size={60} />
      <p className="font-semibold text-text600">{message}</p>
    </div>
  );
}
