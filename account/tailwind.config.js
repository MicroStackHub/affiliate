
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Orange theme colors matching main project
        'orange': {
          50: '#FFF7ED',
          100: '#FFEDD5', 
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F15A2B', // Primary orange
          600: '#E04A1B', // Hover orange
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Custom named colors for easier usage
        'orange-primary': '#F15A2B',
        'orange-hover': '#E04A1B',
        'orange-light': '#FFF5F2',
        'orange-dark': '#D13A0B',
        // Semantic colors
        border: 'rgb(229 231 235)', // gray-200
        input: 'rgb(229 231 235)', // gray-200
        ring: 'rgb(229 231 235)', // gray-200
        background: 'rgb(255 255 255)', // white
        foreground: 'rgb(17 24 39)', // gray-900
        primary: {
          DEFAULT: '#F15A2B',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F3F4F6', // gray-100
          foreground: '#374151', // gray-700
        },
        destructive: {
          DEFAULT: '#EF4444', // red-500
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F9FAFB', // gray-50
          foreground: '#6B7280', // gray-500
        },
        accent: {
          DEFAULT: '#F3F4F6', // gray-100
          foreground: '#374151', // gray-700
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A', // slate-900
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A', // slate-900
        },
      },
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui',
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Arial', 
          'sans-serif'
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-4': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      borderColor: {
        'DEFAULT': 'rgb(229 231 235)', // gray-200
        'border': 'rgb(229 231 235)', // gray-200
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.07)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
