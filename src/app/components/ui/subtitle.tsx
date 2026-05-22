export function Subtitle({ subtitle, paragraph }: { subtitle: string, paragraph: string }) {
   return (
      <div className="md:pt-16">
         <h2 className="text-3xl sm:text-5xl tracking-tighter font-semibold flex flex-col text-center text-ink my-8 sm:my-20 gap-y-2">
            {subtitle}
            <span className='text-xl sm:text-2xl text-ink-muted -tracking-wider font-normal'>
               {paragraph}
            </span>
            <hr className="w-40 h-[1px] border-none bg-hairline my-2 mx-auto" />
         </h2>
      </div>
   );
}