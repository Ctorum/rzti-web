export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Por que nos escolher
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nossa Experiência em Números
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conheça os resultados que alcançamos ao longo dos anos de
              dedicação e excelência.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center p-8 bg-background rounded-lg border shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                10+
              </div>
              <p className="text-center text-lg text-muted-foreground">
                Anos de experiência
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-8 bg-background rounded-lg border shadow-sm">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                300+
              </div>
              <p className="text-center text-lg text-muted-foreground">
                Projetos concluídos
              </p>
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
                Nossa equipe é composta por especialistas certificados com
                profundo conhecimento em sistemas TOTVS RM, eSocial e bancos de
                dados.
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
              <h3 className="text-xl font-bold mb-2">
                Soluções Personalizadas
              </h3>
              <p className="text-muted-foreground">
                Desenvolvemos soluções sob medida para cada cliente,
                considerando suas necessidades específicas e objetivos de
                negócio.
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
                Oferecemos suporte técnico contínuo e acompanhamento
                pós-implementação para garantir o funcionamento ideal dos
                sistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
