module.exports = {
  darkMode: ["class", "class"],
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1.5rem',
  				lg: '2.5rem',
  				xl: '3rem'
  			}
  		},
  		transitionProperty: {
  			width: 'width margin',
  			height: 'height',
  			bg: 'background-color',
  			display: 'display opacity',
  			visibility: 'visibility',
  			padding: 'padding-top padding-right padding-bottom padding-left'
  		},
  		colors: {
  			brand: {
  				DEFAULT: '#3bb77e',
  				dark: '#2a9b65',
  				light: '#def9ec'
  			},
  			accent: {
  				pink: '#f74b81',
  				orange: '#f59758',
  				blue: '#67bcee'
  			},
  			ink: {
  				DEFAULT: '#253d4e',
  				soft: '#7e7e7e',
  				muted: '#b6b6b6',
  				placeholder: '#838383'
  			},
  			surface: {
  				base: '#ffffff',
  				subtle: '#f4f6fa',
  				highlight: '#def9ec'
  			},
  			border: '#ececec',
  			grey: {
  				'0': '#FFFFFF',
  				'5': '#F9FAFB',
  				'10': '#F3F4F6',
  				'20': '#E5E7EB',
  				'30': '#D1D5DB',
  				'40': '#9CA3AF',
  				'50': '#6B7280',
  				'60': '#4B5563',
  				'70': '#374151',
  				'80': '#1F2937',
  				'90': '#111827'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			none: '0px',
  			soft: '2px',
  			base: '4px',
  			rounded: '8px',
  			large: '16px',
  			xl: '20px',
  			'2xl': '30px',
  			circle: '9999px'
  		},
  		boxShadow: {
  			card: '0px 20px 60px rgba(0, 0, 0, 0.05)',
  			floating: '5px 5px 15px rgba(0, 0, 0, 0.08)'
  		},
  		maxWidth: {
  			'8xl': '100rem',
  			content: '1264px'
  		},
  		screens: {
  			'2xsmall': '320px',
  			xsmall: '512px',
  			small: '1024px',
  			medium: '1280px',
  			large: '1440px',
  			xlarge: '1680px',
  			'2xlarge': '1920px'
  		},
  		fontSize: {
  			'3xl': '2rem',
  			hero: [
  				'4.5rem',
  				{
  					lineHeight: '4.5rem'
  				}
  			],
  			'display-2': [
  				'3rem',
  				{
  					lineHeight: '3.25rem'
  				}
  			],
  			'heading-1': [
  				'2.5rem',
  				{
  					lineHeight: '2.9rem'
  				}
  			],
  			'heading-2': [
  				'2rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			'body-lg': [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			'body-sm': [
  				'0.875rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			]
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-lato)',
  				'Lato',
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Ubuntu',
  				'sans-serif'
  			],
  			display: [
  				'var(--font-quicksand)',
  				'Quicksand',
  				'Lato',
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Ubuntu',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			ring: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'fade-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'fade-in-top': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-out-top': {
  				'0%': {
  					height: '100%'
  				},
  				'99%': {
  					height: '0'
  				},
  				'100%': {
  					visibility: 'hidden'
  				}
  			},
  			'accordion-slide-up': {
  				'0%': {
  					height: 'var(--radix-accordion-content-height)',
  					opacity: '1'
  				},
  				'100%': {
  					height: '0',
  					opacity: '0'
  				}
  			},
  			'accordion-slide-down': {
  				'0%': {
  					'min-height': '0',
  					'max-height': '0',
  					opacity: '0'
  				},
  				'100%': {
  					'min-height': 'var(--radix-accordion-content-height)',
  					'max-height': 'none',
  					opacity: '1'
  				}
  			},
  			enter: {
  				'0%': {
  					transform: 'scale(0.9)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: 1
  				}
  			},
  			leave: {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: 1
  				},
  				'100%': {
  					transform: 'scale(0.9)',
  					opacity: 0
  				}
  			},
  			'slide-in': {
  				'0%': {
  					transform: 'translateY(-100%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			ring: 'ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
  			'fade-in-right': 'fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards',
  			'fade-in-top': 'fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards',
  			'fade-out-top': 'fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards',
  			'accordion-open': 'accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
  			'accordion-close': 'accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
  			enter: 'enter 200ms ease-out',
  			'slide-in': 'slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)',
  			leave: 'leave 150ms ease-in forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-radix")()],
}
