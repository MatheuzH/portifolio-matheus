import printGabizito from "@/assets/printgabizito.png"; 
import printTriAigem from "@/assets/printtriAigem.png";

export const PROFILE = {
  name: "Matheus Herzog",
  role: "Desenvolvedor(a) Full Stack",
  location: "Brasil",
  email: "matheusgadelha01@gmail.com",
  github: "https://github.com/MatheuzH",
  linkedin: "https://www.linkedin.com/in/matheus-gadelha-alves-herzog-6a957824a",
  resumo:
    "Desenvolvo soluções performáticas e escaláveis, com foco na experiência do usuário, qualidade de código e entrega contínua.",
  experiencias: [
    {
      empresa: "HTS Tecnologia e Recursos Humanos",
      periodo: "2024 — Atual",
      cargo: "Desenvolvedor Full Stack",
      descricao:
        "Desenvolvimento de aplicações web com foco em desenvolvimento com IA e boas práticas (React e TypeScript). Desenvolvimento de APIs RESTful.",
    },
    {
      empresa: "Freelancer",
      periodo: "2023 - Atual",
      cargo: "Desenvolvedor full stack",
      descricao:
        "Criação de interfaces responsivas, acessíveis e animadas utilizando React, Tailwind e testes automatizados. Desenvolvimento de diversos sistemas para clientes variados.",
    },
  ],
  stacks: {
    frontend: ["React", "TypeScript", "Vite", "Tailwind", "javascript", "html", "css"],
    backend: ["Node.js", "REST", "Supabase", "PostgreSQL", "firebase", "python", "flask", "java", "spring"],
    ferramentas: ["Git", "GitHub", "VSCode", "Figma", "Notion", "ChatGPT", "Postman", "Gemini"],
  },

  formacoes: [
    {
      instituicao: "ESPM",
      curso: "Pós-Graduação em Data Science e Analytics",
      periodo: "2025 - 2026",
      descricao: "Curso focado em ciência de dados e análise de dados. Aprendizado de técnicas avançadas de análise e visualização de dados.",
    },
    {
      instituicao: "IBMEC",
      curso: "Graduação em Ánalise e Desenvolvimento de Sistemas",
      periodo: "2022 - 2024",
      descricao: "Graduação focada em desenvolvimento de software, metodologias ágeis e gestão de projetos."
    }
  ],

  projetos: [
    {
      nome: "Portfólio Pessoal - LinkTree Personalizado",
      descricao: "Plataforma completa de e-commerce com carrinho de compras e painel administrativo.",
      imagem: printGabizito, 
      link: "https://www.gabrielazito.com",
      tecnologias: ["React", "TypeScript", "tailwindcss"]
    },
    {
      nome: "Sistema de Leitura de Curriculos para RH com IA ",
      descricao: "Plataforma voltada para leitura de currículos e análise de dados com IA.",
      imagem: printTriAigem,
      link: "https://triaigem.com.br",
      tecnologias: ["React", "TailwindCSS", "Api REST", "Node.js", "TypeScript", "firebase"]
    }
  ]
} as const;
