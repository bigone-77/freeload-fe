export async function getRoadRestData({ queryKey }: any) {
  const [, roadName, direction] = queryKey;

  const res = await fetch(`/api/rest/${roadName}/${direction}`, {
    next: {
      tags: ['rest'],
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
