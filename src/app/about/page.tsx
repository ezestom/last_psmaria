"use client";

import React from "react";
import { EmblaOptionsType } from 'embla-carousel';
import { Subtitle } from "@/app/components/ui/subtitle";
import { Button } from "@/app/components/ui/button";
import EmblaCarousel from "@/app/components/ui/embla-carousel";
import Link from "next/link";

function AboutSection() {
   const OPTIONS: EmblaOptionsType = {}
   const SLIDE_COUNT = 3
   const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

   return (
      <>
         <section className="w-full py-4 min-h-screen flex justify-center bg-canvas">
            <div className="fixed inset-0 -z-10 h-full w-full dark-grid-bg"></div>
            <Link href="/">
               <Button className="fixed top-5 right-5 inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md py-1.5 px-4 border border-hairline font-semibold text-sm">
                  Volver
               </Button>
            </Link>
            <div className="container px-4 md:px-6 border rounded-md shadow-none border-hairline bg-surface-1 my-12">
               <Subtitle subtitle="Plásticos Santa María" paragraph="Conoce más sobre nosotros" />
               <article className="flex flex-col sm:flex-row mb-6">
                  <div className="max-w-3xl mx-auto text-start text-sm w-full sm:w-1/2 p-2 sm:p-10">
                     <p className="text-ink-muted mb-6">
                        En Plásticos Santa María, nos dedicamos a la fabricación y
                        distribución de productos plásticos de la más alta calidad. Nuestra
                        misión es ofrecer a nuestros clientes soluciones innovadoras y
                        sostenibles que les permitan mejorar su calidad de vida y
                        contribuir al cuidado del medio ambiente.
                     </p>
                     <p className="text-ink-muted mb-6">
                        Nuestro compromiso con la excellence se refleja en cada uno de
                        nuestros productos, los cuales son diseñados y fabricados con los
                        más altos estándares de calidad. Además, contamos con un equipo de
                        profesionales altamente capacitados que se encargan de garantizar
                        que cada producto cumpla con las expectativas de nuestros
                        clientes.
                     </p>
                     <p className="text-ink-muted">
                        En Plásticos Santa María, estamos comprometidos con la
                        sostenibilidad y la responsabilidad social. Por eso, trabajamos
                        constantemente en la implementación de prácticas y procesos
                        ecoamigables que nos permitan reducir nuestro impacto en el medio
                        ambiente y contribuir al desarrollo sostenible de nuestra
                        comunidad
                     </p>
                  </div>
                  <div className="w-full sm:w-1/2 p-2 sm:p-10">
                     <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                  </div>
               </article>
            </div>
         </section>
      </>
   );
}

export default AboutSection;