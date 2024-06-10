export async function postReview(formData: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/review`, {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['rest', 'review', formData.svarCd],
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
