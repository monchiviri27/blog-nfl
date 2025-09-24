// src/components/Footer.tsx

import Link from 'next/link';
import { Goal, Twitter, Instagram, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-8 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo y Copyright */}
        <div className="flex items-center space-x-2 text-xl font-bold">
          <Goal className="h-6 w-6 text-primary" />
          <span>Blog de la NFL</span>
        </div>
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Blog de la NFL. Todos los derechos reservados.
        </p>
        
        {/* Enlaces Sociales */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Sitio web">
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}