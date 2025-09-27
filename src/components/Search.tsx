// src/components/Search.tsx - VERSIÓN MEJORADA
"use client";

import { useState, useMemo } from 'react';
import { Input } from './ui/input';
import { SearchIcon, X } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  description: string;
  category?: string;
  team?: string;
}

interface SearchProps {
  articles: Article[];
  onSearchChange: (filteredArticles: Article[]) => void;
}

export function Search({ articles, onSearchChange }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) {
      onSearchChange(articles); // Mostrar todos cuando no hay búsqueda
      return articles;
    }
    
    const term = searchTerm.toLowerCase().trim();
    const filtered = articles.filter(article => {
      return (
        article.title?.toLowerCase().includes(term) ||
        article.description?.toLowerCase().includes(term) ||
        article.category?.toLowerCase().includes(term) ||
        article.team?.toLowerCase().includes(term)
      );
    });
    
    onSearchChange(filtered);
    return filtered;
  }, [searchTerm, articles, onSearchChange]);

  const clearSearch = () => {
    setSearchTerm('');
    onSearchChange(articles);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
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
    </div>
  );
}