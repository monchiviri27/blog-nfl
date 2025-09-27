// src/components/Footer.tsx
'use client';

import { 
  Trophy, 
  Users, 
  BarChart3,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const teams = [
    'AFC East', 'AFC North', 'AFC South', 'AFC West',
    'NFC East', 'NFC North', 'NFC South', 'NFC West'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Trophy className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">NFL Insider</span>
            </div>
            <p className="text-blue-200 mb-6">
              Análisis expertos, estadísticas en profundidad y la cobertura más completa de la NFL.
            </p>
            <div className="flex space-x-3">
              {[Twitter, Facebook, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-yellow-400" />
              Categorías
            </h4>
            <ul className="space-y-2">
              <li><a href="/analysis" className="text-blue-200 hover:text-white transition-colors">Análisis</a></li>
              <li><a href="/draft" className="text-blue-200 hover:text-white transition-colors">Draft</a></li>
              <li><a href="/fantasy" className="text-blue-200 hover:text-white transition-colors">Fantasy</a></li>
              <li><a href="/injuries" className="text-blue-200 hover:text-white transition-colors">Lesiones</a></li>
              <li><a href="/stats" className="text-blue-200 hover:text-white transition-colors">Estadísticas</a></li>
            </ul>
          </div>

          {/* Teams Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-green-400" />
              Divisiones NFL
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {teams.map((division) => (
                <a 
                  key={division}
                  href={`/division/${division.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  {division}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-400" />
              Newsletter
            </h4>
            <p className="text-blue-200 text-sm mb-3">
              Recibe análisis exclusivos en tu email.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full px-3 py-2 bg-blue-800 border border-blue-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-blue-300"
              />
              <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0">
              © {currentYear} NFL Insider. No afiliado a la National Football League.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-blue-300 hover:text-white transition-colors">Privacidad</a>
              <a href="/terms" className="text-blue-300 hover:text-white transition-colors">Términos</a>
              <a href="/contact" className="text-blue-300 hover:text-white transition-colors">Contacto</a>
              <a href="/sitemap" className="text-blue-300 hover:text-white transition-colors">Mapa del sitio</a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 text-center">
            <p className="text-blue-400 text-xs">
              Este sitio es para fines informativos y de entretenimiento. Todas las marcas NFL son propiedad de sus respectivos dueños.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}