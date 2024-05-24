import Facilities from './Facilities';

interface RestCardProps {
  gotoDetailHandler: (id: string) => void;
  id: string;
  name: string;
  addr: string;
  grade: number;
  wifi: boolean;
  repair: boolean;
  electronic: boolean;
  shelter: boolean;
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
  repair,
  electronic,
  shelter,
  nurse,
  pharmacy,
  pet,
  disabled,
}: RestCardProps) {
  return (
    <div
      className="border rounded-xl w-52 h-44 flex-shrink-0 p-4"
      onClick={() => gotoDetailHandler(id)}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold">{name}</h1>
        {grade === 1 && (
          <p className="text-text50 bg-secondary rounded-full text-xs p-1 text-center">
            우수
          </p>
        )}
      </div>
      <h3 className="w-full text-xs mt-4 mb-6">{addr}</h3>
      <Facilities
        wifi={wifi}
        repair={repair}
        electronic={electronic}
        shelter={shelter}
        nurse={nurse}
        pharmacy={pharmacy}
        pet={pet}
        disabled={disabled}
      />
    </div>
  );
}
