import { cn } from "@/lib/utils";

export const BentoGrid = ({
   className,
   children,
}: {
   className?: string;
   children?: React.ReactNode;
}) => {
   return (
      <div
         className={cn(
            "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-[1488px] mx-auto w-full border rounded-md sm:p-[50px]",
            className
         )}
      >
         {children}
      </div>
   );
};

export const BentoGridItem = ({
   className,
   title,
   description,
   header,
   icon,
}: {
   className?: string;
   title?: string | React.ReactNode;
   description?: string | React.ReactNode;
   header?: React.ReactNode;
   icon?: React.ReactNode;
}) => {
   return (
      <div
         className={cn(
            "w-full row-span-1 rounded-md group/bento  hover:shadow-xl transition duration-200 shadow  p-4 sm:p-4 border-white/[0.2] border justify-between flex flex-col space-y-4 hover:group-bg-neutral-100",
            className
         )}
      >
         {header}
         <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-sans font-semibold text-xl  mb-2 mt-2">
               {title}
            </div>
            <div className="font-sans font-normal opacity-75  text-base ">
               {description}
            </div>
         </div>
      </div>
   );
};
