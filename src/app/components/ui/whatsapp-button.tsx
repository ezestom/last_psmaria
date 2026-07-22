"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface WhatsAppButtonProps {
  className?: string;
}

const getWhatsAppUrl = (pathname: string) => {
  const phoneNumber = "5491151083838";
  let message = "Hola! Quisiera realizar una consulta sobre Plásticos Santa María.";

  if (pathname.includes("/about")) {
    message = "Hola! Estuve viendo la sección 'Nosotros' de Plásticos Santa María y me gustaría hacer una consulta.";
  } else if (pathname.includes("/products")) {
    message = "Hola! Estuve viendo el catálogo de productos de Plásticos Santa María y me gustaría consultar...";
  } else if (pathname.includes("/sent-message")) {
    message = "Hola! Acabo de enviar un formulario de contacto y quería dar seguimiento a mi consulta.";
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export function WhatsAppButton({ className = "bottom-12" }: WhatsAppButtonProps) {
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl(pathname);

  return (
    <div className={`fixed right-5 z-50 group flex items-center ${className}`}>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-surface-1 text-ink px-3 py-1.5 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl border border-hairline whitespace-nowrap pointer-events-none">
        ¿Consultas? Escríbenos
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25d366] text-white w-12 h-12 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128c7e] transition-all duration-300 flex items-center justify-center animate-bounce-subtle"
        aria-label="Contactar por WhatsApp"
      >
        {/* WhatsApp Official SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.24-8.22 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.3.19-.55.07-1.42-.71-2.61-1.74-3.48-3.05-.23-.35.23-.33.65-1.18.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.83-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.76 2.69 4.27 3.77.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.49-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.3z" />
        </svg>
      </a>

      {/* Pulse Outer Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-25 animate-ping -z-10 pointer-events-none"></span>
    </div>
  );
}
