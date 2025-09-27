// src/app/about/page.tsx
import { AboutTeam } from '@/components/AboutTeam';
import { MissionValues } from '@/components/MissionValues';
import { TechStack } from '@/components/TechStack';
import { Goal, Target, Code, Users } from 'lucide-react'; // Cambiar Football por Goal

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-gray-200 dark:border-gray-700">
            <Goal className="h-6 w-6 text-nfl-gold" /> {/* Cambiado aquí también */}
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              SOBRE NOSOTROS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-nfl-navy via-nfc-red to-nfl-gold bg-clip-text text-transparent">
              Acerca del Blog
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Bienvenido al blog más completo sobre NFL en español. Combinamos pasión por el fútbol americano 
            con tecnología de vanguardia para brindarte análisis profundos y contenido exclusivo.
          </p>
        </div>

        {/* Nuestro Equipo */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 mr-3 text-nfl-gold" />
              Nuestro <span className="text-nfl-gold ml-2">Equipo</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Conoce a las mentes detrás de los análisis y la tecnología que impulsa este blog
            </p>
          </div>
          <AboutTeam />
        </section>

        {/* Misión y Valores */}
        <section className="mb-20">
          <MissionValues />
        </section>

        {/* Stack Tecnológico - Por ahora comentamos hasta crear los iconos */}
        {/* <section className="mb-20">
          <TechStack />
        </section> */}

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-nfl-navy to-nfc-red rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">¿Te gusta lo que ves?</h3>
            <p className="mb-6 font-bold text-gray-600 dark:text-white opacity-90 text-lg">
              Únete a nuestra comunidad de amantes de la NFL y recibe análisis exclusivos cada semana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-nfl-gold text-nfl-navy px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors">
                Suscribirse al Newsletter
              </button>
              <button className="border-2 border-gray-600 dark:border-white px-8 py-3 rounded-xl font-bold text-gray-900 dark:text-white hover:bg-white/10 transition-colors ">
                Ver Artículos Recientes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}