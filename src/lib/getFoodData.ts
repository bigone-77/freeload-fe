export async function getFoodData({ queryKey }: { queryKey: any }) {
  const [, , restId, sorted] = queryKey;

  const res = await fetch(`/api/rest/food?restId=${restId}&sort=${sorted}`, {
    next: {
      tags: ['rest', 'food', restId, sorted],
    },
    credentials: 'include',
    cache: 'no-store',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
