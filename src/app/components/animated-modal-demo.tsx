"use client";
import React from "react";
import {
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalTrigger,
} from "@/app/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export function AnimatedModalDemo() {
   const images = [
      "/products/anillado.webp",
      "/products/boya_tecno.webp",
      "/products/gatillo_norte.webp",
      "/products/hexagonal.webp",
      "/products/bidon_5.webp",
   ];
   const rotations = images.map(() => Math.random() * 20 - 10);

   return (
      <div className="flex items-center justify-center">
         <Modal>
            <ModalTrigger className="bg-surface-1 hover:bg-surface-2 text-ink flex justify-center group border border-hairline relative">
               <span className="group-hover:translate-x-40 text-center transition duration-500 text-sm font-semibold p-0.5">
                  Contacto
               </span>
               <div className="-translate-x-40 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-ink z-20">
                  📲
               </div>
            </ModalTrigger>
            <ModalBody className="bg-surface-1 border border-hairline">
               <ModalContent>
                  <h4 className="text-lg md:text-2xl text-ink font-bold text-center mb-8">
                     Nuestro contactos{" "}
                     <span className="px-1 py-0.5 rounded-md bg-surface-2 border border-hairline">
                        📲
                     </span>{" "}
                     no dudes en consultarnos.
                  </h4>
                  <div className="flex justify-center items-center">
                     {images.map((image, idx) => (
                        <motion.div
                           key={idx}
                           style={{ rotate: rotations[idx] }}
                           whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                           whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                           className="rounded-xl -mr-4 mt-4 p-1 bg-surface-1 border border-hairline flex-shrink-0 overflow-hidden"
                        >
                           <Image
                              src={image}
                              alt={`Imagen ${idx + 1}`}
                              width={500}
                              height={500}
                              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                           />
                        </motion.div>
                     ))}
                  </div>
                  <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-center justify-start mx-auto text-center">
                     {["Promociones especiales", "Producción en cantidad", "Stock disponible", "Compra mínima", "Entrega inmediata"].map((text, index) => (
                        <div key={index} className="flex items-center justify-center">
                           <span className="text-ink-muted text-sm" role="note" aria-label={text}>
                              {text}
                           </span>
                        </div>
                     ))}
                  </div>
               </ModalContent>
               <ModalFooter className="gap-4 border-t border-hairline bg-surface-2">
                  <a
                     className="px-2 py-2 flex items-center justify-center bg-primary-lavender hover:bg-primary-hover text-ink border border-hairline rounded-md text-sm w-28 transition-colors duration-200"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://wa.me/5491151083838"
                  >
                     WhatsApp
                  </a>
                  <a
                     href="mailto:Ventas@psmaria.com.ar"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-surface-3 hover:bg-surface-4 text-ink text-sm px-2 py-2 flex items-center justify-center rounded-md border border-hairline w-28 transition-colors duration-200"
                  >
                     Email
                  </a>
               </ModalFooter>
            </ModalBody>
         </Modal>
      </div>
   );
}
