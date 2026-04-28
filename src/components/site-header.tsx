import Link from "next/link";
import Image from "next/image";

import { getWhatsAppUrl, site } from "@/content/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/plataformas", label: "Plataformas" },
  { href: "/modelos", label: "Modelos" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const whatsappUrl = getWhatsAppUrl(site.links.whatsapp);

  return (
    <header className="sticky top-0 z-20 border-b" style={{ borderColor: "#222", background: "rgba(10,10,10,0.92)", backdropFilter: "blur(8px)" }}>
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-white hover:opacity-90"
        >
          <Image src="/icon.png" alt="Echobytes" width={32} height={32} className="rounded-lg" />
          <span style={{ color: "#f0f0f0" }}>{site.brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm sm:flex" style={{ color: "#aaa" }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              className="transition-colors hover:text-white"
              style={{ color: "#aaa" }}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            className="hidden rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-red-600 hover:text-red-500 sm:inline-flex"
            style={{ borderColor: "#333", color: "#ccc", background: "transparent" }}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={site.links.demo.url}
            className="inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors echobytes-cta"
            style={{ background: "#e50914" }}
          >
            {site.links.demo.label}
          </a>
        </div>
      </div>
    </header>
  );
}
