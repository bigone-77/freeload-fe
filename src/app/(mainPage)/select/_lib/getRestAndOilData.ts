export async function getRestAndOilData(restId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/rest?restId=${restId}`,
    {
      next: {
        tags: [restId, 'rest'],
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
