export async function postReview(formData: any) {
  const res = await fetch('/api/rest/customer/postReview', {
    method: 'POST',
    credentials: 'include',
    body: formData,
    next: {
      tags: ['rest', 'review'],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
