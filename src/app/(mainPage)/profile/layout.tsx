interface IProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: IProfileLayoutProps) {
  return (
    <div>
      <header className="flex items-center pt-20 pb-16 pl-10 bg-primary">
        <p className="font-bold text-xl text-text50">마이페이지</p>
      </header>
      <div className="p-10 h-screen rounded-t-2xl -translate-y-4 shadow-lg bg-text50 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
