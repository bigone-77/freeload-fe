export async function getCertainRestData({ queryKey }: any) {
  const [, roadName, direction, sorted] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rest/${roadName}/${direction}?sort=${sorted}`,
    {
      next: {
        tags: ['rest'],
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
