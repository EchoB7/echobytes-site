import Image from "next/image";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const smartTvImages = [
  "/portfolio/tv/Home.png",
  "/portfolio/tv/Movies.png",
  "/portfolio/tv/Player.png",
  "/portfolio/tv/MoviesSinopse.png",
  "/portfolio/tv/Series.png",
  "/portfolio/tv/SeriesSinopse.png",
  "/portfolio/tv/ControleParental.png",
  "/portfolio/tv/Favorites.png",
  "/portfolio/tv/Config.png",
  "/portfolio/tv/ThemerColors.png",
];

const mobileImages = [
  {
    src: "/portfolio/mobile/1.jpeg",
    alt: "Tela mobile de login do app",
    label: "Login",
  },
  {
    src: "/portfolio/mobile/2.jpeg",
    alt: "Tela mobile de detalhes de série com lista de episódios",
    label: "Detalhe da série",
  },
  {
    src: "/portfolio/mobile/3.jpeg",
    alt: "Tela mobile de listagem de séries",
    label: "Catálogo",
  },
  {
    src: "/portfolio/mobile/4.jpeg",
    alt: "Tela mobile do player de vídeo",
    label: "Player",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-950">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
        <p className="text-sm font-medium text-zinc-500">Portfólio</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Vídeos e screenshots
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-600">
          Portfólio organizado por plataforma para mostrar fluxo, interface e
          consistência visual entre Smart TV e mobile.
        </p>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-950">Vídeo (Smart TV)</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-black shadow-sm">
            <video
              className="h-full w-full"
              src="/portfolio/tv/demo.mp4"
              controls
              preload="metadata"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-zinc-950">Screenshots (Smart TV)</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {smartTvImages.map((src) => (
              <div
                key={src}
                className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <Image
                  src={src}
                  alt="Screenshot do app de Smart TV"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-950">Screenshots (Mobile)</h2>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Fluxos reais de login, catálogo, detalhes e player no app mobile.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mobileImages.map((image) => (
              <div
                key={image.src}
                className="rounded-[28px] border border-zinc-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
              >
                <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[240px] overflow-hidden rounded-[22px] border border-zinc-200 bg-black">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 240px"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-zinc-950">
                  {image.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-950">Web</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            A estrutura agora já está pronta para receber também telas e vídeo da
            versão web quando você enviar os arquivos.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
