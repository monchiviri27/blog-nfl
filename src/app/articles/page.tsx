// src/app/articles/page.tsx

// 1. Importaciones necesarias
import { getArticles } from '@/lib/articles'; // La función que devuelve todos los metadatos
import { BlogGridSection } from '@/components/BlogGridSection'; // El contenedor de la cuadrícula
import { NFLBlogCard } from '@/components/ArticleCard'; // El componente de la tarjeta individual
import type { ArticleMetadata } from '@/lib/articles'; // Asumiendo que has tipado ArticleMetadata


// 2. Metadatos (Opcional, pero recomendado para SEO en Next.js)
export const metadata = {
  title: 'Todos los Artículos | Blog de Análisis NFL',
  description: 'Explora nuestra biblioteca completa de análisis, predicciones y la historia de los equipos de la NFL.',
};

// 3. Componente de la Página
export default async function ArticlesPage() {
  // 3.1. Obtener los datos al momento de la compilación (SSG)
  // Nota: Next.js detecta esta función como "server-side" y la ejecutará en build/request
  const allArticles = await getArticles();
  
  // Opcional: Ordenar los artículos por fecha descendente
  const sortedArticles = allArticles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // 3.2. Renderizar la sección de cuadrícula
  return (
    <main className="min-h-[80vh] py-10">
      <BlogGridSection 
        title="Biblioteca Completa de Artículos"
        subtitle="Sumérgete en el análisis más profundo de la NFL, desde predicciones del Super Bowl hasta estrategias ofensivas modernas."
        // Aquí no necesitamos showViewAllButton porque ya estamos en la página de "Ver Todos"
      >
        {/* 3.3. Mapeo de artículos a tarjetas */}
        {sortedArticles.map((article) => (
          <NFLBlogCard 
            key={article.id} 
            article={article as ArticleMetadata} // Aseguramos el tipado si es necesario
          />
        ))}
      </BlogGridSection>

      {/* Si la lista está vacía */}
      {sortedArticles.length === 0 && (
        <div className="container mx-auto text-center py-12">
            <p className="text-xl text-muted-foreground">Aún no hay artículos publicados. ¡Vuelve pronto!</p>
        </div>
      )}
    </main>
  );
}