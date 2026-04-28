import Link from "next/link";
import Image from "next/image";

import { BrandCustomizer } from "@/components/brand-customizer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getWhatsAppUrl, site } from "@/content/site";

const mobileShowcaseImages = [
  { src: "/portfolio/mobile/1.jpeg", alt: "Tela de login mobile" },
  { src: "/portfolio/mobile/2.jpeg", alt: "Tela de episódios mobile" },
  { src: "/portfolio/mobile/4.jpeg", alt: "Tela do player mobile" },
];

const S = {
  bg: "#0a0a0a",
  bg2: "#111",
  bg3: "#181818",
  border: "#222",
  red: "#e50914",
  redDark: "#a00610",
  text: "#f0f0f0",
  muted: "#888",
  muted2: "#555",
};

function SectionHeader(props: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="flex flex-col gap-3">
        {props.eyebrow ? (
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: S.red }}>
            {props.eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: S.text }}>
          {props.title}
        </h2>
        {props.description ? (
          <p className="max-w-2xl text-pretty text-base leading-7" style={{ color: S.muted }}>
            {props.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function CardGrid(props: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{props.children}</div>
    </div>
  );
}

function Card(props: { title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 transition hover:-translate-y-0.5"
      style={{
        background: S.bg3,
        border: `1px solid ${props.highlight ? S.red : S.border}`,
      }}
    >
      <h3 className="text-base font-semibold" style={{ color: S.text }}>{props.title}</h3>
      <div className="mt-2 text-sm leading-6" style={{ color: S.muted }}>{props.children}</div>
    </div>
  );
}

export default function Home() {
  const whatsappUrl = getWhatsAppUrl(site.links.whatsapp);
  const recommendedPackage = site.sections.packages.find((pkg) => pkg.recommended);

  return (
    <div className="min-h-full" style={{ background: S.bg, color: S.text }}>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section
          className="relative isolate overflow-hidden border-b"
          style={{ borderColor: S.border, background: `radial-gradient(ellipse at center top, #2a0000 0%, ${S.bg} 65%)` }}
        >
          <div className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{ borderColor: S.red, color: S.red, background: "rgba(229,9,20,0.08)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: S.red }} />
                  Apps OTT premium • White-label • Sob medida
                </div>
                <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: S.text }}>
                  Lance sua marca em Smart TVs, mobile e web —{" "}
                  <span style={{ color: S.red }}>com UX de produto grande.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8" style={{ color: S.muted }}>
                  {site.brand.tagline} Integrações, monetização e suporte para operações que exigem qualidade.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={site.links.demo.url}
                    className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white transition-colors"
                    style={{ background: S.red }}
                  >
                    {site.links.demo.label}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-medium transition-colors"
                    style={{ borderColor: S.border, color: S.text, background: "transparent" }}
                  >
                    Falar no WhatsApp
                  </a>
                  <Link
                    href="/portfolio"
                    className="inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-medium transition-colors"
                    style={{ borderColor: S.border, color: S.text, background: "transparent" }}
                  >
                    Ver portfólio
                  </Link>
                </div>
                <div className="mt-10 grid gap-3 text-sm sm:grid-cols-3">
                  {[
                    { title: "White-label real", desc: "Logo, cores, telas e fluxo adaptados ao seu produto." },
                    { title: "Integrações", desc: "API/CMS, autenticação e regras de acesso sob medida." },
                    { title: "Qualidade premium", desc: "Testes, estabilidade e evolução contínua pós-lançamento." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border p-4" style={{ borderColor: S.border, background: S.bg3 }}>
                      <p className="font-semibold" style={{ color: S.text }}>{item.title}</p>
                      <p className="mt-1" style={{ color: S.muted }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border p-6" style={{ borderColor: S.border, background: S.bg3 }}>
                  <p className="text-sm font-semibold" style={{ color: S.text }}>Demonstração / Portfólio</p>
                  <p className="mt-2 text-sm leading-6" style={{ color: S.muted }}>
                    Vídeo e screenshots reais de Smart TV e mobile.
                  </p>
                  <div className="mt-5 grid gap-3">
                    <div className="overflow-hidden rounded-2xl border bg-black" style={{ borderColor: S.border }}>
                      <video className="h-full w-full" src="/portfolio/tv/demo.mp4" controls preload="metadata" />
                    </div>
                    <div className="grid grid-cols-12 gap-3">
                      <div className="relative col-span-7 aspect-video overflow-hidden rounded-2xl border" style={{ borderColor: S.border }}>
                        <Image src="/portfolio/tv/Home.png" alt="Home do app" fill className="object-cover" sizes="320px" priority />
                      </div>
                      <div className="col-span-5 grid grid-cols-3 gap-2">
                        {mobileShowcaseImages.map((image) => (
                          <div key={image.src} className="relative aspect-[9/18] overflow-hidden rounded-2xl border bg-black" style={{ borderColor: S.border }}>
                            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="110px" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs" style={{ color: S.muted2 }}>
                      Smart TV para navegação remota e mobile para login, detalhes e player.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUE */}
        <section className="py-16 sm:py-20">
          <SectionHeader
            eyebrow="Por que Echobytes"
            title="Uma base sólida para um produto de streaming premium"
            description="Mais do que um player: é uma experiência completa, desenhada para controle remoto, escala e retenção."
          />
          <CardGrid>
            <Card title="Experiência de TV">Navegação fluida, foco em legibilidade e performance em ambientes com controle remoto.</Card>
            <Card title="Escala e confiabilidade">Pensado para operação real: estabilidade, atualizações e boas práticas de entrega.</Card>
            <Card title="Negócio e monetização">Modelos de receita e integrações alinhados ao seu produto (SVOD, AVOD, PPV, híbridos).</Card>
          </CardGrid>
        </section>

        {/* PARA QUEM É */}
        <section className="py-16 sm:py-20" style={{ background: S.bg2 }}>
          <SectionHeader
            eyebrow="Para quem é"
            title="Um app com sua marca, pensado para o seu cenário"
            description="Escolha o MVP (TV, mobile, web) e evolua com previsibilidade, sem transformar o produto em um projeto infinito."
          />
          <CardGrid>
            {site.sections.segments.map((segment) => (
              <Card key={segment.title} title={segment.title}>{segment.description}</Card>
            ))}
          </CardGrid>
        </section>

        {/* BRANDING */}
        <section className="border-y py-16 sm:py-20" style={{ borderColor: S.border }}>
          <SectionHeader
            eyebrow="Branding"
            title="Deixe o cliente brincar com as cores"
            description="Uma demo rápida de personalização para explicar white-label (cores e botões) com preview ao vivo."
          />
          <BrandCustomizer />
        </section>

        {/* MODELOS */}
        <section className="py-16 sm:py-20">
          <SectionHeader
            eyebrow="Modelos"
            title="Pacotes por maturidade do produto"
            description="Sem preço fixo, porque depende de plataformas, integrações e escopo. O objetivo é deixar claro o caminho de entrega."
          />
          <CardGrid>
            {site.sections.packages.slice(0, 3).map((pkg) => (
              <Card key={pkg.title} title={pkg.title} highlight={pkg.recommended}>
                <div className="space-y-3">
                  <p>{pkg.description}</p>
                  {pkg.recommended ? (
                    <p className="text-xs font-bold tracking-wide uppercase" style={{ color: S.red }}>Recomendado</p>
                  ) : null}
                  <ul className="space-y-2">
                    {pkg.bullets.slice(0, 4).map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: S.red }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link className="text-sm font-semibold" style={{ color: S.red }} href="/modelos">Ver detalhes →</Link>
                  </div>
                </div>
              </Card>
            ))}
          </CardGrid>

          {recommendedPackage ? (
            <div className="mx-auto mt-8 w-full max-w-5xl px-6">
              <div className="rounded-2xl border p-6" style={{ borderColor: S.red, background: "rgba(229,9,20,0.05)" }}>
                <p className="text-sm font-semibold" style={{ color: S.text }}>Começar pelo {recommendedPackage.title}</p>
                <p className="mt-1 text-sm leading-6" style={{ color: S.muted }}>
                  Se você quer lançar rápido, com base sólida para crescer, esse costuma ser o melhor ponto de partida.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-white"
                    style={{ background: S.red }}
                  >
                    Falar no WhatsApp
                  </a>
                  <Link
                    href="/modelos"
                    className="inline-flex h-11 items-center justify-center rounded-full border px-5 text-sm font-medium"
                    style={{ borderColor: S.border, color: S.text }}
                  >
                    Ver modelos
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </section>

        {/* PRÓXIMOS PASSOS */}
        <section className="py-16 sm:py-20" style={{ background: S.bg2 }}>
          <SectionHeader
            eyebrow="Explore"
            title="Mais detalhes por seção"
            description="Plataformas, modelos e portfólio separados para você apresentar com clareza."
          />
          <CardGrid>
            <Card title="Plataformas">
              Escopo por plataforma, stores e requisitos.
              <div className="mt-4">
                <Link className="text-sm font-semibold" style={{ color: S.red }} href="/plataformas">Ver plataformas →</Link>
              </div>
            </Card>
            <Card title="Modelos">
              Diferentes formatos de entrega (IPTV/OTT/Hotel etc.) e pacotes.
              <div className="mt-4">
                <Link className="text-sm font-semibold" style={{ color: S.red }} href="/modelos">Ver modelos →</Link>
              </div>
            </Card>
            <Card title="Portfólio">
              Prints e vídeos separados por Smart TV, mobile e web.
              <div className="mt-4">
                <Link className="text-sm font-semibold" style={{ color: S.red }} href="/portfolio">Ver portfólio →</Link>
              </div>
            </Card>
          </CardGrid>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
