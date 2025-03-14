import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section
      id="servicos"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10"
    >
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
              Oferecemos consultoria especializada em sistemas de gestão
              empresarial para otimizar seus processos.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl py-12">
          <Tabs defaultValue="totvs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
              <TabsTrigger
                value="totvs"
                className="text-[11px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 h-auto min-h-[4.5rem] md:min-h-[3.5rem] leading-tight"
              >
                TOTVS RM
              </TabsTrigger>
              <TabsTrigger
                value="esocial"
                className="text-[11px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 h-auto min-h-[4.5rem] md:min-h-[3.5rem] leading-tight"
              >
                eSocial TAF / TSS
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="text-[11px] sm:text-xs md:text-sm py-2 px-1 sm:px-2 md:px-3 h-auto min-h-[4.5rem] md:min-h-[3.5rem] leading-tight"
              >
                Oracle / MSSQL
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
                    <h3 className="text-2xl font-semibold">
                      Consultoria Linha TOTVS RM
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Especialistas em todos os módulos e aplicativos da suíte
                      TOTVS RM, oferecendo implementação, customização e
                      suporte.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-lg border-b pb-2">
                      Gestão de RH
                    </h4>
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
                    <h4 className="font-medium text-lg border-b pb-2">
                      Portais e Talentos
                    </h4>
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
                    <h4 className="font-medium text-lg border-b pb-2">
                      Análise e Customização
                    </h4>
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
                        "_blank"
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
                    <h3 className="text-2xl font-semibold">
                      eSocial RM - TAF - TSS
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Implementação, configuração e suporte para os módulos
                      fiscais e de obrigações trabalhistas do sistema RM.
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
                        <rect
                          width="20"
                          height="14"
                          x="2"
                          y="7"
                          rx="2"
                          ry="2"
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-lg mb-2">Instalação</h4>
                    <p className="text-muted-foreground">
                      Instalação completa dos módulos eSocial, TAF e TSS
                      integrados ao seu sistema RM.
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
                    <h4 className="font-medium text-lg mb-2">
                      Atualização e Configuração
                    </h4>
                    <p className="text-muted-foreground">
                      Mantemos seus sistemas atualizados e configurados conforme
                      as mudanças na legislação.
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
                    <h4 className="font-medium text-lg mb-2">
                      Suporte e Solução de Problemas
                    </h4>
                    <p className="text-muted-foreground">
                      Suporte técnico especializado para resolver problemas e
                      garantir o funcionamento contínuo.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button
                    className="gap-1"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=5511982870484&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20eSocial%20RM%20-%20TAF%20-%20TSS",
                        "_blank"
                      )
                    }
                  >
                    Saiba mais sobre eSocial RM{" "}
                    <ArrowRight className="h-4 w-4" />
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
                      Administração, otimização e segurança de bancos de dados
                      Oracle e Microsoft SQL Server para clientes da linha RM.
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
                    <h4 className="font-medium text-center">
                      Focado em Cliente Linha RM
                    </h4>
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
                        <rect
                          width="20"
                          height="8"
                          x="2"
                          y="14"
                          rx="2"
                          ry="2"
                        />
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
                        "_blank"
                      )
                    }
                  >
                    Saiba mais sobre Oracle - MSSQL{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
