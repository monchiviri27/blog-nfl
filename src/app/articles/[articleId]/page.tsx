// src/app/articles/[articleId]/page.tsx - VERSIÓN RESPONSIVA MEJORADA
//import { getArticleContent, getAllArticleIds, getArticles } from '@/lib/articles';
import { getArticleData } from "@/lib/articles";
// Si la función getArticleData es el único import que necesitas de ese archivo.
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Eye } from 'lucide-react';
//import type { Metadata } from 'next';
import { SocialShare } from '@/components/SocialShare';
import { NFLBlogCard } from '@/components/ArticleCard';

export default async function ArticlePage({ params }: { params: { articleId: string } }) {
  const awaitedParams = await params;
  const articleContent = getArticleContent(awaitedParams.articleId);

  if (!articleContent) {
    notFound();
  }

  const { title, description, image, alt, date, category, team, readTime = '5 min' } = articleContent.data;
  
  const allArticles = await getArticles();
  const relatedArticles = allArticles
    .filter(article => article.id !== awaitedParams.articleId && article.category === category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Header - TAMAÑOS RESPONSIVOS CORREGIDOS */}
      <section className="relative nfl-gradient text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-nfl-navy/90 to-field-green/80"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(transparent_24px,_rgba(255,255,255,0.1)_25px)] bg-[length:100%_25px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb y Botones - MÁS COMPACTO */}
          <div className="flex items-center justify-between py-4">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-nfl-gold hover:text-white transition-colors group text-sm"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Volver al Blog</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <SocialShare title={title} url={`/articles/${awaitedParams.articleId}`} />
            </div>
          </div>

          {/* Contenido Hero - TAMAÑOS MÁS PEQUEÑOS */}
          <div className="py-8 max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                team === 'AFC' ? 'bg-afc-blue' : 
                team === 'NFC' ? 'bg-nfc-red' : 
                'bg-nfl-gold text-nfl-navy'
              }`}>
                {category || 'Análisis NFL'}
              </span>
            </div>
            
            {/* TÍTULO RESPONSIVO - MUCHO MÁS PEQUEÑO */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg px-4">
              {title}
            </h1>
            
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed px-4">
              {description}
            </p>

            {/* Metadatos del artículo - MÁS COMPACTO */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300 text-sm">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{readTime} de lectura</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>Por NFL Blog</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Eye className="h-3 w-3" />
                <span>{format(new Date(date), "dd 'de' LLL, yyyy", { locale: es })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen Destacada - MÁS PEQUEÑA */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg border-2 border-white dark:border-gray-800">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 72rem"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Contenido Principal - TEXTO MÁS PEQUEÑO Y COMPACTO */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Izquierda - Solo desktop */}
            <aside className="hidden lg:block space-y-6">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-base mb-3 text-nfl-navy dark:text-nfl-gold">En este artículo</h3>
                  <nav className="space-y-1">
                    <a href="#introduccion" className="block text-xs text-gray-600 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors">
                      • Introducción
                    </a>
                    <a href="#analisis" className="block text-xs text-gray-600 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors">
                      • Análisis táctico
                    </a>
                    <a href="#conclusion" className="block text-xs text-gray-600 dark:text-gray-300 hover:text-nfl-navy dark:hover:text-nfl-gold transition-colors">
                      • Conclusión
                    </a>
                  </nav>
                </div>

                <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-base mb-3 text-nfl-navy dark:text-nfl-gold">Compartir</h3>
                  <SocialShare title={title} url={`/articles/${awaitedParams.articleId}`} variant="vertical" />
                </div>
              </div>
            </aside>

            {/* Contenido del Artículo - TEXTO MÁS PEQUEÑO */}
            <article className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
                {/* PROSE MÁS PEQUEÑO - IDEAL PARA MÓVILES */}
                <div className="prose dark:prose-invert max-w-none 
                                prose-base  // ← Más pequeño que prose-lg
                                prose-headings:font-bold 
                                prose-headings:text-nfl-navy 
                                prose-headings:dark:text-nfl-gold
                                prose-p:text-gray-700 
                                prose-p:dark:text-gray-300 
                                prose-p:leading-relaxed
                                prose-p:text-base
                                prose-a:text-nfl-navy 
                                prose-a:dark:text-nfl-gold
                                prose-a:font-semibold
                                prose-strong:text-nfl-navy 
                                prose-strong:dark:text-nfl-gold
                                prose-strong:font-bold
                                prose-li:text-gray-700
                                prose-li:dark:text-gray-300
                                prose-blockquote:border-l-nfl-gold
                                prose-blockquote:bg-gray-50
                                prose-blockquote:dark:bg-gray-700
                                prose-img:rounded-lg
                                prose-img:shadow-md
                                prose-h1:text-2xl
                                prose-h2:text-xl
                                prose-h3:text-lg">
                  <MDXRemote source={articleContent.content} />
                </div>

                {/* Tags y Compartir Mobile - MÁS COMPACTO */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 lg:hidden">
                  <div className="flex flex-col space-y-3">
                    <SocialShare title={title} url={`/articles/${awaitedParams.articleId}`} />
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs font-semibold">Tags:</span>
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">#{category}</span>
                      {team && <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">#{team}</span>}
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">#NFL</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Artículos Relacionados - MÁS COMPACTO */}
      {relatedArticles.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-nfl-navy dark:text-white">
                Artículos Relacionados
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base">
                Más contenido que te podría interesar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <NFLBlogCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}