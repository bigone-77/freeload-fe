import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { formatTime } from '@/utils/getTime';
import { setAuthNum } from '@/shared/store/slices/joinUserSlice';

export const usePushAuthNum = (userPhone: string) => {
  const dispatch = useDispatch();
  const RANDOM_NUM = Math.floor(1000 + Math.random() * 9000);

  useEffect(() => {
    dispatch(
      setAuthNum({
        authNum: RANDOM_NUM,
      }),
    );
  }, [dispatch, RANDOM_NUM]);

  const sendSMSNum = async () => {
    try {
      const response = await axios.post('api/sms', {
        msgFrom: '02-3296-0316',
        msgTo: userPhone,
        messageType: '1',
        message: `자유도에서 보낸 인증번호는 [${RANDOM_NUM}]`,
        ordDay: formatTime(new Date(), 'YYYYMMDD'),
        ordTime: formatTime(new Date(), 'HHmmss'),
        ordNo: uuid(),
      });
      console.log(response);
    } catch (err) {
      throw new Error();
    }
  };

  return { sendSMSNum };
};
