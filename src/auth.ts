import { AdapterUser } from '@auth/core/adapters';
import NextAuth, { Account, Profile, User } from 'next-auth';
import KakaoProvider, { KakaoProfile } from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/login', // 임시 로그인화면
  },
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY!,
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET_KEY!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    signIn: async ({
      profile,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | KakaoProfile | undefined;
      email?: { verificationRequest?: boolean | undefined };
      credentials?: Record<string, unknown>;
    }): Promise<boolean | string> => {
      if (profile && 'kakao_account' in profile) {
        const kakaoProfile = profile as KakaoProfile;

        console.log('nickname', kakaoProfile.kakao_account?.profile?.nickname);
        console.log(
          'profile_image',
          kakaoProfile.kakao_account?.profile?.profile_image_url,
        );
        console.log('email', kakaoProfile.kakao_account?.email);
        return '/join?step=1';
      }
      return false;
    },

    jwt: async ({ token }) => token,
    session: async ({ session }) => session,
  },
});
