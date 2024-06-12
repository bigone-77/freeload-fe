export async function getRoadOilData({ queryKey }: any) {
  const [, roadName, direction] = queryKey;

  const res = await fetch(
    `/api/oil/road?roadName=${roadName}&direction=${direction}`,
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
