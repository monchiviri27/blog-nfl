// src/components/ArticleCard.tsx - VERSIÓN MEJORADA
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Link from "next/link";

export function NFLBlogCard({ article }) {
  const { id, title, description, date, image, alt, category, team } = article;

  if (!article || !article.title) return null;

  const formattedDate = format(new Date(date), "dd 'de' LLL, yyyy", { locale: es });
  
  // Colores según categoría/equipo
  const getCategoryColor = () => {
    if (team === 'AFC') return 'bg-afc-blue text-white';
    if (team === 'NFC') return 'bg-nfc-red text-white';
    if (category?.includes('Super Bowl')) return 'bg-gradient-to-r from-nfl-gold to-yellow-400 text-nfl-navy';
    return 'bg-nfl-navy text-white';
  };

  return (
    <Link href={`/articles/${id}`} className="block group">
      <Card className="team-card-hover overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-card shadow-sm h-full">
        {/* Imagen con overlay */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {image && (
            <>
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              
              {/* Badge en esquina superior */}
              {(category || team) && (
                <div className="absolute top-3 left-3">
                  <Badge className={`${getCategoryColor()} font-bold px-3 py-1 text-xs`}>
                    {category || team}
                  </Badge>
                </div>
              )}
            </>
          )}
        </div>

        <CardContent className="p-6 space-y-4 flex flex-col justify-between h-full">
          <div className="space-y-3">
            {/* Fecha */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-white line-clamp-2 group-hover:text-nfl-navy dark:group-hover:text-nfl-gold transition-colors">
              {title}
            </h3>

            {/* Descripción */}
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Botón de acción */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <Eye className="h-3 w-3" />
              <span>5 min lectura</span>
            </div>
            <div className="flex items-center space-x-2 text-nfl-navy dark:text-nfl-gold font-semibold group-hover:space-x-3 transition-all">
              <span className="text-sm">Leer análisis</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

