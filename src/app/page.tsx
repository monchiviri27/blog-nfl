// src/app/page.tsx - VERSIÓN CORREGIDA
import { getArticles } from "@/lib/articles";
import { NFLBlogCard } from "@/components/ArticleCard";
import { Search } from "@/components/Search";
import { ArrowRight } from 'lucide-react'; // <- Agregar este import

export default async function HomePage() {
  const allArticles = await getArticles();
  const featuredArticle = allArticles[0];
  const otherArticles = allArticles.slice(1);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative nfl-gradient text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              BLOG DE LA <span className="text-nfl-gold">NFL</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Análisis profundo, noticias exclusivas y cobertura completa del fútbol americano
            </p>
            <div className="max-w-2xl mx-auto">
              <Search articles={allArticles} />
            </div>
          </div>
        </div>
      </section>

      {/* Artículo Destacado */}
      {featuredArticle && (
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

      {/* Grid de Artículos */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Últimos Artículos</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mantente al día con los análisis más profundos y las noticias más relevantes de la NFL
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
            <NFLBlogCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}
