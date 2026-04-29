import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";

export default function PlataformasPage() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-950">
      
      <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
        <p className="text-sm font-medium text-zinc-500">Plataformas</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Uma plataforma para todas as telas
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-600">
          Aqui você lista com clareza o que entrega e o que depende de requisitos
          de store e integrações.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {site.sections.platforms.map((p) => (
            <span
              key={p}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-950">Smart TVs</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              UX para controle remoto, performance, guidelines e homologação.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-950">Mobile e Web</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Fluxos de login/assinatura, player responsivo e métricas.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-600">
          <p className="font-medium text-zinc-950">Como fechamos escopo</p>
          <p className="mt-2">
            No kickoff, alinhamos: plataformas do MVP, integrações (API/CMS),
            requisitos de store (quando aplicável) e roadmap.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
