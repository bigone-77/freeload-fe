interface IHeaderProps {
  originAddr: string;
  destAddr: string;
}

export default function Header({ originAddr, destAddr }: IHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <p>출발지: {originAddr}</p>
      <p>도착지: {destAddr}</p>
    </header>
  );
}
