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
        rotate: {
          '0%': {
            transform: 'rotateX(-37.5deg) rotateY(45deg)',
          },
          '50%': {
            transform: 'rotateX(-37.5deg) rotateY(405deg)',
          },
          '100%': {
            transform: 'rotateX(-37.5deg) rotateY(405deg)',
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

        'top-animation': {
          '0%': {
            opacity: '1',
            transform: 'rotateX(90deg) translateZ(100px)',
          },
          '20%': {
            opacity: '1',
            transform: 'rotateX(90deg) translateZ(48px)',
          },
          '70%': {
            opacity: '1',
            transform: 'rotateX(90deg) translateZ(48px)',
          },
          '90%': {
            opacity: '1',
            transform: 'rotateX(90deg) translateZ(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateX(90deg) translateZ(100px)',
          },
        },
        'bottom-animation': {
          '0%': {
            opacity: '1',
            transform: 'rotateX(-90deg) translateZ(100px)',
          },
          '20%': {
            opacity: '1',
            transform: 'rotateX(-90deg) translateZ(48px)',
          },
          '70%': {
            opacity: '1',
            transform: 'rotateX(-90deg) translateZ(48px)',
          },
          '90%': {
            opacity: '1',
            transform: 'rotateX(-90deg) translateZ(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateX(-90deg) translateZ(100px)',
          },
        },
        'front-animation': {
          '0%': {
            opacity: '1',
            transform: 'rotateY(0deg) translateZ(96px)',
          },
          '20%': {
            opacity: '1',
            transform: 'rotateY(0deg) translateZ(48px)',
          },
          '70%': {
            opacity: '1',
            transform: 'rotateY(0deg) translateZ(48px)',
          },
          '90%': {
            opacity: '1',
            transform: 'rotateY(0deg) translateZ(96px)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(0deg) translateZ(96px)',
          },
        },
        'back-animation': {
          '0%': {
            opacity: '1',
            transform: 'rotateY(-180deg) translateZ(96px)',
          },
          '20%': {
            opacity: '1',
            transform: 'rotateY(-180deg) translateZ(48px)',
          },
          '70%': {
            opacity: '1',
            transform: 'rotateY(-180deg) translateZ(48px)',
          },
          '90%': {
            opacity: '1',
            transform: 'rotateY(-180deg) translateZ(96px)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(-180deg) translateZ(96px)',
          },
        },
        'left-animation': {
          '0%': {
            opacity: '1',
            transform: 'rotateY(-90deg) translateZ(96px)',
          },
          '20%': {
            opacity: '1',
            transform: 'rotateY(-90deg) translateZ(48px)',
          },
          '70%': {
            opacity: '1',
            transform: 'rotateY(-90deg) translateZ(48px)',
          },
          '90%': {
            opacity: '1',
            transform: 'rotateY(-90deg) translateZ(96px)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(-90deg) translateZ(96px)',
          },
        },
        'right-animation': {
          '0%': {
            opacity: '1',
            transform: 'rotateY(90deg) translateZ(96px)',
          },
          '20%': {
            opacity: '1',
            transform: 'rotateY(90deg) translateZ(48px)',
          },
          '70%': {
            opacity: '1',
            transform: 'rotateY(90deg) translateZ(48px)',
          },
          '90%': {
            opacity: '1',
            transform: 'rotateY(90deg) translateZ(96px)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(90deg) translateZ(96px)',
          },
        },
      },
      animation: {
        enter: 'in 200ms ease forwards',
        leave: 'out 200ms ease forwards',
        rotate: 'rotate 3s ease infinite',
        'scale-in': 'scale-in 0.6s infinite',
        'scale-out': 'scale-out 0.6s infinite',
        'translate-right': 'translate-right 0.6s infinite',
        'top-animation': 'top-animation 3s ease infinite',
        'bottom-animation': 'bottom-animation 3s ease infinite',
        'front-animation': 'front-animation 3s ease infinite',
        'back-animation': 'back-animation 3s ease infinite',
        'left-animation': 'left-animation 3s ease infinite',
        'right-animation': 'right-animation 3s ease infinite',
      },
    },
  },
  plugins: [],
};
export default config;
