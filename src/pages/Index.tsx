import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, Rocket, Terminal, Workflow, Code2, Cpu, GraduationCap, Briefcase } from "lucide-react";
import { useEffect } from "react";
import InteractiveParticles from "@/components/background/InteractiveParticles";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PROFILE } from "@/data/profile";
import profileImage from "@/assets/matheusHerzog.jpg";

const Index = () => {
  // Basic SEO for SPA
  useEffect(() => {
    const title = `Portfólio | ${PROFILE.name}`;
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const desc = `Portfólio de ${PROFILE.role}. Experiências, tecnologias e projetos.`;
    if (metaDesc) metaDesc.setAttribute("content", desc);

    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    linkCanonical.setAttribute("href", window.location.href);
    document.head.appendChild(linkCanonical);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: PROFILE.name,
      jobTitle: PROFILE.role,
      email: PROFILE.email,
      url: window.location.href,
      sameAs: [PROFILE.github, PROFILE.linkedin].filter(Boolean),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const allTechs: string[] = [
    ...(PROFILE.stacks.frontend as unknown as string[]),
    ...(PROFILE.stacks.backend as unknown as string[]),
    ...(PROFILE.stacks.ferramentas as unknown as string[]),
  ];
  return (
    <div className="relative min-h-screen">
      <InteractiveParticles />
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <nav className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="font-display text-lg font-semibold story-link">
            {PROFILE.name}
          </button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => scrollTo("sobre")}>
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("experiencias")}>
              Experiências
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("tecnologias")}>
              Tecnologias
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="container grid lg:grid-cols-2 gap-10 py-20 items-center">
          <div className="space-y-6 animate-enter">
            <Badge className="hover-scale" variant="secondary">Disponível para novos desafios</Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Portfólio de Programador — {PROFILE.role}</h1>
            <p className="text-muted-foreground text-lg max-w-prose">{PROFILE.resumo}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" className="hover-scale">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="Abrir GitHub">
                  <Github /> Ver GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="hover-scale">
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn">
                  <Linkedin /> Conectar
                </a>
              </Button>
              <Button
                variant="secondary"
                className="hover-scale"
                onClick={() => {
                  navigator.clipboard.writeText(PROFILE.email);
                }}
              >
                <Mail /> Copiar e‑mail
              </Button>
            </div>
            <div className="flex gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Terminal className="opacity-80" /> Clean Code</div>
              <div className="flex items-center gap-2"><Rocket className="opacity-80" /> Performance</div>
            </div>
          </div>

          <div className="relative group animate-scale-in">
            <div className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl bg-gradient-hero group-hover:opacity-50 transition-opacity" aria-hidden />
            <img
              src={profileImage}
              alt={`Foto de ${PROFILE.name}`}
              className="relative rounded-2xl shadow-elevated w-full max-w-md mx-auto transform-gpu transition-transform duration-300 group-hover:rotate-1 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </section>

        {/* Sobre / Experiências e Tecnologias */}
        <section id="sobre" className="container py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover-scale">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2"><Code2 /> Sobre mim</h2>
                <p className="text-muted-foreground">
                  Desenvolvedor apaixonado por criar experiências fluídas e acessíveis. Gosto de resolver problemas complexos com soluções criativas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2"><Cpu /> Minha stack</h2>
                <div className="flex flex-wrap gap-2">
                  {allTechs.map((t) => (
                    <Tooltip key={t}>
                      <TooltipTrigger asChild>
                        <Badge variant="secondary" className="cursor-default">{t}</Badge>
                      </TooltipTrigger>
                      <TooltipContent>{t}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experiencias" className="container py-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Briefcase /> Experiências</h2>
          <Tabs defaultValue="xp" className="w-full">
            <TabsList>
              <TabsTrigger value="xp">Timeline</TabsTrigger>
              <TabsTrigger value="techs">Tecnologias</TabsTrigger>
            </TabsList>
            <TabsContent value="xp" className="space-y-4">
              {PROFILE.experiencias.map((exp) => (
                <Card key={exp.empresa} className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-lg">{exp.cargo} • {exp.empresa}</h3>
                        <p className="text-muted-foreground">{exp.descricao}</p>
                      </div>
                      <Badge>{exp.periodo}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="techs">
              <div className="flex flex-wrap gap-2">
                {Object.entries(PROFILE.stacks).map(([grupo, items]) => (
                  <div key={grupo} className="flex items-center gap-2 mr-4">
                    <span className="text-sm text-muted-foreground capitalize">{grupo}:</span>
                    {items.map((i) => (
                      <Badge key={i} variant="outline">{i}</Badge>
                    ))}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        <section id="formacao" className="container py-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><GraduationCap /> Formação Acadêmica</h2>
          <div className="space-y-4">
            {PROFILE.formacoes.map((form) => (
              <Card key={form.instituicao} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-lg">{form.curso} • {form.instituicao}</h3>
                      <p className="text-muted-foreground">{form.descricao}</p>
                    </div>
                    <Badge>{form.periodo}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section id="projetos" className="container py-10">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"> Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILE.projetos.map((proj) => (
              <a
                key={proj.nome}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={proj.imagem}
                  alt={`Interface do projeto ${proj.nome}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay para escurecer a imagem e melhorar a legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="relative flex h-full flex-col justify-end p-4 md:p-6 text-white">
                  <h3 className="text-xl font-bold">{proj.nome}</h3>
                  <p className="text-sm text-gray-300 mt-1">{proj.descricao}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tecnologias.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t mt-10">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Todos os direitos reservados.</p>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="sm"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github /> GitHub</a></Button>
            <Button asChild variant="ghost" size="sm"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button>
            <Button asChild variant="ghost" size="sm"><a href={`mailto:${PROFILE.email}`}><Mail /> E‑mail</a></Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
