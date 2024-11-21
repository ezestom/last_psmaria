
import Image from "next/image";
import React from "react";
import box from "/public/plastic-box.png";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import {
   IconClipboardCopy,
   IconFileBroken,
   IconSignature,
   IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
   return (
      <BentoGrid className=" rounded-md">
         {items.map((item, i) => (
            <BentoGridItem
               key={i}
               title={item.title}
               description={item.description}
               header={item.header}
               className={item.className}
               icon={item.icon}
            />
         ))}
      </BentoGrid>
   );
}

const CustomImage = () => (
   <>
      <Image
         src={box}
         alt="placeholder"
         className="flex flex-1 min-h-6 object-contain py-4 group h-full  rounded-xl shadow "
      />
   </>
);
const items = [
   {
      title: "Industria Farmacéutica",
      description: "Conoce los productos para la industria farmacéutica.",
      header: <CustomImage />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="size-8 text-black/75" />,
   },
   {
      title: "Insdustria Química",
      description: "Productos para la industria química.",
      header: <CustomImage />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="size-8 text-black/75" />,
   },
   {
      title: "Industria Alimenticia",
      description: "Productos para la industria alimenticia.",
      header: <CustomImage />,
      className: "md:col-span-1",
      icon: <IconSignature className="size-8 text-black/75" />,
   },
   {
      title: "Insdustria de Limpieza",
      description:
         "Productos para la industria de limpieza y productos de aseo.",
      header: <CustomImage />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="size-8 text-black/75" />,
   },
];
