import { Server } from "lucide-react";

export default function Footer({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Server className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} RZTI - Rezende Tecnologia em
            Serviços. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="#inicio"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inicio");
            }}
          >
            Voltar ao Topo
          </a>
        </div>
      </div>
    </footer>
  );
}
