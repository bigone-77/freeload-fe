/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { faker } from '@faker-js/faker';

import { RestAndOil } from '@/models/RestAndOil';
import Facilities from '@/app/search/[...keyword]/_components/BottomTab/Rest/Facilities';
import { GrPhone } from '@/constants/Icons';
import ButtonGroup from './ButtonGroup';

interface IDetailRestInfoProps {
  data: RestAndOil;
  dist: string;
  coords: {
    lat: number | undefined;
    lng: number | undefined;
  };
}

export default function DetailRestInfo({
  data,
  dist,
  coords,
}: IDetailRestInfoProps) {
  const { rest } = data;

  return (
    <article className="py-4">
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-lg">{rest[0].restName}</h1>
        <Link href={`/rest/${rest[0].restId}`}>
          <p className="underline decoration-2">더보기</p>
        </Link>
      </header>
      <section className="w-full my-4">
        <Facilities
          size={30}
          wifi={rest[0].wifi}
          repair={rest[0].repair}
          electronic={rest[0].electronic}
          shelter={rest[0].shelter}
          nurse={rest[0].nurse}
          pharmacy={rest[0].pharmacy}
          pet={rest[0].pet}
          disabled={rest[0].disabled}
        />
      </section>
      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          {rest[0].restGrade === 1 && (
            <p className="w-12 text-text50 bg-secondary rounded-full p-1 text-center">
              우수
            </p>
          )}
          <h2>{rest[0].restAddr}</h2>
          <span className="flex items-center gap-1">
            <GrPhone size={20} />
            <h2>{rest[0].restTelNum}</h2>
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
