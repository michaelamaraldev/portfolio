import { ScrollReveal } from "../ScrollReveal";

export const Sobre = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "HTML5",
    "CSS3"
  ];

  const backendSkills = ["Java", "Spring Boot", "PostgreSQL", "MySQL", "REST APIs"];

  const tools = ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Figma", "Postman"];

  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <ScrollReveal>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center">
            Sobre Mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Desenvolvedor apaixonado por tecnologia! Focado em criar soluções inovadoras e eficientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Ferramentas</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-purple-300">Educação</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-purple-500/30 pl-4">
                  <div className="font-bold text-base text-gray-200">
                    Análise e Desenvolvimento de Sistemas
                  </div>
                  <div className="text-sm text-gray-400">
                    Centro Universitário Internacional (UNINTER)
                  </div>
                  <div className="text-xs text-purple-400 mt-0.5">
                    2025-2027
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-purple-300">Foco atual</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Desenvolvimento Fullstack</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Arquitetura de software</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Boas práticas de código</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
