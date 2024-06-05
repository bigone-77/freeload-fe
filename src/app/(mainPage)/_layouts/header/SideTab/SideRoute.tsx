import { IoChevronForward } from '@/constants/Icons';

interface ISideRouteProps {
  title: string;
}

export default function SideRoute({ title }: ISideRouteProps) {
  return (
    <span className="flex items-center justify-between">
      <p>{title}</p>
      <IoChevronForward color="lightgray" />
    </span>
  );
}
