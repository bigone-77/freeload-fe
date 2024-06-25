export async function getRestData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PROD_URL}/api/rest/all?timestamp=${new Date().getTime()}`,
    {
      next: {
        tags: [String(new Date().getTime())],
      },
      credentials: 'include',
      cache: 'no-store',
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetching data');
  }

  return res.json();
}
