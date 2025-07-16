import React from 'react';
import { Subtitle } from './ui/subtitle';
import Image,{ StaticImageData } from 'next/image';
import avatar from '/public/avatar.webp';


// Star SVG component to avoid repetition
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    viewBox="0 0 20 20"
    fill="#046db5"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
);

// Testimonial data array
const testimonials = [
  {
    text: "La calidad y precisión en las piezas que nos proveen son fundamentales para nuestra línea de producción. Su consistencia y compromiso con los plazos de entrega son impecables. Un socio estratégico para nosotros.",
    author: "SC Johnson",
    img: avatar,
    stars: 5
  },
  {
    text: "Como sus proveedores de polímeros, valoramos enormemente su profesionalismo y claridad. Es un placer trabajar con una empresa organizada y cumplidora. Una relación comercial sólida y de confianza.",
    author: "Qualli Química",
    img: avatar,
    stars: 5
  },
  {
    text: "Llevamos años confiando en sus soluciones para el sector agroindustrial. La resistencia y durabilidad de sus plásticos son excelentes. Muy buena atención técnica y predisposición en cada consulta.",
    author: "Huagro",
    img: avatar,
    stars: 5
  },
  {
    text: "Requeríamos piezas a medida con especificaciones complejas y superaron nuestras expectativas. El equipo de desarrollo nos acompañó en todo el proceso, desde el diseño del molde hasta el producto final.",
    author: "Victor Eduardo Simó S.A.",
    img: avatar,
    stars: 5
  },
  {
    text: "Siempre cumplen con las especificaciones técnicas y los tiempos de entrega pactados, algo que es clave en la dinámica industria del packaging. La calidad de sus envases y tapas es consistentemente alta.",
    author: "Fadep Envases",
    img: avatar,
    stars: 5
  },
  {
    text: "Coordinar la logística con ellos es un proceso eficiente. Su excelente organización interna facilita nuestra operativa, asegurando que la mercadería llegue siempre a destino en tiempo y forma.",
    author: "TNT Logística",
    img: avatar,
    stars: 5
  },
];

// Testimonial Card Component
interface Testimonial {
  text: string;
  author: string;
  img: StaticImageData;
  stars: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="mb-8 sm:break-inside-avoid">
    <blockquote className="rounded-lg bg-gray-50 border border-gray-200 p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <Image
          alt={`Person de ${testimonial.author}`}
          src={testimonial.img}
          className="size-14 rounded-full object-cover"
        />
        <div>
          <div className="flex justify-center gap-0.5">
            {[...Array(testimonial.stars)].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
          <p className="mt-0.5 text-lg font-medium text-gray-900">{testimonial.author}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{testimonial.text}</p>
    </blockquote>
  </div>
);

export function TestimonialSection() {
  return (
    <section className="">
      <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 container">
        <Subtitle subtitle="Testimonios" paragraph="Lo que dicen nuestros clientes" />
        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;