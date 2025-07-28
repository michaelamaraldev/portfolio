import { ScrollReveal } from "../ScrollReveal";

export const Projetos = () => {
  return (
    <section
      id="projetos"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ScrollReveal>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center">
            Projetos
          </h2>

          <div className="flex justify-center">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition max-w-md w-full">
              <h3 className="text-xl font-bold mb-2">
                Cadastro de Usuário - CRUD
              </h3>
              <p className="text-gray-400 mb-4">
                Este projeto é uma aplicação backend que implementa um CRUD
                (Create, Read, Update, Delete) para gerenciamento de usuários,
                utilizando Spring Boot e JPA (Hibernate).
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Spring Boot", "Spring Data JPA"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
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
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  CODE →
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};