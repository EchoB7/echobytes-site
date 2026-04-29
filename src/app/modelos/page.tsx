import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { getWhatsAppUrl, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Modelos e Segmentos",
  description:
    "Soluções OTT white-label para provedores IPTV, hotéis (hospitality) e operações que querem lançar TV + mobile. Veja os modelos de projeto disponíveis.",
  alternates: { canonical: "/modelos" },
  openGraph: {
    title: "Modelos — YourottApp",
    description: "App white-label para IPTV, hotel/hospitality e MVP TV+mobile. Veja os modelos de projeto.",
    url: "https://yourottapp.com/modelos",
  },
};

export default function ModelosPage() {
  const whatsappUrl = getWhatsAppUrl(site.links.whatsapp);
  const recommendedPackage = site.sections.packages.find((pkg) => pkg.recommended);

  return (
    <div className="min-h-full bg-zinc-50 text-zinc-950">
      
      <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
        <p className="text-sm font-medium text-zinc-500">Modelos</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Modelos de entrega e casos de uso
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-600">
          Uma página para explicar rapidamente o seu cenário e escolher um
          pacote de entrega (MVP → evolução). O escopo final depende de
          plataformas, integrações e requisitos.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.sections.segments.map((segment) => (
            <div
              key={segment.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-zinc-950">
                {segment.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm font-semibold text-zinc-950">Pacotes</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Pacotes por maturidade do produto. Sem preço fixo, porque muda
            conforme escopo e integrações.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.sections.packages.map((pkg) => (
              <div
                key={pkg.title}
                className={
                  "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md" +
                  (pkg.recommended ? " ring-1 ring-zinc-200" : "")
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-zinc-950">
                    {pkg.title}
                  </p>
                  {pkg.recommended ? (
                    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium text-zinc-700">
                      Recomendado
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {pkg.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  {pkg.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-zinc-950">Próximo passo</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              {recommendedPackage
                ? `Se você está em dúvida, normalmente começamos pelo ${recommendedPackage.title} e expandimos por plataforma e integrações.`
                : "Definimos seu MVP (plataformas + integrações) e montamos o melhor caminho de entrega."}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-zinc-50 hover:bg-zinc-800"
              >
                Falar no WhatsApp
              </a>
              <a
                href={site.links.demo.url}
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-950 hover:bg-zinc-100"
              >
                {site.links.demo.label}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-sm font-semibold text-zinc-950">Monetização</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
            Modelos de receita que podemos suportar, conforme seu produto.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {site.sections.monetization.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-zinc-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
