import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Plásticos Santa María. Todos los derechos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a target='_blank' className="text-xs hover:underline underline-offset-4" href="https://ezestom.github.io/portfolio/">
          Developed by <span className="font-bold text-[#046db5]">Eze</span>
        </a>
      </nav>
    </footer>
  );
};

export default SiteFooter;
