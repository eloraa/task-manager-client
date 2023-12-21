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
    },
  },
  plugins: [],
};
export default config;
