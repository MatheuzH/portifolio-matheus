export const PROFILE = {
  name: "Seu Nome",
  role: "Desenvolvedor(a) Full Stack",
  location: "Brasil",
  email: "seu.email@exemplo.com",
  github: "https://github.com/seu-usuario",
  linkedin: "https://www.linkedin.com/in/seu-usuario/",
  resumo:
    "Crio soluções performáticas e escaláveis, focadas em experiência do usuário, qualidade de código e entrega contínua.",
  experiencias: [
    {
      empresa: "Empresa X",
      periodo: "2023 — Atual",
      cargo: "Software Engineer",
      descricao:
        "Desenvolvimento de aplicações web com foco em performance, DX e boas práticas (React, TypeScript, CI/CD).",
    },
    {
      empresa: "Startup Y",
      periodo: "2021 — 2023",
      cargo: "Frontend Developer",
      descricao:
        "Criação de interfaces responsivas, acessíveis e animadas utilizando React, Tailwind e testes automatizados.",
    },
  ],
  stacks: {
    frontend: ["React", "TypeScript", "Vite", "Tailwind", "Shadcn", "Zod"],
    backend: ["Node.js", "REST", "Supabase", "PostgreSQL"],
    ferramentas: ["Git", "CI/CD", "Jest", "Storybook"],
  },
} as const;
