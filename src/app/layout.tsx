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
  title: "Plásticos Santa María | Fábrica de Envases Plásticos",
  description: "Somos una fábrica productora de variedad de envases de plástico para la industria alimenticia, cosmética, farmacéutica y química.",
  authors: [{ name: "Ezequiel Stom" }],
  alternates: {
    canonical: "https://www.psmaria.com.ar",
  },
  keywords: [
    "envases plásticos",
    "fábrica de envases",
    "PEAD",
    "PVC",
    "PET",
    "soplado de plástico",
    "inyección plástica",
    "envases industriales",
    "envases para alimentos",
    "envases cosmética",
    "Plásticos Santa María"
  ],
  openGraph: {
    title: "Plásticos Santa María | Fábrica de Envases Plásticos",
    description: "Somos una fábrica productora de variedad de envases de plástico para la industria alimenticia, cosmética, farmacéutica y química.",
    url: "https://www.psmaria.com.ar",
    siteName: "Plásticos Santa María",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Logo Plásticos Santa María",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}