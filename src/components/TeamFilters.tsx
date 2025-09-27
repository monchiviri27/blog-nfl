// src/components/TeamFilters.tsx
"use client";

import { useState } from 'react';
import { Filter, Trophy, Users, MapPin } from 'lucide-react';

interface TeamFiltersProps {
  onFilterChange: (filters: {
    conference: string;
    division: string;
    search: string;
  }) => void;
}

export function TeamFilters({ onFilterChange }: TeamFiltersProps) {
  const [conference, setConference] = useState('all');
  const [division, setDivision] = useState('all');
  const [search, setSearch] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      conference,
      division,
      search: search.toLowerCase()
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Filter className="h-5 w-5 text-nfl-gold" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filtrar Equipos
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Búsqueda */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Buscar equipo
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilterChange();
            }}
            placeholder="Ej: Packers, Chiefs..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-nfl-gold focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        {/* Conferencia */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Conferencia
          </label>
          <select
            value={conference}
            onChange={(e) => {
              setConference(e.target.value);
              setDivision('all');
              handleFilterChange();
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-nfl-gold focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Todas</option>
            <option value="AFC">AFC</option>
            <option value="NFC">NFC</option>
          </select>
        </div>

        {/* División */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            División
          </label>
          <select
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
              handleFilterChange();
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-nfl-gold focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Todas</option>
            <option value="East">Este</option>
            <option value="West">Oeste</option>
            <option value="North">Norte</option>
            <option value="South">Sur</option>
          </select>
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            onClick={() => {
              setConference('all');
              setDivision('all');
              setSearch('');
              handleFilterChange();
            }}
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}