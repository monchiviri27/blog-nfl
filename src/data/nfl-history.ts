// src/data/nfl-history.ts
export interface NFLHistoryEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: 'era' | 'super-bowl' | 'record' | 'expansion' | 'rule-change';
  importance: 'low' | 'medium' | 'high' | 'legendary';
  teams?: string[];
  image?: string;
  video?: string;
}

export const nflHistory: NFLHistoryEvent[] = [
  {
    id: 'foundation',
    year: 1920,
    title: 'Fundación de la NFL',
    description: 'Se funda la American Professional Football Association (APFA) en Canton, Ohio, con 14 equipos.',
    type: 'era',
    importance: 'legendary',
    teams: ['Bears', 'Cardinals', 'Packers'],
    image: '/images/history/foundation.jpg'
  },
  {
    id: 'first-championship',
    year: 1933,
    title: 'Primer Campeonato Oficial',
    description: 'Se establece el primer juego de campeonato oficial de la NFL entre Chicago Bears y New York Giants.',
    type: 'era',
    importance: 'high',
    teams: ['Bears', 'Giants']
  },
  {
    id: 'first-super-bowl',
    year: 1967,
    title: 'Super Bowl I',
    description: 'Green Bay Packers gana el primer Super Bowl contra Kansas City Chiefs 35-10.',
    type: 'super-bowl',
    importance: 'legendary',
    teams: ['Packers', 'Chiefs'],
    image: '/images/history/super-bowl-i.jpg'
  },
  {
    id: 'perfect-season',
    year: 1972,
    title: 'Temporada Perfecta de los Dolphins',
    description: 'Miami Dolphins completa la única temporada perfecta en la historia de la NFL (17-0).',
    type: 'record',
    importance: 'legendary',
    teams: ['Dolphins']
  },
  {
    id: 'merger',
    year: 1970,
    title: 'Fusión NFL-AFL',
    description: 'Se completa la fusión entre la NFL y la AFL, creando la liga moderna.',
    type: 'era',
    importance: 'high'
  },
  {
    id: 'montana-dynasty',
    year: 1980,
    title: 'Era de Joe Montana',
    description: 'San Francisco 49ers dominan la década con 4 Super Bowls liderados por Joe Montana.',
    type: 'era',
    importance: 'high',
    teams: ['49ers']
  },
  {
    id: 'super-bowl-xxv',
    year: 1991,
    title: 'La Guerra de los 35 Años',
    description: 'Buffalo Bills pierde su primer Super Bowl consecutivo, comenzando una racha de 4 derrotas.',
    type: 'super-bowl',
    importance: 'high',
    teams: ['Bills', 'Giants']
  },
  {
    id: 'free-agency',
    year: 1993,
    title: 'Agencia Libre Moderna',
    description: 'Se implementa el sistema moderno de agencia libre, cambiando para siempre el balance de la liga.',
    type: 'rule-change',
    importance: 'medium'
  },
  {
    id: 'patriots-dynasty',
    year: 2001,
    title: 'Nacimiento de los Patriots',
    description: 'New England Patriots ganan su primer Super Bowl, comenzando la dinastía de Bill Belichick y Tom Brady.',
    type: 'era',
    importance: 'legendary',
    teams: ['Patriots']
  },
  {
    id: 'manning-brees-era',
    year: 2006,
    title: 'Era de los Quarterbacks Dominantes',
    description: 'Peyton Manning y Drew Brees redefinen el juego con récords de pase históricos.',
    type: 'era',
    importance: 'high'
  },
  {
    id: 'mahomes-era',
    year: 2018,
    title: 'Llegada de Patrick Mahomes',
    description: 'Kansas City Chiefs gana el Super Bowl LIV, comenzando la era de Patrick Mahomes.',
    type: 'era',
    importance: 'high',
    teams: ['Chiefs']
  },
  {
    id: 'super-bowl-lvii',
    year: 2023,
    title: 'Duelo de Quarterbacks Histórico',
    description: 'Chiefs vs Eagles en un clásico instantáneo con Patrick Mahomes y Jalen Hurts.',
    type: 'super-bowl',
    importance: 'medium',
    teams: ['Chiefs', 'Eagles']
  }
];