export async function getOilData({ queryKey }: { queryKey: any }) {
  const [, , restId] = queryKey;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/oil/${restId}`, {
    next: {
      tags: ['rest', 'oil', restId],
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
