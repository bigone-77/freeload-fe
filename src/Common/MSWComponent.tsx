'use client';

import { useEffect } from 'react';

export function MSWComponent() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        // eslint-disable-next-line global-require
        require('@/mocks/browser');
      }
    }
  }, []);

  return null;
}
