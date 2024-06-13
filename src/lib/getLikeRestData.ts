export async function getLikeRestData(userEmail: string) {
  const res = await fetch(`/api/rest/like?email=${userEmail}`, {
    next: {
      tags: ['rest', 'like', userEmail],
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
