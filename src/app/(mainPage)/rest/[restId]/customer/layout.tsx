interface ICustomerLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ICustomerLayoutProps) {
  return (
    <div className="bg-text100 h-screen overscroll-y-auto">
      <header className="mx-4 bg-primary text-white py-6 border rounded-b-xl text-center">
        <h1 className="text-2xl">서울만남(부산) 휴게소</h1>
      </header>
      {children}
    </div>
  );
}
