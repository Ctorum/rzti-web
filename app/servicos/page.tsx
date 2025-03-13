import { Database, Server, Code } from "lucide-react"
import { ServiceCard } from "@/components/service-card"

export default function ServicosPage() {
  const totvsRMServices = [
    { name: "Folha de Pagamento" },
    { name: "Automação de Ponto" },
    { name: "Gestão de Pessoas" },
    { name: "Segurança e Medicina do Trabalho" },
    { name: "Portal Meu RH" },
    { name: "Banco de Talentos" },
    { name: "Relatórios RMReports" },
    { name: "Planilha Net" },
    { name: "CUBO" },
    { name: "Layouts" },
    { name: "Conceitos" },
    { name: "Fórmulas Visuais" },
  ]

  const eSocialServices = [
    { name: "Instalação" },
    { name: "Atualização e Configuração" },
    { name: "Suporte e Solução de Problemas" },
  ]

  const databaseServices = [
    { name: "Focado em Cliente Linha RM" },
    { name: "Instalação" },
    { name: "Atualização" },
    { name: "Backup" },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Nossos Serviços
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conheça Nossos Serviços Especializados</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos consultoria especializada em sistemas de gestão empresarial para otimizar seus processos.
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        <ServiceCard
          icon={<Database className="h-6 w-6 text-primary" />}
          title="Consultoria Linha TOTVS RM"
          description="Especialistas em todos os módulos e aplicativos da suíte TOTVS RM, oferecendo implementação, customização e suporte."
          services={totvsRMServices}
        />

        <ServiceCard
          icon={<Server className="h-6 w-6 text-primary" />}
          title="eSocial RM - TAF - TSS"
          description="Implementação, configuração e suporte para os módulos fiscais e de obrigações trabalhistas do sistema RM."
          services={eSocialServices}
        />

        <ServiceCard
          icon={<Code className="h-6 w-6 text-primary" />}
          title="Oracle - MSSQL"
          description="Administração, otimização e segurança de bancos de dados Oracle e Microsoft SQL Server para clientes da linha RM."
          services={databaseServices}
        />
      </div>
    </div>
  )
}

