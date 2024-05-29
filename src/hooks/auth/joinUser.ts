import axios from 'axios';

interface IJoinUserResponseProps {
  code: string;
  message: string;
  name: string;
}

export const joinUser = () => {
  const postJoin = async (data: {
    name: string;
    phoneNum: string;
    birthYear: string;
    gender: string;
  }) => {
    if (data) {
      try {
        const response = await axios.post<IJoinUserResponseProps>(
          `${process.env.NEXT_PUBLIC_BE_URL}/auth/join`,
          data,
        );
        // 추가 전역적으로 저장하는 로직 있을 수 있음
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return { postJoin };
};
