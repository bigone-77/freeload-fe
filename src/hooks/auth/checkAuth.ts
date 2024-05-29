import axios from 'axios';

export const checkAuth = () => {
  const isAuthCheck = async (data: {
    email: string;
    profile_image_url: string;
  }) => {
    if (data) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BE_URL}/auth/check`,
          data,
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return { isAuthCheck };
};
