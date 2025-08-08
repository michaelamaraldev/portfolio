import { useState } from "react";
import { ScrollReveal } from "../ScrollReveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

export const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Email enviado!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Algo deu errado. Tente novamente."));
  };

  return (
    <section
      id="contato"
      className="min-h-screen flex items-center justify-center py-12"
    >
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent text-center">
            Entre em contato
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Vamos conversar!</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                   Entre em contato comigo através do formulário ou pelas redes sociais.
                 </p>
                
                <div className="space-y-4">
                  <a 
                     href="mailto:michaelzerotreze@gmail.com"
                     className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors group"
                   >
                     <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                       <FaEnvelope className="text-purple-400" />
                     </div>
                     <span>michaelzerotreze@gmail.com</span>
                   </a>
                  
                  <a 
                    href="https://github.com/michaelamaraldev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <FaGithub className="text-purple-400" />
                    </div>
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/michaelamaraldev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-300 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <FaLinkedin className="text-purple-400" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6 text-purple-300">Envie uma mensagem</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                placeholder="Nome"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                placeholder="seuemail@email.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                placeholder="Sua mensagem..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              Envie o e-mail
            </button>
              </form>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
