import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '412px',
        tablet: '1024px',
        desktop: '1440px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        card: '22.6px',
        'primary-button': '50px',
        'check-button': '8px',
        'wide-check-button': '16px',
        'search-input': '20px',
        'join-header': '28px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '14.32px',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '16.71px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '19.09px',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '21.48px',
          },
        ],
        xl: [
          '20px',
          {
            lineHeight: '23.87px',
          },
        ],
        '2xl': [
          '24px',
          {
            lineHeight: '28.64px',
          },
        ],
        '3xl': [
          '32px',
          {
            lineHeight: '38.19px',
          },
        ],
      },
      colors: {
        primary: '#158EFF',
        text50: '#FFFFFF',
        text75: '#F2F2F2',
        text100: '#E6E6E6',
        text200: '#CCCCCC',
        text300: '#B3B3B3',
        text400: '#999999',
        text500: '#808080',
        text600: '#666666',
        text700: '#4D4D4D',
        text800: '#333333',
        text900: '#1A1A1A',
        naver: '#03C75A',
        kakao: '#ffe812',
        success: '#17784F',
        error: '#E35858',
      },
    },
  },
  plugins: [],
};
export default config;
