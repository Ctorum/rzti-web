import { ChevronRight, MessageSquare, Server, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] p-4">
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle cx="250" cy="250" r="200" className="fill-primary/10" />

                {/* Person 1 */}
                <circle cx="200" cy="200" r="40" className="fill-primary/20" />
                <circle
                  cx="200"
                  cy="180"
                  r="20"
                  className="fill-background stroke-primary stroke-2"
                />
                <path
                  d="M170 230C170 210 185 200 200 200C215 200 230 210 230 230"
                  className="fill-background stroke-primary stroke-2"
                />

                {/* Person 2 */}
                <circle cx="300" cy="200" r="40" className="fill-primary/20" />
                <circle
                  cx="300"
                  cy="180"
                  r="20"
                  className="fill-background stroke-primary stroke-2"
                />
                <path
                  d="M270 230C270 210 285 200 300 200C315 200 330 210 330 230"
                  className="fill-background stroke-primary stroke-2"
                />

                {/* Person 3 */}
                <circle cx="250" cy="300" r="40" className="fill-primary/20" />
                <circle
                  cx="250"
                  cy="280"
                  r="20"
                  className="fill-background stroke-primary stroke-2"
                />
                <path
                  d="M220 330C220 310 235 300 250 300C265 300 280 310 280 330"
                  className="fill-background stroke-primary stroke-2"
                />

                {/* Connection lines */}
                <line
                  x1="220"
                  y1="200"
                  x2="280"
                  y2="200"
                  className="stroke-primary stroke-2"
                />
                <line
                  x1="220"
                  y1="280"
                  x2="200"
                  y2="230"
                  className="stroke-primary stroke-2"
                />
                <line
                  x1="280"
                  y1="280"
                  x2="300"
                  y2="230"
                  className="stroke-primary stroke-2"
                />

                {/* Server/Database */}
                <rect
                  x="230"
                  y="380"
                  width="40"
                  height="60"
                  rx="4"
                  className="fill-background stroke-primary stroke-2"
                />
                <line
                  x1="240"
                  y1="390"
                  x2="260"
                  y2="390"
                  className="stroke-primary stroke-2"
                />
                <line
                  x1="240"
                  y1="400"
                  x2="260"
                  y2="400"
                  className="stroke-primary stroke-2"
                />
                <line
                  x1="240"
                  y1="410"
                  x2="260"
                  y2="410"
                  className="stroke-primary stroke-2"
                />
                <line
                  x1="250"
                  y1="330"
                  x2="250"
                  y2="380"
                  className="stroke-primary stroke-2 stroke-dasharray-2"
                />
              </svg>
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
              A Rezende Tecnologia em Serviços nasceu da paixão por soluções
              tecnológicas eficientes. Há mais de 10 anos no mercado, nossa
              equipe de especialistas trabalha para oferecer as melhores
              soluções em consultoria de sistemas de gestão.
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
              <Button
                size="lg"
                className="gap-1"
                onClick={() => scrollToSection("contato")}
              >
                Entre em Contato <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
