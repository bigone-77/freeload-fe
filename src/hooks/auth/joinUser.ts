import axios from 'axios';

export const joinUser = () => {
  const postJoin = async (data: {
    email: string;
    name: string;
    phoneNum: string;
    birthYear: string;
    gender: string;
  }) => {
    if (data) {
      try {
        const response = await axios.post('/api/user/join', data);
        if ((response.data as any) === '추가입력 성공입니다') {
          return true;
        }
        return false;
      } catch (err) {
        throw new Error();
      }
    }
    return false;
  };
  return { postJoin };
};
