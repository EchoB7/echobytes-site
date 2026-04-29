import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";

export default function FaqPage() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-950">
      
      <main className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
        <p className="text-sm font-medium text-zinc-500">FAQ</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Perguntas frequentes
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-600">
          Respostas rápidas sobre plataformas, publicação, integrações e suporte.
        </p>

        <div className="mt-10 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white shadow-sm">
          {site.sections.faq.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-950">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.a}</p>
            </details>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
