import { FaGithub } from "react-icons/fa";
import { ScrollReveal } from "../ScrollReveal";
import ProfileCard from "../../../Reactbits/ProfileCard/ProfileCard";

export const Inicio = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative p-4 pt-20">
      <ScrollReveal>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl">
          
          <div className="text-center lg:text-left z-10 max-w-xl order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent leading-tight">
              Cada commit, uma evolução.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-6 lg:mb-8">
              Transformando ideias em aplicações web modernas e funcionais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-4">
              <a
                href="#projetos"
                className="bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.25)] hover:bg-purple-600 text-center"
              >
                Projetos
              </a>
              <a
                href="https://github.com/michaelamaraldev"
                target="_blank"
                rel="noreferrer"
                className="border border-purple-400/30 text-purple-300 py-3 px-6 rounded-lg font-semibold transition-transform transform hover:-translate-y-1 hover:bg-purple-500/10 hover:text-purple-200 hover:border-purple-400/50 text-center"
              >
                <FaGithub size={24} className="inline-block mr-2" />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="z-10 order-1 lg:order-2 flex-shrink-0">
            <div className="scale-90 sm:scale-100">
              <ProfileCard
                name="Michael Amaral"
                title="Desenvolvedor Fullstack"
                handle="michaelamaraldev"
                status="Online"
                contactText="Contato"
                avatarUrl="/avatar.jpg""
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
};
