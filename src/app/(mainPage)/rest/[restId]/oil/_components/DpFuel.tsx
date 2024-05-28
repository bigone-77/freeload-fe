/* eslint-disable @next/next/no-img-element */

interface IDpFuelProps {
  company: string;
  gasoline: number;
  disel: number;
  lpg?: number;
}

export default function DpFuel({
  company,
  gasoline,
  disel,
  lpg,
}: IDpFuelProps) {
  return (
    <section className="grid grid-cols-4 px-2 place-items-center h-36 border-b-4">
      <div className="flex items-center justify-center w-full">
        <img
          src={`https://res.cloudinary.com/dbcvqhjmf/image/upload/c_pad,w_50,h_40/v1715651704/oil-logo-${company}.png`}
          alt="logo"
          className="bg-cover w-full h-full"
        />
      </div>
      <div className="border-r-2 w-full flex flex-col items-center justify-center">
        <p>휘발유</p>
        <p>{gasoline.toLocaleString()}원</p>
      </div>
      <div className="border-r-2 w-full flex flex-col items-center justify-center">
        <p>경유</p>
        <p>{disel.toLocaleString()}원</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <p>LPG</p>
        <p>{`${lpg ? lpg.toLocaleString() : '0'}`}원</p>
      </div>
    </section>
  );
}
