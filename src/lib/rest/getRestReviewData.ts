export async function getRestReviewData(restId: number) {
  const res = await fetch(`/api/rest/customer?restId=${restId}`, {
    next: {
      tags: ['rest', 'review', String(restId)],
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
