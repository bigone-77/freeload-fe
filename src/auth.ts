import { AdapterUser } from '@auth/core/adapters';
import NextAuth, { Account, Profile, User } from 'next-auth';
import KakaoProvider, { KakaoProfile } from 'next-auth/providers/kakao';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

import { checkAuth } from './hooks/auth/checkAuth';

const { isAuthCheck } = checkAuth();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/login', // 임시 로그인 화면
  },
  trustHost: true,
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY!,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    signIn: async ({
      profile,
      account,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | KakaoProfile | GoogleProfile | undefined;
      email?: { verificationRequest?: boolean | undefined };
      credentials?: Record<string, unknown>;
    }): Promise<boolean | string> => {
      if (profile && 'kakao_account' in profile) {
        const kakaoProfile = profile as KakaoProfile;
        const formData = {
          email: kakaoProfile.kakao_account?.email as string,
          profile_image: kakaoProfile.kakao_account?.profile
            ?.profile_image_url as string,
        };

        const isAuth = await isAuthCheck(formData); // 이 사람이 이전에 로그인한 적이 있는지?

        if (isAuth === true) {
          return true;
        }
        return `/join?step=1&email=${formData.email}`;
      }
      if (account?.provider === 'google') {
        const googleProfile = profile as GoogleProfile;
        const formData = {
          email: googleProfile.email,
          profile_image: googleProfile.picture,
        };
        const isAuth = await isAuthCheck(formData);

        if (isAuth === true) {
          return true;
        }
        return `/join?step=1&email=${formData.email}`;
      }
      return false;
    },
    jwt({ token, trigger, session }) {
      if (trigger === 'update' && session?.name) {
        // Session 정보 업데이트하기
        token.name = session.name;
      }
      return token;
    },
    session: async ({ session }) => session,
  },
});
