import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Contato
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Vamos Conversar
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Entre em contato conosco para saber como podemos ajudar a sua
                empresa a alcançar o próximo nível.
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
                    "_blank"
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
            <div className="relative h-[350px] w-full md:h-[450px] rounded-lg overflow-hidden bg-muted/30 dark:bg-muted/10 p-4">
              <svg
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect
                  x="100"
                  y="100"
                  width="400"
                  height="250"
                  rx="20"
                  className="fill-background stroke-primary stroke-2"
                />

                {/* Email header */}
                <rect
                  x="100"
                  y="100"
                  width="400"
                  height="50"
                  rx="20"
                  className="fill-primary/20"
                />
                <circle cx="130" cy="125" r="10" className="fill-primary" />
                <circle cx="160" cy="125" r="10" className="fill-primary/60" />
                <circle cx="190" cy="125" r="10" className="fill-primary/40" />

                {/* Email content */}
                <rect
                  x="130"
                  y="170"
                  width="340"
                  height="15"
                  rx="2"
                  className="fill-primary/20"
                />
                <rect
                  x="130"
                  y="195"
                  width="300"
                  height="15"
                  rx="2"
                  className="fill-primary/20"
                />
                <rect
                  x="130"
                  y="220"
                  width="320"
                  height="15"
                  rx="2"
                  className="fill-primary/20"
                />
                <rect
                  x="130"
                  y="245"
                  width="280"
                  height="15"
                  rx="2"
                  className="fill-primary/20"
                />
                <rect
                  x="130"
                  y="270"
                  width="340"
                  height="15"
                  rx="2"
                  className="fill-primary/20"
                />
                <rect
                  x="130"
                  y="295"
                  width="200"
                  height="15"
                  rx="2"
                  className="fill-primary/20"
                />

                {/* Decorative elements */}
                <circle
                  cx="450"
                  cy="350"
                  r="30"
                  className="fill-primary/20 stroke-primary stroke-2"
                />
                <path
                  d="M435 350L450 365L470 345"
                  className="stroke-primary stroke-2 stroke-round"
                />

                <circle cx="150" cy="350" r="30" className="fill-primary/10" />
                <rect
                  x="135"
                  y="340"
                  width="30"
                  height="20"
                  rx="2"
                  className="fill-background stroke-primary stroke-2"
                />
                <path
                  d="M135 340L150 355L165 340"
                  className="stroke-primary stroke-2"
                />

                {/* WhatsApp icon */}
                <circle cx="300" cy="350" r="30" className="fill-primary/15" />
                <path
                  d="M300 330C289 330 280 339 280 350C280 354 281 358 283 361L281 369L290 367C293 369 296 370 300 370C311 370 320 361 320 350C320 339 311 330 300 330ZM308 358C307 359 306 359 304 359C302 359 299 358 296 356C293 354 290 350 290 347C290 345 291 344 292 343C292 343 293 342 294 342C294 342 295 342 295 344C295 344 297 349 297 349C297 350 297 351 296 351C296 351 296 352 297 352C298 353 299 354 300 354C301 354 302 353 302 353C303 353 303 353 304 354C304 354 306 357 306 357C307 357 308 357 308 358Z"
                  className="fill-primary"
                />

                {/* Connection lines */}
                <path
                  d="M50 225C50 225 80 200 100 200"
                  className="stroke-primary stroke-2 stroke-dasharray-2"
                />
                <path
                  d="M550 225C550 225 520 200 500 200"
                  className="stroke-primary stroke-2 stroke-dasharray-2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
