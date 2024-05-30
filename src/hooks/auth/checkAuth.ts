import { store } from '@/shared/store';
import { setEmail } from '@/shared/store/slices/joinUserSlice';
import axios from 'axios';

interface IAuthCheckResponseProps {
  isChecked: boolean;
  message: string;
}

export const checkAuth = () => {
  const isAuthCheck = async (data: {
    email: string;
    profile_image_url: string;
  }) => {
    if (data) {
      try {
        const response = await axios.post<IAuthCheckResponseProps>(
          `${process.env.NEXT_PUBLIC_BE_URL}/auth/check`,
          data,
        );
        store.dispatch(setEmail({ email: data.email }));
        return response.data.isChecked;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
    return false;
  };
  return { isAuthCheck };
};
