"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Database,
  Server,
  Code,
  MessageSquare,
  Users,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  // Função para rolagem suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Adicionar evento de clique para links de navegação
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const href = link.getAttribute("href")
        if (href) {
          const targetId = href.substring(1)
          scrollToSection(targetId)
        }
      })
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("inicio")}>
            <Server className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RZTI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#inicio" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </a>
            <a href="#servicos" className="text-sm font-medium transition-colors hover:text-primary">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium transition-colors hover:text-primary">
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              size="sm"
              className="hidden md:flex"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=5511982870484&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RZTI",
                  "_blank",
                )
              }
            >
              Fale Conosco
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu")
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden")
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="container py-2 flex flex-col space-y-2">
            <a
              href="#inicio"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("inicio")
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }}
            >
              Início
            </a>
            <a
              href="#servicos"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("servicos")
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }}
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("sobre")
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }}
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contato")
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }}
            >
              Contato
            </a>
            <div className="flex items-center gap-2 px-4 py-2">
              <ThemeToggle />
              <span className="text-sm">Tema</span>
            </div>
            <Button
              size="sm"
              className="mx-4 mt-2"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=5511982870484&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RZTI",
                  "_blank",
                )
              }
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Rezende Tecnologia em Serviços
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Soluções tecnológicas personalizadas para impulsionar o seu negócio.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1" onClick={() => scrollToSection("servicos")}>
                    Nossos Serviços <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection("sobre")}>
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="RZTI Hero Image"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Especialistas em Soluções Tecnológicas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos consultoria especializada em sistemas de gestão empresarial para otimizar seus processos.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl py-12">
              <Tabs defaultValue="totvs" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger
                    value="totvs"
                    className="text-[11px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 h-auto min-h-[4.5rem] md:min-h-[3.5rem] leading-tight"
                  >
                    Consultoria Linha TOTVS RM
                  </TabsTrigger>
                  <TabsTrigger
                    value="esocial"
                    className="text-[11px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 h-auto min-h-[4.5rem] md:min-h-[3.5rem] leading-tight"
                  >
                    eSocial RM - TAF - TSS
                  </TabsTrigger>
                  <TabsTrigger
                    value="database"
                    className="text-[11px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 h-auto min-h-[4.5rem] md:min-h-[3.5rem] leading-tight"
                  >
                    Oracle - MSSQL
                  </TabsTrigger>
                </TabsList>

                {/* TOTVS RM Content */}
                <TabsContent value="totvs" className="mt-0">
                  <div className="rounded-lg border bg-card shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">Consultoria Linha TOTVS RM</h3>
                        <p className="text-muted-foreground mt-1">
                          Especialistas em todos os módulos e aplicativos da suíte TOTVS RM, oferecendo implementação,
                          customização e suporte.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-medium text-lg border-b pb-2">Gestão de RH</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Folha de Pagamento</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Automação de Ponto</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Gestão de Pessoas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Segurança e Medicina do Trabalho</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium text-lg border-b pb-2">Portais e Talentos</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Portal Meu RH</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Banco de Talentos</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Relatórios RMReports</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Planilha Net</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium text-lg border-b pb-2">Análise e Customização</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>CUBO</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Layouts</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Conceitos</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Fórmulas Visuais</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        className="gap-1"
                        onClick={() =>
                          window.open(
                            "https://api.whatsapp.com/send?phone=5511982870484&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20consultoria%20TOTVS%20RM",
                            "_blank",
                          )
                        }
                      >
                        Saiba mais sobre TOTVS RM <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* eSocial Content */}
                <TabsContent value="esocial" className="mt-0">
                  <div className="rounded-lg border bg-card shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">eSocial RM - TAF - TSS</h3>
                        <p className="text-muted-foreground mt-1">
                          Implementação, configuração e suporte para os módulos fiscais e de obrigações trabalhistas do
                          sistema RM.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-muted/30 dark:bg-muted/10 rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="rounded-full bg-primary/10 p-4 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
                        </div>
                        <h4 className="font-medium text-lg mb-2">Instalação</h4>
                        <p className="text-muted-foreground">
                          Instalação completa dos módulos eSocial, TAF e TSS integrados ao seu sistema RM.
                        </p>
                      </div>

                      <div className="bg-muted/30 dark:bg-muted/10 rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="rounded-full bg-primary/10 p-4 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <h4 className="font-medium text-lg mb-2">Atualização e Configuração</h4>
                        <p className="text-muted-foreground">
                          Mantemos seus sistemas atualizados e configurados conforme as mudanças na legislação.
                        </p>
                      </div>

                      <div className="bg-muted/30 dark:bg-muted/10 rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="rounded-full bg-primary/10 p-4 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.6a2 2 0 0 1 1.4-.6H20a2 2 0 0 1 2 2v1.4c0 .63-.3 1.22-.8 1.6" />
                            <path d="m8 16 3 3 5-5" />
                          </svg>
                        </div>
                        <h4 className="font-medium text-lg mb-2">Suporte e Solução de Problemas</h4>
                        <p className="text-muted-foreground">
                          Suporte técnico especializado para resolver problemas e garantir o funcionamento contínuo.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        className="gap-1"
                        onClick={() =>
                          window.open(
                            "https://api.whatsapp.com/send?phone=5511982870484&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20eSocial%20RM%20-%20TAF%20-%20TSS",
                            "_blank",
                          )
                        }
                      >
                        Saiba mais sobre eSocial RM <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Database Content */}
                <TabsContent value="database" className="mt-0">
                  <div className="rounded-lg border bg-card shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">Oracle - MSSQL</h3>
                        <p className="text-muted-foreground mt-1">
                          Administração, otimização e segurança de bancos de dados Oracle e Microsoft SQL Server para
                          clientes da linha RM.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center justify-center border rounded-lg p-6 h-full aspect-square">
                        <div className="rounded-full bg-primary/10 p-3 mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M17 6.1H3" />
                            <path d="M21 12.1H3" />
                            <path d="M15.1 18H3" />
                          </svg>
                        </div>
                        <h4 className="font-medium text-center">Focado em Cliente Linha RM</h4>
                      </div>

                      <div className="flex flex-col items-center justify-center border rounded-lg p-6 h-full aspect-square">
                        <div className="rounded-full bg-primary/10 p-3 mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                            <line x1="6" x2="6.01" y1="6" y2="6" />
                            <line x1="6" x2="6.01" y1="18" y2="18" />
                          </svg>
                        </div>
                        <h4 className="font-medium text-center">Instalação</h4>
                      </div>

                      <div className="flex flex-col items-center justify-center border rounded-lg p-6 h-full aspect-square">
                        <div className="rounded-full bg-primary/10 p-3 mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                          </svg>
                        </div>
                        <h4 className="font-medium text-center">Atualização</h4>
                      </div>

                      <div className="flex flex-col items-center justify-center border rounded-lg p-6 h-full aspect-square">
                        <div className="rounded-full bg-primary/10 p-3 mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" x2="12" y1="3" y2="15" />
                          </svg>
                        </div>
                        <h4 className="font-medium text-center">Backup</h4>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        className="gap-1"
                        onClick={() =>
                          window.open(
                            "https://api.whatsapp.com/send?phone=5511982870484&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Oracle%20-%20MSSQL",
                            "_blank",
                          )
                        }
                      >
                        Saiba mais sobre Oracle - MSSQL <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Equipe RZTI"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground w-fit">
                  Sobre Nós
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  RZTI - Excelência em Tecnologia
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  A Rezende Tecnologia em Serviços nasceu da paixão por soluções tecnológicas eficientes. Há mais de 10
                  anos no mercado, nossa equipe de especialistas trabalha para oferecer as melhores soluções em
                  consultoria de sistemas de gestão.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span>Equipe altamente qualificada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <span>Atendimento personalizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Server className="h-4 w-4 text-primary" />
                    </div>
                    <span>Soluções tecnológicas inovadoras</span>
                  </li>
                </ul>
                <div>
                  <Button size="lg" className="gap-1" onClick={() => scrollToSection("contato")}>
                    Entre em Contato <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que nos escolher */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Por que nos escolher
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Experiência em Números</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os resultados que alcançamos ao longo dos anos de dedicação e excelência.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center justify-center p-8 bg-background rounded-lg border shadow-sm">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">10+</div>
                  <p className="text-center text-lg text-muted-foreground">Anos de experiência</p>
                </div>

                <div className="flex flex-col items-center justify-center p-8 bg-background rounded-lg border shadow-sm">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">300+</div>
                  <p className="text-center text-lg text-muted-foreground">Projetos concluídos</p>
                </div>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expertise Técnica</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe é composta por especialistas certificados com profundo conhecimento em sistemas TOTVS
                    RM, eSocial e bancos de dados.
                  </p>
                </div>

                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Soluções Personalizadas</h3>
                  <p className="text-muted-foreground">
                    Desenvolvemos soluções sob medida para cada cliente, considerando suas necessidades específicas e
                    objetivos de negócio.
                  </p>
                </div>

                <div className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625" />
                      <path d="M15 3V7C15 7.55228 15.4477 8 16 8H20" />
                      <path d="M9 13H15" />
                      <path d="M9 17H15" />
                      <path d="M9 9H10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Suporte Contínuo</h3>
                  <p className="text-muted-foreground">
                    Oferecemos suporte técnico contínuo e acompanhamento pós-implementação para garantir o funcionamento
                    ideal dos sistemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Contato
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos Conversar</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Entre em contato conosco para saber como podemos ajudar a sua empresa a alcançar o próximo nível.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(11) 98287-0484</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>rztisv@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>São Paulo - SP</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="gap-2"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=5511982870484&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20RZTI",
                        "_blank",
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Fale Conosco pelo WhatsApp <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[450px] rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=450&width=600" alt="Contato RZTI" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} RZTI - Rezende Tecnologia em Serviços. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#inicio"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("inicio")
              }}
            >
              Voltar ao Topo
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

