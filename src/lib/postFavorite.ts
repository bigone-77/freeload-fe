export async function postFavorite(formData: any) {
  const res = await fetch('/api/route/like', {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['route', 'like'],
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
