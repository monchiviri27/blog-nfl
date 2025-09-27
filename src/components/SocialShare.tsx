// src/components/SocialShare.tsx
'use client';

import { Twitter, Facebook, Link2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SocialShareProps {
  title: string;
  url: string;
  variant?: 'horizontal' | 'vertical';
}

export function SocialShare({ title, url, variant = 'horizontal' }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Evitar hidratación usando useEffect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Usar una URL base consistente para SSR
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const shareUrl = isMounted ? `${window.location.origin}${url}` : `${baseUrl}${url}`;
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  };

  const isVertical = variant === 'vertical';

  // Renderizar placeholder durante SSR para evitar diferencias
  if (!isMounted) {
    return (
      <div className={`flex ${isVertical ? 'flex-col space-y-3' : 'flex-row space-x-3'} items-center`}>
        <div className="p-2 bg-blue-500 rounded-full w-10 h-10 opacity-50"></div>
        <div className="p-2 bg-blue-800 rounded-full w-10 h-10 opacity-50"></div>
        <div className="p-2 bg-gray-600 rounded-full w-10 h-10 opacity-50"></div>
      </div>
    );
  }

  return (
    <div className={`flex ${isVertical ? 'flex-col space-y-3' : 'flex-row space-x-3'} items-center`}>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        aria-label="Compartir en Twitter"
      >
        <Twitter className="h-4 w-4" />
      </a>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
        aria-label="Compartir en Facebook"
      >
        <Facebook className="h-4 w-4" />
      </a>
      
      <button
        onClick={copyToClipboard}
        className={`p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors relative ${
          copied ? 'bg-green-600 hover:bg-green-700' : ''
        }`}
        aria-label="Copiar enlace"
      >
        {copied ? (
          <span className="absolute -top-8 -left-2 bg-green-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
            ¡Copiado!
          </span>
        ) : null}
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
}