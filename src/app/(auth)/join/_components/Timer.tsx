'use client';

import { memo, useEffect, useState } from 'react';

interface TimerProps {
  reset: boolean;
  onResetComplete: () => void;
}

export const Timer = memo(({ reset, onResetComplete }: TimerProps) => {
  const MINUTES_IN_MS = 2 * 60 * 1000; // 2분
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    setTimeLeft(MINUTES_IN_MS);
  }, [reset]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          onResetComplete();
          console.log('응답시간이 초과되었습니다');
          return 0;
        }
        return prevTime - INTERVAL;
      });
    }, INTERVAL);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, onResetComplete]);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <p className="font-regular">시간 초과시 다시 받기</p>
      <p className="font-semibold">
        {minutes} : {seconds}
      </p>
    </div>
  );
});
