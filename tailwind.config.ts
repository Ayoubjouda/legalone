/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        gray: {
          '100': '#fafafa',
          '200': '#242120',
          '300': '#1c1934',
          '400': '#1c1c1c',
          '500': '#1a1a1a',
          '600': 'rgba(0, 0, 0, 0.1)',
          '700': 'rgba(0, 0, 0, 0.6)',
          '800': 'rgba(26, 26, 26, 0.7)',
        },
        dimgray: '#796b65',
        white: '#fff',
        black: '#000',
        sandybrown: {
          '100': '#e4ac5d',
          '200': 'rgba(228, 172, 93, 0.3)',
        },
        chocolate: '#e48634',
        gainsboro: '#dee5ed',
        darkslategray: {
          '100': '#3c3c43',
          '200': '#223140',
        },
        silver: '#c4c4c4',
        slategray: '#64607d',
        limegreen: '#45d12e',
        darkgray: 'rgba(151, 151, 151, 0.6)',
        'pallet-4-primary': '#3734a9',
        'text-txt-tertiary': 'rgba(60, 60, 67, 0.5)',
        'gray-3-level': '#c7c7cc',
        'soft-purple': '#d8dbfb',
        grey: '#5e5d6d',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        base: '16px',
        xl: '20px',
        '29xl': '48px',
        lg: '18px',
        sm: '14px',
        '185xl': '204px',
        '21xl': '40px',
        xs: '12px',
        mid: '17px',
        '45xl': '64px',
        inherit: 'inherit',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-debug-screens'),
  ],
};
