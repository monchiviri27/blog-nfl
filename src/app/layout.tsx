import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const lora = Lora({ subsets: ["latin"], variable: '--font-lora' });

export const metadata: Metadata = {
  title: {
    default: "Blog de la NFL",
    template: "%s | Blog de la NFL",
  },
  description: "Últimas noticias y análisis del mundo del fútbol americano. Cobertura completa de la NFL, desde partidos y resultados hasta el Draft y el Super Bowl.",
  metadataBase: new URL("https://tu-blog-nfl.com"),
  openGraph: {
    title: "Blog de la NFL",
    description: "Últimas noticias y análisis del mundo del fútbol americano.",
    url: "https://tu-blog-nfl.com",
    siteName: "Blog de la NFL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog de la NFL",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de la NFL",
    description: "Últimas noticias y análisis del mundo del fútbol americano.",
    creator: "@tu_usuario_twitter",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} dark:bg-gray-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="flex-grow"> {/* ← REMOVER pt-16 - Ya no se necesita */}
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
