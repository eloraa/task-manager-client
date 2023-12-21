import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coconut-faded': '#f5efe5',
        'coconut-fadedv2': '#f2eee8',
        'coconut-neutral-1': '#4f463c',
        'white-coco-1': '#e8e2d8',
        'coconut-main': '#1a1918',
        'blue-main': '#0008c5',
        'white-coco': '#f7f5f2',
        'gray-white': '#dadce0',
      },
      fontFamily: {
        grotesk: "'Space Grotesk', 'Inter', sans-serif",
      },
      keyframes: {
        in: {
          from: {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
        out: {
          from: {
            transform: 'translateY(0%)',
            opacity: '1',
          },
          to: {
            transform: 'translateY(100%)',
            opacity: '0',
          },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        'translate-right': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(12px, 0)' },
        },
      },
      animation: {
        enter: 'in 200ms ease forwards',
        leave: 'out 200ms ease forwards',
        'scale-in': 'scale-in 0.6s infinite',
        'scale-out': 'scale-out 0.6s infinite',
        'translate-right': 'translate-right 0.6s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
