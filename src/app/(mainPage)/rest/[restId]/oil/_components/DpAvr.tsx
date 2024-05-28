interface IDpAvrProps {
  gas: string;
  di: string;
  lpg: string;
}

export default function DpAvr({ gas, di, lpg }: IDpAvrProps) {
  return (
    <>
      <h1 className="font-semibold text-lg text-center py-6">
        주유소 평균 가격
      </h1>
      <section className="flex items-center justify-center gap-6 text-lg mt-2 pb-10 border-b-4">
        <div className="flex flex-col items-center justify-between">
          <h3>휘발유</h3>
          <p className="text-sm rounded-xl border px-4 py-1 bg-error text-text50">
            {`${gas}원`}
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <h3>경유</h3>
          <p className="text-sm rounded-xl border px-4 py-1 bg-primary text-text50">
            {`${di}원`}
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <h3>LPG</h3>
          <p className="text-sm rounded-xl border px-4 py-1 bg-success text-text50">
            {`${lpg}원`}
          </p>
        </div>
      </section>
    </>
  );
}
