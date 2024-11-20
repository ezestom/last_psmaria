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
export const metadata: Metadata = {
  title: "Plásticos Santa María",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Ezequiel Stom" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/png" href="/logo.png" />

        <meta
          name="Plásticos Santa María"
          content="Fábrica productora de variedad de envases de plástico"
        />
        <link rel="canonical" href="https://www.psmaria.com.ar" />
        <meta
          title="Plásticos Santa María, una fábrica productora de variedad de envases de plástico"
          content="Plásticos Santa María, una fábrica productora de variedad de envases de plástico"
        />
        <meta property="og:url" content="https://www.psmaria.com.ar" />
        <meta
          name="description"
          property="og:description"
          content="Somos una fábrica productora de variedad de envases de plástico, en Santa María nos dedicamos a la producción de envases de para la industria alimenticia, cosmética, farmacéutica y química."
        />
        <meta
          name="keywords"
          content="Envases, envases de plástico, envases plásticos, envases de plástico para alimentos, envases de plástico para cosméticos, envases de plástico para farmacia, envases de plástico para químicos, envases de plástico para productos de limpieza, envases de plástico para productos de higiene, envases de plástico para productos de belleza, envases de plástico para productos de cuidado personal, envases de plástico para productos de cuidado del hogar, envases de plástico para productos de cuidado de la piel, envases de plástico para productos de cuidado del cabello, envases de plástico para productos de cuidado de la salud, envases de plástico para productos de cuidado de la higiene, envases de plástico para productos de cuidado de la belleza, envases de plástico para productos de cuidado de la limpieza, envases de plástico para productos de cuidado de la higiene personal, envases de plástico para productos de cuidado de la higiene del hogar, envases de plástico para productos de cuidado de la piel, envases de plástico para productos de cuidado del cabello, envases de plástico para productos de cuidado de la salud, envases de plástico para productos de cuidado de la higiene, envases de plástico para productos de cuidado de la belleza, envases de plástico para productos de cuidado de la limpieza, envases de plástico para productos de cuidado de la higiene personal, envases de plástico para productos de cuidado de la higiene del hogar, envases de plástico para productos de cuidado de la piel, envases de plástico para productos de cuidado del cabello, envases de plástico para productos de cuidado de la salud, envases de plástico para productos de cuidado de la higiene, envases de plástico para productos de cuidado de la belleza, envases de plástico para productos de cuidado de la limpieza, envases de plástico para productos de cuidado de la higiene personal"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.psmaria.com.ar"
        />
        <meta
          property="og:title"
          content="Plásticos Santa María"
        />
        <meta property="og:site_name" content="Plásticos Santa María" />
        <meta property="og:image" content="/logo.png" />




      </head>
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