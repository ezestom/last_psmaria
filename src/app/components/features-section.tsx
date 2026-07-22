import React from 'react';
import { Card, CardContent } from './ui/card';
import { Subtitle } from './ui/subtitle';

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 mb-4 text-primary-lavender"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Garantía de Gramaje y Resistencia Química",
    description:
      "Control de peso riguroso por envase (PEAD, PVC, PET). Diseñados con espesor uniforme para evitar derrames en químicos agresivos, lavandina y desinfectantes.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 mb-4 text-primary-lavender"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Fabricación Directa sin Intermediarios",
    description:
      "Soplado e inyección propia con tecnología de punta. Ofrecemos precios directos de fábrica por bulto o pallet para optimizar tus costos de producción.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 mb-4 text-primary-lavender"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Despachos y Logística a Todo el País",
    description:
      "Coordinación ágil con transportes e expresos para entregas mayoristas en Buenos Aires y el interior de Argentina sin demoras.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 mb-4 text-primary-lavender"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Asesoramiento Técnico-Comercial B2B",
    description:
      "Acompañamos a tu química o empresa en la selección del envase, tipo de tapa y rosca óptima (28/410, 38mm, presintetizada) según tu producto.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full mt-12 flex justify-center">
      <div className="container px-4 md:px-6">
        <Subtitle subtitle="Ventajas Competitivas" paragraph="Por qué más de 200 empresas eligen nuestros envases plásticos" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index}>
              <Card className="hover:bg-surface-2 hover:border-hairline-strong transition-colors h-full">
                <CardContent className="p-6">
                  {feature.icon}
                  <h3 className="text-base font-bold mb-2 text-ink">{feature.title}</h3>
                  <p className="text-ink-muted text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
