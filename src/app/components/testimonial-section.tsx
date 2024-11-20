import { StarIcon } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Subtitle } from './ui/subtitle';

const testimonials = [
  {
    text: "Excelente servicio, muy buena calidad y precios accesibles. Recomiendo 100%.",
    author: "Envases pirulo",
  },
  {
    text: "Muy buena atención, los envases llegaron en tiempo y forma. Muy recomendable.",
    author: "Envases pirulo 2",
  },
  {
    text: "Los envases son de muy buena calidad, y el servicio es excelente. 100% recomendable.",
    author: "Envases pirulo 3",
  },
];

const TestimonialSection = () => (
  <section className="w-full mt-0 pb-0 flex justify-center">
    <div className="container px-4 md:px-6">
      <Subtitle subtitle="Testimonios" paragraph="Lo que dicen nuestros clientes" />
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Card>
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-yellow-300" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  {testimonial.text}
                </p>
                <p className="font-semibold">- {testimonial.author}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
