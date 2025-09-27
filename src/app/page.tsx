// src/app/page.tsx - VERSIÓN CORREGIDA
import { getArticles } from "@/lib/articles";
import { NFLBlogCard } from "@/components/ArticleCard";
import { ArrowRight, Calendar, Clock, Eye } from 'lucide-react';
import Image from "next/image";

export default async function HomePage() {
  const allArticles = await getArticles();
  const featuredArticle = allArticles[0];
  const otherArticles = allArticles.slice(1);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section con Artículo Destacado */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-8 pb-16">
        <div className="container mx-auto px-4">
          {featuredArticle && (
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-nfl-gold/30 transform hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                
                {/* Imagen del artículo */}
                <div className="relative">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-black/20 lg:to-transparent"></div>
                  
                  <div className="absolute top-6 left-6">
                    <span className="inline-block bg-nfl-gold text-nfl-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ ARTÍCULO DESTACADO
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-4 text-sm opacity-90">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>5 min lectura</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido del artículo */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-nfl-gold font-bold text-sm uppercase tracking-wider">
                      {featuredArticle.category || 'Análisis NFL'}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {new Date(featuredArticle.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-black mb-4 text-gray-900 dark:text-white leading-tight">
                    {featuredArticle.title}
                  </h1>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredArticle.description}
                  </p>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>1.2k vistas</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min lectura</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`/articles/${featuredArticle.id}`}
                      className="inline-flex items-center justify-center space-x-2 bg-nfl-navy text-white px-6 py-3 rounded-lg hover:bg-nfl-navy/90 transition-colors font-semibold group"
                    >
                      <span>Leer análisis completo</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-nfl-navy to-nfc-red dark:from-nfl-gold dark:to-nfc-red bg-clip-text text-transparent">
              Más Artículos
            </h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Descubre todos nuestros análisis y noticias de la NFL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <NFLBlogCard key={article.id} article={article} />
            ))}
          </div>

          {/* CTA Final - CORREGIDO */}
          <div className="text-center mt-16">
  <div className="bg-gradient-to-r from-nfl-navy to-nfc-red dark:from-nfl-navy/90 dark:to-nfc-red/90 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
    <h3 className="text-xl font-bold mb-3 text-gray-600 dark:text-white">
      ¿Quieres más contenido como este?
    </h3>
    <p className="mb-6 opacity-90 text-gray-600 dark:text-white/90">
      Suscríbete para no perderte ningún análisis
    </p>
    <button className="bg-nfl-gold text-nfl-navy px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
      Suscribirse al Newsletter
    </button>
  </div>
</div>
        </div>
      </section>
    </main>
  );
}
