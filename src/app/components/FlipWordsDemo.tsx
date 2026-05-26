import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
   const words = ["de calidad,", "ecónomicos,", "competitivos,", "variados,"];

   return (
      <div className="flex-col font-normal flex xl:items-start gap-8">
         <h1 className="text-7xl font-black tracking-tighter sm:text-5xl xl:text-8xl/none flex flex-col text-sky-400">
            <span className="text-5xl xl:text-9xl text-white">
               Plásticos </span>Santa María
         </h1>
         <div className="md:text-5xl text-3xl -tracking-wider font-black text-zinc-100">
            Productos <FlipWords words={words} className="text-primary-lavender" /> <br />
            <span>para tu negocio.</span>
         </div>
      </div>
   );
}
