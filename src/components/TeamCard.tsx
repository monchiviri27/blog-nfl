// src/components/TeamCard.tsx
import Link from 'next/link';
import { Trophy, MapPin, Calendar } from 'lucide-react';
import { NFLTeam } from '@/data/nfl-teams';

interface TeamCardProps {
  team: NFLTeam;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Link href={`/teams/${team.id}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header con colores del equipo */}
        <div 
          className="h-4"
          style={{ backgroundColor: team.colors.primary }}
        ></div>
        
        <div className="p-6">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-4 mb-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center border-4"
              style={{ 
                backgroundColor: team.colors.secondary,
                borderColor: team.colors.primary
              }}
            >
              <span className="text-2xl font-bold" style={{ color: team.colors.primary }}>
                {team.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {team.city} {team.name}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span 
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    team.conference === 'AFC' 
                      ? 'bg-afc-blue text-white' 
                      : 'bg-nfc-red text-white'
                  }`}
                >
                  {team.conference}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {team.division}
                </span>
              </div>
            </div>
          </div>

          {/* Información del equipo */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{team.stadium}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{team.established}</span>
              </div>
            </div>

            {/* Super Bowls */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Super Bowls
                </span>
              </div>
              <span className="text-lg font-bold text-nfl-gold">
                {team.superBowls}
              </span>
            </div>
          </div>

          {/* Botón ver más */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full py-2 text-sm font-semibold text-nfl-navy dark:text-nfl-gold hover:text-nfl-navy/80 dark:hover:text-yellow-400 transition-colors">
              Ver análisis del equipo →
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}