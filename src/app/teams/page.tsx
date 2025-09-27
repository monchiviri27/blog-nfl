// src/app/teams/page.tsx
"use client";

import { useState, useMemo } from 'react';
import { TeamFilters } from '@/components/TeamFilters';
import { TeamCard } from '@/components/TeamCard';
import { nflTeams, NFLTeam } from '@/data/nfl-teams';
import { Users, Trophy, Star } from 'lucide-react';

export default function TeamsPage() {
  const [filters, setFilters] = useState({
    conference: 'all',
    division: 'all',
    search: ''
  });

  const filteredTeams = useMemo(() => {
    return nflTeams.filter(team => {
      const matchesConference = filters.conference === 'all' || team.conference === filters.conference;
      const matchesDivision = filters.division === 'all' || team.division === filters.division;
      const matchesSearch = filters.search === '' || 
        team.name.toLowerCase().includes(filters.search) ||
        team.city.toLowerCase().includes(filters.search);

      return matchesConference && matchesDivision && matchesSearch;
    });
  }, [filters]);

  const stats = {
    total: nflTeams.length,
    afc: nflTeams.filter(t => t.conference === 'AFC').length,
    nfc: nflTeams.filter(t => t.conference === 'NFC').length,
    superBowls: nflTeams.reduce((acc, team) => acc + team.superBowls, 0)
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-nfl-navy to-nfc-red bg-clip-text text-transparent">
            Equipos NFL
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Conoce a fondo los 32 equipos de la National Football League. 
            Descubre su historia, estadísticas y análisis exclusivos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <Users className="h-8 w-8 text-nfl-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</div>
            <div className="text-gray-600 dark:text-gray-400">Equipos Totales</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <Trophy className="h-8 w-8 text-nfc-red mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stats.superBowls}</div>
            <div className="text-gray-600 dark:text-gray-400">Super Bowls Ganados</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <Star className="h-8 w-8 text-afc-blue mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">2</div>
            <div className="text-gray-600 dark:text-gray-400">Conferencias</div>
          </div>
        </div>

        {/* Filtros */}
        <TeamFilters onFilterChange={setFilters} />

        {/* Grid de equipos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏈</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No se encontraron equipos
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intenta con otros filtros de búsqueda
            </p>
          </div>
        )}
      </div>
    </main>
  );
}