import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "1" : "url('/app/assets/images/1.jpeg')",
        "2" : "url('/app/assets/images/2.jpeg')",
        "3" : "url('/app/assets/images/3.jpeg')",
        "4" : "url('/app/assets/images/4.jpeg')",
        "5" : "url('/app/assets/images/5.jpeg')",
        "6" : "url('/app/assets/images/6.jpeg')",
        "7" : "url('/app/assets/images/7.jpeg')",
        "8" : "url('/app/assets/images/8.jpeg')",
        "9" : "url('/app/assets/images/9.jpeg')",
        "10" : "url('/app/assets/images/10.jpeg')",
        "11" : "url('/app/assets/images/11.jpeg')",
        "12" : "url('/app/assets/images/12.jpeg')",
        trails : "url('/app/assets/images/trails.jpeg')",
        fixing : "url('/app/assets/images/fixing.jpeg')",
        bike : "url('/app/assets/images/bike.jpeg')",
        group2 : "url('/app/assets/images/group2.jpeg')",
        woods : "url('/app/assets/images/woods.jpeg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "loop-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
          
        },
      },
      animation: {
        "loop-scroll-left": "loop-scroll-left 30s linear infinite",
        "loop-scroll-right": "loop-scroll-right 30s linear infinite",
        "loop-scroll-left-slow": "loop-scroll-left 60s linear infinite",
        "loop-scroll-right-slow": "loop-scroll-right 60s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config