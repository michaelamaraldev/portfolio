import { ScrollReveal } from "../ScrollReveal";

export const Projetos = () => {
  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <ScrollReveal>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center">
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:animate-pulse"></div>
                <h3 className="text-xl font-bold text-purple-300">
                  CRUD de Usuários
                </h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Sistema completo de gerenciamento de usuários com operações CRUD, 
                validações e persistência de dados usando Spring Boot e JPA.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Spring Boot", "JPA", "PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-2 rounded-full text-xs hover:bg-purple-500/20 
                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/michaelamaraldev/CRUD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  Ver código →
                </a>
                <span className="text-xs text-gray-500">Backend</span>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:animate-pulse"></div>
                <h3 className="text-xl font-bold text-purple-300">
                  Portfólio Pessoal
                </h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Site responsivo desenvolvido com React e TailwindCSS, 
                apresentando projetos e habilidades com animações suaves.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "JavaScript", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-2 rounded-full text-xs hover:bg-purple-500/20 
                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/michaelamaraldev/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  Ver código →
                </a>
                <span className="text-xs text-gray-500">Frontend</span>
              </div>
            </div>


          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};