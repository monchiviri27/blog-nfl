import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
      },
      colors: {
        // Colores NFL específicos
        'nfl-gold': '#FFB612',          // Amarillo mostaza Packers
        'nfl-navy': '#00338D',          // Azul marino
        'field-green': '#006400',       // Verde campo
        'afc-blue': '#004C54',          // Azul AFC
        'nfc-red': '#D50A0A',           // Rojo NFC
        
        // Colores de equipos populares
        'packers-gold': '#FFB612',      // Green Bay Packers
        'packers-green': '#203731',     // Verde Packers
        'chiefs-red': '#E31837',        // Kansas City Chiefs
        'chiefs-gold': '#FFB81C',       // Oro Chiefs
        '49ers-red': '#AA0000',         // San Francisco 49ers
        '49ers-gold': '#B3995D',        // Oro 49ers
        'cowboys-blue': '#003594',      // Dallas Cowboys
        'cowboys-silver': '#869397',    // Plata Cowboys
        
        // Colores adicionales para modo oscuro
        'dark-navy': '#0A1428',
        'dark-field': '#1A3D2F',
      },
      // Opcional: Extender otros aspectos del tema
      backgroundImage: {
        'field-pattern': "url('/images/field-texture.jpg')",
        'gradient-nfl': 'linear-gradient(135deg, #00338D 0%, #006400 100%)',
      }
    },
  },
  plugins: [typography],
};

export default config;