import { BounceLoader } from 'react-spinners';

interface ILoaderProps {
  message?: string;
}

export default function Loader({ message }: ILoaderProps) {
  return (
    <div
      className={`w-full ${message ? 'h-full justify-start pb-10' : 'h-screen justify-center'} flex flex-col items-center text-center gap-[2px]`}
    >
      <BounceLoader color="#158EFF" size={60} />
      <p className="font-semibold text-text600">{message}</p>
    </div>
  );
}
