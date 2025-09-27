// src/components/HistoryStats.tsx
import { nflHistory } from '@/data/nfl-history';

export function HistoryStats() {
  const stats = {
    totalEvents: nflHistory.length,
    superBowls: nflHistory.filter(e => e.type === 'super-bowl').length,
    legendaryEvents: nflHistory.filter(e => e.importance === 'legendary').length,
    yearsCovered: new Date().getFullYear() - nflHistory[0].year
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <div className="bg-gradient-to-br from-nfl-navy to-blue-900 dark:from-blue-900 dark:to-nfl-navy rounded-2xl p-6 text-white text-center shadow-lg border border-blue-300/20 dark:border-blue-700/30">
        <div className="text-3xl font-black mb-2">{stats.yearsCovered}+</div>
        <div className="text-sm opacity-90">Años de Historia</div>
      </div>
      <div className="bg-gradient-to-br from-nfl-gold to-yellow-600 dark:from-yellow-600 dark:to-nfl-gold rounded-2xl p-6 text-nfl-navy dark:text-yellow-100 text-center shadow-lg border border-yellow-300/20 dark:border-yellow-700/30">
        <div className="text-3xl font-black mb-2">{stats.superBowls}</div>
        <div className="text-sm opacity-90">Super Bowls</div>
      </div>
      <div className="bg-gradient-to-br from-nfc-red to-red-900 dark:from-red-900 dark:to-nfc-red rounded-2xl p-6 text-white text-center shadow-lg border border-red-300/20 dark:border-red-700/30">
        <div className="text-3xl font-black mb-2">{stats.legendaryEvents}</div>
        <div className="text-sm opacity-90">Momentos Épicos</div>
      </div>
      <div className="bg-gradient-to-br from-field-green to-green-900 dark:from-green-900 dark:to-field-green rounded-2xl p-6 text-white text-center shadow-lg border border-green-300/20 dark:border-green-700/30">
        <div className="text-3xl font-black mb-2">{stats.totalEvents}</div>
        <div className="text-sm opacity-90">Eventos Históricos</div>
      </div>
    </div>
  );
}