// src/components/ui/input.tsx - CORREGIDO
import * as React from "react"

// CORREGIR: Eliminar la interfaz vacía o agregar propiedades
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // Agregar alguna propiedad personalizada o eliminar la interfaz
  variant?: "default" | "ghost"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nfl-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:ring-offset-gray-800 dark:placeholder:text-gray-400 dark:focus-visible:ring-nfl-gold ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }