import dayjs from 'dayjs';

dayjs.locale('ko');

export function formatTime(time: string | Date | undefined, format = 'MM.DD.') {
  return dayjs(time).format(format);
}
