// src/app/historia/page.tsx
"use client";

import { Timeline } from '@/components/Timeline';
import { HistoryStats } from '@/components/HistoryStats';
import { nflHistory } from '@/data/nfl-history';
import { Trophy, History, Star, Calendar } from 'lucide-react';

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Header Épico - Optimizado para modo oscuro */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <History className="h-6 w-6 text-nfl-gold" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              HISTORIA DE LA NFL
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-nfl-navy via-nfc-red to-nfl-gold dark:from-nfl-gold dark:via-nfc-red dark:to-nfl-navy bg-clip-text text-transparent">
              Línea del Tiempo
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Desde la fundación en 1920 hasta la era moderna. Descubre los momentos más épicos, 
            récords históricos y las leyendas que forjaron el fútbol americano.
          </p>
        </div>

        {/* Estadísticas */}
        <HistoryStats />

        {/* Introducción - Optimizada para modo oscuro */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Más de 100 Años de Legado
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                La NFL ha evolucionado desde una liga regional hasta el espectáculo deportivo 
                más grande de Norteamérica. Cada década ha traído innovaciones, leyendas y 
                momentos que quedaron grabados en la historia.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Trophy className="h-4 w-4" />
                  <span>58 Super Bowls</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>32 Equipos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>100+ Años</span>
                </div>
              </div>
            </div>
            <div className=" font-bold text-gray-900 dark:text-white text-center">
              <div className="text-6xl font-black mb-2">100+</div>
              <div className="text-lg font-semibold">Años de Historia</div>
              <div className="text-sm opacity-80 mt-2">1920 - Presente</div>
            </div>
          </div>
        </div>

        {/* Línea de Tiempo */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cronología de Eventos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Navega por las décadas y descubre cómo se forjó la liga más grande del fútbol americano
            </p>
          </div>
          
          <Timeline events={nflHistory} />
        </section>

        {/* CTA Final - Optimizado para modo oscuro */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nfl-navy to-nfc-red dark:from-nfc-red dark:to-nfl-navy rounded-3xl p-8 text-white shadow-2xl border border-blue-300/20 dark:border-red-300/20">
            <h3 className="text-2xl mb-4 font-bold text-gray-900 dark:text-white">¿Te apasiona la historia de la NFL?</h3>
            <p className="mb-6 font-bold text-gray-900 dark:text-white">
              Suscríbete para recibir contenido histórico exclusivo cada semana
            </p>
            <button className="bg-nfl-gold text-nfl-navy dark:bg-nfl-gold dark:text-nfl-navy px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors shadow-lg">
              Recibir Contenido Histórico
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}