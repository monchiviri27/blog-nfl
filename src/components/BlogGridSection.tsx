"use client"

import type React from "react"

interface BlogGridSectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  showViewAllButton?: boolean
  onViewAll?: () => void
}

export function BlogGridSection({
  title = "Últimas Noticias",
  subtitle,
  children,
  showViewAllButton = false,
  onViewAll,
}: BlogGridSectionProps) {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        {/* Header Section */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 text-foreground">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">{children}</div>

        {/* View All Button */}
        {showViewAllButton && (
          <div className="text-center mt-16">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Ver todos los artículos
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
