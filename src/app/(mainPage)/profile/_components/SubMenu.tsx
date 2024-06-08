import { MdRateReview } from 'react-icons/md';
import { AiFillNotification } from 'react-icons/ai';

export default function SubMenu() {
  return (
    <div className="flex items-center justify-center gap-2">
      <section className="flex items-center justify-center gap-2 border p-3 rounded-md shadow-lg">
        <MdRateReview />
        <p>남긴 리뷰</p>
        <p>(12)</p>
      </section>

      <section className="flex items-center justify-center gap-2 border p-3 rounded-md shadow-lg">
        <AiFillNotification />
        <p>상담 내역</p>
        <p>(10)</p>
      </section>
    </div>
  );
}
