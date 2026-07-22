import type { Metadata } from "next";
// Supports weights 100-900
import '@fontsource-variable/onest';
import "./globals.css";

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.psmaria.com.ar"),
  title: "Plásticos Santa María | Fábrica de Envases Plásticos por Mayor",
  description: "Fábrica y distribuidora mayorista de envases plásticos soplados e inyectados (PEAD, PVC, PET, PP) para productos de limpieza, química, cosmética y piscinas en Argentina.",
  authors: [{ name: "Plásticos Santa María" }],
  alternates: {
    canonical: "https://www.psmaria.com.ar",
  },
  keywords: [
    "envases plásticos por mayor",
    "fábrica de envases plásticos",
    "bidones de 5 litros por mayor",
    "PEAD polietileno alta densidad",
    "PVC cristal",
    "PET botellas",
    "soplado de plástico",
    "inyección plástica",
    "envases para productos de limpieza",
    "envases para agroquímicos y cloro",
    "boyas y accesorios para piscinas",
    "Plásticos Santa María"
  ],
  openGraph: {
    title: "Plásticos Santa María | Fábrica de Envases Plásticos por Mayor",
    description: "Fábrica directa de envases plásticos de alta calidad (PEAD, PVC, PET) y accesorios para piscinas. Venta y despacho mayorista a todo el país.",
    url: "https://www.psmaria.com.ar",
    siteName: "Plásticos Santa María",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Logo Plásticos Santa María - Fábrica de Envases Plásticos",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: "/logo.png",
  },
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Plásticos Santa María",
    "alternateName": "Fábrica de Envases Plásticos Santa María",
    "url": "https://www.psmaria.com.ar",
    "logo": "https://www.psmaria.com.ar/logo.png",
    "description": "Fábrica y distribuidora de envases plásticos soplados e inyectados en PEAD, PVC y PET para industrias de limpieza, química y piscinas.",
    "telephone": "+5491151083838",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.psmaria.com.ar"
    ]
  };

  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <div className="fixed inset-0 -z-10 h-full w-full dark-grid-bg pointer-events-none" />
        <Toaster theme="dark" position="bottom-right" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}