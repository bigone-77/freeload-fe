export async function getLikeRouteData(userEmail: string) {
  const res = await fetch(`/api/route?email=${userEmail}`, {
    next: {
      tags: ['route', 'like', userEmail],
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
