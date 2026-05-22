'use client';

import { CircleCheck } from "lucide-react";
import Link from "next/link";

function SentMessage() {
   return (
      <div className="flex flex-col items-center justify-center h-screen bg-canvas overflow-hidden relative">
         <div className="fixed inset-0 -z-10 h-full w-full dark-grid-bg"></div>
         <Link href="/" className="fixed top-5 right-5 inline-flex items-center justify-center text-ink bg-primary-lavender hover:bg-primary-hover focus:bg-primary-focus transition-colors shadow-none rounded-md px-4 py-2 border border-hairline font-semibold text-sm">
            Volver a la tienda
         </Link>
         <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-ink flex items-center gap-2">
               Mensaje enviado
               <CircleCheck className="size-8 text-success" />
            </h1>
            <p className="text-lg text-ink-muted text-center flex flex-col mt-4">
               Gracias por contactarnos, <span>te responderemos a la brevedad.</span>
            </p>
         </div>
      </div>
   );
}
export default SentMessage;