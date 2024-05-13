import Header from './_layouts/Header';

interface ISearchTargetLayoutProps {
  children: React.ReactNode;
  params: {
    keyword: string;
  };
}

export default function SearchTargetLayout({
  children,
  params,
}: ISearchTargetLayoutProps) {
  const originDestAddr = decodeURI(params.keyword);
  const originAddr = originDestAddr.split(',')[0];
  const destAddr = originDestAddr.split(',')[1];

  return (
    <>
      <Header originAddr={originAddr} destAddr={destAddr} />
      {children}
    </>
  );
}
