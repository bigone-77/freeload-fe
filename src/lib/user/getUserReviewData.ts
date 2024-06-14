export async function getUserReviewData(userEmail: string) {
  const res = await fetch(`/api/user/mypage/review?email=${userEmail}`, {
    next: {
      tags: [userEmail, 'review'],
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
