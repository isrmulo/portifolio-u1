"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [techFilter, setTechFilter] = useState<"all" | "frontend" | "backend" | "database" | "framework">("all")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const technologies = [
    { name: "Python", category: "backend" as const },
    { name: "JavaScript", category: "frontend" as const },
    { name: "TypeScript", category: "frontend" as const },
    { name: "Node.js", category: "backend" as const },
    { name: "React", category: "framework" as const },
    { name: "Next.js", category: "framework" as const },
    { name: "Flask", category: "framework" as const },
    { name: "FastAPI", category: "framework" as const },
    { name: "Express.js", category: "framework" as const },
    { name: "Tailwind CSS", category: "frontend" as const },
    { name: "C#", category: "backend" as const },
    { name: ".NET Core", category: "framework" as const },
    { name: "Entity Framework Core", category: "framework" as const },
    { name: "Cypress", category: "framework" as const },
    { name: "PostgreSQL", category: "database" as const },
    { name: "MySQL", category: "database" as const },
    { name: "Docker", category: "backend" as const },
    { name: "Azure DevOps", category: "backend" as const },
    { name: "Linux", category: "backend" as const },
    { name: "API REST", category: "backend" as const },
  ]

  const filteredTechnologies = technologies.filter((tech) => {
    if (techFilter === "all") return true
    return tech.category === techFilter
  })

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "tech", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Rômulo
                  <br />
                  <span className="text-muted-foreground">Odorico</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Desenvolvedor Full Stack especializado em
                  <span className="text-foreground"> Python</span>,<span className="text-foreground"> JavaScript</span>{" "}
                  e<span className="text-foreground"> React</span>, criando soluções eficientes para sistemas web e
                  intranet.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Disponível para trabalho
                  </div>
                  <div>Fortaleza, CE</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">ATUALMENTE</div>
                <div className="space-y-2">
                  <div className="text-foreground">Analista de TI</div>
                  <div className="text-muted-foreground">@ Casa Pio</div>
                  <div className="text-xs text-muted-foreground">2023 — Presente</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCO</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "React", "Flask", "FastAPI", "JavaScript", "C# (estudo)"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experiência</h2>
              <div className="text-sm text-muted-foreground font-mono">2023 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    2023
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium">Analista de TI</h3>
                    <div className="text-muted-foreground">Casa Pio</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    Desenvolvimento de sistemas intranet e suporte técnico. Criação de aplicações web utilizando Python
                    (Flask/FastAPI) no backend e React no frontend, automatizando processos e melhorando a eficiência
                    operacional da organização.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                  {["Python", "Flask", "FastAPI", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tech"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light">Tecnologias</h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Linguagens, frameworks e ferramentas com as quais trabalho no desenvolvimento de aplicações web.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Todas", value: "all" as const },
                  { label: "Frontend", value: "frontend" as const },
                  { label: "Backend", value: "backend" as const },
                  { label: "Banco de Dados", value: "database" as const },
                  { label: "Frameworks", value: "framework" as const },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setTechFilter(filter.value)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${
                      techFilter === filter.value
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-muted-foreground/50"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {tech.name}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Vamos Conversar</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Sempre interessado em novas oportunidades, colaborações e conversas sobre tecnologia e
                  desenvolvimento.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:romuloodorico@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300 break-all"
                  >
                    <span className="text-base sm:text-lg">romuloodorico@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-base sm:text-lg">(85) 98749-3033</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">REDES SOCIAIS</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "LinkedIn",
                    handle: "romulo-odorico",
                    url: "https://www.linkedin.com/in/romulo-odorico/",
                  },
                  { name: "GitHub", handle: "@isrmulo", url: "https://github.com/isrmulo" },
                  { name: "Email", handle: "romuloodorico@gmail.com", url: "mailto:romuloodorico@gmail.com" },
                  { name: "WhatsApp", handle: "(85) 98749-3033", url: "https://wa.me/5585987493033" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground break-all">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Rômulo Odorico. Todos os direitos reservados.</div>
              <div className="text-xs text-muted-foreground">Desenvolvido com v0.dev</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <Link
                href="mailto:romuloodorico@gmail.com"
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 000 2h1z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
