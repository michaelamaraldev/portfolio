import { ScrollReveal } from "../ScrollReveal";

export const Sobre = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Java", "Spring Boot", "PostgreSQL"];

  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center py-20"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
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
                <h3 className="text-xl font-bold mb-4">Backend</h3>
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
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all w-full max-w-sm mx-auto">
              <h3 className="text-xl font-bold mb-4">Educação</h3>
              <ul className="list-disc text-gray-300 pl-5">
                <li className="mb-2">
                  <div className="font-bold text-base text-gray-200">
                    Análise e Desenvolvimento de Sistemas
                  </div>
                  <div className="text-sm text-gray-400">
                    Centro Universitário Internacional (UNINTER)
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    (2025-2027)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
