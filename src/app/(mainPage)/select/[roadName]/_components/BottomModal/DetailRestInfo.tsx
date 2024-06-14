import Link from 'next/link';
import { faker } from '@faker-js/faker';

import Facilities from '@/app/search/[...keyword]/_components/BottomTab/Rest/Facilities';
import { GrPhone } from '@/constants/Icons';
import { Rest } from '@/models/Rest';
import ButtonGroup from './ButtonGroup';

interface IDetailRestInfoProps {
  data: Rest;
  dist: string;
  coords: {
    lat: number;
    lng: number;
  };
  direction: 'up' | 'down';
  like?: boolean;
}

export default function DetailRestInfo({
  like,
  data,
  dist,
  coords,
  direction,
}: IDetailRestInfoProps) {
  const {
    restId,
    restName,
    restAddr,
    rprsTelNo,
    wifi,
    satisfaction,
    electric_car,
    nursing_room,
    pharmacy,
    pet,
    braile_block,
  } = data;

  return (
    <article className={`p-4 ${like && 'border-2 rounded-xl shadow-lg mb-6'}`}>
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-lg">{restName}</h1>
        <Link href={`/rest/${restId}?direction=${direction}`}>
          <p className="underline decoration-2">더보기</p>
        </Link>
      </header>
      <section className="w-full my-4">
        <Facilities
          size={30}
          wifi={wifi === 'True'}
          electronic={electric_car === 'True'}
          nurse={nursing_room === 'True'}
          pharmacy={pharmacy === 'True'}
          pet={pet === 'True'}
          disabled={braile_block === 'True'}
        />
      </section>
      <section className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="w-16 text-text50 bg-secondary rounded-full p-1 text-center">
            {satisfaction === '2'
              ? '최우수'
              : satisfaction === '1'
                ? '우수'
                : '보통'}
          </p>

          <h2>{restAddr}</h2>
          <span className="flex items-center gap-1">
            <GrPhone size={20} />
            <h2>{rprsTelNo}</h2>
          </span>
          <p>{dist}</p>
        </div>
        <div className="flex flex-col gap-2">
          <ButtonGroup coords={coords} />
          <img
            src={faker.image.urlLoremFlickr({ category: 'road' })}
            alt="faker"
            className="w-32 h-28 rounded-2xl"
          />
        </div>
      </section>
    </article>
  );
}
