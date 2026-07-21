import React from 'react';
import Image from 'next/image';
import logo from '/public/e_logo_op.png';

const SiteFooter = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-hairline bg-canvas">
      <p className="text-xs text-ink-subtle">
        &copy; 2024 Plásticos Santa María. Todos los derechos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center text-xs">
        <a target='_blank' className="text-xs hover:underline underline-offset-4 text-ink-muted flex items-center gap-1" href="https://ezestom.is-a.dev/">
          Developed by <span className="flex items-center justify-center"><Image src={logo} alt="" width={16} height={16} /></span>
        </a>
      </nav>
    </footer>
  );
};

export default SiteFooter;
