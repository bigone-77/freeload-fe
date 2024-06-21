import { IoChevronForward } from '@/constants/Icons';
import Link from 'next/link';

interface ISideRouteProps {
  title: string;
  url?: string;
}

export default function SideRoute({ title, url }: ISideRouteProps) {
  return (
    <Link
      href={url || '/'}
      className="flex items-center justify-between hover:opacity-80 transition-all"
    >
      <p>{title}</p>
      <IoChevronForward color="lightgray" />
    </Link>
  );
}
