import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-50 flex flex-col items-center justify-center
                   transition-all duration-300 ease-in-out
                   ${
                     menuOpen
                       ? "h-screen opacity-100 pointer-events-auto"
                       : "h-0 opacity-0 pointer-events-none"
                   }
                 `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-purple-300 hover:text-purple-200 text-3xl focus:outline-none cursor-pointer transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div className="flex flex-col items-center space-y-6">
        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white hover:text-purple-300 transform transition-all duration-300
                     ${
                       menuOpen
                         ? "opacity-100 translate-y-0 delay-100"
                         : "opacity-0 translate-y-5"
                     }
                     `}
        >
          Início
        </a>
        <a
          href="#sobre"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white hover:text-purple-300 transform transition-all duration-300
            ${
              menuOpen 
                ? "opacity-100 translate-y-0 delay-200" 
                : "opacity-0 translate-y-5"
            }
            `}
        >
          Sobre
        </a>
        <a
          href="#projetos"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white hover:text-purple-300 transform transition-all duration-300
            ${
              menuOpen 
                ? "opacity-100 translate-y-0 delay-300" 
                : "opacity-0 translate-y-5"
            }
            `}
        >
          Projetos
        </a>
        <a
          href="#contato"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white hover:text-purple-300 transform transition-all duration-300
            ${
              menuOpen 
                ? "opacity-100 translate-y-0 delay-500" 
                : "opacity-0 translate-y-5"
            }
            `}
        >
          Contato
        </a>
      </div>

      <div className="absolute bottom-10 w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
    </div>
  );
};