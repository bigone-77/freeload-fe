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
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BE_URL}/auth/join`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        );
        // 추가 전역적으로 저장하는 로직 있을 수 있음
        const responseData = await response.json();
        return responseData;
      } catch (err) {
        throw new Error();
      }
    }
    throw new Error();
  };
  return { postJoin };
};
