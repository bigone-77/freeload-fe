export async function EditProfile(data: any) {
  const res = await fetch('/api/user/mypage/profile/edit', {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify(data),
    next: {
      tags: ['profile'],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
