import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

dayjs.locale('ko');

export function formatTime(time: string | Date | undefined, format = 'MM.DD.') {
  return dayjs(time).format(format);
}

function parseKoreanDate(dateString: any) {
  const [year, month, day] = dateString.match(/\d+/g);
  return `${year}-${month}-${day}`;
}

export function useTimeDifference(startTime: string, endTime: string) {
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    if (startTime && endTime) {
      // startTime과 endTime을 dayjs 객체로 변환합니다.
      const startTimeObj = dayjs(startTime);
      const endTimeObj = dayjs(endTime);

      // endTime - startTime으로 시간 간격을 계산합니다.
      const duration = endTimeObj.diff(startTimeObj, 'hour');

      // 계산된 시간 간격을 상태로 설정합니다.
      setTimeDifference(duration);
    } else {
      // startTime 또는 endTime이 없는 경우 시간 간격을 null로 설정합니다.
      setTimeDifference(0);
    }
  }, [startTime, endTime]);

  return timeDifference;
}

export function getTimeHours(time: any) {
  const currentTime = dayjs();
  const targetTime = dayjs(parseKoreanDate(time));
  return targetTime.diff(currentTime, 'day');
}

export function fromNow(time: any) {
  const currentTime = dayjs(); // 현재 날짜
  const targetTime = dayjs(parseKoreanDate(time));
  const timeDifferenceInDays = targetTime.diff(currentTime, 'day');
  const timeDifferenceInMonths = targetTime.diff(currentTime, 'month');
  const timeDifferenceInYears = targetTime.diff(currentTime, 'year');

  if (timeDifferenceInDays < 0) {
    if (Math.abs(timeDifferenceInDays) < 30) {
      return `${Math.abs(timeDifferenceInDays)}일 전`;
    }
    if (Math.abs(timeDifferenceInMonths) < 12) {
      return `${Math.abs(timeDifferenceInMonths)}달 전`;
    }
    return `${Math.abs(timeDifferenceInYears)}년 전`;
  }
  if (timeDifferenceInDays < 30) {
    return `${timeDifferenceInDays}일 후`;
  }
  if (timeDifferenceInMonths < 12) {
    return `${timeDifferenceInMonths}달 후`;
  }
  return `${timeDifferenceInYears}년 후`;
}
