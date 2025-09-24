// src/components/Header.tsx - REDISEÑO COMPLETO
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Goal, Users, X, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

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

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Header Principal */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Barra Superior */}
          <div className="flex items-center justify-between py-5">
            {/* Logo y Branding */}
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

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center space-x-8 mx-8">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold transition-colors relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nfl-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Menú Equipos */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setTeamsOpen(true)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold transition-colors group"
                >
                  <Users className="h-4 w-4" />
                  <span>Equipos</span>
                </button>
                
                {teamsOpen && (
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

              <Link 
                href="/about" 
                className="text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold transition-colors relative group"
              >
                Acerca de
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nfl-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Controles Derecha */}
            <div className="flex items-center space-x-4">
              {/* Botón Búsqueda */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Separador */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

              <div className="flex items-center space-x-2">
  <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
  <Switch
    checked={theme === "dark"}
    onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="data-[state=checked]:text-nfl-gold-300 data-[state=unchecked]:bg-gray-300"
  />
  <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
</div>

              {/* Botón Menú Mobile */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Barra de Búsqueda */}
          {searchOpen && (
            <div className="pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos, equipos, jugadores..."
                  className="w-full px-4 py-3 pl-10 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-nfl-gold focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        {/* Menú Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <nav className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Inicio
                </Link>
                
                <div className="py-3 px-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Conferencias NFL
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {NFL_CONFERENCES.map((conference) => (
                      <div key={conference.name}>
                        <h5 className={`font-semibold text-sm mb-2 ${conference.color}`}>
                          {conference.name}
                        </h5>
                        <div className="space-y-1">
                          {conference.teams.slice(0, 3).map((team) => (
                            <Link
                              key={team}
                              href={`/teams/${team.toLowerCase()}`}
                              onClick={() => setIsOpen(false)}
                              className="block text-xs text-gray-600 dark:text-gray-400 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors"
                            >
                              {team}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Acerca de
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Espacio para el header fijo */}
      <div className="h-20"></div>
    </>
  );
}