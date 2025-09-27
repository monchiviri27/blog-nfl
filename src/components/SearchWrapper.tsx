// src/components/SearchWrapper.tsx
"use client";

import { useState, useMemo } from 'react';
import { NFLBlogCard } from './ArticleCard';
import { Input } from './ui/input';
import { SearchIcon, X, ArrowRight } from 'lucide-react'; // <-- Agregar ArrowRight aquí

interface Article {
  id: string;
  title: string;
  description: string;
  category?: string;
  team?: string;
  date: string;
  image: string;
  alt: string;
}

interface SearchWrapperProps {
  allArticles: Article[];
}

export function SearchWrapper({ allArticles }: SearchWrapperProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) {
      return allArticles; // Mostrar todos cuando no hay búsqueda
    }
    
    const term = searchTerm.toLowerCase().trim();
    return allArticles.filter(article => {
      return (
        article.title?.toLowerCase().includes(term) ||
        article.description?.toLowerCase().includes(term) ||
        article.category?.toLowerCase().includes(term) ||
        article.team?.toLowerCase().includes(term)
      );
    });
  }, [searchTerm, allArticles]);

  const clearSearch = () => setSearchTerm('');

  const featuredArticle = filteredArticles[0];
  const otherArticles = filteredArticles.slice(1);

  return (
    <>
      {/* Barra de búsqueda */}
      <div className="w-full max-w-2xl mx-auto mb-12">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar artículos, equipos, categorías..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-lg border-2 border-gray-200 focus:border-nfl-gold focus:ring-2 focus:ring-nfl-gold/20 transition-all duration-200 text-gray-900"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Contador de resultados */}
        {searchTerm && (
          <div className="text-center mt-4">
            <p className="text-white text-sm">
              {filteredArticles.length === 0 
                ? 'No se encontraron resultados' 
                : `Encontrados ${filteredArticles.length} artículo${filteredArticles.length !== 1 ? 's' : ''}`
              }
            </p>
          </div>
        )}
      </div>

      {/* Mostrar artículo destacado solo si NO hay búsqueda */}
      {!searchTerm && featuredArticle && (
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-nfl-gold/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video md:aspect-auto">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.alt}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-nfl-gold text-nfl-navy px-3 py-1 rounded-full text-sm font-bold mb-4">
                  ARTÍCULO DESTACADO
                </span>
                <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredArticle.description}</p>
                <a 
                  href={`/articles/${featuredArticle.id}`}
                  className="inline-flex items-center space-x-2 bg-nfl-navy text-white px-6 py-3 rounded-lg hover:bg-nfl-navy/90 transition-colors font-semibold"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid de artículos */}
      <section className="container mx-auto px-4 py-12">
        {!searchTerm && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Últimos Artículos</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mantente al día con los análisis más profundos y las noticias más relevantes de la NFL
            </p>
          </div>
        )}

        {/* Grid normal o resultados de búsqueda */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(searchTerm ? filteredArticles : otherArticles).map((article) => (
            <NFLBlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {searchTerm && filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No se encontraron resultados para "{searchTerm}"
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intenta con otros términos de búsqueda
            </p>
          </div>
        )}
      </section>
    </>
  );
}