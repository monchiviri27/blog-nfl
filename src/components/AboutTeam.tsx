// src/components/AboutTeam.tsx
import { Github, Twitter, Linkedin, Mail, Award, Code, Goal } from 'lucide-react';

export function AboutTeam() {
  const teamMembers = [
    {
      name: "Tu Nombre",
      role: "Fundador & Analista Principal",
      description: "Apasionado del fútbol americano con más de 10 años siguiendo la NFL. Especializado en análisis táctico y estadísticas avanzadas.",
      image: "/images/team/avatar.jpg",
      social: {
        github: "https://github.com/tuusuario",
        twitter: "https://twitter.com/tuusuario", 
        linkedin: "https://linkedin.com/in/tuusuario",
        email: "tu@email.com"
      },
      skills: ["Análisis NFL", "Estadísticas", "Scouting", "Táctica"]
    }
  ];

  return (
    <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border-2 border-nfl-gold/20">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Avatar y info básica */}
            <div className="text-center md:text-left">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-gradient-to-br from-nfl-navy to-nfc-red rounded-full mx-auto md:mx-0 flex items-center justify-center text-4xl text-white font-bold">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <Goal className="h-12 w-12" />
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-nfl-gold text-nfl-navy rounded-full p-2">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-nfl-gold font-semibold">{member.role}</p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-3 mt-4">
                <a href={member.social.github} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-nfl-gold hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href={member.social.twitter} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={`mailto:${member.social.email}`} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Descripción y habilidades */}
            <div className="md:col-span-2">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {member.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-nfl-gold" />
                  Especialidades
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-nfl-navy text-white rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats personales */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-nfl-gold">10+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Años Siguiendo NFL</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-nfl-gold">500+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Análisis Publicados</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-2xl font-bold text-nfl-gold">32</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Equipos Analizados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}