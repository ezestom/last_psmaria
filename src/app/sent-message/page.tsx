'use client';

import { CircleCheck } from "lucide-react";

export function SentMessage() {
   const handleClick = () => {
      window.location.href = "/";
   };
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <button onClick={handleClick} className="fixed top-5 right-5 inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 px-4 py-2 rounded-md">Volver a la tienda</button>
         <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary flex items-center gap-1">Mensaje enviado
               <CircleCheck className="size-8" />
            </h1>
            <p className="text-lg text-center flex flex-col mt-4">Gracias por contactarnos, <span>
               te responderemos a la brevedad.</span>

            </p>
         </div>
      </div>
   );
}
export default SentMessage;