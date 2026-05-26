import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-hairline bg-canvas">
      <p className="text-xs text-ink-subtle">
        &copy; 2024 Plásticos Santa María. Todos los derechos reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a target='_blank' className="text-xs hover:underline underline-offset-4 text-ink-muted" href="https://ezestom.is-a.dev/">
          Developed by <span className="font-bold text-primary-lavender">Eze</span>
        </a>
      </nav>
    </footer>
  );
};

export default SiteFooter;
