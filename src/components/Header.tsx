// src/components/Header.tsx - CON BÚSQUEDA FUNCIONAL
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Goal, Users, X, Sun, Moon, Search, History, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";

const NFL_CONFERENCES = [
  { 
    name: "AFC", 
    color: "text-afc-blue",
    bgColor: "bg-afc-blue",
    teams: ["Chiefs", "Bills", "Ravens", "Bengals", "Dolphins", "Steelers", "Chargers", "Raiders"] 
  },
  { 
    name: "NFC", 
    color: "text-nfc-red",
    bgColor: "bg-nfc-red",
    teams: ["49ers", "Cowboys", "Eagles", "Packers", "Lions", "Buccaneers", "Rams", "Seahawks"] 
  }
];

interface Article {
  id: string;
  title: string;
  description: string;
  category?: string;
  team?: string;
  date: string;
  image: string;
  alt: string;
}

interface HeaderProps {
  articles?: Article[];
}

export function Header({ articles = [] }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filtrar artículos para la búsqueda
  const filteredArticles = articles.filter(article => {
    if (!searchTerm.trim()) return false;
    
    const term = searchTerm.toLowerCase().trim();
    return (
      article.title?.toLowerCase().includes(term) ||
      article.description?.toLowerCase().includes(term) ||
      article.category?.toLowerCase().includes(term) ||
      article.team?.toLowerCase().includes(term)
    );
  });

  const clearSearch = () => {
    setSearchTerm('');
    setSearchOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Header Principal - MANTENIENDO TU DISEÑO EXACTO */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Barra Superior - EXACTAMENTE IGUAL */}
          <div className="flex items-center justify-between py-5">
            {/* Logo y Branding - IGUAL */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-nfl-navy to-field-green rounded-full flex items-center justify-center shadow-lg">
                  <Goal className="h-6 w-6 text-nfl-gold" />
                </div>
                <div className="absolute -inset-1 bg-nfl-gold/20 rounded-full blur-sm group-hover:bg-nfl-gold/30 transition-all"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-nfl-navy dark:text-white block leading-tight">
                  NFL BLOG
                </span>
                <span className="text-xs text-nfl-gold font-medium block">
                  ANÁLISIS PROFESIONAL
                </span>
              </div>
            </Link>

            {/* Navegación Desktop - IGUAL */}
            <nav className="hidden lg:flex items-center space-x-8 mx-8">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold transition-colors relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nfl-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Menú Equipos Desktop - IGUAL */}
              <div className="relative">
                <button 
                  onMouseEnter={() => !isMobile && setTeamsOpen(true)}
                  onClick={() => isMobile && setTeamsOpen(!teamsOpen)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold transition-colors group"
                >
                  <Users className="h-4 w-4" />
                  <span>Equipos</span>
                </button>
                
                {teamsOpen && !isMobile && (
                  <div 
                    onMouseLeave={() => setTeamsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {NFL_CONFERENCES.map((conference) => (
                        <div key={conference.name}>
                          <h4 className={`font-bold text-lg mb-3 ${conference.color} flex items-center`}>
                            <span className={`w-3 h-3 ${conference.bgColor} rounded-full mr-2`}></span>
                            {conference.name}
                          </h4>
                          <div className="grid grid-cols-2 gap-1">
                            {conference.teams.map((team) => (
                              <Link
                                key={team}
                                href={`/teams/${team.toLowerCase()}`}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors py-1 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                                onClick={() => setTeamsOpen(false)}
                              >
                                {team}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <Link 
                        href="/teams" 
                        className="text-nfl-gold hover:text-nfl-navy dark:hover:text-yellow-400 font-semibold text-sm flex items-center justify-center"
                      >
                        Ver todos los equipos →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Historia - IGUAL */}
              <Link 
                href="/historia" 
                className="text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold transition-colors relative group"
              >
                <History className="h-4 w-4 inline mr-1" />
                Historia
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nfl-gold group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link 
                href="/about" 
                className="text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold transition-colors relative group"
              >
                Acerca de
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nfl-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Controles Derecha - CON BÚSQUEDA MEJORADA */}
            <div className="flex items-center space-x-4">
              {/* Botón Búsqueda - CON INDICADOR */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors relative"
              >
                <Search className="h-5 w-5" />
                {searchOpen && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-nfl-gold rounded-full"></span>
                )}
              </button>

              {/* Separador - IGUAL */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

              {/* Toggle Theme - IGUAL */}
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="data-[state=checked]:text-nfl-gold data-[state=unchecked]:bg-gray-300"
                />
                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>

              {/* Botón Menú Mobile - IGUAL */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Barra de Búsqueda - MEJORADA CON RESULTADOS */}
          {searchOpen && (
            <div className="pb-4">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar artículos, equipos, jugadores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-nfl-gold focus:border-transparent"
                  autoFocus
                />
                {(searchTerm || searchOpen) && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* RESULTADOS DE BÚSQUEDA - NUEVO */}
              {searchTerm && (
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
                  <div className="p-3 border-b border-gray-100 dark:border-gray-600 flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {filteredArticles.length} resultado{filteredArticles.length !== 1 ? 's' : ''}
                    </span>
                    <button 
                      onClick={clearSearch}
                      className="text-sm text-nfl-gold hover:text-nfl-navy transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                  
                  {filteredArticles.length > 0 ? (
                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                      {filteredArticles.slice(0, 5).map(article => (
                        <Link
                          key={article.id}
                          href={`/articles/${article.id}`}
                          onClick={clearSearch}
                          className="block p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                                {article.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                                {article.description}
                              </p>
                            </div>
                            <ArrowRight className="h-3 w-3 text-nfl-gold mt-1 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
                      No se encontraron resultados para "{searchTerm}"
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Menú Mobile - IGUAL */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <nav className="container mx-auto px-4 py-6">
              <div className="space-y-2">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="w-6 text-center mr-2">🏠</span>
                  Inicio
                </Link>
                
                {/* Equipos en Mobile - IGUAL */}
                <div className="py-2">
                  <button 
                    onClick={() => setTeamsOpen(!teamsOpen)}
                    className="flex items-center w-full py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Equipos
                    <span className={`ml-auto transform transition-transform ${teamsOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  {teamsOpen && (
                    <div className="ml-6 mt-2 space-y-1">
                      <div className="grid grid-cols-2 gap-2">
                        {NFL_CONFERENCES.map((conference) => (
                          <div key={conference.name}>
                            <span className={`text-xs font-bold ${conference.color} block mb-1`}>
                              {conference.name}
                            </span>
                            <div className="space-y-1">
                              {conference.teams.slice(0, 2).map((team) => (
                                <Link
                                  key={team}
                                  href={`/teams/${team.toLowerCase()}`}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setTeamsOpen(false);
                                  }}
                                  className="block text-xs text-gray-600 dark:text-gray-400 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors truncate"
                                >
                                  {team}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link 
                        href="/teams" 
                        onClick={() => {
                          setIsOpen(false);
                          setTeamsOpen(false);
                        }}
                        className="block text-xs text-nfl-gold font-semibold mt-2 text-center"
                      >
                        Ver todos →
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/historia" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <History className="h-4 w-4 mr-2" />
                  Historia
                </Link>

                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="w-6 text-center mr-2">ℹ️</span>
                  Acerca de
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Espacio para el header fijo - IGUAL */}
      <div className="h-20"></div>
    </>
  );
}