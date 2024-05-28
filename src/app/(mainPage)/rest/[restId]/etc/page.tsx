export default function Page({ params }: { params: { restId: string } }) {
  console.log(params.restId);

  return <div className="bg-text100 h-full overscroll-y-auto" />;
}
