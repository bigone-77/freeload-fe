export default function RestDetailPage({
  params,
}: {
  params: { restId: string };
}) {
  console.log(params.restId);

  return <p>휴게소 디테일 페이지입니다.</p>;
}
