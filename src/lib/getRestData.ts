export async function getRestData(restId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BE_URL}/rest/SvarCd/${restId}`,
    {
      next: {
        tags: ['rest', String(restId)],
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
