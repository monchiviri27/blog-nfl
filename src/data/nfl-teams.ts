// src/data/nfl-teams.ts
export interface NFLTeam {
  id: string;
  name: string;
  city: string;
  conference: 'AFC' | 'NFC';
  division: string;
  established: number;
  superBowls: number;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  stadium: string;
  logo: string;
}

export const nflTeams: NFLTeam[] = [
  {
    id: 'packers',
    name: 'Packers',
    city: 'Green Bay',
    conference: 'NFC',
    division: 'North',
    established: 1919,
    superBowls: 4,
    colors: {
      primary: '#203731',
      secondary: '#FFB612',
      accent: '#FFFFFF'
    },
    stadium: 'Lambeau Field',
    logo: '/images/teams/packers.png'
  },
  {
    id: 'chiefs',
    name: 'Chiefs',
    city: 'Kansas City',
    conference: 'AFC',
    division: 'West',
    established: 1960,
    superBowls: 4,
    colors: {
      primary: '#E31837',
      secondary: '#FFB81C',
      accent: '#FFFFFF'
    },
    stadium: 'Arrowhead Stadium',
    logo: '/images/teams/chiefs.png'
  },
  {
    id: '49ers',
    name: '49ers',
    city: 'San Francisco',
    conference: 'NFC',
    division: 'West',
    established: 1946,
    superBowls: 5,
    colors: {
      primary: '#AA0000',
      secondary: '#B3995D',
      accent: '#FFFFFF'
    },
    stadium: 'Levi\'s Stadium',
    logo: '/images/teams/49ers.png'
  },
  {
    id: 'cowboys',
    name: 'Cowboys',
    city: 'Dallas',
    conference: 'NFC',
    division: 'East',
    established: 1960,
    superBowls: 5,
    colors: {
      primary: '#003594',
      secondary: '#869397',
      accent: '#FFFFFF'
    },
    stadium: 'AT&T Stadium',
    logo: '/images/teams/cowboys.png'
  },
  {
    id: 'patriots',
    name: 'Patriots',
    city: 'New England',
    conference: 'AFC',
    division: 'East',
    established: 1959,
    superBowls: 6,
    colors: {
      primary: '#002244',
      secondary: '#C60C30',
      accent: '#B0B7BC'
    },
    stadium: 'Gillette Stadium',
    logo: '/images/teams/patriots.png'
  },
  {
    id: 'steelers',
    name: 'Steelers',
    city: 'Pittsburgh',
    conference: 'AFC',
    division: 'North',
    established: 1933,
    superBowls: 6,
    colors: {
      primary: '#000000',
      secondary: '#FFB612',
      accent: '#FFFFFF'
    },
    stadium: 'Acrisure Stadium',
    logo: '/images/teams/steelers.png'
  },
  // Agregar más equipos aquí...
  {
    id: 'bills',
    name: 'Bills',
    city: 'Buffalo',
    conference: 'AFC',
    division: 'East',
    established: 1959,
    superBowls: 0,
    colors: {
      primary: '#00338D',
      secondary: '#C60C30',
      accent: '#FFFFFF'
    },
    stadium: 'Highmark Stadium',
    logo: '/images/teams/bills.png'
  },
  {
    id: 'dolphins',
    name: 'Dolphins',
    city: 'Miami',
    conference: 'AFC',
    division: 'East',
    established: 1965,
    superBowls: 2,
    colors: {
      primary: '#008E97',
      secondary: '#FC4C02',
      accent: '#FFFFFF'
    },
    stadium: 'Hard Rock Stadium',
    logo: '/images/teams/dolphins.png'
  }
];