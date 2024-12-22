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
        className="w-12 h-12 mb-4 text-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Servicio al cliente confiable",
    description:
      "Nuestro equipo de soporte dedicado está aquí para garantizar que sus preguntas sean respondidas y sus necesidades satisfechas las 24 horas del día.",
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
        className="w-12 h-12 mb-4 text-primary"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Cotización rápida",
    description:
      "Reciba una cotización en minutos. No se requiere tarjeta de crédito. No se requiere compromiso. Contacte con nosotros y le responderemos a la brevedad con la mejor cotización del mercado.",
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
        className="w-12 h-12 mb-4 text-primary"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: "Producimos bajo demanda",
    description:
      "Producimos bajo demanda, lo que significa que no producimos nada hasta que usted lo pida. Esto significa que no hay exceso de inventario y podemos mantener nuestros costos bajos.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full mt-10 flex justify-center">
      <div className="container px-4 md:px-6">
        <Subtitle subtitle="Nuestro servicio" paragraph="
          Ofrecemos un servicio, con productos de calidad y precios accesibles." />
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index}>
              <Card>
                <CardContent className="p-6">
                  {feature.icon}
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
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
