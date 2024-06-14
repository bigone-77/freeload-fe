export async function postLike(postLikeData: any) {
  const res = await fetch(`/api/rest/like/post?restId=${postLikeData.restId}`, {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(postLikeData.emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['rest', postLikeData.restId],
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
