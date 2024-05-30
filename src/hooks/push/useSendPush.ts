import { IFCMNotificationPayloadProps } from '@/models/Message';
import axios from 'axios';

export const useSendPush = () => {
  const sendPush = async ({ token, data }: IFCMNotificationPayloadProps) => {
    const message = {
      token,
      data: Object.assign(data, { image: '/public/logo-192x192.png' }),
    };

    axios.request({
      method: 'POST',
      url: `${window?.location?.origin}/api/fcm`,
      data: { message },
    });
  };

  return sendPush;
};
