"use client";

import React from "react";
import { EmblaOptionsType } from 'embla-carousel';
import { Subtitle } from "@/app/components/ui/subtitle";
import { Button } from "@/app/components/ui/button";
import EmblaCarousel from "@/app/components/ui/embla-carousel";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

function AboutSection() {
   const OPTIONS: EmblaOptionsType = {}
   const SLIDES = [
      "/factory/fabrica1_op.jpg",
      "/factory/fabrica2_op.jpg",
      "/factory/fabrica3_op.jpg"
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
   };

   return (
      <section className="w-full py-6 min-h-screen flex justify-center bg-canvas relative overflow-hidden">
         {/* Background graphics */}
         <div className="fixed inset-0 -z-10 h-full w-full dark-grid-bg opacity-30"></div>
         <div className="absolute top-[-10%] right-[-10%] -z-10 w-[500px] h-[500px] bg-primary-lavender/5 rounded-full blur-[150px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] -z-10 w-[500px] h-[500px] bg-primary-lavender/5 rounded-full blur-[150px]"></div>

         <div className="container px-4 md:px-6 my-6 md:my-12 relative flex flex-col mx-auto">
            {/* Top Navigation */}
            <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               className="mb-8 self-start"
            >
               <Link href="/">
                  <Button className="inline-flex items-center gap-2 justify-center text-ink-muted hover:text-ink bg-surface-1 hover:bg-surface-2 transition-all rounded-md py-2 px-4 border border-hairline font-semibold text-sm shadow-sm">
                     <ArrowLeft className="size-4" />
                     Volver al Inicio
                  </Button>
               </Link>
            </motion.div>

            {/* Main content box */}
            <motion.div 
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="border rounded-xl shadow-2xl border-hairline bg-surface-1/40 backdrop-blur-md p-6 sm:p-8 md:p-12"
            >
               {/* <motion.div variants={itemVariants}>
                  <Subtitle subtitle="Plásticos Santa María" paragraph="Conoce más sobre nosotros" />
               </motion.div> */}

               <div className="flex flex-col lg:flex-row gap-12 mt-8 md:mt-12 items-stretch">
                  {/* Editorial Text */}
                  <motion.div 
                     variants={itemVariants}
                     className="w-full lg:w-1/2 flex flex-col justify-between text-start text-sm md:text-base leading-relaxed space-y-6 text-ink-muted pr-0 lg:pr-6"
                  >
                     <p className="border-l-2 border-primary-lavender pl-4 italic text-ink font-medium text-lg leading-snug">
                        Fabricando soluciones con los más altos estándares y compromiso sostenible para liderar la industria de envases plásticos.
                     </p>
                     
                     <p>
                        En Plásticos Santa María, nos dedicamos a la fabricación y
                        distribución de productos plásticos de la más alta calidad. Nuestra
                        misión es ofrecer a nuestros clientes soluciones innovadoras y
                        sostenibles que les permitan mejorar su calidad de vida y
                        contribuir al cuidado del medio ambiente.
                     </p>
                     
                     <p>
                        Nuestro compromiso con la excelencia se refleja en cada uno de
                        nuestros productos, los cuales son diseñados y fabricados con los
                        más altos estándares de calidad. Además, contamos con un equipo de
                        profesionales altamente capacitados que se encargan de garantizar
                        que cada producto cumpla con las expectativas de nuestros
                        clientes.
                     </p>
                     
                     <p>
                        Estamos comprometidos con la sostenibilidad y la responsabilidad social. Por eso, trabajamos constantemente en la implementación de prácticas y procesos ecoamigables que nos permitan reducir nuestro impacto ambiental y contribuir al desarrollo sostenible.
                     </p>
                  </motion.div>

                  {/* Visual Carousel Panel */}
                  <motion.div 
                     variants={itemVariants}
                     className="w-full lg:w-1/2 min-h-[300px] flex items-center justify-center bg-surface-2/60 border border-hairline rounded-lg p-4 md:p-6"
                  >
                     <div className="w-full max-w-md h-full">
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}

export default AboutSection;