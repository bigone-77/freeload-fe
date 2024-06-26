'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

interface ISelectLayoutProps {
  children: React.ReactNode;
}

export default function SelectLayout({ children }: ISelectLayoutProps) {
  const segment = useSelectedLayoutSegment();

  if (segment === 'road' || segment === 'direction') {
    return (
      <>
        <header className="flex items-center py-10 px-6 bg-primary">
          <p className="font-bold text-3xl text-text50">자유도</p>
        </header>
        <div className="px-10 pb-32 h-full rounded-t-2xl -translate-y-4 shadow-lg bg-text50 overflow-y-auto">
          {children}
        </div>
      </>
    );
  }
  return <div>{children}</div>;
}
