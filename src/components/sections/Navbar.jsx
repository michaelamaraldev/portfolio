import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
  
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-purple-500/20 shadow-lg">
      
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="flex justify-between items-center h-16">
          
          <a href="#inicio" className="font-mono text-xl font-bold text-white">
            michaelamaral
            <span className="text-purple-400">dev</span>
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-purple-300 hover:text-purple-200 transition-colors" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-purple-300 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-300 hover:text-purple-300 transition-colors">
              Sobre
            </a>
            <a href="#projetos" className="text-gray-300 hover:text-purple-300 transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-gray-300 hover:text-purple-300 transition-colors">
              Contato
            </a>
          </div>
          
        </div>
        
      </div>
      
    </nav>
  );
  
};