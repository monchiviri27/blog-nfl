// src/lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// La ruta a la carpeta de artículos MDX
const articlesDirectory = path.join(process.cwd(), 'src/articles');

// Función para obtener todos los IDs de los artículos para la generación estática.
export async function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        articleId: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

// Función para obtener el contenido de un artículo por su ID
export function getArticleContent(id) {
  const fullPath = path.join(articlesDirectory, `${id}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    id,
    content: matterResult.content,
    data: matterResult.data,
  };
}

// Agrega esto a tu src/lib/articles.ts
export function getRelatedArticles(currentArticleId: string, category: string, limit: number = 3) {
  const allArticles = getArticles();
  
  return allArticles
    .filter(article => 
      article.id !== currentArticleId && 
      article.category === category
    )
    .slice(0, limit);
}

// Función para obtener todos los artículos
export async function getArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return articles;
}