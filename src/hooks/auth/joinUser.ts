interface IJoinUserResponseProps {
  code: string;
  message: string;
  name: string;
}

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
        const responseData: IJoinUserResponseProps = await response.json();
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return { postJoin };
};
