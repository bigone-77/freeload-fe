import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/search/:tag', ({ params }) => {
    const { tag } = params;
    return HttpResponse.json([
      {
        postId: 1,
        content: `${1} 검색결과 ${tag}`,
        createdAt: new Date(),
      },
      {
        postId: 2,
        content: `${2} 검색결과 ${tag}`,
        createdAt: new Date(),
      },
      {
        postId: 3,
        content: `${3} 검색결과 ${tag}`,
        createdAt: new Date(),
      },
      {
        postId: 4,
        content: `${4} 검색결과 ${tag}`,
        createdAt: new Date(),
      },
      {
        postId: 5,
        content: `${5} 검색결과 ${tag}`,
        createdAt: new Date(),
      },
    ]);
  }),
  http.get('/api/users/:userId/posts', ({ params }) => {
    const { userId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        content: `${1} ${userId}의 게시글`,
        createdAt: new Date(),
      },
      {
        postId: 2,
        content: `${2} ${userId}의 게시글`,
        createdAt: new Date(),
      },
      {
        postId: 3,
        content: `${3} ${userId}의 게시글`,
        createdAt: new Date(),
      },
      {
        postId: 4,
        content: `${4} ${userId}의 게시글`,
        createdAt: new Date(),
      },
      {
        postId: 5,
        content: `${5} ${userId}의 게시글`,
        createdAt: new Date(),
      },
    ]);
  }),
  // http.get('/api/users/:userId', ({ params }): StrictResponse<any> => {
  //   // const { userId } = params;
  //   // const found = User.find((v) => v.id === userId);
  //   // if (found) {
  //   //   return HttpResponse.json(found);
  //   // }
  //   return HttpResponse.json(
  //     { message: 'no_such_user' },
  //     {
  //       status: 404,
  //     },
  //   );
  // }),
];
