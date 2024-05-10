import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { IconType } from 'react-icons/lib';

interface ICategoryBoxProps {
  iconName: IconType;
  name: string;
  url: string;
}

export default function CategoryBox({
  iconName: Icon,
  name,
  url,
}: ICategoryBoxProps) {
  const segment = useSelectedLayoutSegment();
  const selected = url === segment;

  return (
    <Link
      href={`/${url}`}
      className="flex flex-col items-center justify-center"
    >
      <Icon color={`${selected ? '#158EFF' : 'black'}`} size={25} />
      <p className={`${selected && 'text-primary'}`}>{name}</p>
    </Link>
  );
}
