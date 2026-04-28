import { getWhatsAppUrl, site } from "@/content/site";

export function SiteFooter() {
  const whatsappUrl = getWhatsAppUrl(site.links.whatsapp);

  return (
    <footer style={{ borderTop: "1px solid #222", background: "#111" }}>
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold" style={{ color: "#f0f0f0" }}>{site.brand.name}</p>
            <p className="mt-1 text-sm" style={{ color: "#666" }}>{site.brand.domain}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm sm:items-end" style={{ color: "#888" }}>
            <a className="hover:text-white transition-colors" style={{ color: "#888" }} href={`mailto:${site.links.email}`}>
              {site.links.email}
            </a>
            <a
              className="hover:text-white transition-colors"
              style={{ color: "#888" }}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="hover:text-white transition-colors"
              style={{ color: "#888" }}
              href="/privacy"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs" style={{ color: "#555" }}>
          © {new Date().getFullYear()} {site.brand.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
