import Link from 'next/link';
import { IconType } from 'react-icons/lib';

import { IoChevronForward } from '@/constants/Icons';

interface ICategoryCardProps {
  restId?: string;
  title: string;
  icon?: IconType;
  url?: string;
  grade?: string;
  subTitle?: string;
}

export default function CategoryCard({
  restId,
  title,
  icon: Icon,
  subTitle,
  url,
  grade,
}: ICategoryCardProps) {
  const getGradeText = (score: string) => {
    if (score === '2') {
      return '최우수';
    }
    if (score === '1') {
      return '우수';
    }
    return '보통';
  };

  return (
    <article className="w-44 h-36 border rounded-lg shadow-lg bg-white px-4 text-[#2A629A] relative">
      {!grade ? (
        <Link href={`/rest/${restId}/${url}`}>
          <section className="pt-4 flex items-center justify-between">
            <p className="text-2xl font-bold">{title}</p>
            {url && <IoChevronForward size={30} />}
          </section>
          <section>
            {subTitle && <p className="text-sm mt-2">{subTitle}</p>}
            {Icon && <Icon className="absolute bottom-2 right-2" size={50} />}
          </section>
        </Link>
      ) : (
        <>
          <section className="pt-4 flex items-center justify-between">
            <p className="text-2xl font-bold">{title}</p>
          </section>
          <p className="mt-4 text-3xl">{getGradeText(grade)}</p>
        </>
      )}
    </article>
  );
}
