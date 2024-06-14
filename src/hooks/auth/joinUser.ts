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
        await axios.post('/api/user/join', data);
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  };
  return { postJoin };
};
