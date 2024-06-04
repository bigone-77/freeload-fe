export async function getFoodData({ queryKey }: { queryKey: any }) {
  const [, , restId, sorted, cursor] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BE_URL}/rest/food/${restId}?sort=${sorted}&cursor=${cursor}`,
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
