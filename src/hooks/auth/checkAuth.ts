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
        if (!response.data.message) {
          // 신규 가입하려는 회원이라면
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
