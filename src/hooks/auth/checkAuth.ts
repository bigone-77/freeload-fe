import axios from 'axios';

interface IAuthCheckResponseProps {
  isChecked: boolean;
  message: string;
}

export const checkAuth = () => {
  const isAuthCheck = async (data: {
    email: string;
    profile_image: string;
  }) => {
    if (data) {
      try {
        const response = await axios.post<IAuthCheckResponseProps>(
          `${process.env.NEXT_PUBLIC_BE_URL}/auth/check`,
          data,
        );
        if ((response.data as any) === '새로운 회원이 등록되었습니다.') {
          return false;
        }
        return true;
      } catch (err) {
        throw new Error();
      }
    }
    return false;
  };
  return { isAuthCheck };
};
