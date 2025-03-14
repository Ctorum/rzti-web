import { Server } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Header({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("inicio")}
        >
          <Server className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">RZTI</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a
            href="#inicio"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Início
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
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
                "_blank"
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
              const mobileMenu = document.getElementById("mobile-menu");
              if (mobileMenu) {
                mobileMenu.classList.toggle("hidden");
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
              e.preventDefault();
              scrollToSection("inicio");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
          >
            Início
          </a>
          <a
            href="#servicos"
            className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("servicos");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("sobre");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contato");
              document.getElementById("mobile-menu")?.classList.add("hidden");
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
                "_blank"
              )
            }
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
}
