export async function getRestData() {
  const res = await fetch(`${window?.location?.origin}/api/rest/all`, {
    next: {
      tags: ['all', 'rests'],
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
