export async function getRestData(
  restId: number,
  userEmail: string | undefined | null,
) {
  const res = await fetch(`/api/rest?restId=${restId}&email=${userEmail}`, {
    next: {
      tags: ['rest', String(restId)],
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
