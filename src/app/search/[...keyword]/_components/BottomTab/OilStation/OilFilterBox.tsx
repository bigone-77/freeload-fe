import { HiMiniArrowsUpDown } from '@/constants/Icons';

export default function OilFilterBox() {
  return (
    <section className="my-3 px-4">
      <div className="flex items-center justify-start gap-4 text-lg font-semibold">
        <span className="flex items-center justify-center gap-1">
          <h3>휘발유</h3>
          <HiMiniArrowsUpDown size={25} color="gray" className="border" />
        </span>
        <span className="flex items-center justify-center gap-1">
          <h3>경유</h3>
          <HiMiniArrowsUpDown size={25} color="gray" className="border" />
        </span>
        <span className="flex items-center justify-center gap-1">
          <h3>LPG</h3>
          <HiMiniArrowsUpDown size={25} color="gray" className="border" />
        </span>
      </div>

      <div className="flex items-center justify-start gap-4 mt-4">
        <p className="rounded-xl border px-2 py-1 bg-primary text-text50">
          수소차
        </p>
        <p className="rounded-xl border px-2 py-1 bg-primary text-text50">
          전기차
        </p>
      </div>
    </section>
  );
}
