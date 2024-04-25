// screens 폴더는 최상위 app 라우터에서 보여줄 화면을 대신 담아둡니다
// app 라우터에서는 별도로 import만 해주면 되고 url 상 보여주는 용도로만 사용됩니다.
export function HomePage() {
  return <p className="font-regular text-primary">홈페이지입니다.</p>;
}
