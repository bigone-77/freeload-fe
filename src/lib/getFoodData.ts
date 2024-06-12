export async function getFoodData({ queryKey }: { queryKey: any }) {
  const [, , restId, sorted, cursor] = queryKey;

  if (cursor === -1) {
    return '데이터 페칭 중지';
  }

  const res = await fetch(
    `/api/rest/food?restId=${restId}&sort=${sorted}&cursor=${cursor}`,
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
