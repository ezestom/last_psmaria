'use client';

import React from "react";
import { CircleCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function SentMessage() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-canvas overflow-hidden relative px-4">
         {/* Premium background mesh & ambient glowing spots */}
         <div className="fixed inset-0 -z-10 h-full w-full dark-grid-bg opacity-30"></div>
         <div className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-primary-lavender/10 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-primary-lavender/5 rounded-full blur-[150px]"></div>

         {/* Navigation Link back to shop */}
         <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-6 right-6 z-10"
         >
            <Link href="/" className="inline-flex items-center gap-1.5 justify-center text-ink-muted hover:text-ink bg-surface-1 hover:bg-surface-2 transition-all rounded-md px-4 py-2 border border-hairline text-sm font-medium shadow-sm">
               Volver a la tienda
               <ArrowRight className="size-4" />
            </Link>
         </motion.div>

         {/* Central visual card */}
         <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md border border-hairline rounded-xl bg-surface-1/40 backdrop-blur-md p-8 sm:p-10 shadow-2xl text-center flex flex-col items-center"
         >
            {/* Glowing check circle icon */}
            <div className="relative mb-6">
               <div className="absolute inset-0 bg-primary-lavender/25 blur-xl rounded-full scale-150 animate-pulse"></div>
               <div className="relative flex items-center justify-center size-20 rounded-full bg-surface-2 border border-hairline text-primary-lavender">
                  <CircleCheck className="size-10 stroke-[1.5]" />
               </div>
            </div>

            <h1 className="text-3xl font-black text-ink tracking-tight mb-3">
               Mensaje Enviado
            </h1>
            
            <p className="text-sm text-ink-muted leading-relaxed mb-8">
               Gracias por tu confianza. Nuestro equipo de Plásticos Santa María procesará tu solicitud y se pondrá en contacto contigo a la brevedad.
            </p>

            <Link href="/" className="w-full">
               <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full inline-flex items-center justify-center text-white bg-primary-lavender hover:bg-primary-hover shadow-lg shadow-primary-lavender/15 transition-all rounded-md py-3 font-semibold text-sm border border-hairline-strong"
               >
                  Continuar Explorando
               </motion.button>
            </Link>
         </motion.div>
      </div>
   );
}

export default SentMessage;