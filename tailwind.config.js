module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vetly: {
          pink: '#FF6B9D',
          'pink-dark': '#E55A8A',
          orange: '#FF9F40',
          'orange-dark': '#FF8C1A',
          cream: '#FFF7ED',
          ink: '#111827',
          muted: '#6B7280',
          line: '#E5E7EB',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-desktop': ['44px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.25', fontWeight: '600' }],
        'h2-mobile': ['28px', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-mobile': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-mobile': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'badge': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      borderRadius: {
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '56px',
      },
      boxShadow: {
        'card': '0 8px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.1)',
        'header': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        'container': '1100px',
      },
      spacing: {
        'section-sm': '4rem',
        'section-md': '5rem',
        'section-lg': '6rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'parallax': 'parallax 0.1s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'scale-hover': 'scaleHover 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.01)' },
        },
      },
    },
  },
  plugins: [],
};

