import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        mini: '370px',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1.0)',
          },
        },
        fadeOut: {
          from: {
            opacity: '0',
            transform: 'translateX(-50%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 400ms ease-in-out',
        fadeOut: 'fadeOut 1000ms ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        card: '22.6px',
        enteredInput: '11px',
        'check-button': '8px',
        'wide-check-button': '16px',
        'search-input': '20px',
        'join-header': '28px',
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
        secondary: '#EC9D26',
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
