/* eslint-disable @next/next/no-img-element */
// import { faker } from '@faker-js/faker';

interface IFoodCardProps {
  name: string;
  cost: string;
}

export default function FoodCard({ name, cost }: IFoodCardProps) {
  return (
    <section className="w-full border rounded-lg p-4 flex flex-col">
      {/* <img
        src={faker.image.urlLoremFlickr({ category: 'food' })}
        alt="faker"
        className="object-cover rounded-t-2xl"
      /> */}
      <div className="bg-rose-300 w-full h-20 rounded-t-2xl" />
      <h1 className="mt-1">{name}</h1>
      <h2>{cost}원</h2>
    </section>
  );
}
