'use client';
import { Button } from "@/app/components/ui/button";
import { CircleCheck } from "lucide-react";

export function SentMessage() {
   const handleClick = () => {
      window.location.href = "/";
   };
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <Button onClick={handleClick} className="fixed top-5 right-5">Volver a la tienda</Button>
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