export async function getFoodData({
  queryKey,
  pageParam,
}: {
  queryKey: any;
  pageParam: number | null;
}) {
  const [, , restId, sorted] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rest/food/${restId}?sort=${sorted}&cursor=${(pageParam as number) / 6}`,
    {
      next: {
        tags: ['rest', 'food', restId, sorted],
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
