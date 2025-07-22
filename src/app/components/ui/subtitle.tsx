export function Subtitle({ subtitle, paragraph }: { subtitle: string, paragraph: string }) {
   return (
      <div className="md:pt-16">
         <h2 className="text-3xl sm:text-5xl tracking-tighter font-black flex flex-col text-center text-gray-900 my-8 sm:my-20 gap-y-2">
            {subtitle}
            {/* add a line */}
            <span className='text-xl sm:text-2xl text-gray-600 -tracking-wider font-semibold'>
               {paragraph}
            </span>
            <hr className="w-40 h-[3px] text-gray-600 my-2 mx-auto" />
         </h2>
      </div>
   );
}