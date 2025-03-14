import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Rezende Tecnologia em Serviços
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Soluções tecnológicas personalizadas para impulsionar o seu
                negócio.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-1"
                onClick={() => scrollToSection("servicos")}
              >
                Nossos Serviços <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("sobre")}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] p-4">
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle cx="250" cy="250" r="200" className="fill-primary/10" />
                <rect
                  x="150"
                  y="150"
                  width="200"
                  height="150"
                  rx="8"
                  className="fill-background stroke-primary stroke-2"
                />
                <rect
                  x="170"
                  y="180"
                  width="160"
                  height="10"
                  rx="2"
                  className="fill-primary/60"
                />
                <rect
                  x="170"
                  y="200"
                  width="120"
                  height="10"
                  rx="2"
                  className="fill-primary/60"
                />
                <rect
                  x="170"
                  y="220"
                  width="140"
                  height="10"
                  rx="2"
                  className="fill-primary/60"
                />
                <rect
                  x="170"
                  y="240"
                  width="100"
                  height="10"
                  rx="2"
                  className="fill-primary/60"
                />
                <circle
                  cx="320"
                  cy="320"
                  r="50"
                  className="fill-primary/20 stroke-primary stroke-2"
                />
                <path
                  d="M310 320L320 330L340 310"
                  className="stroke-primary stroke-2 stroke-round"
                />
                <rect
                  x="180"
                  y="300"
                  width="80"
                  height="60"
                  rx="4"
                  className="fill-background stroke-primary stroke-2"
                />
                <circle cx="190" cy="190" r="5" className="fill-primary" />
                <path
                  d="M120 350C120 350 150 320 180 320C210 320 240 350 270 350C300 350 330 320 330 320"
                  className="stroke-primary stroke-2 fill-none"
                />
                <path
                  d="M370 150C370 150 400 180 400 210C400 240 370 270 370 300C370 330 400 360 400 360"
                  className="stroke-primary stroke-2 fill-none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
