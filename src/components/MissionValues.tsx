// src/components/MissionValues.tsx
import { Target, Users, Trophy, Zap, Heart, Shield } from 'lucide-react';

export function MissionValues() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Proveer análisis profundos y accesibles que ayuden a los fans a entender el juego a otro nivel.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Comunidad", 
      description: "Crear un espacio donde los amantes de la NFL puedan compartir su pasión y conocimiento.",
      color: "text-green-600"
    },
    {
      icon: Trophy,
      title: "Excelencia",
      description: "Mantener los más altos estándares de precisión y profundidad en cada análisis.",
      color: "text-yellow-600"
    },
    {
      icon: Zap,
      title: "Innovación",
      description: "Utilizar las últimas tecnologías y metodologías para el análisis deportivo.",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Cada artículo está escrito con la misma pasión que sentimos viendo el juego.",
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Integridad",
      description: "Análisis objetivos basados en datos, sin sesgos hacia equipos o jugadores.",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Nuestra <span className="text-nfl-gold">Filosofía</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Creemos que el fútbol americano es más que un deporte, es una ciencia que merece ser analizada con rigor y pasión.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className={`p-3 rounded-full w-fit mb-4 ${value.color} bg-opacity-10`}>
              <value.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}