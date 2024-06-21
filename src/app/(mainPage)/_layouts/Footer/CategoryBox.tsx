import Link from 'next/link';
import { IconType } from 'react-icons/lib';

interface ICategoryBoxProps {
  iconName: IconType;
  name: string;
  url: string;
  selected: boolean;
}

export default function CategoryBox({
  iconName: Icon,
  name,
  url,
  selected,
}: ICategoryBoxProps) {
  return (
    <section
      className={`p-5 ${selected && 'border-t-4 border-t-primary'} hover:opacity-80 transition-all`}
    >
      <Link
        href={`/${url}`}
        className="flex flex-col items-center justify-center"
      >
        <Icon color={`${selected ? '#158EFF' : 'black'}`} size={25} />
        <p className={`${selected && 'text-primary'}`}>{name}</p>
      </Link>
    </section>
  );
}
