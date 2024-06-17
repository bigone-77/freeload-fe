import { MdRateReview } from 'react-icons/md';
import { AiFillNotification } from 'react-icons/ai';

export default function SubMenu() {
  return (
    <div className="flex items-center justify-center gap-2 w-full px-10">
      <section className="flex items-center justify-center gap-2 border p-2 rounded-md shadow-lg">
        <MdRateReview size={30} />
        <p className="w-full">남긴 리뷰</p>
        <p>(12)</p>
      </section>

      <section className="flex items-center justify-center gap-2 border p-2 rounded-md shadow-lg">
        <AiFillNotification size={30} />
        <p className="w-full">상담 내역</p>
        <p>(0)</p>
      </section>
    </div>
  );
}
