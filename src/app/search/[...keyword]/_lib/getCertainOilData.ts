export async function getCertainOilData({ queryKey }: any) {
  const [, roadName, direction, oilName, orderStandard, elec, hydr] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/oil/${roadName}/${direction}?oil=${oilName}&order=${orderStandard}&elec=${elec}&hydr=${hydr}`,
    {
      next: {
        tags: ['oil'],
      },
      credentials: 'include',
      cache: 'no-store',
    },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
