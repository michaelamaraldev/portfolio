import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/sections/Navbar';
import { MobileMenu } from './components/sections/MobileMenu';
import { Inicio } from './components/sections/Inicio';
import { Sobre } from './components/sections/Sobre';
import { Projetos } from './components/sections/Projetos';
import { Contato } from './components/sections/Contato';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const actualYear = new Date().getFullYear();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Inicio />
        <Sobre />
        <Projetos />
        <Contato />
        <footer className="text-center py-4 text-gray-400 border-t border-purple-500/20 mt-8">
          <div className="flex justify-center items-center text-sm">
            <p className="mb-0 flex items-center gap-1"> 
              {actualYear} © Desenvolvido por{' '}
              <a
                href="https://github.com/michaelamaraldev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 flex items-center gap-1"
              >
                <FaGithub size={16} /> Michael Amaral
              </a>
              <a
                href="https://www.linkedin.com/in/michaelamaraldev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors ml-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} /> 
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
