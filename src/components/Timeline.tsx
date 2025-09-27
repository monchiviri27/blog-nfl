// src/components/Timeline.tsx
"use client";

import { useState } from 'react';
import { NFLHistoryEvent } from '@/data/nfl-history';
import { Trophy, Calendar, Users, Star, Zap, Award } from 'lucide-react';

interface TimelineProps {
  events: NFLHistoryEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const [selectedEra, setSelectedEra] = useState<string>('all');

  const eras = [
    { id: 'all', label: 'Toda la Historia', color: 'bg-gray-500' },
    { id: 'era', label: 'Épocas', color: 'bg-blue-500' },
    { id: 'super-bowl', label: 'Super Bowls', color: 'bg-yellow-500' },
    { id: 'record', label: 'Récords', color: 'bg-green-500' },
    { id: 'expansion', label: 'Expansiones', color: 'bg-purple-500' },
    { id: 'rule-change', label: 'Reglas', color: 'bg-red-500' }
  ];

  const filteredEvents = selectedEra === 'all' 
    ? events 
    : events.filter(event => event.type === selectedEra);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'super-bowl': return <Trophy className="h-5 w-5" />;
      case 'era': return <Users className="h-5 w-5" />;
      case 'record': return <Star className="h-5 w-5" />;
      case 'expansion': return <Zap className="h-5 w-5" />;
      case 'rule-change': return <Award className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'legendary': return 'border-l-4 border-yellow-500 bg-yellow-500/10 dark:bg-yellow-500/20';
      case 'high': return 'border-l-4 border-red-500 bg-red-500/10 dark:bg-red-500/20';
      case 'medium': return 'border-l-4 border-blue-500 bg-blue-500/10 dark:bg-blue-500/20';
      default: return 'border-l-4 border-gray-500 bg-gray-500/10 dark:bg-gray-500/20';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Filtros de Era - Optimizados para modo oscuro */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {eras.map(era => (
          <button
            key={era.id}
            onClick={() => setSelectedEra(era.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
              selectedEra === era.id
                ? 'bg-nfl-navy dark:bg-nfl-gold text-white dark:text-nfl-navy shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${era.color}`}></div>
            <span className="text-sm font-medium">{era.label}</span>
          </button>
        ))}
      </div>

      {/* Línea de Tiempo */}
      <div className="relative">
        {/* Línea central - Optimizada para claro/oscuro */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-nfl-navy h-full shadow-lg"></div>

        {/* Eventos */}
        <div className="space-y-12">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Punto en la línea - Optimizado para modo oscuro */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 border-2 border-white dark:border-gray-800 ${
                event.importance === 'legendary' ? 'bg-yellow-500 ring-4 ring-yellow-200 dark:ring-yellow-500/30' :
                event.importance === 'high' ? 'bg-red-500 ring-4 ring-red-200 dark:ring-red-500/30' :
                event.importance === 'medium' ? 'bg-blue-500 ring-4 ring-blue-200 dark:ring-blue-500/30' :
                'bg-gray-500 ring-4 ring-gray-200 dark:ring-gray-500/30'
              }`}></div>

              {/* Tarjeta del evento - Optimizada para modo oscuro */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className={`p-6 rounded-2xl shadow-lg backdrop-blur-sm ${
                  getImportanceColor(event.importance)
                } bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50`}>
                  
                  {/* Header - Años optimizados para modo oscuro */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {getEventIcon(event.type)}
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        {event.type === 'super-bowl' ? 'Super Bowl' : 
                         event.type === 'rule-change' ? 'Cambio de Reglas' :
                         event.type === 'expansion' ? 'Expansión' : 
                         event.type}
                      </span>
                    </div>
                    <div className="text-2xl font-black text-nfl-gold dark:text-nfl-gold bg-white/50 dark:bg-gray-900/50 px-3 py-1 rounded-lg">
                      {event.year}
                    </div>
                  </div>

                  {/* Contenido */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Equipos involucrados - Optimizado para modo oscuro */}
                  {event.teams && event.teams.length > 0 && (
                    <div className="flex items-center space-x-2 mt-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Equipos:</span>
                      <div className="flex space-x-1">
                        {event.teams.map(team => (
                          <span
                            key={team}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-600"
                          >
                            {team}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Badge de importancia - Optimizado para modo oscuro */}
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      event.importance === 'legendary' ? 'bg-yellow-500 text-yellow-900 dark:bg-yellow-600 dark:text-yellow-100' :
                      event.importance === 'high' ? 'bg-red-500 text-red-900 dark:bg-red-600 dark:text-red-100' :
                      event.importance === 'medium' ? 'bg-blue-500 text-blue-900 dark:bg-blue-600 dark:text-blue-100' :
                      'bg-gray-500 text-gray-900 dark:bg-gray-600 dark:text-gray-100'
                    }`}>
                      {event.importance === 'legendary' ? '🌟 Legendario' :
                       event.importance === 'high' ? '🔥 Alto Impacto' :
                       event.importance === 'medium' ? '💫 Importante' : '📌 Histórico'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}