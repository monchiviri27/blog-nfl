// src/components/Search.tsx
"use client";

import { useState } from 'react';
import { NFLBlogCard } from './ArticleCard'; // <--- Importamos la tarjeta
import { Input } from './ui/input';

export function Search({ articles }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article => {
    const term = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(term) ||
      article.description.toLowerCase().includes(term) ||
      article.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Buscar artículos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
      />
      
      {/* Mostramos los resultados de la búsqueda */}
      {searchTerm && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredArticles.map(article => (
            <NFLBlogCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}