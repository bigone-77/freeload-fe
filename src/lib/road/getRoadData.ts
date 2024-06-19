export async function getRoadData() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/rest/all`, {
  const res = await fetch('/api/road', {
    next: {
      tags: ['road'],
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
