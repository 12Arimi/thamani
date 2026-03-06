import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sacco-dark': 'var(--color-sacco-dark)',
        'sacco-light': 'var(--color-sacco-light)', 
        'sacco-accent': 'var(--color-sacco-accent)',
        'sacco-earth': 'var(--color-sacco-earth)',
        'sacco-mist': 'var(--color-sacco-mist)',
        'sacco-bone': 'var(--color-sacco-bone)',
      },
      borderRadius: {
        'sacco': 'var(--radius-sacco)',
      },
    },
  },
  plugins: [],
};

export default config;
