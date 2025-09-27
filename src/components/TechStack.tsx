// src/components/TechStack.tsx - VERSIÓN SIMPLIFICADA
import { Code, Zap, Cpu, Palette, Cloud, FileText } from 'lucide-react';

export function TechStack() {
  const technologies = [
    {
      name: "Next.js 14",
      description: "Framework React con App Router para renderizado híbrido",
      usage: "Frontend y Backend",
      icon: Zap
    },
    {
      name: "React 18", 
      description: "Library para interfaces de usuario modernas y reactivas",
      usage: "Componentes UI",
      icon: Code
    },
    {
      name: "TypeScript",
      description: "JavaScript tipado para mayor robustez y mantenibilidad",
      usage: "Todo el proyecto",
      icon: Cpu
    },
    {
      name: "Tailwind CSS",
      description: "Framework CSS utility-first para diseño rápido",
      usage: "Estilos y diseño",
      icon: Palette
    },
    {
      name: "Vercel",
      description: "Plataforma de deployment para aplicaciones frontend",
      usage: "Hosting y CI/CD",
      icon: Cloud
    },
    {
      name: "MDX",
      description: "Markdown con componentes React para contenido dinámico",
      usage: "Sistema de artículos",
      icon: FileText
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Stack <span className="text-nfl-gold">Tecnológico</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Este blog fue construido con las tecnologías más modernas para garantizar performance, 
          SEO y una experiencia de usuario excepcional.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-nfl-gold transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <tech.icon className="h-8 w-8 text-nfl-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tech.name}</h3>
                <span className="text-sm text-nfl-gold font-medium">{tech.usage}</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}