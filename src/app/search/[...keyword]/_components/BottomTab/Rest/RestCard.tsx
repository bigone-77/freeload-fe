import Facilities from './Facilities';

interface RestCardProps {
  gotoDetailHandler: (id: number) => void;
  id: number;
  name: string;
  addr: string;
  grade: string;
  wifi: boolean;
  electronic: boolean;
  nurse: boolean;
  pharmacy: boolean;
  pet: boolean;
  disabled: boolean;
}

export default function RestCard({
  gotoDetailHandler,
  id,
  name,
  addr,
  grade,
  wifi,
  electronic,
  nurse,
  pharmacy,
  pet,
  disabled,
}: RestCardProps) {
  return (
    <div
      className="border rounded-xl w-52 h-36 flex-shrink-0 p-4"
      onClick={() => gotoDetailHandler(id)}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold w-[140px]">{name}</h1>
        <p className="text-text50 bg-secondary rounded-full text-xs p-1 text-center">
          {grade === '2' ? '최우수' : grade === '1' ? '우수' : '보통'}
        </p>
      </div>
      <h3 className="w-full text-xs mt-4 mb-6">{addr}</h3>
      <Facilities
        wifi={wifi}
        electronic={electronic}
        nurse={nurse}
        pharmacy={pharmacy}
        pet={pet}
        disabled={disabled}
      />
    </div>
  );
}
